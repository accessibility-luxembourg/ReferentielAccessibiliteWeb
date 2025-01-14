---
title: When focused
---

Focus is the state returned by an element that receives attention following a user action. There are three ways in HTML to give focus to an element:

- By activating the element using a pointing device (e.g. mouse);
- By reaching the element using the tab or shift + tab key;
- By activating the element using a keyboard shortcut (`accesskey`).

Some elements naturally receive the focus, for example: `<a href>`, `<area href>`, `<button>`, `<input>`, `<object>`, `<select>`, `<label>`, `<legend>`, `<optgroup>`, `<option>` and `<textarea>`.
The behaviour of the element when focused depends on its nature; a link, for example, should be activated after the focus is set (unless a script is used). On the other hand, a form element, such as `<textarea>`, should allow input when focused. The elements `<label>` and `<legend>` only receive the focus when focused via the mouse pointer. For the `<label>` element, the expected behaviour is to transfer the focus to the element associated with it.

Note 1: the WAI-ARIA specification extends the role assigned to the `tabindex` attribute by defining that any HTML element can acquire the ability to receive focus by assigning it the value `tabindex="0"`. On the other hand, no behaviour is assigned by the mere presence of `tabindex`. Similarly, the value `tabindex="-1"`, when used on an element which naturally receives focus, removes the affected element from the tab plane by inhibiting its ability to signal when focused. The use of `tabindex`, in accordance with the WAI-ARIA specification, can validate certain tests relating to the management of tabulation focus, in particular.

Note 2: The browser's visual indication of focus must not be removed or degraded unless a focus style defined by the author is visible and sufficiently contrasting with respect to {% crit 3.3 %}.
