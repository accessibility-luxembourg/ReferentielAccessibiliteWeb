---
WCAG:
  - successCriterion: 2.5.3
    title: Label in Name
    level: A
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  - ARIA5
  - ARIA18
  - ARIA19
  - F15
  - F19
  - F20
  - F42
  - F59
  - F79
  - F96
  - G10
  - G135
  - G136
  - G208
  - G211
  - SCR21
Norm:
  - criterion: 9.2.5.3
    title: Label in Name
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Special cases

There is special case management for the 7.1.3 test when

- Punctuation and capital letters are present in the text of the visible label: they can be ignored in the accessible name without any consequences;
- The text of the visible label is used as a symbol: the text must not be interpreted literally in the accessible name. The name must express the function conveyed by the symbol (for example, "B" in a text editor will have the accessible name "Bold", the sign "&gt;", depending on the context, will mean "Next" or "Start video"). The case of mathematical symbols is, however, an exception (see note below).

Note: if the visible label represents a mathematical expression, the mathematical symbols can be used literally to label the accessible name (e.g. "A&gt;B"). It is left to the user to work out the correspondence between the expression and what they have to spell, taking into account their knowledge of how their voice input software works ("A greater than B" or "A superior to B").

#### Technical notes

Criterion 7.1 implements the notion of "compatible with assistive technologies" as defined by WCAG , as well as the use of WAI-ARIA to make a component or functionality accessible. The correct use of WAI-ARIA is verified via tests 7.1.1, 7.1.2 and 7.1.3.

Important note: in an HTML5 environment, many components may require JavaScript to work; as a result, providing an alternative to a JavaScript component that cannot be made accessible must benefit from a method specific to the component in question, enabling it to be replaced by an accessible alternative (and reactivated). This means that disabling JavaScript for the whole page will not be accepted as a valid method, unless it does not affect the use of the other components.
