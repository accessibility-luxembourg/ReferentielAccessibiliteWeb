---
title: Image conveying information
---

An image that conveys information necessary for understanding the content with which it is associated.

Note 1: when the image is the only content of a link, its alternative is the link accessible name. In this case, the image alternative should be evaluated using the "Links" theme.

Note 2: When a form button, inserted with the element `<button>`, contains only an image (`<img>`, `<object>`, `<embed>`, `<canvas>` or `<svg>` tag), the alternative for the image is the button accessible name. There are two possible cases:

- The button is controlled by its type, for example, the `submit` or `reset` type, and is part of a form. In this case, the image button should be evaluated using the "Forms" theme;
- The button is controlled by a JavaScript device. In this case, the image button must be evaluated under the "Scripts" theme.
