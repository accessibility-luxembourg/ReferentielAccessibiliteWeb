---
WCAG: 2.5.3
EN301549-V4: 9.2.5.3
RAWEB1.1: 11.2.5
Techniques:
  - F96
  - F111
  - G208
  - G211
---

#### Cas particuliers

Le critère ne s’applique pas lorsque :

- La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence.
- Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, « B » au niveau d’un éditeur de texte aura pour nom accessible « Mettre en gras », le signe « &gt; » en fonction du contexte signifiera « Suivant » ou « Lancer la vidéo »). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’intitulé visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir de nom accessible (ex. : « A &gt; B »). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (« A plus grand que B » ou « A supérieur à B »).

#### Notes techniques

Lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :

- WCAG insiste sur le placement de l’intitulé visible au début du nom accessible sans toutefois réserver l’exclusivité de cet emplacement ;
- WCAG considère comme un cas d’échec une correspondance non exacte de la chaîne de caractères de l’intitulé visible au sein du nom accessible.

Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression « produit X», on peut avoir les différents cas suivants :

- « Commander maintenant produit X » est valide (bonne pratique) ;
- « Produit X : commander maintenant » est valide ;
- « Commander produit X maintenant » est non valide.