---
title: Data table with a title
---

Data table with an attribute or containing a tag whose content acts as a title.

Data table preceded or followed by a passage of text associated with the table acting as the title.

Provided it is correctly rendered and associated with the data table by assistive technologies, the associated title can be

- In a `<caption>` tag;
- In a `title` attribute;
- In a WAI-ARIA `aria-label` attribute;
- In a tag associated with the data table via a WAI-ARIA `aria-labelledby` attribute on the table.

Note: as only the `<caption>` tag is fully supported by all assistive technologies, it is strongly recommended that this solution be chosen during implementation in order to avoid numerous checks in the various combinations provided by the test environment (or "baseline").
