# Lesson 3 — Modules, promises, async/await, and errors

## Goal

Understand how automation code is split into modules and how to handle asynchronous work without hiding failures.

## Learn

- This repository uses ECMAScript modules (`import`/`export`) via `"type": "module"` in `package.json`.
- A promise represents work that may complete later. `async` functions always return promises; `await` waits for a promise inside an async function.
- `try/catch` is useful at a boundary where you can recover, add context, or report an actionable failure. Avoid catching an error merely to ignore it.
- In Playwright, browser operations are asynchronous. Forgetting `await` can make a test finish before the action/assertion has completed.

## Do

1. Export your summary helpers from `src/js/test-run-summary.js`; import them from tests and `src/js/load-run-data.js`.
2. Implement `loadRunData(filePath)` in the loader using `node:fs/promises`. It should parse JSON and return the value. Do not silently return an empty array for malformed JSON.
3. Add a wrapper that adds useful context to a read/parse error while preserving the original error as `cause` where supported. Decide whether the caller should see a custom error or the underlying error.
4. Write an async test using `node:test` that awaits the loader. Test a valid fixture and a missing/invalid input. Use only synthetic fixtures.
5. Explain what the function returns before and after `await`, and what could go wrong if the caller omits `await`.

## Error-handling contract

Document whether the loader expects an array and where schema validation happens. A successful JSON parse does not guarantee valid test data. Do not confuse a parse error, file-access error, and domain-validation error.

## Done when

- Modules have one clear purpose and explicit exports.
- Async tests await the behavior they exercise.
- Failures retain enough context to diagnose the problem and are not swallowed.
- You can distinguish asynchronous errors from invalid domain data.
