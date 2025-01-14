---
title: Summary (of table)
---

A summary (of table) is a passage of text associated with a complex data table. It provides information about the nature and structure of the table to make it easier to use for users of assistive technologies, for example.

Note: in HTML5, the only technique that can currently be used is to insert the summary directly into the title (using the `<caption>` tag), masking the summary using CSS if necessary.

In previous versions of HTML, the summary could be inserted via a `summary` attribute on the `<table>` tag.

In the case of a tag with the WAI-ARIA `role="table"` attribute, the summary must be provided using an `aria-describedby` attribute and be correctly rendered (by assistive technologies).
