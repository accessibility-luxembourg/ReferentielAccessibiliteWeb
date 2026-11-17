---
EN301549-V4: 9.1.1.1
WCAG: 1.1.1
Techniques:
  - F65
  - H24
  - H37
  - H53
ACT: 
  - 4
  - 6
  - 7
---

#### Notes techniques

Lorsque l’image est le seul contenu d’un lien, son nom accessible constitue celui du lien. Dans ce cas, le nom accessible de l’image devrait être évalué avec la thématique « Liens ».

Lorsqu’un bouton, inséré avec l’élément `<button>`, ne contient qu’une image (élément `<img>`, `<object>`, `<embed>`, `<canvas>` ou `<svg>`), le nom accessible de l’image constitue le nom accessible du bouton. Deux cas peuvent se présenter :

- Le bouton est contrôlé par son type, par exemple, le type `submit` ou `reset`, et fait partie d’un formulaire. Dans ce cas, le nom accessible de l’image doit être évalué avec la thématique « Formulaires » ;
- Le bouton est contrôlé par un dispositif JavaScript. Dans ce cas, le nom accessible de l’image doit être évalué avec la thématique « Composants interactifs ».