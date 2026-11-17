---
EN301549-V4: 9.2.2.1
WCAG: 2.2.1
Techniques:
  - F40
  - F41
  - F58
  - G133
  - G180
  - G198
  - SCR1
  - SCR16
  - SCR36
ACT: 25
---

#### Cas particuliers

Le critère ne s’applique pas : 

- Lorsque la limite de temps fait partie d’un évènement qui se déroule en temps réel (par exemple, une enchère), et qu’aucune alternative ne peut être mise en place.
- Lorsque la limite de temps est [essentielle](#essentiel), notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu.
- Lorsque la limite de temps est de vingt heures, au moins (pour un élément `<meta>`, valeur de `content` supérieure ou égale à `72 000`).
- Lorsque la limite de temps est liée à des questions de sécurité (par exemple, les codes à usage unique dans le cadre des authentifications à deux facteurs). 
- Lorsque la redirection est immédiate par exemple : 
	- la propriété `content` avec la valeur `0` pour l’élément `<meta>` : `content="0; URL='https://url.com'"` ; 
	- une redirection immédiate et sans délai vers la nouvelle version d’une page à partir d’une URL obsolète.