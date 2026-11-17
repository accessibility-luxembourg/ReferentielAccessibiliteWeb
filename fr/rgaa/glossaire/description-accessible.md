---
title: Description accessible
---

Description d’un élément d’interface, exposé aux technologies d’assistance par l’intermédiaire de l’API d’accessibilité du système d’exploitation.

La description accessible vient en complément du nom accessible, elle ne peut jamais s’y substituer. La présence d’une description accessible est facultative, contrairement au nom accessible qui est obligatoire.

Un exemple concret d’exploitation de la description accessible par une technologie d’assistance est la restitution d’un élément d’interface par un lecteur d’écran lorsqu’il reçoit le focus. Pour un bouton de formulaire ayant un nom accessible « Envoyer » et une description accessible « Cette action est irréversible », le lecteur d’écran annonce une concaténation de son [nom accessible](#nom-accessible), de sa description et de son [rôle calculé](#role-calcule), par exemple : « Envoyer, Cette action est irréversible, Bouton ».

L’ordre des informations restituées peut varier selon les lecteurs d’écran et les API d’accessibilité.

La description accessible peut être déterminée par plusieurs méthodes. Lorsque plusieurs méthodes sont utilisées conjointement, l’algorithme de calcul du nom accessible détermine celle qui est utilisée. Cet algorithme varie en fonction de l’élément HTML.

De manière générale, la description accessible est déterminée selon l’ordre de priorité suivant :

1. Passage de texte associé via l’attribut WAI-ARIA `aria-describedby`.
2. Sinon, contenu de l’attribut `title` s’il n’a pas été utilisé pour créer le nom accessible.

Selon les éléments concernés, d’autres éléments peuvent entrer dans le calcul de la description accessible.

Référence : <span lang="en">[Accessible description computation](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation)</span>.