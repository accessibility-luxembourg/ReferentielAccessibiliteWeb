---
title: Nom accessible
---

Nom d’un élément d’interface, exposé aux technologies d’assistance par l’intermédiaire de l’API d’accessibilité du système d’exploitation.

Un exemple concret d’exploitation du nom accessible par une technologie d’assistance est la restitution d’un élément d’interface par un lecteur d’écran lorsqu’il reçoit le focus. Pour un bouton de formulaire ayant un nom accessible « Envoyer », le lecteur d’écran annonce une concaténation de son nom accessible et de son [rôle calculé](#role-calcule), par exemple : « Envoyer, Bouton ».

L’ordre des informations restituées peut varier selon les lecteurs d’écran et les API d’accessibilité.

Autre exemple : un logiciel de commande vocale peut cibler un élément d’interface lorsque son nom accessible est énoncé vocalement.

Le nom accessible peut être déterminé par plusieurs méthodes. Lorsque plusieurs méthodes sont utilisées conjointement, l’algorithme de calcul du nom accessible détermine celle qui est utilisée. Cet algorithme varie en fonction de l’élément HTML.