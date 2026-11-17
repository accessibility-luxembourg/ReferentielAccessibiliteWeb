---
title: Contenu caché
---

Les technologies d’assistance (notamment les lecteurs d’écran) ne restituent pas le contenu masqué via les propriétés :

- `display` avec la valeur `none` (`display: none`) ;
- `visibility` avec la valeur `hidden` (`visibility: hidden`) ;
- Attribut HTML5 `hidden` ;
- Attribut HTML5 `inert` ;
- Attribut WAI-ARIA `aria-hidden="true"`.

Tous les contenus utilisant une ou plusieurs de ces propriétés et attributs sont applicables pour le {% crit 10.4 %}.
