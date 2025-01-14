---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - ARIA11
  - G115
  - H97
  - H101
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Special cases

When the doctype declared in the page is not the HTML5 doctype, this criterion is not applicable.

#### Technical notes

The `<main>` tag can be used several times in the same HTML document. However, there can only ever be one visible and readable tag by assistive technologies, and the others must have a `hidden` attribute or a style that allows them to be hidden from assistive technologies. However, it should be noted that using only one style will not be sufficient to ensure the uniqueness of a `<main>` tag that is visible if the style sheets are deactivated.
