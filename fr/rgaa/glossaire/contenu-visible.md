---
title: Contenu visible
---

Un contenu est visible lorsqu’il est apparent sur la page web, au chargement de la page ou après l’activation d’un composant d’interface (par exemple, l’affichage d’une fenêtre modale ou d’un sous-menu).

Le {% crit 10.3 %} demande à ce que le contenu visible soit accessible aux technologies d’assistance. Cela signifie que tout contenu visible qui serait implémenté au travers d’une méthode qui nativement ne dispose pas de moyen pour fournir d’alternative devrait être accompagné d’une méthode secondaire pour fournir cette alternative. Par exemple, une image porteuse d’information en propriété de fond CSS sur un élément qui contient un texte visuellement caché valide ce test, car l’information est accessible aux technologies d’assistance. Sans ce texte caché, le test est invalidé.