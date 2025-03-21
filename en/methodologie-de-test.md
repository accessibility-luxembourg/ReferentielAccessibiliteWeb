---
title: Test methodology
layout: layouts/base.njk
description: Test methodology documenting the steps used to check whether a RAWeb criterion is compliant or not
eleventyNavigation:
  title: Resources
  parent: resources
  order: 3
---

This document has been drawn up as part of the resources to accompany the introduction of version 1 of the Web Accessibility Assessment Framework (RAWeb).

It is intended for anyone wishing to check that web content complies with the RAWeb. It is a testing methodology that documents the steps involved in checking whether or not a RAWeb criterion is met. This methodology is therefore to be used in addition to the RAWeb technical framework and cannot be used on its own. It does not replace a thorough reading of the technical framework, nor does it replace a RAWeb training.

For each of the tests of a criterion, there is a corresponding test procedure. The implementation of this procedure may sometimes require the use of specific tools, otherwise a browser is sufficient to perform most of the tests.
A list of tools is also provided to assist in carrying out the tests. They have been selected both because they are frequently used by experts in the field and because they make it easier to find certain results.

<div class="fr-callout"><p class="fr-text--lg">
The testing methodology is now available for each test on the <a href="criteres.html">criteria and tests</a> page.</p>
</div>

### Assessment of compliance with the reference standard

#### General framework

In order to assess the compliance of the website with the reference standard, the organisation must conduct an accessibility audit. The audit (or evaluation) may be carried out by the organisation itself (self-evaluation) or by a third party. The evaluation is carried out on a sample of pages representative of the site. 

The verification of compliance of the sample pages with the applicable criteria is carried out using the [Web Accessibility Assessment Framework (RAWeb)](./index.html). 

The final phase of the audit is the accessibility statement, which reports on compliance with the applicable rules.

The audit (or evaluation) meets the following criteria:

- it is reliable: it is the responsibility of the organisation concerned to ensure the reliability of its statement by all possible means (recourse to an external service provider, training of internal experts, cross-audits, etc.);
- it is representative: it is based on a representative sample (see "Sample" section below).

It is possible to use another test method, subject to three conditions:

- ensure that the test method used can be communicated on request to a user or an administration;
- produce an explicit mapping table between the criteria and tests and the chosen reference standard;
- indicate this information in the accessibility statement.

#### Sample

The sample on which the audit of a website is carried out covers at least the following pages, where they exist:
 
