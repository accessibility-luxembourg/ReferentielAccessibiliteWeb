---
WCAG:
  - successCriterion: 1.4.11
    title: Non-text Contrast
    level: AA
Techniques:
  - F78
  - G18
  - G136
  - G145
  - G174
  - G183
  - G195
  - G207
  - G209
Norm:
  - criterion: 5.2
    title: Activation of accessibility features
  - criterion: 9.1.4.11
    title: Non-text Contrast
---

#### Special cases

The following cases do not apply to this criterion:

- Inactive user interface component (for example, a button with a `disabled` attribute) on which no action is possible;
- A user interface component for which the appearance is managed by the browser's native styles without any modification by the author (for example, the native focus style in Chrome or Firefox);
- User interface component for which the colour is not necessary to identify the component or its state (for example, a group of links acting as navigation whose position in the page, the size and the colour of the text make it possible to understand that they are links even if the colour of the underlining of the links with the white background does not have a ratio of 3:1 and the text has a ratio of 4.5:1);
- [Graphic element](#graphic-element) or parts of a graphic element that do not provide information or have an alternative (long description, identical information visible on the page);
- [Graphic element](#graphic-element) or parts thereof forming part of a logo or brand name of an organisation or company;
- [Graphic element](#graphic-element) or parts of graphic elements whose presentation is essential to the information conveyed (for example, flags, logotypes, photos of people or scenes, screen captures, medical diagrams, heat maps);
- [Graphic element](#graphic-element) or parts of dynamic graphic elements with sufficient hover/focus contrast.
