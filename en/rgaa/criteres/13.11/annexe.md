---
WCAG:
  - successCriterion: 2.5.2
    title: Pointer Cancellation
    level: A
Techniques:
  - F101
  - G210
  - G212
Norm:
  - criterion: 9.2.5.2
    title: Pointer Cancellation
---

#### Special cases

There is special case management when the functionality requires the expected behaviour to be performed during a descending event, for example, a keyboard emulator whose keys must be activated when pressed, as on a physical keyboard. In these situations, the criterion is not applicable.

#### Technical notes

Two examples of a mechanism used to cancel or abort an action triggered by a pointing device on a single point on the screen:

- A modal window for cancelling the action after it has been completed;
- For a drag and drop function, the action is aborted if the user releases the element outside the target zone.
