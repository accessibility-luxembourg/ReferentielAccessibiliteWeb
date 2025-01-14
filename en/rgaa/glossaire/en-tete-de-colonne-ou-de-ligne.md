---
title: Column or row header
---

The content of a cell in a data table (usually the first cell in a column or row) which serves as the heading for all or some of the cells in the column or row. A column or row may contain several headers (intermediate header). When the headers apply to an entire row or column, they can be implemented with a `<th>` tag or a tag with a `role="rowheader"` or `role="columnheader"` WAI-ARIA attribute. Otherwise, only a `<th>` tag can be used.

Note: as only the `<th>` tag is fully supported by all assistive technologies, it is strongly recommended that this solution be chosen for implementation in order to avoid numerous checks in the various combinations provided for in the test environment (or "baseline").
