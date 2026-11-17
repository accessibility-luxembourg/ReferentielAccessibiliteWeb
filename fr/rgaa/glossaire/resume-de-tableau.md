---
title: Résumé (de tableau)
---

Un résumé est un passage de texte associé à un tableau de données complexe. Il permet de donner des informations sur la nature et la structure du tableau afin d’en faciliter l’utilisation par les utilisateurs de technologies d’assistance par exemple.

Note : la seule technique utilisable actuellement est celle qui consiste à insérer le résumé directement dans le [nom accessible](#nom-accessible-de-tableau-de-donnees).

Dans le cas d’un élément avec l’attribut WAI-ARIA `role="table"`, le résumé doit être fourni au moyen d’un texte visible adjacente au tableau,  relié par l’attribut `aria-describedby` et être correctement restitué par les technologies d’assistance.

**Note :** si les utilisateurs principalement impactés sont les personnes aveugles qui utilisent des lecteurs d’écran, d’autres utilisateurs peuvent bénéficier également de ces indications, comme certaines personnes déficientes visuelles ou avec un trouble cognitif. Dans ce cas le résumé, s’il est masqué par défaut, aurait vocation à être rendu visible par l’intermédiaire d’un bouton par exemple.