---
EN301549-V4: 9.2.2.2
WCAG: 2.2.2
RAWEB1.1: 13.8
Techniques:
  - F7
  - F16
  - F50
  - F112
  - G4
  - G11
  - G152
  - G186
  - G191
  - SCR22
  - SCR33
---

#### Cas particuliers

Le critère ne s’applique pas lorsque le mouvement, le clignotement ou le défilement :

- a une durée inférieure ou égale à 5 secondes ; 
- concerne un contenu qui n’est pas présenté en parallèle d’autres contenus (par exemple, une publicité animée présentée en plein écran pendant 15 secondes, sans contenus présentés en parallèle) ;
- est un élément [essentiel](#essentiel) au bon déroulement ou à la compréhension d’une fonctionnalité ;
- fait partie intégrante du composant et il n’est pas possible d’en donner le contrôle à l’utilisateur, par exemple une barre de progression (ou <em lang="en">loader</em>) dont la fonction est d’indiquer par un mouvement la progression d’un évènement comme un téléchargement.

#### Notes techniques

Ce critère est soumis au [principe de non-interférence](./methodo-test.html#principe-de-non-interférence).

Si un clignotement se produit à une fréquence supérieure à 3 fois par seconde, il est considéré comme un flash, le {% crit 13.4 %} est alors également concerné.

L’arrêt ou la mise en pause d’un contenu en mouvement ou clignotant au moyen du survol ou de la prise de focus (par exemple, l’effet est suspendu uniquement pendant la prise de focus) n’est pas considéré comme un procédé conforme. 

Le déclenchement automatique au survol ou à la prise de focus est concerné par le critère.