---
title: Rôle calculé
---

Le rôle ARIA d’un élément peut être calculé de deux façons : 

- sur la base du rôle implicite de l’élément. Par exemple, l’élément `<header>` a le rôle implicite de `banner`, l’élément `<button>` a le rôle implicite de `button`, etc. 
- sur la base du rôle explicite donné par la valeur de l’attribut WAI-ARIA `role` sur la balise ouvrante : `<div role="banner">`.

Lorsque le référentiel indique qu’un élément « a le rôle calculé de », ce peut être du fait d’un rôle implicite ou explicite.

Par exemple : « L’élément a un rôle calculé de `button` » indique que l’élément peut-être un élément HTML5 `<button>` ou tout autre élément possédant l’attribut WAI-ARIA `role="button"`. À l’inverse, s’il est indiqué « L’élément est pourvu d’un attribut WAI-ARIA `role="button"` », alors c’est bien l’attribut `role` uniquement qui est attendu.

L’application d’un `role="presentation"` sur un élément HTML qui a une sémantique native (par exemple, `ul` qui a un rôle calcule de `list`) a pour effet de supprimer le rôle sémantique de l’élément. L’élément n’a alors plus de rôle calculé.

Voir également [Landmarks](#landmarks).

Voir la documentation : [Implicit WAI-ARIA semantics](https://www.w3.org/TR/wai-aria-1.2/#implicit_semantics).
