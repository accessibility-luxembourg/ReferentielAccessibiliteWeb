---
EN301549-V4: 9.1.1.1
WCAG: 1.1.1
Techniques:
  - ARIA6
  - ARIA15
  - G92
  - G74
  - G73
---

#### Notes techniques

Dans le cas du SVG, le manque de support de l’élément `<desc>` ne permet pas son utilisation pour l’implémentation d’une description détaillée.

L’utilisation de l’attribut WAI-ARIA `aria-describedby` n’est pas recommandée pour lier une image à sa description détaillée, par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id` de la zone contenant la description détaillée.

La description détaillée adjacente peut être implémentée via un élément `<figcaption>`, dans ce cas le {% crit 1.8 %} doit être vérifié.
