---
WCAG:
  - successCriterion: 2.4.6
    title: Headings and Labels
    level: AA
  - successCriterion: 2.5.3
    title: Label in Name
    level: A
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - ARIA6
  - ARIA9
  - ARIA14
  - ARIA16
  - F96
  - G82
  - G131
  - G208
  - G211
  - H44
  - H65
Norm:
  - criterion: 9.2.4.6
    title: Headings and Labels
  - criterion: 9.2.5.3
    title: Label in Name
  - criterion: 9.3.3.2
    title: Labels or Instructions
---

#### Special cases

There is special case management for the 11.2.5 test when

- Punctuation and capital letters are present in the text of the [visible label](#visible-label): they can be ignored in the accessible name without any consequences;
- The text of the [visible label](#visible-label) serves as a symbol: the text must not be interpreted literally at the level of the accessible name. The name must express the function conveyed by the symbol (for example, "B" in a text editor will have the accessible name "Bold", the sign "&gt;", depending on the context, will mean "Next" or "Start video"). The case of mathematical symbols is, however, an exception (see note below).

Note: if the visible label represents a mathematical expression, the mathematical symbols can be used literally to label the accessible name (e.g. "A&gt;B"). It is left to the user to work out the correspondence between the expression and what they have to spell, taking into account their knowledge of how their voice input software works ("A greater than B" or "A superior to B").

This special case also applies to Test 11.9.2.
