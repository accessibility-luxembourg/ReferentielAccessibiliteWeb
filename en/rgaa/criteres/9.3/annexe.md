---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - F2
  - G115
  - G153
  - H40
  - H48
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Technical notes

The WAI-ARIA `role="list"` and `role="listitem"` attributes may require the use of the WAI-ARIA `aria-setsize` and `aria-posinset` attributes in the event that the entire list is not available via the DOM generated at the time of consultation.

The WAI-ARIA `role="tree"`, `role="tablist"`, `role="menu"`, `role="combobox"` and `role="listbox"` attributes are not equivalent to an HTML `<ul>` or `<ol>` list.
