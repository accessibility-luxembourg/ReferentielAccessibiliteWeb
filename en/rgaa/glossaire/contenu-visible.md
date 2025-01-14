---
title: Visible content
---

For the {% test '10.2.1' %}: "Present content" means that visible content remains present when CSS is deactivated. For example, an image conveying information as a CSS background property invalidates this test because the information is no longer "present" when CSS is deactivated. On the other hand, an image conveying information as a CSS background property but accompanied by hidden text validates this test because the information is indeed "present" when CSS is deactivated.

Note: the practice of managing images as background properties of elements via CSS is formally not recommended, even if accompanied by hidden text.
