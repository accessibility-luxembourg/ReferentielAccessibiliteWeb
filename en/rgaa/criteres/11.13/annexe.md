---
WCAG:
  - successCriterion: 1.3.5
    title: Identify Input Purpose
    level: AA
Techniques:
  - F107
  - H98
Norm:
  - criterion: 9.1.3.5
    title: Identify Input Purpose
---

#### Technical notes

The [list of possible values for the `autocomplete` attribute](#list-of-possible-values-for-the-autocomplete-attribute) is based on the list of values present in the WCAG2.1 specification, which is itself based on the list of "field name" type values in the HTML5.2 specification. The WCAG criterion requires one of these values to be present in order to qualify an input field relating to the user.

What the WCAG criterion leaves implicit are the various possible construction rules for obtaining a value (simple or compound) for the `autocomplete` attribute. However, it is up to the developer to provide the `autocomplete` attribute with a valid value or set of values in terms of the requirements of the algorithm provided by the HTML5.2 specification. For example, an `autocomplete` attribute can only contain a single `"field name"` value, such as `"name"` or `"street-address"`. We can also have a set composed of different values, for example, `autocomplete="shipping name"` or `autocomplete="section-software shipping street-address"`: `"section-software"` refers to a "scope" type value and `"shipping"` to a "hint set" type value, but always a single "field name" type value.
