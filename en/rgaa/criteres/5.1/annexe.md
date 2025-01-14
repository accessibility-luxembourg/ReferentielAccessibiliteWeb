---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - H73
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Technical notes

The HTML specification offers several [methods for linking a summary to a table](https://html.spec.whatwg.org/multipage/tables.html#table-descriptions-techniques) (table linked to a passage of text with the `aria-describedby` attribute, table grouped in a `figure` element with a summary present in a `figcaption` element or a `p` element, summary present in a `details` element contained in the `caption` element). These methods do not have sufficient support to be used at present.
