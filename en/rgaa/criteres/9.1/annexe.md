---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
  - successCriterion: 2.4.1
    title: Bypass Blocks
    level: A
  - successCriterion: 2.4.6
    title: Headings and Labels
    level: AA
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  - ARIA12
  - G115
  - G130
  - G141
  - H42
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
  - criterion: 9.2.4.1
    title: Bypass Blocks
  - criterion: 9.2.4.6
    title: Headings and Labels
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Technical notes

WAI-ARIA allows headings to be defined using the `heading` role and the `aria-level` attribute. Although it is preferable to use the native HTML `<hx>` heading element, the use of the WAI-ARIA `heading` role is compatible with accessibility.
