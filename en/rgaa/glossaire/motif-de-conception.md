---
title: Design pattern
---

A design pattern is a model defined in the [WAI-ARIA 1.1 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/) document which describes the structure, roles and properties and keyboard behaviour that a JavaScript component (widget) must respect.

It is recommended that components developed in JavaScript using WAI-ARIA attributes corresponding to a design pattern comply with it.
Please note, however, that not all design patterns are suitable for non-application use, particularly for sites displaying in a mobile context.

Note 1: given the lack of support for certain WAI-ARIA properties and roles, and the wide variety of situations in which a JavaScript component may be proposed, it is possible to adapt design patterns to particular contexts or uses. In this case, the adapted design pattern must

- Respect the general structure: for example, a set of panels (WAI-ARIA `tabpanel` role) in a tab system is necessarily linked to a set of tabs (WAI-ARIA `tablist` role);
- Use an equivalent WAI-ARIA role or property to replace a poorly supported WAI-ARIA role or property, offering similar behaviour and output.

Note 2: Enriching a design pattern with additional WAI-ARIA roles or properties whose accessibility compatibility is checked by the rendition test on the test environment (or "baseline") does not constitute an adaptation of a design pattern. For example, adding the WAI-ARIA `aria-hidden` attribute to the panels (WAI-ARIA `tabpanel` role) of a tab system does not define an adapted design pattern.
