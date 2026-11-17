---
title: Nom accessible de lien
RAWEB1.1: intitule-ou-nom-accessible-de-lien
---

Le nom accessible d’un lien informe sur la fonction et la destination du lien. 

Dans le cas d’un lien HTML, il est déterminé selon l’ordre de priorité suivant :

1. Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
2. Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
3. Sinon, contenu du lien ;
4. Sinon, contenu de l’attribut `title`.

Référence : <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

Dans le cas où le nom accessible est obtenu à partir du contenu du lien, celui-ci sera variable en fonction des cas suivants :

- Pour un lien texte : le nom accessible correspond au texte contenu dans le lien et dans ses éléments enfants.
- Pour un lien image : le nom accessible correspond au nom accessible d’une ou plusieurs images dans le lien. Ces images peuvent être du type :
	- Image (élément `<img>` ou balise ouvrante ayant l’attribut WAI-ARIA `role="img"`) ;
	- Image objet (élément `<object>`) ;
	- Image bitmap (élément `<canvas>`) ;
	- Image vectorielle (élément `<svg>`).
- Pour un lien composite : le nom accessible correspond à la concaténation :
	- du texte contenu dans le lien et dans ses éléments enfants ;
	- du nom accessible de la ou des images comprises dans le lien.

Dans le cas d’un [lien SVG](#lien-svg) (version 1.1), le nom accessible  est déterminé selon l’ordre de priorité suivant :

- Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
- Sinon, contenu de l’élément `<title>` enfant direct du lien ;
- Sinon, contenu de l’attribut `xlink:title` ;
- Sinon, contenu texte d’un ou plusieurs éléments `<text>`.
