---
WCAG:
  - successCriterion: 3.3.1
    title: Error Identification
    level: A
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - ARIA1
  - ARIA2
  - ARIA6
  - ARIA9
  - ARIA16
  - ARIA21
  - F81
  - G83
  - G84
  - G85
  - G89
  - G139
  - G184
  - H44
  - H81
  - H89
  - H90
  - SCR18
  - SCR32
Norm:
  - criterion: 9.3.3.1
    title: Error Identification
  - criterion: 9.3.3.2
    title: Labels or Instructions
---

#### Special cases

Test 11.10.1 and Test 11.10.2 will be considered not applicable when the form contains a single [form input field](#form-input-field) or indicates optional fields 

- in a visible way;
- In the `<label>` tag or in the [legend](#legend) associated with the field.

If all the fields in a form are mandatory, tests 11.10.1 and 11.10.2 still apply.

#### Technical notes

In a long form where the majority of fields are mandatory, you may find that it is the few remaining optional fields that are explicitly marked as such. In this case, you should ensure that

- A visual message at the top of the form states that "all fields are mandatory except those indicated as optional";
- The word "optional" is visually present in the label of optional fields or in the legend for a group of optional fields;
- A `required` or `aria-required="true"` attribute remains associated with each field that is not affected by this optional character.
