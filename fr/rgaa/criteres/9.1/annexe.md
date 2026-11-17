---
EN301549-V4: 9.1.3.1
WCAG: 1.3.1
Techniques:
  - ARIA12
  - F92
  - G115
  - G141
  - H42
---

#### Notes techniques

Assurer une stricte hiérarchie entre les titres d’une page web est une bonne pratique, mais la présence de sauts hiérarchiques n’invalide pas le test 9.1.2 tant que cette hiérarchie plus lâche reste cohérente (un titre `<h3>` peut ainsi venir directement après un titre `<h1>`, par exemple). La hiérarchie de titres ne doit pas obligatoirement contenir un titre `<h1>`. Même si ces pratiques ne sont pas encouragées, elles ne constituent pas une non-conformité.

Les titres visuellement cachés via CSS sont considérés comme présents et valident le {% crit 9.1 %}.
