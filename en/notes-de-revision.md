---
title: RAWeb 1 changelog
---

RAWeb 1 is the first Luxembourg accessibility framework to cover all the requirements of the European standard EN 301 549 v3.2.1 currently in force.

For all WCAG-compatible criteria, RAWeb 1 is based on the RGAA 4.1.2. The RGAA is published by DINUM on the website [accessibilite.numerique.gouv.fr](https://accessibilite.numerique.gouv.fr/) and the sources are available on this <a href="https://github.com/DISIC/accessibilite.numerique.gouv.fr/" rel="noreferrer noopener">GitHub repository</a>.
The RGAA 4.1.2 has its own [revision notes](../../fr/rgaa4.1.2/notes-revision.html).

All the other criteria are new and transcribe, in the form of operational tests, the criteria from European standard EN 301 549 v3.2.1 which are not based on WCAG.
These are the following criteria and themes:
- [Criterion 4.14: For each time-based media that has a synchronised caption or audio description track, are the control features for these alternatives presented at the same level as the main features?](criteres.html#crit-4-14)
- [Criterion 4.15: For each feature that transmits, converts or records pre-recorded time-synchronised media that has a caption track, at the end of the process, are the captions correctly preserved?](criteres.html#crit-4-15)
- [Criterion 4.16: For each feature that transmits, converts or records pre-recorded time-based media with an audio description, at the end of the process is the audio description correctly preserved?](criteres.html#crit-4-16)
- [Criterion 4.17: For each pre-recorded time-based medium, is the presentation of the captions controllable by the user (excluding special cases)?](criteres.html#crit-4-17)
- [Criterion 4.18: For each pre-recorded synchronised time-based medium that has subtitles, can these be vocalised (excluding special cases)?](criteres.html#crit-4-18)
- [Criterion 13.13: For each document conversion feature, is the accessibility information available in the source document retained in the destination document (excluding special cases)?](criteres.html#crit-13-13)
- [Criterion 13.14: Is an alternative method available for each identification or control functionality that relies on the use of the user's biological characteristics?](criteres.html#crit-13-14)
- [Theme 14: Documentation and accessibility features](criteres.html#topic-14)
- [Theme 15: Editing tools](criteres.html#topic-15)
- [Theme 16: Support services](criteres.html#topic-16)
- [Theme 17: Real-time communication](criteres.html#topic-17)

The glossary entries corresponding to these new criteria have been added:
- [Help with creating accessible content](glossaire.html#help-with-creating-accessible-content)
- [Two-way voice communication web application](glossaire.html#two-way-voice-communication-web-application)
- [Biological characteristics](glossaire.html#biological-characteristics)
- [Key features of captions](glossaire.html#key-features-of-captions)
- [Real-time text communication](glossaire.html#real-time-text-communication)
- [Documentation](glossaire.html#documentation)
- [Accessibility feature](glossaire.html#accessibility-feature)
- [Main features (of a time-based media player)](glossaire.html#main-features-of-a-time-based-media-player)
- [Voice-based services](glossaire.html#voice-based-services)
- [Template](glossaire.html#template)
- [Timestamp](glossaire.html#time-stamp)
- [Accessibility information](glossaire.html#accessibility-information)
- [Mechanism for enabling an accessibility feature](glossaire.html#mechanism-for-enabling-an-accessibility-feature)
- [Editing tool](glossaire.html#editing-tool)
- [QVGA](glossaire.html#qvga)
- [Digital accessibility rules](glossaire.html#digital-accessibility-rules)
- [Support service](glossaire.html#support-service)
- [Relay service](glossaire.html#relay-service)
- [Subtitles](glossaire.html#subtitles)
- [Transformation](glossaire.html#transformation)
- [Input unit](glossaire.html#input-unit)

### Changes to content resulting from RGAA 4.1.2

This update also includes changes to content from RGAA 4.1.2.

#### Introduction of the non-interference principle

A new section ["Non-interference principle"](../obligations.html#non-interference-principle) has been introduced into the "Requirements" page in order to comply fully with standard EN 301 549.

In addition, each criterion included in the non-interference principle is identified in the technical framework by the words "This criterion is subject to the non-interference principle".

#### Modification of the sample description for the audit of a website

The section ["Website audit sample"](../obligations.html#website-audit-sample) on the "Requirements" page has been modified to take account of changes to the RAWeb criteria, in particular by introducing the obligation to assess the documentation for the website or the support service.

#### Details of the compliance rate and general methodology

In the section ["Testing pages or screens"](../obligations.html#testing-pages-or-screens) of the "Requirements" page, a note has been added on the possible ways of managing content common to several pages in a sample: 

<blockquote>
Some criteria or themes are applicable to the whole site and not to a particular page, so it is not necessary to evaluate them on all the pages in the sample. In this case, they may, for example, be evaluated on a single page in the sample and considered not applicable to all the other pages. This methodology for reporting the results of the evaluation of these criteria is, of course, optional. Whatever methodology is chosen, there will be no impact on the site's overall compliance rate. This is particularly the case for the following criteria and themes:

- Criterion 12.3 Is the "site map" page relevant?
- Theme 14. Documentation and accessibility features
- Theme 16. Support services
</blockquote>

In the section ["Compliance rate with the standard"](../obligations.html#compliance-rate-with-the-standard) on the "Requirements" page, all references to the "average rate" have been removed and only the "overall rate" is referred to as the reference rate, in particular for drawing up the accessibility statement.

#### Modification of the computer test environment

The [Computer test environment](environnement.html) has been modified to bring it into line with changes in browsers: 
- Internet Explorer has been removed, as Microsoft has no longer provided support for it since 2022.
- Chrome and Edge have been added. Edge now replaces Internet Explorer on Microsoft Windows, and uses the same engine as Chrome.

These choices are also supported by usage data, in particular
- the [WebAIM 2023 survey](https://webaim.org/projects/screenreadersurvey9/#browsercombos), which identifies Chrome and Edge as the browsers most used by blind and partially-sighted people; 
- the 2023 assessment of [browser market share in Luxembourg by Statcounter GlobalStats](https://gs.statcounter.com/browser-market-share/all/luxembourg/2023).

As a result, there is now just one Computer test environment with 3 combinations.

#### Removal of WCAG criteria from syntax analysis

The WCAG working group published an update to <a href="https://www.w3.org/TR/WCAG21/#parsing">WCAG 2.1 on 21 September 2023</a> indicating that <a href="https://www.w3.org/TR/WCAG21/#parsing">success criterion 4.1.1 <em>Parsing</em></a> should henceforth always be considered compliant.

As the RAWeb is a transposition of WCAG 2.1, this choice is applied to the corresponding criteria in the RAWeb. Therefore, criteria [8.1](criteres.html#crit-8-1) and [8.2](criteres.html#crit-8-2) of the RAWeb no longer need to be tested and must always be considered compliant. 

The criteria have been retained in the framework (to preserve the numbering of the "Mandatory elements" criteria) and are accompanied by a note.

#### Removal of references to the `longdesc` attribute

The `longdesc` attribute as a compliant method for criteria 1.6 and 1.7 is deleted. The `longdesc` attribute has been declared obsolete in the HTML5 specification. In addition, support for the attribute is inadequate for the test environment, with no support in particular for mobile environments (Safari/iOS and Chrome/Talkback). 

In test [1.6.1](criteres.html#test-1-6-1), the following condition is removed: <q>There is a `longdesc` attribute that gives the address (URL) of a page or location on the page containing the [detailed description](glossaire.html#detailed-description-image)</q>. The test methodology is adapted accordingly.

In the technical note for criterion [1.6](criteres.html#crit-1-6), the passage concerning the `longdesc` attribute is deleted:
<blockquote>
The <code>longdesc</code> attribute, which is one of the conditions of test 1.6.1 (and whose relevance is verified with test 1.7.1), is now considered obsolete by the current HTML specification. Verification of this attribute will therefore only be required for versions of the HTML specification prior to HTML 5.
</blockquote>

In test [1.7.1](criteres.html#test-1-7-1), the following condition is removed: <q>The [detailed description](glossaire.html#detailed-description-image) via the address referenced in the `longdesc` attribute is relevant</q>. The test methodology has been adapted accordingly.

In the glossary, the entry "[Detailed description (image)](glossaire.html#detailed-description-image)" has been modified. The item <q>A `longdesc` attribute that contains the address of a page or location on the page containing the detailed description</q> has been removed.

#### Modification to test 4.4.1

The test [4.4.1](criteres.html#test-4-4-1) has been rewritten to specify the test elements, which were deemed to be too implicit.

Test 4.4.1 in the RGAA 4.1.2 

<blockquote>Test 4.4.1: For each pre-recorded time-synchronised media with captions, are these captions relevant?</blockquote>

It has been rewritten in RAWeb 1 to introduce 3 test conditions to be verified: 

<blockquote>

- Captions are in the language of the video;
- Captions are relevant;
- Captions are correctly synchronised.

</blockquote>

### Removal of references to obsolete technologies

References to Flash, Silverlight and Java have been removed from the criteria, glossary and methodologies due to the disappearance of these technologies. 

The framework elements affected are as follows: 

- Methodology of criterion [4.7](criteres.html#crit-4-7): deletion of the test <q>the passage of text is located outside the multimedia content player if the latter uses Flash technology</q>.
- "Controlled environment" glossary entry: references to Flash and Silverlight have been removed from the second list item <q>Supported technologies, their version and activation (JavaScript, WAI-ARIA, Flash, Silverlight</q>, etc.).
- The "Non-time-based media" glossary entry: all references to Flash, Java and Silverlight and their properties have been removed.
- The glossary entry "Time-based media (audio, video and synchronised)": all references to Flash and its properties have been removed. Note 1 is deleted: Note 2 becomes Note 1, and Note 3 becomes Note 2.

#### Addition of new links to WCAG techniques and failures

New WCAG techniques and failures have been added for certain RAWeb criteria.

- Criterion [3.1](criteres.html#crit-3-1) [F13](https://www.w3.org/WAI/WCAG21/Techniques/failures/F13)
- Criterion [3.2](criteres.html#crit-3-2) [F83](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)
- Criterion [3.3](criteres.html#crit-3-3) [G136](https://www.w3.org/WAI/WCAG21/Techniques/general/G136), [G209](https://www.w3.org/WAI/WCAG21/Techniques/general/G209)
- Criterion [6.1](criteres.html#crit-6-1) [C7](https://www.w3.org/WAI/WCAG21/Techniques/css/C7), [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211), [H33](https://www.w3.org/WAI/WCAG21/Techniques/html/H33), [H77](https://www.w3.org/WAI/WCAG21/Techniques/html/H77)
- Criterion [7.1](criteres.html#crit-7-1) [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Criteria [7.5](criteres.html#crit-7-5) [F103](https://www.w3.org/WAI/WCAG21/Techniques/failures/F103)
- Criterion [8.6](criteres.html#crit-8-6) [F25](https://www.w3.org/WAI/WCAG21/Techniques/failures/F25)
- Criterion [9.2](criteres.html#crit-9-2) [H97](https://www.w3.org/WAI/WCAG21/Techniques/html/H97), [H101](https://www.w3.org/WAI/WCAG21/Techniques/html/H101)
- Criteria [10.4](criteres.html#crit-10-4) [F94](https://www.w3.org/WAI/WCAG21/Techniques/failures/F94), [G142](https://www.w3.org/WAI/WCAG21/Techniques/general/G142), [G178](https://www.w3.org/WAI/WCAG21/Techniques/general/G178)
- Criterion [10.7](criteres.html#crit-10-7) [C40](https://www.w3.org/WAI/WCAG21/Techniques/css/C40).
- Criterion [10.11](criteres.html#crit-10-11) [C31](https://www.w3.org/WAI/WCAG21/Techniques/css/C31), [C32](https://www.w3.org/WAI/WCAG21/Techniques/css/C32), [C33](https://www.w3.org/WAI/WCAG21/Techniques/css/C33), [C38](https://www.w3.org/WAI/WCAG21/Techniques/css/C38), [F102](https://www.w3.org/WAI/WCAG21/Techniques/failures/F102), [G206](https://www.w3.org/WAI/WCAG21/Techniques/general/G206)
- Criteria [10.12](criteres.html#crit-10-12) [F104](https://www.w3.org/WAI/WCAG21/Techniques/failures/F104)
- Criteria [10.13](criteres.html#crit-10-13) [SCR39](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR39)
- Criteria [11.1](criteres.html#crit-11-1) [G167](https://www.w3.org/WAI/WCAG21/Techniques/general/G167)
- Criteria [11.2](criteres.html#crit-11-2) [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Criterion [11.9](criteres.html#crit-11-9) [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Criterion [11.10](criteres.html#crit-11-10) [G139](https://www.w3.org/WAI/WCAG21/Techniques/general/G139)
- Criterion [11.13](criteres.html#crit-11-13) [F107](https://www.w3.org/WAI/WCAG21/Techniques/failures/F107)
- Criteria [12.1](criteres.html#crit-12-1) [G185](https://www.w3.org/WAI/WCAG21/Techniques/general/G185)
- Criterion [13.9](criteres.html#crit-13-9) [F97](https://www.w3.org/WAI/WCAG21/Techniques/failures/F97), [F100](https://www.w3.org/WAI/WCAG21/Techniques/failures/F100), [G214](https://www.w3.org/WAI/WCAG21/Techniques/general/G214)
- Criterion [13.10](criteres.html#crit-13-10) [F105](https://www.w3.org/WAI/WCAG21/Techniques/failures/F105)
- Criterion [13.11](criteres.html#crit-13-11) [F101](https://www.w3.org/WAI/WCAG21/Techniques/failures/F101), [G210](https://www.w3.org/WAI/WCAG21/Techniques/general/G210), [G212](https://www.w3.org/WAI/WCAG21/Techniques/general/G212)
- Criterion [13.12](criteres.html#crit-13-12) [F106](https://www.w3.org/WAI/WCAG21/Techniques/failures/F106), [G213](https://www.w3.org/WAI/WCAG21/Techniques/general/G213)

Other techniques and failures have been deleted.
- Criterion [1.2](criteres.html#crit-1-2) link [ARIA10](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10) has been removed. 
- Criterion [1.6](criteres.html#crit-1-6): link [H45](https://www.w3.org/WAI/WCAG21/Techniques/html/H45) has been removed. 
- Criterion [4.8](criteres.html#crit-4-8): link [H35](https://www.w3.org/WAI/WCAG21/Techniques/html/H35) has been removed. 
- Criterion [8.1](criteres.html#crit-8-1): links [G134](https://www.w3.org/WAI/WCAG21/Techniques/general/G134), [G192](https://www.w3.org/WAI/WCAG21/Techniques/general/G192) have been removed.
- Criterion [8.2](criteres.html#crit-8-2) links [F70](https://www.w3.org/WAI/WCAG21/Techniques/failures/F70), [F77](https://www.w3.org/WAI/WCAG21/Techniques/failures/F77), [H74](https://www.w3.org/WAI/WCAG21/Techniques/html/H74), [H93](https://www.w3.org/WAI/WCAG21/Techniques/html/H93), [H94](https://www.w3.org/WAI/WCAG21/Techniques/html/H94) have been removed.
