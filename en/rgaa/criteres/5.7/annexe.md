---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - F90
  - H43
  - H63
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Special cases

In the case of data tables with headers on a single row or column, the headers can be implemented using the `<th>` tag without the `scope` attribute.

#### Technical notes

If the `headers` attribute is implemented on a cell already linked to a header (column or row header) with the `scope` attribute (with the value `col` or `row`), it is the header or headers referenced by the `headers` attribute which will be returned to assistive technologies. Headers linked with the `scope` attribute will be ignored.
