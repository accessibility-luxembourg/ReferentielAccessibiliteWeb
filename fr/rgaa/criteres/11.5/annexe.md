---
WCAG: 3.3.2
EN301549-V4: 9.3.3.2
RAWEB1.1: 11.4
Techniques:
  - G162
---

#### Cas particuliers

Les tests 11.5.2 et 11.5.3 ne s’appliquent pas lorsque :

- l’intitulé visible mélange une portion de texte qui se lit de droite à gauche avec une portion de texte qui se lit de gauche à droite ;
- un formulaire contient des labels de plusieurs langues qui se liraient de droite à gauche et inversement. Par exemple, un formulaire de commande en arabe qui propose une liste de cases à cocher de produit en langue française ou mixant des produits en langue arabe ou en langue française ;
- des champs de type `radio` ou `checkbox` et des éléments ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"` ne sont pas visuellement présentés sous forme de bouton radio ou de case à cocher ;
- les champs sont utilisés dans un contexte où il peut être légitime, du point de vue de l’expérience utilisateur, de placer les intitulés visibles de manière différente à celle requise dans les tests.