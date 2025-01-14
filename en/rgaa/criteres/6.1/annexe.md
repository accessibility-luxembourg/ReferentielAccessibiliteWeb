---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
  - successCriterion: 2.4.4
    title: Link Purpose (In Context)
    level: A
  - successCriterion: 2.5.3
    title: Label in Name
    level: A
Techniques:
  - ARIA7
  - ARIA8
  - C7
  - F63
  - F89
  - F96
  - G53
  - G91
  - G208
  - G211
  - H30
  - H33
  - H77
  - H78
  - H79
  - H80
  - H81
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.2.4.4
    title: Link Purpose (In Context)
  - criterion: 9.2.5.3
    title: Label in Name
---

#### Special cases

There is special case management for tests 6.1.1, 6.1.2, 6.1.3 and 6.1.4 when the link is [ambiguous to users in general](#ambiguous-to-users-in-general). In this situation, where it is not possible to make the link explicit in its context, the criterion is not applicable.

There is special case management for test 6.1.5 when

- Punctuation and capital letters are present in the text of the [visible label](#visible-label): they can be ignored in the accessible name without any consequences;
- The text of the [visible label](#visible-label) serves as a symbol: the text must not be interpreted literally at the level of the accessible name. The name must express the function conveyed by the symbol (for example, "B" in a text editor will have the accessible name "Bold", the sign "&gt;", depending on the context, will mean "Next" or "Start video"). The case of mathematical symbols is, however, an exception (see note below).

Note: if the visible label represents a mathematical expression, the mathematical symbols can be used literally to label the accessible name (e.g. "A&gt;B"). It is left to the user to work out the correspondence between the expression and what they have to spell, taking into account their knowledge of how their voice input software works ("A greater than B" or "A superior to B").

#### Technical notes

When the visible label is supplemented by another expression in the accessible name:

- WCAG insists on placing the visible label at the beginning of the accessible name without reserving exclusive use of this location;
- WCAG considers a non-exact match of the visible label character string within the accessible name to be a case of failure.

For example, if we consider the visible label "Order now" completed in the accessible name by the expression "product X", we could have the following different cases:

- "Order now product X" is valid (good practice);
- "Product X: order now" is valid;
- "Order product X now" is invalid.
