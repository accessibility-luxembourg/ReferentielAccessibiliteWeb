---
WCAG: 4.1.2
EN301549-V4: 9.4.1.2
RAWEB1.1: 
  - 11.1.1[C1]
  - 11.1.1[C2]
  - 11.1.1[C3]
  - 11.1.1[C4]
  - 11.1.2
Techniques:
  - ARIA14
  - ARIA16
  - H44
  - H65
  - H91
  - F68
  - F86
  - F111
ACT: 
  - 11
---

#### Notes techniques

Lorsque le nom accessible d’un champ est fourni par un contenu possédant un ou plusieurs éléments non textuels porteurs d’informations (par exemple, image `<img>` ou `<svg>`), la présence et la pertinence du nom accessible sont conditionnées par la présence et la pertinence du nom accessible de ces éléments. Dans ces cas, se reporter aux critères de la thématique Images pour déterminer les tests à réaliser. Les erreurs relatives à des images porteuses d’informations contenues dans des noms accessibles de champs de formulaires sont à évaluer dans la thématique « Formulaires ».

La liaison de plusieurs éléments `<label>` à un même champ de formulaire n’est pas problématique sur presque l’ensemble de l’environnement de tests, c’est la concaténation des textes des différents labels reliés qui constitue le nom accessible. Cette implémentation est toutefois à éviter pour les éléments `<select>` pour lesquels des défauts de restitution ont été constatés avec certaines combinaisons de l’environnement de test.