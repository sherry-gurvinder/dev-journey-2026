# 02: Modern Array Methods

**Date:** March 5, 2026
**Goal:** Master `.map()`, `.reduce()`, and `.filter()` without mutating original data.

## 1. The Transformer: `.map()`
- **Purpose:** Takes an array, transforms every single item, and returns a *new* array of the exact same length.
- **Rule:** Whatever you `return` becomes the new item.

## 2. The Snowball: `.reduce()`
- **Purpose:** Loops through an array and compresses it down into a *single value* (usually math/totals).
- **Rule:** The first parameter is the accumulator (the snowball). Whatever you `return` becomes the accumulator for the next loop.

## 3. The Bouncer: `.filter()`
- **Purpose:** Tests every item in an array. Does *not* change the items.
- **Rule:** You must return a boolean (`true` or `false`). If `true`, the original item goes into the new array. If `false`, it gets dropped.