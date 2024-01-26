---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - ARIA11
  - G115
  - H97
  - H101
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Cas particuliers

Lorsque le doctype déclaré dans la page n’est pas le doctype HTML5, ce critère est non applicable.

#### Notes techniques

La balise `<main>` peut être utilisée plusieurs fois dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’une seule balise visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut `hidden` ou d’un style permettant de les masquer aux technologies d’assistances. À noter cependant que l’utilisation d’un style seul restera insuffisante pour assurer l’unicité d’une balise `<main>` visible en cas de désactivation des feuilles de styles.
