---
EN301549-V4: 9.2.5.8
WCAG: 2.5.8
RAWEB1.1: N/A
Techniques:
  - C42
---

#### Cas particuliers

Le critère ne s’applique pas aux éléments suivants :

* La fonction peut être réalisée grâce à un élément de contrôle différent sur la même page, et qui satisfait à ce critère.
* La cible se trouve dans une phrase, ou bien sa taille est limitée par la hauteur de ligne du texte non ciblé.
* La taille de la cible est déterminée par les styles natifs du navigateur sans aucune modification par l’auteur.
* Une présentation spécifique de la cible est [essentielle](#essentiel) ou est légalement requise pour transmettre l’information.
* Les cibles de taille réduite (de moins de 24 par 24 pixels CSS) sont positionnées de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation) de chacune d’elles, les cercles ne croisent pas d’autre cible ni le cercle d’une autre cible de taille réduite.

#### Notes techniques

Si deux cibles ou plus se chevauchent, **la zone de chevauchement ne doit pas être incluse dans la mesure de la taille de la cible**, sauf si les cibles qui se chevauchent exécutent la même action ou ouvrent la même page.

Les cibles qui permettent de sélectionner des valeurs en fonction de leur position dans la cible sont considérées comme une seule cible. Cela inclut par exemple les curseurs (slider), les sélecteurs de couleurs affichant un dégradé de couleurs, ou les zones éditables où l’on positionne le curseur.

Pour les cibles en ligne, la hauteur de ligne doit être interprétée comme étant perpendiculaire au flux de texte. Par exemple, dans une langue affichée verticalement, la hauteur de ligne serait horizontale.