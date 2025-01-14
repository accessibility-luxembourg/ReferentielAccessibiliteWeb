---
WCAG:
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - G162
Norm:
  - criterion: 9.3.3.2
    title: Labels or Instructions
---

#### Special cases

Tests 11.4.2 and 11.4.3 will be considered as not applicable:

- If the [label](#form-field-label) mixes a portion of text which is read from right to left with a portion of text which is read from left to right;
- In the case where a form contains labels in several languages that are read from right to left and vice versa. For example, an order form in Arabic with a list of product checkboxes in French or a mix of Arabic and French products;
- If radio or checkbox fields and tags with a WAI-ARIA `role="checkbox"` attribute, `role="radio"` or `role="switch"` are not visually presented in the form of a radio button or checkbox;
- If the fields are used in a context where it could be legitimate, from a user experience point of view, to place the labels in a different way to that required in tests 11.4.2 and 11.4.3.
