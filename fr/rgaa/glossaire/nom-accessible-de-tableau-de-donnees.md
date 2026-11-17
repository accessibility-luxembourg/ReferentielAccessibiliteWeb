---
title: Nom accessible de tableaux de données
RAWEB1.1: tableau-de-donnees-ayant-un-titre
---
Le nom accessible d’un tableau informe sur les données qui y sont présentées,  il permet d’identifier le contenu d’un tableau de données de manière claire et concise. 
 
Le nom accessible d’un tableau est déterminé selon l’ordre de priorité suivant :

1. Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
2. Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
3. Sinon, contenu de l’élément `<caption>` ;
4. Sinon, contenu de l’attribut `title`.

