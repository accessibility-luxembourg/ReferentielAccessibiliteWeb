---
title: Legend
---

HTML provides a way of titling groups of related form controls using the elements `<fieldset>` and `<legend>`.

It is also possible to create groups with the WAI-ARIA `group` role and a passage of text, acting as a legend, linked by the WAI-ARIA `aria-labelledby` attribute or provided by a WAI-ARIA `aria-label` attribute.

Note 1: Field groupings can use other methods that associate the grouping information directly into the field label.
For example, via a `title` attribute, a WAI-ARIA `aria-label` attribute, a `aria-labelledby` link acting as a label, or the WAI-ARIA `aria-describedby` attribute associating additional text. In this case, field grouping becomes unnecessary because the labels are sufficiently relevant.

Note 2: When the form consists of a single block of information of the same kind (the user's identity and address, for example) or a single field (a search engine, for example), field grouping is not mandatory.
