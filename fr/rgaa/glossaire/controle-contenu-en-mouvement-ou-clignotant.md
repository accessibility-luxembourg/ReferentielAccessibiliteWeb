---
title: Contrôle (contenu en mouvement ou clignotant)
---

Possibilité pour l’utilisateur de contrôler l’affichage ou la lecture d’un contenu en mouvement ou clignotant par le clavier et la souris, au moins.

Tous les contenus en mouvement, à l’exception des médias temporels pris en charge par la thématique multimédia, sont concernés : les images animées (par exemple un gif animé), les contenus en mouvement proposés via un élément `<object>`, du code JavaScript ou des effets CSS par exemple.

La méthode de contrôle du contenu en mouvement ou clignotant doit permettre à l’utilisateur d’interagir avec le reste de la page. 

Ainsi, le fait que l’animation s’arrête lorsque l’utilisateur passe le pointeur de sa souris ou déplace le focus clavier sur le composant sous-jacent (et reprend dès que l’utilisateur déplace le pointeur de la souris ou le focus clavier ailleurs sur la page) ne serait pas considéré comme un « mécanisme permettant de contrôler le contenu en mouvement ou clignotant », car cela rendrait la page inutilisable pendant ce temps.

En conséquence, l’arrêt ou la mise en pause via un événement déclenché uniquement sur la prise de focus ou le survol de la souris ne permet pas de valider le critère.

Dans certains cas, le mouvement fait partie intégrante du composant et il n’est pas possible d’en donner le contrôle à l’utilisateur, par exemple une barre de progression dont la fonction est d’indiquer par un mouvement la progression d’un événement comme un téléchargement. Dans ce cas, le critère est non applicable.

**Note :** lorsque c’est approprié, la méthode de contrôle devrait être disponible comme premier élément de l’interface.
