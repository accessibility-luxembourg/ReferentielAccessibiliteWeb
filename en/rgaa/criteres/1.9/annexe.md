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
  - ARIA6
  - G140
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Technical note

The implementation of a WAI-ARIA `role="group"` or `role="figure"` attribute on the `<figure>` parent element is intended to compensate for the current lack of support for `<figure>` elements by assistive technologies. The use of a `<figcaption>` element to associate an [image caption](#image-caption) with an image requires at least the use of a WAI-ARIA `aria-label` attribute on the `<figure>` parent element, the content of which will be identical to the content of the `<figcaption>` element. To ensure optimal support, an explicit association can also be made between the content of the image's [text alternative](#text-alternative-image) and the content of the `<figcaption>` element, for example:

`<img src="image.png" alt="Photo soleil couchant" /><figcaption>Photo: credit xxx</figcaption>`

The WAI-ARIA `aria-labelledby` and `aria-describedby` attributes cannot currently be used due to a lack of support by assistive technologies.

Note: captioned images must also comply with criteria 1.1 and 1.3 relating to images conveying information.
