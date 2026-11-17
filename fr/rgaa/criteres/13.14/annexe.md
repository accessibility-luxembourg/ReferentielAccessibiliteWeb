---
EN301549-V4: 9.1.1.1
WCAG: 1.1.1
RAWEB1.1: 13.5
Techniques:
  - F71
  - G135
  - H86
---

#### Cas particuliers 

Le critère ne s’applique aux contenus cryptiques porteurs d’information déjà identifié comme image à l’aide d’un attribut WAI-ARIA `role="img"`. Ces contenus sont évalués aux critères 1.1 et 1.3.

#### Notes techniques

Si un contenu cryptique (décoratif ou porteur d’information) est imbriqué dans un élément possédant un attribut WAI-ARIA `aria-hidden="true"`, quel que soit le niveau d’imbrication, alors il sera considéré comme étant masqué pour les technologies d’assistance.

Du fait du faible support de l’élément `<abbr>` et de l’attribut `title`, la mise à disposition de la signification d’un contenu cryptique avec cette implémentation ne permet pas de rendre le critère conforme.