---
title: Form field label
---

Text close to the form field that indicates the nature, type or format of the information expected. The label can be associated with the form field in several ways:

- By using a `<label>` tag;
- By using the WAI-ARIA `aria-label` attribute;
- By linking the text to the field using the WAI-ARIA `aria-labelledby` attribute;
- By using the `title` attribute.

Important note: when several of these techniques are used on the same field, the calculation of the "accessible name", i.e. what will be rendered, follows a strict order:

- `aria-labelledby`;
- Otherwise `aria-label`;
- Otherwise `<label>`;
- Else `title`.

This order must be used to assess the relevance of the label ({% crit 11.2 %}). For example, even in the case of the presence of a `<label>`, it is the passage of text referenced by `aria-labelledby` that should be taken into account.

Reference: [Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation).

Important note about the use of `placeholder`: when the `placeholder` attribute is present, it is likely to be returned instead of the `title` attribute. Consequently, when these two attributes `title` and `placeholder` are present, they must be identical.

Note about labels linked with `aria-labelledby`: these are one or more passages of text identified by `id`s and linked by `aria-labelledby` according to the following model: `aria-labelledby="ID1 ID2 ID3..."`. 
To ensure maximum compatibility with user agents, in particular Internet Explorer 11, we recommend implementing a `tabindex="-1"` on passages of text that are not interactive elements (buttons, links, form elements, etc.).

Note: the `aria-label` attribute cannot be used to indicate the mandatory nature of a field.
