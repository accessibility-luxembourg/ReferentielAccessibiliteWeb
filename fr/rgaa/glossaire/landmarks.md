---
title: <em lang="en">Landmarks</em>
---

Un landmark est un [rôle calculé](#role-calcule) (élément HTML ou attribut WAI-ARIA `role`). 

WAI-ARIA désigne 8 landmarks permettant d’identifier des repères de navigation. Ces rôles sont très profitables aux utilisateurs de lecteurs d’écran notamment, mais également aux utilisateurs de la navigation au clavier qui peuvent ainsi bénéficier de fonctionnalités de navigation rapide.

5 landmarks sont exploités dans la structure du document ({% crit 9.3 %}) : 

- `banner` (`<header>` ou `role="banner"`)
- `contentinfo` (`<footer>` ou `role="contentinfo"`)
- `main` (`<main>` ou `role="main"`)
- `navigation` (`<nav>` ou `role="navigation"`)
- `search` (`<search>` ou `role="search"`)

Pour `<footer>` et `<header>`, le rôle ne sera calculé que s’ils ne sont pas inclus dans un élément ayant le rôle calculé de  `article`, `complementary`, `main`, `navigation` ou `section`.

3 landmarks sont disponibles pour identifier d’autres régions : 

- `form` (`<form>` ou `role="form"`)
- `complementary` (`<aside>` ou `role="complementary"`)
- `region` (`<section>` ou `role="region"`).

Les landmarks `form` et `region` ne sont identifiés comme repère de navigation que s’ils possèdent un nom accessible.

Voir la section [Landmark Roles](https://www.w3.org/TR/wai-aria-1.2/#landmark_roles) dans la documentation.

Note 1 : compte tenu du support variable des landmarks `form`, `complementary` et `region`, s’ils sont utilisés dans la page en tant que repères de navigation, ils devront faire l’objet de tests de navigation et de restitution sur l’environnement de test.

Note 2 : au {% crit 12.6 %}, il n’est pas obligatoire d’identifier des repères de navigation autre que ceux requis par le {% crit 9.3 %} si le contexte ne le nécessite pas. Par exemple, il n’est pas obligatoire d’identifier tous les formulaires avec un élément `form`, mais seulement si un contexte de navigation plus ou moins complexe (applicatif par exemple) nécessiterait d’offrir plus de repères de navigation que ne le réclame déjà le {% crit 9.3 %}. 