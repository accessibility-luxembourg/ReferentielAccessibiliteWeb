---
title: Uniquement à des fins de présentation
---

Utilisation de éléments HTML pour une finalité différente de celle prévue dans les spécifications (au regard du type de document déclaré). Exemples : utilisation des éléments `h` à seule fin de créer un effet typographique ; utilisation de l’a ’élément `<blockquote>` à seule fin de mettre un paragraphe en retrait, etc.

L’utilisation d’éléments `<div>` ou `<span>` ou plusieurs `<br>` pour créer visuellement un paragraphe est considérée comme non conforme et invalide le critère. Exemple : `<div>`, `paragraphes d’un bloc de texte simulés`, `<br>`, `à l’aide de plusieurs éléments <br>`, `</div>`
	
WAI-ARIA propose un rôle `presentation` permettant de supprimer la sémantique d’un élément, par exemple `<h1 role="presentation">Titre</h1>`. Dans ce cas, le texte sera correctement restitué mais son rôle de titre ne le sera plus. L’utilisation du rôle `presentation` peut être requise lorsque l’on utilise un [motif de conception](#motif-de-conception) WAI-ARIA.

Le rôle WAI-ARIA `presentation` peut être également utilisé pour supprimer la sémantique d’un élément lorsque ce dernier est utilisé uniquement à des fins de présentation, par exemple `<blockquote role="presentation">` aura le même effet qu’une absence d’élément `<blockquote>`.
