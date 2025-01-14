---
title: Passage of text linked by `aria-labelledby` or `aria-describedby`
---

One or more passages of text identified by `id` values which are unique in the page and associated with an element (form field, button, etc.) by the WAI-ARIA `aria-labelledby` or `aria-describedby` attributes on the following model: `aria-labelledby="ID1 ID2 ID3..."` where the value of the attribute used is equal to the list of `id` attribute values of the passages of text to be associated present in the page.

Note 1: to ensure maximum compatibility with user agents, in particular Internet Explorer 11, we recommend implementing a `tabindex="-1"` on passages of text which are not interactive elements (buttons, links, form elements, etc.).

Note 2: the value of the WAI-ARIA attributes `aria-labelledby` or `aria-describedby` must not create a recursive reference (A refers to B which refers to A) or a traversal reference (A which refers to B which refers to C).
