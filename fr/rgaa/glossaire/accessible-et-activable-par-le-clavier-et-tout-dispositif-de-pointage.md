---
title: Accessible et activable par le clavier et tout dispositif de pointage
---

- Un composant d’interface (lien, bouton…) est accessible au clavier et par tout dispositif de pointage lorsque l’utilisateur peut prendre, indifféremment, le focus par un pointeur ou la touche tabulation.
- Un composant d’interface (lien, bouton…) est activable au clavier et par tout dispositif de pointage lorsque l’utilisateur peut enclencher, indifféremment, l’action prévue par le composant d’interface par une pression du pointeur ou une touche du clavier (de préférence, parmi celles prévues par défaut dans les agents utilisateurs comme <kbd>Entrée</kbd>, <kbd>Espace</kbd>).
- Attention : pour certains composants d’interface comme les <span lang="en">`sliders`</span> (bouton coulissant ou rotatif…), il n’est pas possible de contrôler le composant par la seule touche d’entrée. Dans ces situations, d’autres touches (comme les touches de direction) peuvent être utilisées. En particulier pour les éléments ayant un rôle WAI-ARIA correspondant à un motif de conception il est recommandé de considérer le document <span lang="en">[WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)</span> lors de leur implémentation.

Dans le référentiel, l’expression « contrôlable par le clavier et tout dispositif de pointage » se rapporte également à la présente définition.

