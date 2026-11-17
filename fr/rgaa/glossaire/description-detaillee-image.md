---
title: Description détaillée (image)
---

Contenu associé à une image en complément de son nom accessible afin de décrire en totalité l’information véhiculée par l’image. La description détaillée peut être associée à l’image via :

- Une référence à une description détaillée adjacente à l’image dans le nom accessible ;
- Un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) qui permet d’accéder à la description détaillée dans la page ou dans une autre page ;
- Un ou plusieurs passages de texte identifiés par un id et liés par un attribut WAI-ARIA `aria-describedby` sur le modèle `aria-describedby="ID1 ID2 ID3…"`.

Une description détaillée est utile pour tous les utilisateurs. Une description détaillée qui ne serait pas visible à l’écran et uniquement accessible grâce à un lecteur d’écran ne pourrait pas, dans certaines conditions, être considérée comme une implémentation conforme.