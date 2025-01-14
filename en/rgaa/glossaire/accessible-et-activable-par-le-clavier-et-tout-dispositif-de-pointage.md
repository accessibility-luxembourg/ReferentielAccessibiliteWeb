---
title: Accessible and operable by keyboard and any pointing device
---

- A user interface component (link, button, etc.) can be accessed from the keyboard and by any pointing device when the user can focus it either by using the pointer or the tab key;
- A user interface component (link, button, etc.) can be activated from the keyboard and by any pointing device when the user can initiate the action provided for by the interface component by pressing either the pointer or the enter key on the keyboard;
- Note: for some user interface components such as sliders (sliding or rotating knobs, etc.), it is not possible to control the component using the enter key alone. In these situations, other keys (such as arrow keys) can be used. In particular, for elements with a WAI-ARIA role corresponding to a design pattern, it is recommended to consider the document [WAI-ARIA 1.1 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/) when implementing them.

In the framework, the expression "operable by keyboard and any pointing device" also refers to this definition.

Important note: the use of certain technologies may make focus management too complex or too unstable to rely solely on tab, arrow and enter keys. In this case, providing keyboard shortcuts may be the only way to make the component usable.

The criterion can only be considered compliant if the keyboard shortcuts used are properly documented, functional and comply with {% crit 12.10 %}.
