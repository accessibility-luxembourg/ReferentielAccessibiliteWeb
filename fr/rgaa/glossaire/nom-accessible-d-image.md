---
title: Nom accessible d’image
RAWEB1.1: alternative-textuelle-image
---

Le nom accessible d’une image constitue une alternative textuelle à l’information transmise visuellement par l’image. Il est déterminé selon l’ordre de priorité suivant :

1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` pour les éléments :
	- `<img>` ;
	- `<area>` ;
	- `<svg>` ;
	- `<object type="image/…">` ;
	- `<embed type="image/…">` ;
	- `<canvas>` ;
	- éléments possédant un attribut WAI-ARIA `role="img"`.
2. Sinon, contenu de l’attribut WAI-ARIA `aria-label` pour les éléments :
	 - `<img>` ;
	 - `<area>` ;
	 - `<svg>` ;
	 - `<object type="image/…">` ;
	 - `<embed type="image/…">` ;
	 - `<canvas>` ;
	 - éléments possédant un attribut WAI-ARIA `role="img"`.
3. Sinon, contenu de l’attribut `alt` pour les éléments :
	 - `<img>` ;
	 - `<area>` ;
4. Sinon, contenu de l’attribut `title` pour les éléments :
	 - `<img>` ;
	 - `<area>` ;
	 - `<svg>` ;
	 - `<object type="image/…">` ;
	 - `<embed type="image/…">`.
5. Sinon, contenu de l’élément `<title>` pour l’élément `<svg>` ;
6. Sinon, contenu du ou des éléments `<text>` pour l’élément `<svg>`.

Remarque : en cas de support partiel de l’algorithme de calcul du nom accessible, c’est la valeur réellement restituée par les technologies d’assistance utilisées dans l’environnement de test qu’il faudra considérer comme nom accessible.

Par exemple : en cas de présence conjointe d’un attribut WAI-ARIA `aria-label` et d’un attribut `alt` sur un élément `<img>`, c’est le contenu de l’attribut WAI-ARIA `aria-label` qui doit être considéré comme nom accessible si le contenu de l’attribut WAI-ARIA `aria-label` est réellement restitué par les technologies d’assistance de l’environnement de test.

Référence : <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

Pour une image porteuse d’information, le nom accessible apporte l’information nécessaire à la compréhension du contenu qu’elle véhicule.

Note 1 : pour une image CAPTCHA ou une image-test, le nom accessible décrit seulement la nature et la fonction de l’image. En effet, il ne peut apporter l’information véhiculée par l’image sans rendre la fonction associée inopérante. Il peut être, par exemple : « Code de sécurité anti-spam » ou « code pour vérifier que vous êtes un humain » ou tout autre nom accessible permettant à l’utilisateur de comprendre la nature et la fonction de l’image

Note 2 : pour un groupe d’images, par exemple un système de vote constitué de plusieurs images d’étoile, il est fortement conseillé d’utiliser soit la première image du groupe pour donner un nom accessible cohérent au groupe d’images (voir [la technique WCAG G196](https://www.w3.org/WAI/WCAG22/Techniques/general/G196)), soit un élément conteneur pourvu d’un rôle WAI-ARIA `img` et d’un nom accessible. Dans le premier cas, les autres images du groupe sont considérées comme des images de décoration. Dans le second cas, toutes les images du groupe sont considérées comme des images de décoration.

Note 3 : pour les image-lien, le nom accessible doit permettre de comprendre la fonction et la destination du lien ; ce cas est traité dans la thématique liens.

Note 4 : pour les images vectorielles (élément `<svg>`) le nom accessible pourrait se trouver aussi présent dans un élément `<text>` que ce dernier soit ou non, même si ce n’est pas le rôle dévolu à cet élément en SVG.

Note 5 : bien que l’attribut `title` soit considéré comme une possibilité de nom accessible d’image, son usage peut poser problème, notamment lorsqu’une image a également un attribut `alt` vide ou sans valeur définie. Il faut s’assurer que les technologies d’assistance définies dans l’environnement de test retenu restituent correctement le nom accessible proposé par l’attribut `title`.
