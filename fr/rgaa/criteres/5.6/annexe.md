---
EN301549-V4: 9.1.3.1
WCAG: 1.3.1
RAWEB1.1: 5.7
Techniques:
  - F90
  - H43
  - H63
ACT: 12
---

#### Cas particuliers


Le critère ne s’applique pas aux tableaux dont les en-têtes sont répartis uniquement sur la première ligne ou sur la première colonne.

#### Notes techniques

Si l’attribut `headers` est implémenté sur une cellule déjà reliée à un en-tête (de ligne ou de colonne) avec l’attribut `scope` (avec la valeur `col` ou `row`), c’est l’en-tête ou les en-têtes référencés par l’attribut `headers` qui seront restitués aux technologies d’assistance. Les en-têtes reliés avec l’attribut `scope` seront ignorés.

Si les en-têtes sont décalés d’une ou plusieurs lignes ou colonnes, et même s’ils sont répartis sur une seule ligne ou colonne, l’attribut `scope` est indispensable pour garantir leur restitution par les technologies d’assistance.
