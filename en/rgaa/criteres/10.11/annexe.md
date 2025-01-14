---
WCAG:
  - successCriterion: 1.4.10
    title: Reflow
    level: AA
Techniques:
  - C31
  - C32
  - C33
  - C34
  - C37
  - C38
  - F102
  - G206
Norm:
  - criterion: 9.1.4.10
    title: Reflow
---

#### Special cases

The aim of this criterion is to guarantee scrolling in a single direction for easier reading in the direction of writing.

The exception to this criterion is content whose layout requires two dimensions to be understood or used, such as

- Images, graphics or videos;
- Games (platform games, for example);
- Presentations (such as slideshows);
- Data tables;
- Interfaces where a horizontal scrollbar is required when manipulating the interface.

Note: the majority of browsers on mobile operating systems (Android, iOS) do not correctly manage redistribution in the event of zooming. In this context, the criterion will be considered inapplicable in these environments.

#### Technical note

The pixel referred to here is the CSS pixel as defined by the W3C https://www.w3.org/TR/css3-values/
