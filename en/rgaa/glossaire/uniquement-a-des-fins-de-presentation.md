---
title: Only for layout purposes
---

Only for layout purposes: use of HTML tags for a purpose other than that specified in the specifications (with regard to the declared document type). Examples: use of the `h` tags for the sole purpose of creating a typographic effect; use of the `<blockquote>` tag for the sole purpose of indenting a paragraph, etc.

Note 1: the use of `<div>` or `<span>` elements or several `<br>` elements to visually create a paragraph is considered non-compliant and invalidates the criterion.

Example: `<div>`, `paragraphs in a simulated block of text`, `<br>`, `using several <br> tags`, `</div>`

Note 2: WAI-ARIA offers a `presentation` role which can be used to suppress the semantics of an element, for example `<h1 role="presentation">Heading</h1>`. In this case, the text will be rendered correctly but its heading role will no longer be rendered. The `presentation` role may be required when using a WAI-ARIA [design pattern](#design-pattern).

The WAI-ARIA `presentation` role can also be used to remove semantics from an element when it is used only for layout purposes, e.g. `<blockquote role="presentation">` will have the same effect as no `<blockquote>` element.

Even if this use is strongly discouraged (in the case of assistive technologies that do not implement WAI-ARIA, for example), it can be considered <abbr lang="en" title="web content accessibility guidelines">WCAG-compliant</abbr>. On the other hand, the use of a WAI-ARIA `presentation` role on an element whose nature (e.g. semantics) is essential to the understanding of the content is a violation of the <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr> rules (particularly failure [F92](https://www.w3.org/WAI/WCAG21/Techniques/failures/F92)) and invalidates the criterion.
