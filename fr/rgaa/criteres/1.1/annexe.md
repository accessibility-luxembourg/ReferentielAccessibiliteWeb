---
EN301549-V4: 9.1.1.1
WCAG: 1.1.1
Techniques:
  - C9
  - F38
  - F39
  - G196
  - H67
ACT: 1
---

#### Notes techniques

1. Lorsqu’une image est associée à une légende, la note technique des WCAG recommande de prévoir systématiquement un [nom accessible](#nom-accessible-d-image) (cf. {% crit 1.8 %}). Dans ce cas le critère 1.1 est non applicable.
2. Si une image se trouve imbriquée dans un élément possédant un attribut `aria-hidden="true"`, alors elle sera considérée comme étant masquée pour les technologies d’assistance.
3. Dans le cas d’une image vectorielle (élément `<svg>`) de décoration qui serait affichée au travers d’un élément `<use href="…">` enfant de l’élément `<svg>`, le test 1.2.4 s’appliquera également à l’élément `<svg>` associé par le biais de l’élément `<use>`.
4. En raison du mauvais support de certains lecteurs d’écrans, si un élément `<img>` possédant un attribut `alt` vide se trouve dans un élément `<figure>`, il est recommandé d’ajouter sur l’élément `<img>` un attribut WAI-ARIA `aria-hidden="true"`, un `role="presentation"` ou un `role="none"`.