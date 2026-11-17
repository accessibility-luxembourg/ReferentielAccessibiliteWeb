---
EN301549-V4: 9.2.4.11
WCAG: 2.4.11
RAWEB1.1: N/A
Techniques:
  - C43
  - F110
---

#### Notes techniques

##### Note 1

Lorsqu’un contenu d’une interface configurable peut être repositionné par l’utilisateur, alors seules les positions initiales du contenu déplaçable sont prises en compte.

Par exemple, un composant qui peut être déplacé par un glissé, depuis sa position initiale vers une autre position choisie par l’utilisateur sur la page, alors seule sa position initiale (définie par l’auteur) doit être évaluée.

##### Note 2

Il arrive que du contenu ouvert par l’utilisateur masque le composant qui reçoit le focus. Si l’utilisateur peut révéler le composant ayant le focus sans déplacer le focus du clavier, alors le composant ayant le focus n’est pas considéré comme masqué par du contenu créé par l’auteur et donc le critère ne s’applique pas.

Par exemple : 

- la touche `ESC` qui permet à l’utilisateur de masquer le contenu qui recouvre le composant qui a le focus du clavier ; 
- les flèches de navigation qui permettent de faire défiler les éléments de la page et rendre visible le composant qui a le focus du clavier ; 
- ou encore l’utilisation de touches permettant de mettre au premier plan le contenu où est localisé le focus du clavier.

##### Note 3

Ce critère évalue la visibilité du composant et non celle de l’indicateur de focus (sauf si celui-ci est intégré à l’intérieur du composant, ou que l’indicateur de focus soit une modification visuelle du composant).

Le cas d’un composant recouvert par un contenu semi-transparent ou flouté est considéré partielement visible et n’est pas couvert par ce critère.