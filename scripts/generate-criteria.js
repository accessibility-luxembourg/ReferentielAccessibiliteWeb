const fs = require("fs").promises;
const fm = require("front-matter");


/**
 * Get criterion title
 * @param {string} path
 * @returns {Promise<string>} title attribute
 */
async function parseTitle(path) {
	const data = await fs.readFile(path, "utf-8");
	const result = await fm(data);

	return result.attributes.title;
}

/**
 * Parse criterion WCAG and techniques references.
 * @param {string} path
 * @returns {Promise<object>}
 */
async function parseReferences(path) {
	const data = await fs.readFile(path, "utf-8");
	const result = await fm(data);

    let wcag = []
    if (Array.isArray(result.attributes.WCAG)) {
        wcag = result.attributes.WCAG.map((w) => {
            return `${w.successCriterion} ${w.title} (${w.level})`;
        });
    } 

    let norm = []
    if (result.attributes.Norm !== undefined) {
        if (Array.isArray(result.attributes.Norm)) {
            norm = result.attributes.Norm.map((w) => {
                if (w.criterion === undefined) {
                    console.log(`${w.criterion} ${file}`)
                }
                return `${w.criterion} ${w.title}`;
            });
        } else {
            norm = result.attributes.Norm
        }
    } 

	return [
		{
			wcag,
		},
		{
			techniques: result.attributes.Techniques,
		},
		{
			norm
		},
	];
}

/**
 * Return criterion tests with or without steps
 * @param {string} folderPath
 * @returns {Promise<array|string>}
 */
async function parseTests(folderPath) {
	const tests = {};

	const folders = await fs.readdir(folderPath);
	folders.forEach(async (f, i) => {
		if (!f.endsWith(".md")) {
			console.error(`❌ Ignoring "${f}" as it is not a Markdown file.`);
		} else {
			const data = await fs.readFile(`${folderPath}/${i + 1}.md`, "utf-8");
			const result = fm(data);

			tests[i + 1] = result.attributes.steps
				? [result.attributes.title, ...result.attributes.steps]
				: [result.attributes.title];
		}
	});

	return tests;
}

/**
 * Split a string into an array of strings with shortcodes replacements
 * @param {string} str
 * @returns {string[]}
 */
function formatPCAndTN(str) {
	const critRegex = /\{% crit (?<id>\d{1,2}.\d{1,2}) %\}/g; // {% crit 12.10 %}
	const testRegex = /\{% test '(?<id>\d{1,2}.\d{1,2}.\d{1,2})' %\}/g; // {% test 2.10.3 %}
	const baseUrl = "https://accessibilite.numerique.gouv.fr";
	const url = `${baseUrl}/methode/criteres-et-tests/`;

	return str
		.split("\n")
		.filter(Boolean)
		.map((s) => {
			return s
				.replace(critRegex, `<a href="${url}#$<id>">critère $<id></a>`)
				.replace(testRegex, `<a href="${url}#$<id>">test $<id></a>`);
		});
}

/**
 * Render PC and TN sub items as a nested list
 * @param {string[]} lines
 * @returns {array}
 */
function handlePCAndTNSubItems(lines) {
	const result = [];

	lines.forEach((line) => {
		if (line.startsWith("- ")) {
			if (typeof result.at(-1) === "object") {
				result.at(-1).ul.push(line);
			} else {
				result.push({ ul: [line] });
			}
		} else {
			result.push(line);
		}
	});

	return result;
}

/**
 * Return criterion technical notes (TN) and particular cases (PC)
 * @param {string} path
 * @returns {Promise<object>}
 */
