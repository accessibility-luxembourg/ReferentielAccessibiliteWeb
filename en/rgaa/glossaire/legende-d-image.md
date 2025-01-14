---
title: Image caption
---

When a text adjacent to an image contains information about the image (e.g. copyright, date, author, etc.) or is intended to supplement the information provided by the image (e.g. a text associated with an image in an image gallery), it is referred to as an image caption.

When an image is captioned, the image caption needs to be linked to the image by a structural relationship, so that assistive technologies can treat the image and its caption as a single whole.

HTML5 suggests associating a legend with an image via the `figure` (the whole image and the caption) and `figcaption` (the caption) elements.

An image without a caption can define

- An image which is not inserted into a `figure` element;
- An image inserted in a `figure` element without a `figcaption` element.

Note: when the text adjacent to the image can be used as replacement text, it is not necessary to use the `figure`, `figcaption` set, as the image can simply be treated as a decorative image.

On this subject, you can consult the W3C note [Requirements for providing text to act as an alternative for images](https://www.w3.org/TR/html51/semantics-embedded-content.html#alt-text).
