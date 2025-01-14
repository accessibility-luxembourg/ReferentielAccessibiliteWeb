---
title: Frame title
---

value of the `title` attribute of the `<iframe>` or `<frame>` tag, used to identify the nature of the content displayed via the frame when the user navigates from frame to frame or displays the list of frames on the page, for example.

Note 1: Some frames are used solely for technical operations such as application processing designed to prepare or control content displayed on the page, such as the frames used by certain social networks such as Facebook.

If these frames do not have a frame title provided by the remote service, or if the frame titles are deemed irrelevant, generic terms may be used, for example `title="Facebook technical content"`.

Note 2: If this does not hinder the operation of this type of frame, it is possible to make them unavailable to assistive technologies by using the WAI-ARIA `aria-hidden="true"` attribute. In this case, {% crit 2.1 %} and {% crit 2.2 %} will not apply.
