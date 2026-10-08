# Lesson 2 — Functions, arrays, and data transformations

## Goal

Use functions, objects, destructuring, and array methods to analyze a realistic collection of test cases without building a large framework.

## Learn

- Functions accept inputs (parameters) and return outputs. Keep effects such as logging separate from calculations.
- Arrow functions are concise callbacks; use a named function when it improves clarity or reuse.
- Destructuring extracts fields: `const { name, status } = result`.
- `map` transforms each item; `filter` selects items; `find` returns the first match; `some`/`every` answer boolean questions; `reduce` accumulates a value.
- These methods return new results, but do not assume every callback is pure. Avoid mutating shared test data unexpectedly.

## Do

1. Implement `getResultsByStatus` and `getFailedTestNames` in `src/js/test-run-summary.js` with `filter` and `map`.
2. Add `getPassRate(results)`. Define behavior for zero results. Return a number, not a formatted string; format at the presentation boundary.
3. Given cases with `id`, `title`, `priority`, and `automated`, return the high-priority cases that are not automated. Use destructuring where it improves readability.
4. Add a function that checks whether all case IDs are unique. Include duplicate and empty-list tests.
5. Compare a `for...of` version with a `filter`/`map` version. Choose the version that a teammate can review most easily.

## Practice prompts

- Which is clearer: nested loops or `filter` followed by `map`? Would chaining become too long?
- Does a 0% pass rate differ from an undefined pass rate when there are no results?
- What diagnostic should a duplicate-ID validation return: a boolean, offending IDs, or an exception? Choose based on the caller's needs.

## Done when

- Functions are small, deterministic, and tested for normal and boundary inputs.
- You can explain the callback input and return value for each array method used.
- You have avoided clever one-liners and mutation that obscures intent.
