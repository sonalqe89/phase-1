# Lesson 1 — JavaScript essentials

## Goal

Read and write small, predictable JavaScript functions using variables, conditions, loops, arrays, and objects. In browser automation, these basics show up in test data, page state, fixtures, assertions, and helper functions.

## Learn

- Prefer `const`; use `let` only when a binding must be reassigned. Avoid `var` in modern code.
- Know common values: string, number, boolean, `null`, `undefined`; use strict equality (`===`).
- Objects group named fields; arrays are ordered collections. Objects/arrays can be mutated even if their variable is `const`.
- `if/else` expresses decisions. `for...of` iterates values. Choose a loop that makes intent obvious.
- Template strings use backticks and `${expression}` to build readable messages.

## Do

1. Read `src/js/test-run-summary.js` and describe each input and output before editing.
2. Complete the TODOs to return counts for passed, failed, skipped, and total results. Treat only recognized statuses as valid.
3. Add a function that returns the failed test names. Decide how it should behave when the input is empty.
4. Add at least one test for an empty list and one for an unrecognized status. Avoid changing the supplied tests just to make them pass; add separate tests if you need more coverage.
5. Run `npm test` and inspect the assertion output. Improve names and error messages where they help a QE diagnose bad test data.

## Think like a QE

- Is `0` different from “not provided”? Is an empty string valid for a test name?
- What happens if a result has a missing status?
- Should one malformed record invalidate the entire report, or be reported as invalid? State your contract and test it.

## Done when

- You can trace the code with a small example without running it.
- The summary is correct for mixed, empty, and invalid data.
- The functions have one clear responsibility and do not print as a side effect.
- You can explain why strict equality and meaningful names matter.
