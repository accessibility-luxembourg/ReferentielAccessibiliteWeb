---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  - C9
  - F38
  - F39
  - G196
  - H67
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Technical note

When an image is associated with an [image caption](#image-caption), the WCAG Technical Note recommends systematically providing a [text alternative](#text-alternative-image) (see Criterion 1.9). In this case, criterion 1.2 does not apply.

In the case of a decorative vector image (`<svg>` tag) which is displayed via an `<use href="…">` element, which is a child of the `<svg>` element, test 1.2.4 will also apply to the associated `<svg>` element via the `<use>` element.

A WAI-ARIA `role="presentation"` attribute can be used on decorative images and decorative non-clickable areas. The `"none"` role introduced in ARIA 1.1 and synonymous with the `"presentation"` role can also be used. However, it is still preferable to use the `"presentation"` role while waiting for satisfactory support for the `"none"` role.
