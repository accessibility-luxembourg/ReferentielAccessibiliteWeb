---
title: Nom accessible de champ de formulaire
RAWEB1.1: etiquette-de-champ-de-formulaire
---

Le nom accessible d’un champ de formulaire transmet la nature des informations devant être saisies. Il est déterminé selon l’ordre de priorité suivant :

1. Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
2. Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
3. Sinon, contenu du ou des éléments `<label>` associés au champ (labels englobants ou reliés par l’attribut `for` dont la valeur correspond à l’`id` du champ) ;
4. Sinon, contenu de l’attribut `title`.

Référence : <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.
