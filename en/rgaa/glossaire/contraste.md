---
title: Contrast
---

Marked opposition between the luminosity of a foreground colour and a background colour.
The contrast ratio is based on the difference in relative luminance between the background and foreground according to the rule
(L1 + 0.05) / (L2 + 0.05) where L1 is the brightest relative luminance and L2 is the darkest relative luminance. Luminosity is calculated using the following formula: L = 0.2126 \* R + 0.7152 \* G + 0.0722 \* B. Where R, G and B are defined by

- If R sRGB ≤ 0.03928 then R = R sRGB /12.92 otherwise R = ((R sRGB +0.055)/1.055) ^ 2.4;
- If G sRGB ≤ 0.03928 then G = G sRGB /12.92 otherwise G = ((G sRGB +0.055)/1.055) ^ 2.4;
- If B sRGB ≤ 0.03928 then B = B sRGB /12.92 otherwise B = ((B sRGB +0.055)/1.055) ^ 2.4.

and R sRGB, G sRGB and B sRGB are defined by

- R sRGB = R8bit/255;
- G sRGB = G8bit/255;
- B sRGB = B8bit/255.

The "^" character is the power operator.

Note: the contrast measurement concerns text, image of text, text and image of text in animations, caption text and embedded text in videos. For text and image of text in animations, caption text and inlay text in videos, the font size should be measured in relation to the default display size (as displayed). Text present in the elements of an image or video (e.g. a sign, poster, etc.) is not affected.

Source: [WCAG contrast calculation procedure](https://www.w3.org/WAI/WCAG21/Techniques/general/G18#procedure).
