---
title: Detailed description (image)
---

Content associated with an image in addition to its text alternative in order to fully describe the information conveyed by the image. The detailed description can be associated with the image via

- A reference to a detailed description adjacent to the image in the text alternative (image);
- An [adjacent link or button](#adjacent-link-or-button) which allows you to access the detailed description on the page or on another page;
- One or more passages of text identified by an id and linked by a WAI-ARIA `aria-describedby` attribute based on the model `aria-describedby="ID1 ID2 ID3..."`.

Note 1: If the `aria-describedby` attribute is not supported, it is possible to use one or more passages of text identified by an `id` and linked by a WAI-ARIA `aria-labelledby` attribute following the text alternative.

Note 2: To ensure maximum compatibility with user agents, in particular Internet Explorer 11, it is recommended to implement a `tabindex="-1"` on tags which contain a passage of text and which are not interactive elements (buttons, links, form elements, etc.).
