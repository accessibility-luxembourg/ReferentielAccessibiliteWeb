---
title: Notes de révision du RAWeb 1
---

Le RAWeb 1 est le premier référentiel d’accessibilité luxembourgeois qui couvre l’ensemble des exigences de la norme européenne EN 301 549 v3.2.1 actuellement en vigueur.

Pour tous les critères compatibles WCAG, le RAWeb 1 se base sur le RGAA 4.1.2. Le RGAA est publié par la DINUM sur le site [accessibilite.numerique.gouv.fr](https://accessibilite.numerique.gouv.fr/) et les sources sont disponibles sur ce <a href="https://github.com/DISIC/accessibilite.numerique.gouv.fr/" rel="noreferrer noopener">dépôt GitHub</a>.
Le RGAA 4.1.2 dispose de ses propres [notes de révision](../rgaa4.1.2/notes-revision.html).

Tous les autres critères sont nouveaux et transcrivent sous forme de tests opérationnels les critères issus de la norme européenne EN 301 549 v3.2.1 qui ne sont pas basés sur WCAG.
Il s’agit des critères et thématiques suivantes :
- [Critère 4.14 : Pour chaque média temporel qui dispose d’une piste de sous-titres synchronisés ou d’une audiodescription, les fonctionnalités de contrôle de ces alternatives sont-elles présentées au même niveau que les fonctionnalités principales ?](criteres.html#crit-4-14)
- [Critère 4.15 : Pour chaque fonctionnalité qui transmet, convertit ou enregistre un média temporel synchronisé pré-enregistré qui possède une piste de sous-titres, à l’issue du processus, les sous-titres sont-ils correctement conservés ?](criteres.html#crit-4-15)
- [Critère 4.16 : Pour chaque fonctionnalité qui transmet, convertit ou enregistre un média temporel pré-enregistré avec une audiodescription synchronisée, à l’issue du processus, l’audiodescription est-elle correctement conservée ?](criteres.html#crit-4-16)
- [Critère 4.17 : Pour chaque média temporel pré-enregistré, la présentation des sous-titres est-elle contrôlable par l’utilisateur (hors cas particuliers) ?](criteres.html#crit-4-17)
- [Critère 4.18 : Pour chaque média temporel synchronisé pré-enregistré qui possède des sous-titres de traduction synchronisés, ceux-ci peuvent-ils être vocalisés (hors cas particuliers) ?](criteres.html#crit-4-18)
- [Critère 13.13 : Pour chaque fonctionnalité de conversion d’un document, les informations relatives à l’accessibilité disponibles dans le document source sont-elles conservées dans le document de destination (hors cas particuliers) ?](criteres.html#crit-13-13)
- [Critère 13.14 : Chaque fonctionnalité d’identification ou de contrôle qui repose sur l’utilisation de caractéristiques biologiques de l’utilisateur, dispose-t-elle d’une méthode alternative ?](criteres.html#crit-13-14)
- [Thématique 14 : Documentation et fonctionnalités d’accessibilité](criteres.html#topic-14)
- [Thématique 15 : Outils d’édition](criteres.html#topic-15)
- [Thématique 16 : Services d’assistance](criteres.html#topic-16)
- [Thématique 17 : Communication en temps réel](criteres.html#topic-17)

Les entrées de glossaire correspondant à ces nouveaux critères ont été ajoutées :
- [Aide à la création de contenus accessibles ](glossaire.html#aide-a-la-creation-de-contenus-accessibles)
- [Application web de communication orale bidirectionnelle](glossaire.html#application-web-de-communication-orale-bidirectionnelle)
- [Caractéristique biologique ](glossaire.html#caracteristique-biologique)
- [Caractéristiques essentielles des sous-titres ](glossaire.html#caracteristiques-essentielles-des-sous-titres)
- [Communication écrite en temps réel](glossaire.html#communication-ecrite-en-temps-reel)
- [Documentation](glossaire.html#documentation)
- [Fonctionnalité d’accessibilité](glossaire.html#fonctionnalite-d-accessibilite)
- [Fonctionnalités principales (d’un média temporel)](glossaire.html#fonctionnalites-principales-d-un-media-temporel)
- [Fonctionnalités vocales](glossaire.html#fonctionnalites-vocales)
- [Gabarit](glossaire.html#gabarit)
- [Horodatage (<em lang="en">time stamp</em>)](glossaire.html#horodatage-time-stamp)
- [Information d’accessibilité](glossaire.html#information-d-accessibilite)
- [Mécanisme qui permet d’activer une fonctionnalité d’accessibilité](glossaire.html#mecanisme-qui-permet-d-activer-une-fonctionnalite-d-accessibilite)
- [Outil d’édition](glossaire.html#outil-d-edition)
- [QVGA](glossaire.html#qvga)
- [Règles d’accessibilité numérique](glossaire.html#regles-d-accessibilite-numerique)
- [Service d’assistance](glossaire.html#service-d-assistance)
- [Service de relais](glossaire.html#service-de-relais)
- [Sous-titres de traduction](glossaire.html#sous-titres-de-traduction)
- [Transformation](glossaire.html#transformation)
- [Unité de saisie](glossaire.html#unite-de-saisie)

### Évolutions des contenus issus du RGAA 4.1.2

Cette mise à jour s’accompagne également d’évolutions des contenus issus du RGAA 4.1.2.

#### Introduction du principe de non-interférence

Une nouvelle section [&laquo;&nbsp;Principe de non-interférence&nbsp;&raquo;](./methodo-test.html#principe-de-non-interférence) a été introduite dans la page &laquo;&nbsp;Méthodologie de test&nbsp;&raquo; afin de se conformer pleinement à la norme EN 301 549.

De plus, chaque critère inclus dans le principe de non-interférence est identifié dans le référentiel technique par la mention &laquo;&nbsp;Ce critère est soumis au principe de non-interférence&nbsp;&raquo;.

#### Modification de la description de l’échantillon pour l’audit d’un site web

La section [&laquo;&nbsp;Échantillon pour l’audit d’un site web &nbsp;&raquo;](./methodo-test.html#Échantillon) de la page &laquo;&nbsp;Méthodologie de test&nbsp;&raquo; a été modifiée pour prendre en compte les évolutions des critères du RAWeb, notamment en introduisant l’obligation d’évaluer la documentation du site web ou du service d’assistance.

#### Précisions concernant le taux de conformité et la méthodologie générale

Dans la section [&laquo;&nbsp;Test des pages&nbsp;&raquo;](./methodo-test.html#test-des-pages) de la page &laquo;&nbsp;Méthodologie de test&nbsp;&raquo;, une note est ajoutée sur les modalités possibles de gestion des contenus communs à plusieurs pages d’un échantillon : 

<blockquote>
Certains critères ou thématiques sont applicables à l’ensemble du site et non à une page particulière, il n’est donc pas nécessaire de les évaluer sur toutes les pages de l’échantillon. Dans ce cas, ils peuvent par exemple être évalués sur une seule page de l’échantillon et être considérés comme non applicables sur toutes les autres pages. Cette méthodologie permettant de rapporter les résultats de l’évaluation de ces critères est bien entendu optionnelle. Quelle que soit la méthodologie choisie, il n’y aura pas d’impact sur le taux de conformité global du site. C’est notamment le cas pour les critères et thématiques suivantes :

- Le critère 12.3 « La page "plan du site" est-elle pertinente ? »
- La thématique « 14. Documentation et fonctionnalités d’accessibilité »
- La thématique « 16. Services d’assistance »
</blockquote>

Dans la section [&laquo;&nbsp;Taux de conformité à la norme&nbsp;&raquo;](./methodo-test.html#taux-de-conformité-à-la-norme) de la page &laquo;&nbsp;Méthodologie de test&nbsp;&raquo;, toute référence au &laquo;&nbsp;taux moyen&nbsp;&raquo; est supprimée pour ne faire référence qu’au &laquo;&nbsp;taux global&nbsp;&raquo; en tant que taux de référence, notamment pour l’établissement de la déclaration d’accessibilité.

#### Modification de l’environnement de test Ordinateur

L’[environnement de test Ordinateur](environnement.html) a été modifié afin de s’accorder avec l’évolution des navigateurs : 
- Internet Explorer a été supprimé, son support n’est plus assuré par Microsoft depuis 2022.
- Chrome et Edge ont été ajoutés. Edge remplace désormais Internet Explorer sur Microsoft Windows ; de plus, il embarque le même moteur que Chrome.

Ces choix sont également confortés par des données d’usage, notamment :
- l’enquête [WebAIM de 2023](https://webaim.org/projects/screenreadersurvey9/#browsercombos) qui identifie Chrome et Edge comme les navigateurs les plus utilisés par les personnes aveugles ou malvoyantes ; 
- l’évaluation 2023 des [parts de marché des navigateurs au Luxembourg par Statcounter GlobalStats](https://gs.statcounter.com/browser-market-share/all/luxembourg/2023).

Ainsi, il n’y a plus qu’un seul environnement de test Ordinateur avec 3 combinaisons.

#### Suppression du critère WCAG de l’analyse syntaxique

Le groupe de travail WCAG a publié une <a href="https://www.w3.org/TR/WCAG21/#parsing">mise à jour des WCAG 2.1 le 21 septembre 2023</a> indiquant que le <a href="https://www.w3.org/TR/WCAG21/#parsing">critère de succès 4.1.1 <em lng="en">Parsing</em></a> devait dorénavant être toujours considéré comme conforme.

Le RAWeb étant une transposition des WCAG 2.1, ce choix est appliqué aux critères correspondants dans le RAWeb. Ainsi, les critères [8.1](criteres.html#crit-8-1) et [8.2](criteres.html#crit-8-2) du RAWeb ne sont plus à tester et doivent toujours être considérés comme conformes. 

Les critères sont conservés dans le référentiel (pour préserver la numérotation des critères de la thématique &laquo;&nbsp;Éléments obligatoires&nbsp;&raquo;) et sont accompagnés d’une note.

#### Suppression des références à l’attribut `longdesc`

L’attribut `longdesc` en tant que méthode conforme pour les critères 1.6 et 1.7 est supprimée. En effet, l’attribut `longdesc` a été déclaré obsolète dans la spécification HTML5. De plus, le support de l’attribut est insuffisant au regard de l’environnement de test, on constate notamment une absence de support en environnement mobile (Safari/iOS et Chrome/Talkback). 

Dans le test [1.6.1](criteres.html#test-1-6-1), la condition suivante est supprimée : <q>Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](glossaire.html#description-detaillee-image)</q>. La méthodologie de test est adaptée en conséquence.

Dans la note technique du critère [1.6](criteres.html#crit-1-6), le passage concernant l’attribut `longdesc` est supprimé :
<blockquote>
L’attribut <code>longdesc</code> qui constitue une des conditions du test 1.6.1 (et dont la pertinence est vérifiée avec le test 1.7.1) est désormais considéré comme obsolète par la spécification HTML en cours. La vérification de cet attribut ne sera donc requise que pour les versions de la spécification HTML antérieure à HTML 5.
</blockquote>

Dans le test [1.7.1](criteres.html#test-1-7-1), la condition suivante est supprimée : <q>La [description détaillée](glossaire.html#description-detaillee-image) via l’adresse référencée dans l’attribut `longdesc` est pertinente</q>. La méthodologie de test est adaptée en conséquence.

Dans le glossaire, l’entrée &laquo;&nbsp;[Description détaillée (image)](glossaire.html#description-detaillee-image)&nbsp;&raquo; est modifiée. L’item <q>Un attribut `longdesc` qui contient l’adresse d’une page ou d’un emplacement dans la page contenant la description détaillée</q> est supprimé.

#### Modification du test 4.4.1

Le test [4.4.1](criteres.html#test-4-4-1) a été réécrit pour préciser les éléments de tests, jugés trop implicites.

Le test 4.4.1 dans le RGAA 4.1.2 : 

<blockquote>Test 4.4.1 : Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?</blockquote>

Il a été réécrit dans le RAWeb 1 pour y introduire 3 conditions de tests à vérifier : 

<blockquote>

- Les sous-titres sont dans la langue de la vidéo ;
- Les sous-titres sont pertinents ;
- Les sous-titres sont correctement synchronisés.

</blockquote>

### Suppression des références à des technologies obsolètes

Dans les critères, le glossaire et les méthodologies, les références à Flash, Silverlight et Java sont supprimées du fait de la disparition de ces technologies. 

Les éléments du référentiel impactés sont les suivants : 

- La méthodologie du critère [4.7](criteres.html#crit-4-7) : suppression du test <q>le passage de texte est situé à l’extérieur du lecteur de contenu multimédia si ce dernier fait appel à la technologie Flash</q>.
- L’entrée de glossaire &laquo;&nbsp;Environnement maîtrisé&nbsp;&raquo; : les références à Flash et Silverlight sont supprimées dans le second item de liste <q>Les technologies supportées, leur version et leur activation (JavaScript, WAI-ARIA, Flash, Silverlight…)</q>.
- L’entrée de glossaire &laquo;&nbsp;Média non temporel&nbsp;&raquo; : toutes les références à Flash, Java et Silverlight ainsi qu’à leurs propriétés y sont supprimées.
- L’entrée de glossaire &laquo;&nbsp;Média temporel (type son, vidéo et synchronisé) &nbsp;&raquo; : toutes les références à Flash ainsi qu’à ses propriétés y sont supprimées. La note 1 est supprimée : la note 2 devient la note 1, et la note 3 devient la note 2.

#### Ajout de nouvelles liaisons aux techniques et échecs WCAG

De nouvelles techniques et échecs WCAG sont ajoutés en correspondance de certains critères RAWeb .

- Critère [3.1](criteres.html#crit-3-1) : [F13](https://www.w3.org/WAI/WCAG21/Techniques/failures/F13)
- Critère [3.2](criteres.html#crit-3-2) : [F83](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)
- Critère [3.3](criteres.html#crit-3-3) : [G136](https://www.w3.org/WAI/WCAG21/Techniques/general/G136), [G209](https://www.w3.org/WAI/WCAG21/Techniques/general/G209)
- Critère [6.1](criteres.html#crit-6-1) : [C7](https://www.w3.org/WAI/WCAG21/Techniques/css/C7), [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211), [H33](https://www.w3.org/WAI/WCAG21/Techniques/html/H33), [H77](https://www.w3.org/WAI/WCAG21/Techniques/html/H77)
- Critère [7.1](criteres.html#crit-7-1) : [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Critère [7.5](criteres.html#crit-7-5) : [F103](https://www.w3.org/WAI/WCAG21/Techniques/failures/F103)
- Critère [8.6](criteres.html#crit-8-6) : [F25](https://www.w3.org/WAI/WCAG21/Techniques/failures/F25)
- Critère [9.2](criteres.html#crit-9-2) : [H97](https://www.w3.org/WAI/WCAG21/Techniques/html/H97), [H101](https://www.w3.org/WAI/WCAG21/Techniques/html/H101)
- Critère [10.4](criteres.html#crit-10-4) : [F94](https://www.w3.org/WAI/WCAG21/Techniques/failures/F94), [G142](https://www.w3.org/WAI/WCAG21/Techniques/general/G142), [G178](https://www.w3.org/WAI/WCAG21/Techniques/general/G178)
- Critère [10.7](criteres.html#crit-10-7) : [C40](https://www.w3.org/WAI/WCAG21/Techniques/css/C40).
- Critère [10.11](criteres.html#crit-10-11) : [C31](https://www.w3.org/WAI/WCAG21/Techniques/css/C31), [C32](https://www.w3.org/WAI/WCAG21/Techniques/css/C32), [C33](https://www.w3.org/WAI/WCAG21/Techniques/css/C33), [C38](https://www.w3.org/WAI/WCAG21/Techniques/css/C38), [F102](https://www.w3.org/WAI/WCAG21/Techniques/failures/F102), [G206](https://www.w3.org/WAI/WCAG21/Techniques/general/G206)
- Critère [10.12](criteres.html#crit-10-12) : [F104](https://www.w3.org/WAI/WCAG21/Techniques/failures/F104)
- Critère [10.13](criteres.html#crit-10-13) : [SCR39](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR39)
- Critère [11.1](criteres.html#crit-11-1) : [G167](https://www.w3.org/WAI/WCAG21/Techniques/general/G167)
- Critère [11.2](criteres.html#crit-11-2) : [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Critère [11.9](criteres.html#crit-11-9) : [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Critère [11.10](criteres.html#crit-11-10) : [G139](https://www.w3.org/WAI/WCAG21/Techniques/general/G139)
- Critère [11.13](criteres.html#crit-11-13) : [F107](https://www.w3.org/WAI/WCAG21/Techniques/failures/F107)
- Critère [12.1](criteres.html#crit-12-1) : [G185](https://www.w3.org/WAI/WCAG21/Techniques/general/G185)
- Critère [13.9](criteres.html#crit-13-9) : [F97](https://www.w3.org/WAI/WCAG21/Techniques/failures/F97), [F100](https://www.w3.org/WAI/WCAG21/Techniques/failures/F100), [G214](https://www.w3.org/WAI/WCAG21/Techniques/general/G214)
- Critère [13.10](criteres.html#crit-13-10) : [F105](https://www.w3.org/WAI/WCAG21/Techniques/failures/F105)
- Critère [13.11](criteres.html#crit-13-11) : [F101](https://www.w3.org/WAI/WCAG21/Techniques/failures/F101), [G210](https://www.w3.org/WAI/WCAG21/Techniques/general/G210), [G212](https://www.w3.org/WAI/WCAG21/Techniques/general/G212)
- Critère [13.12](criteres.html#crit-13-12) : [F106](https://www.w3.org/WAI/WCAG21/Techniques/failures/F106), [G213](https://www.w3.org/WAI/WCAG21/Techniques/general/G213)

D’autres techniques et échecs ont été supprimés.
- Critère [1.2](criteres.html#crit-1-2) : suppression de la liaison [ARIA10](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10). 
- Critère [1.6](criteres.html#crit-1-6) : suppression de la liaison [H45](https://www.w3.org/WAI/WCAG21/Techniques/html/H45). 
- Critère [4.8](criteres.html#crit-4-8) : suppression de la liaison [H35](https://www.w3.org/WAI/WCAG21/Techniques/html/H35). 
- Critère [8.1](criteres.html#crit-8-1) : suppression des liaisons [G134](https://www.w3.org/WAI/WCAG21/Techniques/general/G134), [G192](https://www.w3.org/WAI/WCAG21/Techniques/general/G192).
- Critère [8.2](criteres.html#crit-8-2) : suppression des liaisons [F70](https://www.w3.org/WAI/WCAG21/Techniques/failures/F70), [F77](https://www.w3.org/WAI/WCAG21/Techniques/failures/F77), [H74](https://www.w3.org/WAI/WCAG21/Techniques/html/H74), [H93](https://www.w3.org/WAI/WCAG21/Techniques/html/H93), [H94](https://www.w3.org/WAI/WCAG21/Techniques/html/H94).
