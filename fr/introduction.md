*Version 2, publiée le XX XX 2027*

Conformément à la [loi du 28 mai 2019](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo), tous les sites Internet et applications mobiles des organismes du secteur public doivent être accessibles. Le [Service information et presse](https://sip.gouvernement.lu/fr.html) est chargé de contrôler leur conformité en matière d’accessibilité.
Par ailleurs, la [loi du 8 mars 2023](https://sip.gouvernement.lu/fr.html) étend cette obligation à certains types de produits et services. Le contrôle de leur accessibilité relève de la compétence de [l’OSAPS]([OSAPS](https://accessibilite-produits-services.public.lu/fr.html)).

Dans ce cadre, le référentiel d’évaluation de l’accessibilité Web (RAWeb) a été défini comme référentiel d’accessibilité pour tous les organismes du secteur public concernés par la loi.

La méthode technique du RAWeb couvre uniquement les sites web, les applications mobiles natives sont couvertes par le [RAAM 2](../raam2/index.html).

Elle comporte 175 critères de contrôle. 

Ce référentiel propose un cadre opérationnel de vérification de la conformité aux exigences d’accessibilité. Dès lors, elle permet de vérifier qu’une application mobile est conforme aux critères décrits dans la [norme européenne EN 301 549 (.pdf)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf) pour les sections suivantes&nbsp;: 

- 5 *Generic requirements*{lang=en}
- 6 *ICT supporting real-time bidirectional communication*{lang=en}
- 7 *ICT with video capabilities*{lang=en}
- 9 *Web*{lang=en}
- 10 *Non-web documents*{lang=en}
- 12 *Information about products and services*{lang=en}

Certains tests font référence à des techniques d’implémentation (HTML, CSS, JavaScript…) pour vérifier que le critère est respecté afin de réduire la marge d’interprétation quant au respect des normes d’accessibilité.

Certains tests, concernant notamment les composants d’interface développés en JavaScript, requièrent de vérifier la restitution des contenus avec des technologies d’assistance associées à des navigateurs et des systèmes d’exploitation. L’environnement de test (ou « Base de référence ») est décrit sur la page [Environnement de test](environnement.html).

D’autres critères spécifiques de la norme européenne liés à des éléments particuliers ne sont pas transposés dans le présent référentiel. Les entités concernées doivent se référer directement à la norme européenne EN 301 549 V4.1.1 : 

- Les guides électroniques des programmes (GEP) sont concernés par 2 critères (12.4 <span lang="en">Electronic program guides</span> et 12.5 <span lang="en">Electronic program guides display</span>) ;
- Les services de relais ou d’urgence (section 12 <span lang="en">ICT providing relay or emergency service access</span>).

La présente version est la version 2, et contient des contenus issus du [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/). Ce référentiel a été adapté par le [Service information et presse (SIP)](https://sip.gouvernement.lu/) pour faire référence au cadre légal luxembourgeois. Les sources sont disponibles sur le dépôt GitHub [accessibility-luxembourg/ReferentielAccessibiliteWeb](https://github.com/accessibility-luxembourg/ReferentielAccessibiliteWeb).
En cas de défaut constaté sur ce référentiel, vous pouvez créer un ticket dans ce dépôt. 

### Concernant les niveaux des critères

WCAG propose une classification des critères en 3 niveaux : A, AA ou AAA. L’affection d’un critère à l’un ou l’autre des niveaux dépend d’[un certain nombre d’éléments documentés par le groupe de travail des WCAG](https://www.w3.org/WAI/WCAG22/Understanding/conformance#levels) et permet de jauger notamment de sa criticité. Ainsi, les critères associés à un niveau A sont réputés être les plus critiques pour les utilisateurs. 

La norme européenne EN 301 549 intègre les critères WCAG de niveau A et AA, mais ne les affiche jamais dans le document officiel.

Cependant, nous pensons que le niveau d’un critère est une information qui peut s’avérer utile pour évaluer la criticité d’un critère et ainsi déterminer des priorités de corrections. 

Le référentiel souhaite garder cette identification pour guider les entités dans leurs démarches de mise en conformité. 

Ainsi, bien que la norme n’en définisse pas pour les critères hors WCAG, il a été fait un travail de répartition des critères de la norme entre les niveaux A et AA. Ces niveaux n’ont donc rien d’officiel et ne sont pas liés à la norme européenne.


### Sommaire

  * [Critères et tests](criteres.html)
  * [Glossaire](glossaire.html)
  * [Méthodologie de test](methodo-test.html)
  * [Environnement de test](environnement.html)
  * [Références](references.html)
  * [Notes de révision](notes-revision.html)