# Capstone — Test-run audit

## Scenario

A QE team receives a JSON export of a synthetic automated test run and needs a reliable summary for triage. Implement a small, well-tested module that validates the input and reports useful metrics. This gives a practical reason to use the JavaScript and TypeScript topics without pulling in a browser framework too early.

## Requirements

Implement the TypeScript version in `src/ts/test-run.ts` and tests under `test/`:

1. Model each result with a unique ID, non-empty test title, recognized status (`passed`, `failed`, or `skipped`), and optional duration in milliseconds.
2. Validate external data at runtime. A TypeScript interface alone is not validation. Return a useful error that identifies the bad record/field.
3. Summarize total, passed, failed, skipped, and pass rate. Define pass-rate behavior for no tests and state your choice in the README.
4. Return the failed test titles in a stable, predictable order.
5. Do not mutate caller-owned input. Do not log from core functions.
6. Add tests for a normal mixed run, empty run, duplicate IDs, missing/invalid fields, and duration boundary values. Prefer behavior-focused tests.
7. Keep error messages actionable and avoid including secrets or unnecessary payload dumps.

## Steps

1. Write the data contract and edge-case decisions in a short design note before coding.
2. Implement one pure function at a time. Add a test before or alongside each behavior.
3. Run `npm test` and `npm run typecheck` frequently. Test the smallest useful slices.
4. Review for confusing abstractions, mutation, missing `await`, unchecked JSON, and unhelpful errors.
5. Write `README.md` documentation for your capstone section: setup, usage/example, validation contract, assumptions, checks, and limitations. You may add a small synthetic fixture.
6. Commit the work on a feature branch and open a pull request. In the PR description, explain one risk addressed and one trade-off made.

## Stretch (only after requirements pass)

- Add filtering by status or a threshold warning for unusually slow tests.
- Add a generic `Outcome<T>` result type if it simplifies error flow.
- Compare thrown validation errors with a returned error result and explain the best fit for the caller.

## Interview rehearsal

In 2–3 minutes, explain the scenario, how the input is validated, why the pass-rate edge case is handled as it is, what tests provide confidence, and what you would change if this became a shared production library. Be candid that this small project does not replace a full test framework or CI pipeline.