1. the home page;
1. the legal notices;
1. the authentication page;
1. the contact page;
1. the "accessibility" page;
1. the "help" page;
1. the web page or set of web pages making up the website [documentation](./glossaire.html#documentation) (if different from the "accessibility" page and the "help" page);
1. the web page or set of web pages making up the [documentation](./glossaire.html#documentation) for the [support service](./glossaire.html#support-service);
1. the "site map" page;
1. at least one relevant page for each type of service provided and any other main intended use (e.g. 1st level headings in the tree structure), including the search functionality;
1. a page containing at least one relevant downloadable document, where applicable, for each type of service provided and for any other main intended use;
1. the set of web pages making up a process (for example, an input form or a multi-page transaction);
1. examples of pages with a significantly distinct appearance or different type of content (e.g. a page containing data tables, multimedia elements, illustrations, forms, real-time communication functionality, etc.).

The selection of pages audited and their number must be representative of the site. Web analytics can be taken into account when selecting the sample.

Finally, randomly selected pages representing at least 10% of the elements in the sample described above are also taken into account.

#### Test environment (or "baseline")

Some [RAWeb criteria](./criteres.html), particularly those in the Scripts theme, include rendering tests to be carried out on assistive technologies associated with browsers and operating systems.

##### Definition of the test environment

To validate these criteria, a test environment (or "baseline") needs to be defined. By default, it is made up of the platforms and assistive technologies most commonly used by people with disabilities. 

To carry out the evaluation tests within the framework of RAWeb, it is necessary to take into account the [RAWeb test environment](./environnement.md).

This minimum test environment may be supplemented, where appropriate, by available free and open source solutions or by older technologies, depending on the use of the site. Whenever it is possible to know the configuration of the workstations and the hardware used, the baseline is composed of the services actually used in this environment.

#### Testing pages

Each page in the sample must be checked against the criteria applicable to it.

There are 3 reasons why a criterion may not be applicable to a page:

  1. The criterion relates to content or a functionality that does not exist. For example: if the page does not include a video, the criteria relating to videos will not be applicable.
  2. The criterion relates to an exempt content or service which is therefore not subject to the accessibility obligation.
  3. The criterion concerns content subject to derogation for disproportionate burden that is accompanied by an accessible digital alternative. For example, a statistical table with graphics that offers a text alternative. In this case, the criteria applicable to content subject to derogation will not apply. 
      Please note: if the content subject to derogation for disproportionate burden does not offer an accessible digital alternative, the criteria for this content are considered applicable.

The pages are then tested against the applicable criteria. These tests provide:

  * the number of validated and non-validated criteria for each page;
  * the compliance rate for each page.

Please note: 

  * a criterion is validated for a given page when all the elements of the page have passed the tests used to validate the criterion;
  * if a single element of the page does not pass the tests for a criterion, the criterion cannot be validated;
  * if the page is part of a process (making a declaration, taking part in a public consultation, making an appointment), a criterion is validated for a page in the process only if it is validated for all the pages in the process.

Some criteria or themes are applicable to the whole site and not to a particular page, so it is not necessary to evaluate them on all the pages in the sample. In this case, they may, for example, be evaluated on a single page in the sample and considered as not applicable to all the other pages. This methodology for reporting the results of the evaluation of these criteria is, of course, optional. Whatever methodology is chosen, there will be no impact on the site's overall compliance rate. This is particularly the case for the following criteria and themes:
  * Criterion 12.3: Is the site map page relevant?
  * Theme 14: Documentation and accessibility features
  * Theme 16: Support services.

#### Compliance rate with the standard

The compliance rate measures the progress made by the online service in complying with accessibility requirements. 

This rate indicates the percentage of criteria met by the online service.

The percentage of criteria met is obtained by dividing the number of validated criteria by the number of applicable criteria.

  * Validated criterion: a criterion is validated if it is validated on all the pages in the sample. If a criterion is invalidated on only one page in the sample, it cannot be considered valid for calculating the rate.
  * Applicable criterion: for a criterion to be applicable, it only needs to be applicable on one page in the sample. The corollary of this is that a criterion is not applicable if it is not applicable on all the pages oin the sample without exception.

This compliance rate determines the compliance status to be mentioned in the [accessibility statement](../obligations.md#content-of-the-accessibility-statement).

#### Non-interference principle

In an audit sample, there may be content that is not subject to the accessibility obligation:

- [exempt content](../obligations.md#exempt-content);
- [content derogated for disproportionate burden](../obligations.md#derogation-for-disproportionate-burden);
- non-accessible content that has an accessible alternative.

It is essential to ensure that this content does not prevent users from accessing the rest of the page.

Therefore, although the compliance of this content is not required, it must comply with the following criteria and tests:

- [Criterion 4.10](./criteres.html#crit-4-10): Is each automatically triggered sound controllable by the user?
- [Criterion 12.9](./criteres.html#crit-12-9): On each web page, navigation must not contain any keyboard traps. Is this rule respected?
- [Test 13.1.1](./criteres.html#test-13-1-1): For each web page, does each refresh process (`<object>` tag, `<embed>` tag, `<svg>` tag, `<canvas>` tag, `<meta>` tag) meet one of these conditions (excluding special cases)?
- [Criterion 13.7](./criteres.html#crit-13-7): On each web page, are sudden changes in brightness or blinking used appropriately?
- [Criterion 13.8](./criteres.html#crit-13-8): On each web page, can each moving or blinking content be controlled by the user?

Failure to comply with one of these criteria or tests for one of the types of content listed renders the corresponding criteria non-compliant.

The non-interference principle is identified in standard EN 301 549 in criterion 9.6 WCAG conformance requirements.

### Tools

The most useful tool is the code inspector available in every browser. It makes it easy to find the elements and attributes required for an accessibility test. Nowadays, development tools also offer features for accessing the properties of the accessibility tree exposed by the browser. However, this information does not replace the need for technical assistance when a criterion or test requires it.

The assistive technologies listed in the chosen test environment constitute a second set of essential tools (see the section [Testing environment](environnement.html/#contenu)). They are required to ensure that accessible content (alternatives to images, link headings, table titles, etc.) is rendered correctly, particularly in cases where examining the code alone would not suffice.

Other tools are available to help search for content elements. They are often presented as browser extensions and can be used to explore one or more aspects of an accessibility test.

The following toolbars are browser extensions that make it easier to visually locate certain elements in a document:

- [Web Developer Toolbar for Firefox](https://addons.mozilla.org/en-US/firefox/addon/web-developer/): a toolbar for developers that can help you visually locate certain elements in a document to check its accessibility;
- [Web Developer Toolbar for Chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm): the same toolbar as above, for Chrome.

In addition to the simple toolbar, other tools provide a complete analysis of the document by visually highlighting accessibility errors on the page or, conversely, beneficial elements. Filters are then often used to display only some of these aspects. This is what Wave offers, a solution available both online (http://wave.webaim.org) and as a browser extension (https://wave.webaim.org/extension/).

Although it is no longer necessary to check the validity of the source code, it can be useful to use the HTML validator to search for anomalies. Validation of the source code of an HTML document uses the W3C online validator (https://validator.w3.org/nu/). Note that to validate the source code generated by the browser, use the "Text input" option in the "Check by" listbox and copy the HTML source available from the browser's code inspector into the multiline input box.
Browser extensions are also available, but you need to be careful, as the validation algorithms of these extensions are not necessarily up to date with the W3C validator and the results obtained may therefore be different.

Various tools are available for checking colour contrasts:

- [WCAG Contrast checker for Firefox](https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/): Firefox extension that automatically checks text colour contrasts in a document;
- [WCAG Contrast checker for Chrome](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf): same extension as above for Chrome;
- [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/): Windows or Mac application for checking colour contrasts.

A very useful extension is available for checking the document tree structure and headings hierarchy:

- [HeadingsMap for Firefox](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/): Firefox extension that lets you preview the document map and its tree structure;
- [HeadingsMap for Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi): same extension as above for Chrome.

Various tools can be used to analyze office files, depending on the file format:

- [PAC (PDF Accessibility Checker) 2024 for Windows](https://pac.pdf-accessibility.org/en): software for checking certain accessibility issues in PDF documents;
- Recent versions of Microsoft Office offer a built-in accessibility validation feature (see the article [Make your Word documents accessible to people with disabilities](https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d) and related articles);
- [Ace by DAISY App](https://inclusivepublishing.org/toolbox/ace-by-daisy-app/) is a tool for checking the accessibility of an EPUB file.

Finally, an old but still useful program for assessing the potential of certain web content to cause epileptic seizures: [PEAT (Photosensitive Epilepsy Analysis Tool) for Windows](https://trace.umd.edu/peat).
