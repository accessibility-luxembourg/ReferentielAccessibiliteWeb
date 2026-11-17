---
EN301549-V4: 9.4.1.3
WCAG: 4.1.3
RAWEB1.1: 7.5
Techniques:
  - ARIA19
  - ARIA22
  - ARIA23
  - ARIA25
  - F103
  - G199
---

#### Notes techniques

Les rôles WAI-ARIA `log`, `status` et `alert` ont implicitement une valeur d’attribut WAI-ARIA `aria-live` et `aria-atomic`. On pourra donc considérer (conformément à la spécification WAI-ARIA) que :

- Un attribut WAI-ARIA `aria-live="polite"` associé à un message de statut peut valoir pour un rôle WAI-ARIA `log` ;
- Un attribut WAI-ARIA `aria-live="polite"` et un attribut WAI-ARIA `aria-atomic="true"` associés à un message de statut peuvent valoir pour un rôle WAI-ARIA `status` ;
- Un attribut WAI-ARIA `aria-live="assertive"` et un attribut WAI-ARIA `aria-atomic="true"` associés à un message de statut peuvent valoir pour un rôle WAI-ARIA `alert`.

Les messages de statut pourvus d’attributs WAI-ARIA `role="alert"` et `aria-live="assertive"` sont restitués en priorité, interrompant la restitution éventuelle d’autres informations. C’est pourquoi il est recommandé, dans la mesure du possible, de n’utiliser ces attributs que pour des messages de statut prioritaires.

Si le contenu du message de statut est uniquement dans un élément possédant l’attribut WAI-ARIA `role="progressbar"`, la restitution par les technologies d’assistance n’est possible que lorsque le focus est positionné sur cet élément. Il peut être nécessaire dans certains cas de déplacer le focus sur cet élément.