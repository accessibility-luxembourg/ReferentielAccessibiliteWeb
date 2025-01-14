---
title: Link context
---

The link context represents the additional information (referred to as context information) that can be related by a computer program to the [accessible name of a link](#accessible-name-of-a-link). The contextual information used to complete the [accessible name of a link](#accessible-name-of-a-link) is as follows:

- The content of the sentence in which the text link is present;
- The content of the paragraph (`<p>` tag) in which the text link is present;
- The content of the list item (`<li>` tag) or the content of a parent list item (`<li>` tag) in which the text link is present;
- The content of the title (`<hx>` tag) preceding the text link;
- The content of the table header cell(s) (`<th>` tag(s)) associated with the data cell (`<td>` tag) in which the text link is present;
- The content of the data cell (`<td>` tag) in which the text link is present.

Note 1: One of the 6 link contexts combined with the [accessible name of a link](#accessible-name-of-a-link) should make it possible to understand the function and destination of the link.

Note 2: RAWeb considers that an e-mail address of the type `xxx@xxx.yyy` is a sufficient link text to understand the function of the link and does not require the action to be indicated more explicitly.
