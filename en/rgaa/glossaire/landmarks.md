---
title: Landmarks
---

WAI-ARIA provides roles for indicating the main areas (regions) of the document. These roles are very useful for screen reader users in particular, but also for keyboard navigation users who can benefit from quick navigation functions in the [document structure](#document-structure).

The roles must be defined in the document according to the nature of the zone:

- The [header region](#header-region) must have a WAI-ARIA `role="banner"` attribute;
- The main [navigation menu](#menu-and-navigation-bar) must have a WAI-ARIA `role="navigation"` attribute;
- The [main content region](#main-content-region) must have a WAI-ARIA `role="main"` attribute;
- The [footer region](#footer-region) must have a WAI-ARIA `role="contentinfo"` attribute;
- The [search engine](#search-engine-internal-to-a-website) region on the website must have a WAI-ARIA `role="search"` attribute.

Note 1: While most screen readers provide these functions, browsers have yet to offer a dedicated navigation function for users who cannot use the mouse. The implementation of skip links therefore remains to be favored over landmarks.

Note 2: The WAI-ARIA `banner`, `main` and `contentinfo` roles must be unique in the page. The WAI-ARIA `navigation` role is reserved for main and secondary navigation zones. When there are several WAI-ARIA `navigation` roles, it may be useful to differentiate them by specifying a name for each of the zones using the WAI-ARIA `aria-label` or `aria-labelledby` attribute.
