---
title: Nom accessible de regroupement
RAWEB1.1: legende
---

Le nom accessible d’un regroupement informe sur la nature de la liaison d’un groupe de champs. 

Dans le cas d’un regroupement réalisé avec  `<fieldset>`, le nom accessible du regroupement est déterminé selon l’ordre de priorité suivant : 

- Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
- Sinon, contenu de l’élément `<legend>`.

Il est également possible de créer des regroupements avec le rôle WAI-ARIA `group` ou `radiogroup`, dans ce cas, le nom accessible du regroupement est déterminé selon l’ordre de priorité suivant :

- Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- Sinon, contenu de l’attribut WAI-ARIA `aria-label`.