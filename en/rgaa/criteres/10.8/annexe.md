---
WCAG:
  - successCriterion: 1.3.2
    title: Meaningful Sequence
    level: A
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - G57
Norm:
  - criterion: 9.1.3.2
    title: Meaningful Sequence
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Technical notes

WAI-ARIA offers an `aria-hidden` attribute (`true` or `false`) which makes it possible to inhibit the rendering of content to assistive technologies, without affecting its visibility to user agents: content with `aria-hidden="true"` will therefore no longer be vocalisable, but will remain visible.

Unless the content controlled by `aria-hidden` is not intended to be rendered by assistive technologies, the value of the `aria-hidden` attribute must be consistent with the displayed or hidden state of the content on the screen.

The HTML5 specification includes a `hidden` attribute which can be used, when the `hidden` attribute is present, to make content in the generated DOM unavailable (similar to the `type="hidden"` on a form control).

It is possible to have situations where content controlled by `hidden` or `aria-hidden` is momentarily in a state inconsistent with the displayed or hidden status of the content, for example if you want to make an element available, but its display on the screen remains dependent on a subsequent action. In this case, it is the final state of the content that must be considered.
