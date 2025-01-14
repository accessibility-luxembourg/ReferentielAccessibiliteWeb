---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
Techniques:
  - ARIA6
  - G92
  - G74
  - G73
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
---

#### Technical notes

In the case of SVG, the lack of support for the `<title>` and `<desc>` elements by assistive technologies creates a difficulty in implementing the [text alternative](#text-alternative-image) of the image and its [detailed description](#detailed-description-image). In this case, it is recommended to use the WAI-ARIA `aria-label` attribute to implement both the short [text alternative](#text-alternative-image) and the reference to the adjacent [detailed description](#detailed-description-image) or the WAI-ARIA `aria-labelledby` attribute to associate the passage of texts acting as short alternative and [detailed description](#detailed-description-image).

The use of the WAI-ARIA `aria-describedby` attribute is not recommended for linking an image (`<img>`, `<object>`, `<embed>`, `<canvas>`) to its [detailed description](#detailed-description-image), due to a lack of support for assistive technologies. However, when it is used, the attribute must necessarily refer to the `id` of the zone containing the [detailed description](#detailed-description-image).

The adjacent [detailed description](#detailed-description-image) may be implemented via a `<figcaption>` tag, in which case criterion 1.9 must be checked (use of `<figure>` and the WAI-ARIA `role="figure"` and `aria-label` attributes, in particular).