---
title: Méthodologie de test
layout: layouts/base.njk
description: Méthodologie de tests documentant les étapes permettant de vérifier si un critère du RAWeb est conforme ou non
eleventyNavigation:
  title: Ressources
  parent: ressources
  order: 3
---

Ce document a été établi dans le cadre des ressources venant accompagner la prise en main de la version 1 du référentiel d’évaluation de l’accessibilité web (RAWeb).

Il est destiné à toute personne soucieuse de vérifier la conformité d’un contenu web au RAWeb. Il s’agit d’une méthodologie de tests documentant les étapes permettant de vérifier si un critère du RAWeb est conforme ou non. Cette méthodologie est donc à utiliser en complément du référentiel technique du RAWeb et ne peut être utilisée seule. Elle ne dispense donc pas d’une lecture approfondie du référentiel technique, ni d’une formation au RAWeb.

Pour chacun des tests d’un critère correspond une procédure de test. La mise en œuvre de cette procédure peut recourir parfois l’usage d’outils spécifiques, autrement un navigateur suffit pour effectuer la majorité des tests.
Une liste d’outils est aussi proposée pour aider à la réalisation des tests. Ils ont été retenus à la fois parce qu’ils sont fréquemment utilisés par les experts du métier et parce qu’ils facilitent la recherche de certains résultats.

<div class="fr-callout"><p class="fr-text--lg">
La méthodologie de test est désormais disponible au niveau de chaque test sur la page <a href="criteres.html">critères et tests</a>.</p>
</div>

### Évaluation de la conformité à la norme de référence

#### Cadre général

Afin d’évaluer la conformité du site avec la norme de référence, l’organisme doit conduire un audit d’accessibilité. L’audit (ou évaluation) peut être effectué par l’organisme lui-même (auto-évaluation) ou par un tiers. L’évaluation est réalisée sur un échantillon de pages représentatif du site. 

La vérification de la conformité des pages de l’échantillon avec les critères applicables s’effectue à l’aide du [référentiel d’évaluation de l’accessibilité web (RAWeb)](./index.html).  

La phase finale de l’audit est la déclaration d’accessibilité qui rend compte de la conformité avec les règles applicables.

L’audit (ou évaluation) répond aux critères suivants&nbsp;:

- il est fiable&nbsp;: il revient à l’organisme concerné de veiller à la fiabilité de sa déclaration par tous moyens (recours à un prestataire externe, formation d’experts internes, audits croisés…)&nbsp;;
- il est représentatif&nbsp;: il porte sur un échantillon représentatif (cf. section «&nbsp;Échantillon&nbsp;» ci-dessous).

Il est possible de recourir à une autre méthode de tests, à une triple condition&nbsp;:

- s’assurer que la méthode de test utilisée est communicable sur demande à un utilisateur ou à une administration&nbsp;;
- produire une table de correspondance explicite entre les critères et tests et la norme de référence choisie&nbsp;;
- l’indiquer dans la déclaration d’accessibilité.

#### Échantillon

L’échantillon sur lequel est réalisé l’audit d’un site web porte au moins sur les pages suivantes, lorsqu’elles existent :
 
