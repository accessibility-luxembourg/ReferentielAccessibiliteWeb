---
title: Lists
---

A sequence of elements which can be grouped together in the form of a structured ordered, unordered or definition list. For example, the sequence of links in a navigation menu is an unordered list of links, the various steps in a procedure are an ordered list of elements, the term/description pair in a glossary is a list of descriptions. In HTML, lists use the following tags:

- Ordered list: `<ol>` and `<li>` tags (each element of the list is assigned an indexed marker);
- Unordered list: `<ul>` and `<li>` tags (each item in the list is assigned an unindexed marker);
- Description list: `<dl>`, `<dt>` (term to be described) and `<dd>` tags (description).

Note 1: In HTML5, the `<dl>` tag no longer represents just a list of definitions, but generically any list of descriptions which may include, as a group of terms-descriptions, names and definitions, questions and answers, categories and subjects, etc.

Note 2: It is also possible to structure lists using the WAI-ARIA attributes `role="list"` and `role="listitem"` for ordered and unordered lists.

Note 3: the notion of "visually grouped in the form of a list" is characterised by

- The presence of a visual marker making it clear that it is an unordered list, for example `-`, `•`, `*`, etc.;
- The presence of a visual marker to indicate that it is an ordered list, e.g. a number, a Greek letter, etc.; and
- The presence of a series of elements that visually follow on from each other, with an identical visual form, nature and function, but without directly having a visual list marker (unordered or ordered), for example a navigation menu.

However, not all lists require a list structure, for example a series of terms separated by a comma.
