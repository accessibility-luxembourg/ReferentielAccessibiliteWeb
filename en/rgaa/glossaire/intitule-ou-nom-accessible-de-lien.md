---
title: Accessible name (of a link)
---

"Accessible name" rendered by assistive technologies.

In the case of an HTML link, the "accessible name" is obtained in the following order:

- passage of text associated with the WAI-ARIA `aria-labelledby` attribute;
- otherwise, value of the WAI-ARIA `aria-label` attribute;
- otherwise, content of the link;
- otherwise, value of the `title` attribute.

This order must be used to determine what constitutes the accessible name of a link. For example

- if a WAI-ARIA `aria-label` attribute and a WAI-ARIA `aria-labelledby` attribute are present together, the passage of text referenced by the WAI-ARIA `aria-labelledby` attribute must be considered as the heading;
- if there is both a WAI-ARIA `aria-label` attribute and content in the link, the value of the WAI-ARIA `aria-label` attribute must be considered as the heading.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

If the "accessible name" is obtained from the content of the link, this will vary according to the following cases:

Text link

In HTML, the "accessible name" corresponds to the text made up of

- the text contained in the link;
- the text contained in the link's child elements.

Image link

In HTML, the "accessible name" corresponds to the text made up from the text alternative of one or more images in the link of the type

- Image (element `<img>` or opening tag with WAI-ARIA `role="img"` attribute);
- Object image (element `<object>`);
- Bitmap image (element `<canvas>`);
- Vector image (element `<svg>`).

Composite link

In HTML, the "accessible name" corresponds to the text made up from the set

- the text contained in the link;
- the text contained in the child elements of the link;
- the content of the alternative text of the image(s) included in the link.

In the case of an SVG link (version 1.1), the "accessible name" is obtained as follows:

- Passage of text associated with the WAI-ARIA `aria-labelledby` attribute;
- Otherwise, value of the WAI-ARIA `aria-label` attribute;
- Otherwise, content of the `<title>` element, the direct child of the link;
- Otherwise, value of the `xlink:title` attribute;
- Otherwise, text content of one or more `<text>` elements.

However, care must be taken as this calculation algorithm is not yet taken into account and effective within the various screen readers. To date, support is available with VoiceOver, but incomplete with JAWS and NVDA. As a result, the lowest common denominator on which it is possible to rely to provide an accessible name for the link is the `<text>` element.

Note 1: the accessible name of a link will be considered as non-explicit if it does not include the [visible label](#visible-label) of the link.

Note 2: due to the possible configuration of assistive technologies allowing the "accessible name" derived from the value of the `title` attribute to be forced to the detriment of the "accessible name" derived from the content of the link. The accessible name of a link will be considered as non-explicit if the link has a `title` attribute whose value does not include at least the "accessible name" taken from the content of the link.

Note 3: In the case of several links with different destinations whose "accessible name" is identical. The accessible name of a link alone will be considered non-explicit if the link context does not allow them to be differentiated.

Note 4: when a link contains no content, it will be non-compliant with regard to {% crit 10.2 %} and {% crit 6.2 %}.

Note 5: Although the calculation of the accessible name of a link takes into account text content generated in CSS via the `::before` and `::after` pseudo-elements, this practice must not be used, as it constitutes non-compliance with <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr> 2.1 criterion 1.3.1 (see [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87)).
