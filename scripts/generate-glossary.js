const fs = require('fs').promises;
const md = require('markdown-it')({ html: true })
const fm = require('front-matter')



/**
 * @param {string} filename
 * @returns {object} Frontmatter attributes and main content
 */
async function parseMarkdownFile(filename, GLOSSARY_SOURCE) {
	const data = await fs.readFile(`${GLOSSARY_SOURCE}/${filename}`, "utf-8");
	const result = fm(data);

	return {
		title: result.attributes.title,
		content: md.render(result.body),
	};
}
/**
 * Generate a JSON file containing all the glossary entries
 * from `src/rgaa/glossaire` with 2 `title` and `content`
 */
async function generateGlossary(lang) {
	const GLOSSARY_SOURCE = `${__dirname}/../${lang}/rgaa/glossaire`;
	const GLOSSARY_DESTINATION = `${__dirname}/../${lang}/json/glossaire.json`;  

  try {
    // Init JSON data
    let jsonData = { glossary: [] }

    // Loop over files
    const files = await fs.readdir(GLOSSARY_SOURCE);
    for (const file of files) {
      if (!file.endsWith(".md")) {
				console.error(`❌ Ignoring "${file}" as it is not a Markdown file.`);
			} else {
        const { title, content } = await parseMarkdownFile(file, GLOSSARY_SOURCE)
        let cleanedContent = null

        // Handle shortcodes
        const critRegex = /\{% crit (?<id>\d{1,2}.\d{1,2}) %\}/g // {% crit 12.10 %}
        const testRegex = /\{% test '(?<id>\d{1,2}.\d{1,2}.\d{1,2})' %\}/g // {% test 2.10.3 %}
        const baseUrl = 'https://accessibilite.numerique.gouv.fr'
        const url = `${baseUrl}/methode/criteres-et-tests/`

        cleanedContent = content
          .replace(critRegex, `<a href="${url}#$<id>">critère $<id></a>`)
          .replace(testRegex, `<a href="${url}#$<id>">test $<id></a>`)

        // Push to JSON data
        jsonData.glossary.push({ title, body: cleanedContent })
      }
    }

    // Remove line breaks (\n) and create JSON file
    let data = JSON.stringify(jsonData, null, 2).replaceAll(/\\n/g, ' ')
    fs.writeFile(GLOSSARY_DESTINATION, data);

    console.log(`✅ Glossary successfully generated.`);

  } catch (err) {
    console.error(`❌ An error occured while generating glossary: ${err}`);
  }
}

generateGlossary('fr');
generateGlossary('en');
