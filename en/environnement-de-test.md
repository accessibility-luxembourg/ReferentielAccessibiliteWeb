---
title: Test environment
layout: layouts/base.njk
description: The different desktop or mobile test environments
eleventyNavigation:
  title: Technical method
  parent: method
  order: 4
---

Some RAWeb criteria, in particular those in the JavaScript theme, include rendering tests to be carried out on assistive technologies associated with browsers and operating systems.

The tests carried out using these combinations (assistive technology, operating system, browser) enable a declaration to be made that an HTML / WAI-ARIA device is "compatible with accessibility" as defined by <abbr title="web content accessibility guidelines">WCAG</abbr>.

The combinations have been established on the basis of the list of assistive technologies whose use is sufficiently widespread, or in certain cases where it is provided natively and constitutes the preferred means of accessing information and features.

### Computer test environment  (desktop)

The operating systems selected are Windows and Mac OS X and the Firefox, Chrome, Edge and Safari browsers. It is the auditor's responsibility to define, in consultation with the managers of the site being audited, the operating system and browser versions that are appropriate for the context in which the site is used and the test environment used when developing the site. The assistive technology versions to be used will be either the latest available on the operating system selected or the previous version.

When the site or application is intended for a public whose equipment is controlled, the tests will have to be carried out on a test environment adapted to the context of the controlled environment.

For an HTML / WAI-ARIA device or its alternative to be considered compatible with accessibility, it must be fully functional, in terms of rendering and accessibility features, on all of the following configurations.

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Computer test environment (desktop)</caption>
        <thead>
        <tr>
            <th scope="col">Assistive technology</th>
            <th scope="col">Browser</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>NVDA (latest version)</td>
            <td>Firefox or Chrome or Edge</td>
        </tr>
        <tr>
            <td>JAWS (previous version)</td>
            <td>Firefox or Chrome or Edge</td>
        </tr>
        <tr>
            <td>VoiceOver (latest version)</td>
            <td>Safari</td>
        </tr>
        </tbody>
    </table>
</div>


### Mobile test environment

The operating systems selected are Android and iOS and Chrome and Safari browsers. It is up to the auditor to define, in consultation with the managers of the site being audited, the operating system and browser versions that are appropriate for the context in which the site is used and the test environment used during the development of the site. 

The assistive technology versions to be used will be either the latest available on the operating system selected, or the previous version. 

To test a website on a mobile device, the test environment must include one of the following two complementary combinations:

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Mobile device test environment - Combination 1</caption>
        <thead>
        <tr>
            <th scope="col">Operating system</th>
            <th scope="col">Assistive technology</th>
            <th scope="col">Browser</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Native Android</td>
            <td>TalkBack (latest version)</td>
            <td>Chrome</td>
        </tr>
        </tbody>
    </table>
</div>

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Mobile device test environment - Combination 2</caption>
        <thead>
        <tr>
            <th scope="col">Operating system</th>
            <th scope="col">Assistive technology</th>
            <th scope="col">Browser</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>iOS</td>
            <td>VoiceOver (latest version)</td>
            <td>Safari</td>
        </tr>
        </tbody>
    </table>
</div>

Note that in the case of a mobile website for the general public, it is strongly recommended that you test in both environments.

### Other environments

Finally, depending on the context of the site being audited, other complementary assistive technologies may be useful, such as

- ZoomText on Windows or macOS;
- Dragon Naturally Speaking on Windows or macOS.

### Controlled environment

When the website is intended to be distributed and used in a controlled environment, the test environment (baseline) must consist of the configurations (assistive technology, operating system, browser) actually used in the controlled environment.

For example, if the website is distributed exclusively in a GNU/Linux environment, the tests should only be carried out on the browsers and assistive technologies used by the agents on this platform. This test environment replaces the test environment used in the uncontrolled environment.
