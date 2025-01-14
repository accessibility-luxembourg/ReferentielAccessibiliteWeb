---
WCAG:
  - successCriterion: 3.3.3
    title: Error Suggestion
    level: AA
Techniques:
  - G84
  - G85
  - G89
  - G177
  - H89
Norm:
  - criterion: 9.3.3.3
    title: Error Suggestion
---

#### Technical notes

Some HTML5 control types offer automatic input help messages: for example, the `email` type displays a message such as "please enter a valid e-mail address" if the e-mail address entered does not match the expected format. These messages can be customised using the Constraint Validation API, which enables error messages to be customised and the criterion to be validated. The `pattern` attribute automatically performs format checks (via regular expressions) and displays a customisable help message via the `title` attribute: this feature also validates the criterion.
