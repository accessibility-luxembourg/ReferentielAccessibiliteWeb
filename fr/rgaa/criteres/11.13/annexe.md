---
WCAG:
  - successCriterion: 1.3.5
    title: Identify Input Purpose
    level: AA
Techniques:
  - F107
  - H98
Norm:
  - criterion: 9.1.3.5
    title: Identify Input Purpose
---

#### Notes techniques

La [liste des valeurs possibles pour l’attribut `autocomplete`](#liste-des-valeurs-possibles-pour-l-attribut-autocomplete) repose sur la liste des valeurs présentes dans la spécification WCAG2.1 qui reprend elle-même la liste des valeurs de type "<span lang="en">field name</span>" de la spécification HTML5.2. Le critère WCAG demande à ce que l’une de ces valeurs soit présente pour qualifier un champ de saisie concernant l’utilisateur.

Ce que le critère WCAG laisse implicite, ce sont les différentes règles de construction possibles pour obtenir une valeur (simple ou composée) pour l’attribut `autocomplete`. C’est cependant l’affaire du développeur de fournir à l’attribut `autocomplete` une valeur ou un ensemble de valeurs valides au regard des exigences de l’algorithme fourni par la spécification HTML5.2. Ainsi, un attribut `autocomplete` ne peut contenir qu’une seule valeur de type <span lang="en">`"field name"`</span>, comme <span lang="en">`"name"`</span> ou <span lang="en">`"street-address"`</span>. On peut avoir également un ensemble composé de différentes valeurs comme, par exemple, <span lang="en">`autocomplete="shipping name"`</span> ou <span lang="en">`autocomplete="section-software shipping street-address"` : `"section-software"`</span> renvoie à une valeur de type <span lang="en">"scope"</span> et `"shipping"` à une valeur de type <span lang="en">"hint set"</span>, mais toujours une seule valeur de type <span lang="en">"field name"</span>.