async function parsePCAndTN(path) {
	const data = await fs.readFile(path, "utf-8");
	const result = await fm(data);

	const parts = result.body
		.split(/(#### .*)/g)
		.map((el) => el.trim())
		.filter(Boolean);
	const hasTN =
		parts.includes("#### Notes techniques") ||
		parts.includes("#### Note technique");
	const hasPC = parts.includes("#### Cas particuliers");

	if (hasTN && hasPC) {
		const TNIndex = parts.findIndex((p) => p.match(/#### Notes? techniques?/));
		return {
			particularCases: handlePCAndTNSubItems(
				formatPCAndTN(parts.slice(1, TNIndex)[0])
			),
			technicalNote: handlePCAndTNSubItems(
				formatPCAndTN(parts.slice(TNIndex + 1)[0])
			),
		};
	} else if (hasTN) {
		return {
			technicalNote: handlePCAndTNSubItems(formatPCAndTN(parts.slice(1)[0])),
		};
	} else if (hasPC) {
		return {
			particularCases: handlePCAndTNSubItems(formatPCAndTN(parts.slice(1)[0])),
		};
	}

	return {};
}

/**
 * Transform glossary Markdown links to HTML links
 * @param {string} str
 * @returns string
 */
function transformGlossaryLinks(str) {
	const regex = /\[(?<label>.*?)\]\(#(?<slug>.*?)\)/g; // bla [label](#slug) bla
	const baseUrl = "https://accessibilite.numerique.gouv.fr";
	const url = `${baseUrl}/methode/glossaire/`;
	return str.replace(regex, `<a href="${url}#$<slug>">$<label></a>`);
}

/**
 * Generate a JSON file containing all the criteria
 * from `src/rgaa/criteres` grouped by topics.
 */
async function generateCriteria(lang) {

	const themes = require(`${__dirname}/../${lang}/themes.json`);
	const CRITERIA_SOURCE = `${__dirname}/../${lang}/rgaa/criteres`;
	const CRITERIA_DESTINATION = `${__dirname}/../${lang}/json/criteres.json`;

	try {
		// Init JSON data
		let jsonData = { wcag: { version: 2.1 }, topics: [] };
		const criteria = [];

		const folders = await fs.readdir(CRITERIA_SOURCE);

		// Order folders by topic + criterion number
		folders.sort((a, b) => {
			const [topicA, criteriumA] = a.split(".").map(Number);
			const [topicB, criteriumB] = b.split(".").map(Number);

			if (topicA == topicB) {
				return criteriumA - criteriumB;
			}

			return topicA - topicB;
		});

		// Clean unwanted files (`.DS_Store`...)
		const filteredFolders = folders.filter((f) => {
			return f.match(/\d\.\d/); // "X.X" where X are numbers
		});

		for (const folder of filteredFolders) {
			// Build all criterion properties
			const criterionObject = {
				criterium: {
					number: folder,
					title: await parseTitle(`${CRITERIA_SOURCE}/${folder}/index.md`),
					tests: await parseTests(`${CRITERIA_SOURCE}/${folder}/tests`),
					...(await parsePCAndTN(`${CRITERIA_SOURCE}/${folder}/annexe.md`)),
					references: await parseReferences(
						`${CRITERIA_SOURCE}/${folder}/annexe.md`
					),
				},
			};

			// Push to JSON data
			criteria.push(criterionObject);
		}

		// Organize criteria by topic
		const topics = Object.entries(themes).map((t) => {
			const topicNumber = t[0];
			return {
				topic: t[1].title,
				number: Number(topicNumber),
				criteria: criteria
					.filter((c) => {
						return c.criterium.number.split(".")[0] === topicNumber;
					})
					.map((c) => {
						return {
							criterium: {
								...c.criterium,
								number: Number(c.criterium.number.split(".")[1]),
							},
						};
					}),
			};
		});

		jsonData.topics = topics;

		// Create JSON file
		let data = JSON.stringify(jsonData, null, 2);
		await fs.writeFile(CRITERIA_DESTINATION, data);

		console.log(`✅ Criteria list successfully generated.`);
	} catch (error) {
		console.error(
			`❌ An error occured while generating criteria list: ${error}`
		);
	}
}

generateCriteria('fr');
generateCriteria('en');