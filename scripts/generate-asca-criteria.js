const fs = require("fs").promises;
const path = require("path");

const LANGUAGES = ["fr", "en"];
const REFERENTIAL_ID = "raweb-1.1";
const EXPECTED_CRITERIA_COUNT = 136;

/**
 * Remove Markdown formatting that ASCA does not need in criterion labels.
 * In particular, criterion titles contain glossary links such as
 * [alternative textuelle](#alternative-textuelle-image).
 *
 * @param {string} value
 * @returns {string}
 */
function toPlainText(value) {
  return String(value || "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Read and parse a JSON file.
 *
 * @param {string} filePath
 * @returns {Promise<object>}
 */
async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf-8"));
}

/**
 * Flatten the native RAWeb criteria JSON into the format consumed by ASCA.
 * IDs are deliberately generated sequentially. ASCA only requires them to
 * be unique for a referential; the criterion number remains the business key.
 *
 * @param {string} lang
 * @returns {Promise<void>}
 */
async function generateAscaCriteria(lang) {
  const langRoot = path.join(__dirname, "..", lang);
  const criteriaPath = path.join(langRoot, "json", "criteres.json");
  const levelsPath = path.join(langRoot, "niveaux.json");
  const themesPath = path.join(langRoot, "themes.json");
  const destinationDir = path.join(langRoot, "json", "asca");
  const destinationPath = path.join(destinationDir, "criteres.json");

  const [criteriaDoc, levels, themes] = await Promise.all([
    readJson(criteriaPath),
    readJson(levelsPath),
    readJson(themesPath),
  ]);

  if (!Array.isArray(criteriaDoc.topics)) {
    throw new Error(`${lang}: ${criteriaPath} ne contient pas de tableau "topics".`);
  }

  const questions = [];
  const seenCriteria = new Set();

  for (const topic of criteriaDoc.topics) {
    const topicNumber = String(topic.number);
    const configuredTheme = themes[topicNumber]?.title;

    if (!configuredTheme) {
      throw new Error(`${lang}: thème ${topicNumber} absent de themes.json.`);
    }

    if (!Array.isArray(topic.criteria)) {
      throw new Error(`${lang}: le thème ${topicNumber} ne contient pas de critères.`);
    }

    for (const entry of topic.criteria) {
      const criterion = entry?.criterium;
      const criterionNumber = `${topicNumber}.${criterion?.number}`;

      if (!criterion?.number || !criterion?.title) {
        throw new Error(`${lang}: critère incomplet dans le thème ${topicNumber}.`);
      }

      if (seenCriteria.has(criterionNumber)) {
        throw new Error(`${lang}: critère dupliqué ${criterionNumber}.`);
      }
      seenCriteria.add(criterionNumber);

      const level = levels[criterionNumber];
      if (!level) {
        throw new Error(`${lang}: niveau absent pour le critère ${criterionNumber}.`);
      }

      questions.push({
        id: questions.length + 1,
        critere: criterionNumber,
        recommandation: toPlainText(criterion.title),
        level,
        theme: configuredTheme,
        defaultStatus: "NT",
        defaultDerogation: "N",
      });
    }
  }

  if (questions.length !== EXPECTED_CRITERIA_COUNT) {
    throw new Error(
      `${lang}: ${questions.length} critères générés au lieu de ${EXPECTED_CRITERIA_COUNT}.`
    );
  }

  const ids = new Set(questions.map((question) => question.id));
  if (ids.size !== questions.length) {
    throw new Error(`${lang}: des identifiants ASCA sont dupliqués.`);
  }

  const output = {
    schemaVersion: 1,
    referential: REFERENTIAL_ID,
    questions,
  };

  await fs.mkdir(destinationDir, { recursive: true });
  await fs.writeFile(destinationPath, `${JSON.stringify(output, null, 2)}\n`, "utf-8");

  console.log(
    `✅ ASCA criteria (${lang}) successfully generated: ${questions.length} criteria -> ${path.relative(
      path.join(__dirname, ".."),
      destinationPath
    )}`
  );
}

async function main() {
  try {
    // The native criteria files must already exist. This script is intentionally
    // executed last by npm run build so it always consumes freshly generated data.
    for (const lang of LANGUAGES) {
      await generateAscaCriteria(lang);
    }
  } catch (error) {
    console.error(`❌ Error while generating ASCA criteria: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
