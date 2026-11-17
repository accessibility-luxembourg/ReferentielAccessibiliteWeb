---
title: Nom accessible de bouton
---

Le nom accessible d’un bouton informe sur l’action qui résulte de son activation (par exemple : « Lancer votre recherche », « Menu », « Suivant »). Il est déterminé selon l’ordre de priorité suivant :

1. Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
2. Sinon, contenu de l’attribut WAI-ARIA `aria-label`;
3. Sinon, contenu de l’attribut `alt` pour les éléments `<input>` avec l’attribut `type="image"` ;
4. Sinon, contenu de l’attribut `value` pour les éléments `<input>` avec l’attribut `type="submit"`, `type="reset"` ou `type="button"` ;
5. Sinon, contenu du bouton pour les éléments `<button>` ou les éléments possédant un attribut WAI-ARIA `role="button"` ;
6. Sinon, contenu de l’attribut `title`.

Référence : <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

Lorsqu’un bouton est un élément d’un formulaire, son nom accessible est évalué dans la thématique des formulaires. Dans tous les autres cas, il est évalué dans la thématique des composants interactifs.