1. la page d’accueil&nbsp;;
1. les mentions légales&nbsp;;
1. la page d’authentification&nbsp;;
1. la page de contact&nbsp;;
1. la page «&nbsp;accessibilité&nbsp;»&nbsp;;
1. la page «&nbsp;aide&nbsp;»&nbsp;;
1. la page ou un ensemble de pages constituant la [documentation](./glossaire.html#documentation) du site web (si elles sont différentes de la page «&nbsp;accessibilité&nbsp;» et de la page «&nbsp;aide&nbsp;»)&nbsp;;
1. la page ou un ensemble de pages constituant la [documentation](./glossaire.html#documentation) du [service d’assistance](./glossaire.html#service-d-assistance)&nbsp;;
1. la page «&nbsp;plan du site&nbsp;»&nbsp;;
1. au moins une page pertinente pour chaque type de service fourni et toute autre utilisation principale prévue (ex.&nbsp;: rubriques de 1er niveau dans l’arborescence), y compris la fonctionnalité de recherche&nbsp;;
1. une page contenant au moins un document téléchargeable pertinent, le cas échéant, pour chaque type de service fourni et pour toute autre utilisation principalement prévue&nbsp;;
1. l’ensemble des pages constituant un processus (par exemple, un formulaire de saisie ou une transaction sur plusieurs pages)&nbsp;;
1. des exemples de pages ayant un aspect sensiblement distinct ou présentant un type de contenu différent (ex.&nbsp;: page contenant des tableaux de données, des éléments multimédia, des illustrations, des formulaires, une fonctionnalité de communication en temps réel, etc.).

La sélection des pages auditées ainsi que leur nombre doivent être représentatifs du site. Les statistiques de consultation peuvent notamment être prises en compte lors de la constitution de l’échantillon.

Enfin, s’ajoutent des pages sélectionnées au hasard représentant au moins 10 % des éléments de l’échantillon décrit supra.


#### Environnement de test (ou «&nbsp;base de référence&nbsp;»)

Quelques [critères RAWeb](./criteres.html), notamment ceux de la thématique Scripts, incluent des tests de restitution à effectuer sur des technologies d’assistance associées à des navigateurs et des systèmes d’exploitation.

##### Définition de l’environnement de test

Pour valider ces critères, il convient de définir un environnement de test (ou «&nbsp;base de référence&nbsp;»). Par défaut, il est composé des plateformes et technologies d’assistance majoritairement utilisées par les personnes en situation de handicap. 

Pour réaliser les tests d’évaluation dans le cadre du RAWeb, il est nécessaire de prendre en compte l’[environnement de test du RAWeb](./environnement.md).

Cet environnement de test minimal peut être complété, le cas échéant, par des solutions libres et gratuites disponibles ou par des technologies plus anciennes, en fonction de l’usage du site. Lorsqu’il est possible de connaître la configuration des postes de travail, ainsi que le matériel utilisé, la base de référence est alors constituée des services réellement utilisés dans cet environnement.

#### Test des pages

Chaque page de l’échantillon doit être vérifié au regard des critères qui lui sont applicables.

Il existe 3 raisons pour qu’un critère ne soit pas applicable à une page&nbsp;:

  1. Le critère concerne un contenu ou une fonctionnalité qui n’existe pas, par exemple si la page ne comporte pas de vidéo, les critères liés aux vidéos ne seront pas applicables.
  2. Le critère concerne un contenu ou un service exempté qui n’est donc pas soumis à l’obligation d’accessibilité.
  3. Le critère concerne un contenu soumis à dérogation pour charge disproportionnée qui est accompagné d’une alternative numérique accessible. Par exemple, un tableau statistique avec des graphiques qui propose une alternative numérique en texte. Dans ce cas les critères applicables au contenu soumis à dérogation seront non applicables. 
      À noter : si le contenu soumis à dérogation pour charge disproportionnée ne propose pas d’alternative numérique accessible, les critères concernant ce contenu sont considérés comme applicables.

Les pages sont ensuite testées au regard des critères applicables. Ces tests permettent d’obtenir&nbsp;:

  * le nombre de critères validés et non validés pour chaque page
  * le taux de conformité de chaque page.

À noter : 

  * un critère est validé pour une page donnée lorsque tous les éléments de la page ont passé avec succès les tests permettant de valider le critère&nbsp;;
  * dès lors qu’un seul élément de la page  ne valide pas les tests d’un critère, le critère ne peut être validé&nbsp;;
  * si la page fait partie d’un processus (faire une déclaration, participer à une consultation publique, prendre un rendez-vous), un critère est validé pour une page du processus uniquement s’il est validé pour toutes les pages du processus.

Certains critères ou thématiques sont applicables à l’ensemble du site et non à une page particulière, il n’est donc pas nécessaire de les évaluer sur toutes les pages de l’échantillon. Dans ce cas, ils peuvent par exemple être évalués sur une seule page de l’échantillon et être considérés comme non applicables sur toutes les autres pages. Cette méthodologie permettant de rapporter les résultats de l’évaluation de ces critères est bien entendu optionnelle. Quelle que soit la méthodologie choisie, il n’y aura pas d’impact sur le taux de conformité global du site. C’est notamment le cas pour les critères et thématiques suivantes&nbsp;:
  * Le critère 12.3 &laquo;&nbsp;La page "plan du site" est-elle pertinente ?&nbsp;&raquo; 
  * La thématique &laquo;&nbsp;14. Documentation et fonctionnalités d’accessibilité&nbsp;&raquo; 
  * La thématique &laquo;&nbsp;16. Services d’assistance&nbsp;&raquo;

#### Taux de conformité à la norme

Le taux de conformité permet de mesurer les progrès du service en ligne eu égard à la conformité aux exigences d’accessibilité. 

Ce taux indique le pourcentage de critères respectés du service en ligne.

Le pourcentage de critères respectés s’obtient en divisant le nombre de critères validés par le nombre de critères applicables.

  * Critère validé : un critère est validé s’il est validé sur toutes les pages de l’échantillon. Si un critère est invalidé sur une seule page de l’échantillon, il ne pourra pas être considéré comme valide pour le calcul du taux.
  * Critère applicable : pour qu’un critère soit applicable, il suffit qu’il le soit sur une seule page de l’échantillon. Ce qui a pour corollaire qu’un critère est non applicable s’il est non applicable sur toutes les pages de l’échantillon sans exception.

Ce taux de conformité détermine l’état de conformité à mentionner dans la [déclaration d’accessibilité](../obligations.md#contenu-de-la-déclaration-daccessibilité).

#### Principe de non-interférence

Dans un échantillon d’audit, il peut y avoir des contenus qui ne sont pas soumis à l’obligation de mise en accessibilité&nbsp;:

- les [contenus exemptés](../obligations.md#contenus-exemptés)&nbsp;;
- les [contenus dérogés pour charge disproportionnée](../obligations.md#dérogation-pour-charge-disproportionnée)&nbsp;;
- les contenus non accessibles qui disposent d’une alternative accessible.

Il est indispensable de s’assurer que ces contenus n’empêchent pas les utilisateurs d’accéder au reste de la page.

Ainsi, bien que la conformité de ces contenus ne soit pas requise, il reste obligatoire qu’ils se conforment aux critères et tests suivants&nbsp;:

- [Critère 4.10](criteres.html#crit-4-10) : Chaque son déclenché automatiquement est-il contrôlable par l’utilisateur&nbsp;?
- [Critère 12.9](criteres.html#crit-12-9) : Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée&nbsp;?
- [Test 13.1.1](criteres.html#test-13-1-1) : Pour chaque page web, chaque procédé de rafraîchissement (balise `<object>`, balise `<embed>`, balise `<svg>`, balise `<canvas>`, balise `<meta>`) vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;?
- [Critère 13.7](criteres.html#crit-13-7) : Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés&nbsp;?
- [Critère 13.8](criteres.html#crit-13-8) : Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l’utilisateur&nbsp;?

Le non-respect de l’un de ces critères ou tests pour l’un des types de contenus énumérés rend le ou les critères correspondants non conformes.

Le principe de non-interférence est identifié dans la norme EN 301 549 au critère 9.6 WCAG <span lang="en">conformance requirements</span>.

### Outils

L’outil le plus utile reste l’inspecteur de code que propose chaque navigateur. Il permet de rechercher facilement les éléments et les attributs requis pour un examen par un test d’accessibilité. Désormais, les outils de développement proposent également des fonctionnalités permettant d’avoir accès aux propriétés de l’arbre d’accessibilité exposé par le navigateur. Ces informations ne remplacent cependant pas la nécessité d’avoir recours à une assistance technique lorsqu’un critère ou un test l’exige.

Les aides techniques listées dans l’environnement de test retenu constituent un second ensemble d’outils indispensables (voir la rubrique [Environnement de test](environnement.html/#contenu)). Ils sont, en effet, requis pour s’assurer d’une restitution correcte de contenus accessibles (les alternatives aux images, les intitulés de lien, les titres de tableau, ...) dans le cas notamment où l’examen du code seul ne suffirait pas.

D’autres outils sont disponibles pour aider à la recherche des éléments de contenu. Ils se présentent souvent comme des extensions au navigateur et permettent d’explorer un ou plusieurs aspects d’un test d’accessibilité.

Les barres d’outils suivantes sont des extensions de navigateur qui vont faciliter le repérage visuel de certains éléments dans un document :

- [Web Developer Toolbar pour Firefox](https://addons.mozilla.org/fr/firefox/addon/web-developer/) : barre d’outils pour les développeurs qui peut aider à retrouver visuellement certains éléments dans un document pour en contrôler l’accessibilité ;
- [Web Developer Toolbar pour Chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=fr) : la même barre d’outils que précédemment, pour Chrome.

Au-delà de la simple barre d’outil, d’autres outils fournissent une analyse complète du document en signalant visuellement sur la page les erreurs d’accessibilité ou à l’inverse les éléments qui lui sont bénéfiques. Des filtres permettent alors souvent de n’afficher que certains de ces aspects. C’est ce que propose Wave, une solution disponible à la fois en ligne (http://wave.webaim.org) et comme extension de navigateur (https://wave.webaim.org/extension/).

Bien qu’il ne soit plus requis de contrôler la validité du code source, il peut être utile, à des fins de recherches d’anomalies, d'utiliser le validateur HTML. La validation du code source d’un document HTML utilise le validateur en ligne du W3C (https://validator.w3.org/nu/). À noter que pour valider le code source généré par le navigateur, il faut utiliser l’option "Text input" de la liste de sélection intitulé "Check by" et copier dans la zone de saisie multiligne qui est alors proposée, la source HTML disponible à partir de l’inspecteur de code du navigateur.
Des extensions de navigateur sont aussi disponibles, mais il faut être vigilant, car les algorithmes de validation de ces extensions ne sont pas forcément à jour par rapport au validateur du W3C et les résultats obtenus peuvent donc être différents.

La vérification des contrastes de couleurs bénéficie de différents outils :

- [WCAG Contrast checker pour Firefox](https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/) : extension Firefox qui permet un contrôle automatique des contrastes de couleurs des textes d’un document ;
- [WCAG Contrast checker pour Chrome](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf) :  même extension que la précédente pour Chrome ;
- [Color Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/) : Application Windows ou Mac qui permet de contrôler des contrastes de couleurs.

La vérification de l’arborescence du document et de la hiérarchie des titres dispose d’une extension très utile :

- [HeadingsMap pour Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) : extension Firefox qui permet de donner un aperçu du plan du document et de son arborescence ;
- [HeadingsMap pour Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) : même extension que la précédente pour Chrome.

L’analyse des fichiers bureautiques peut être réalisée au moyen de différents outils en fonction du format du fichier :

- [PAC (PDF Accessibility Checker) 2024 pour Windows](https://pac.pdf-accessibility.org/en) : logiciel qui permet de contrôler certains points d’accessibilité des documents PDF ;
- Les versions récentes des outils bureautiques de Microsoft offrent une fonctionnalité intégrée de validation de l’accessibilité (voir l’article [Rendre vos documents Word accessibles aux personnes atteintes d’un handicap](https://support.microsoft.com/fr-fr/office/rendre-vos-documents-word-accessibles-aux-personnes-atteintes-d-un-handicap-d9bf3683-87ac-47ea-b91a-78dcacb3c66d) et les articles associés) ;
- [Ace by DAISY App](https://inclusivepublishing.org/toolbox/ace-by-daisy-app/) est un utilitaire pour vérifier l’accessibilité d’un fichier EPUB.

Enfin, un logiciel ancien mais toujours utile pour évaluer la potentialité de certains contenus web à causer des crises d’épilepsie : [PEAT (Photosensitive Epilepsy Analysis Tool) pour Windows](https://trace.umd.edu/peat).
