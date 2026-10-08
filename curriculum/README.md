# Phase 1 study plan — Weeks 2–3

This plan assumes prior QE experience. The objective is to translate existing testing judgment into code, not to restart a software-engineering degree. Work through the lessons in order and use the capstone to connect syntax to day-to-day quality work.

## Before starting

Install Node.js LTS, npm (bundled with Node), Git, and VS Code. Check versions with `node --version`, `npm --version`, and `git --version`. From the repository root run `npm install`, then inspect the files and run `npm test` and `npm run typecheck` to see the starter state.

## Week 2 — JavaScript and Git foundations

| Day | Focus                                          | Hands-on evidence                                                                                    |
| --- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1   | Variables, primitive values, conditions, loops | Summarize execution outcomes for synthetic test runs.                                                |
| 2   | Arrays, objects, destructuring, array methods  | Filter, group, and summarize test cases using `map`, `filter`, `find`, `some`, and `reduce`.         |
| 3   | Functions, modules, scope                      | Split validation and reporting into named, reusable functions and import them.                       |
| 4   | Promises, async/await, error handling          | Load synthetic run data asynchronously; distinguish expected invalid input from unexpected failures. |
| 5   | Git basics and review habits                   | Initialize/review history, use branches, and practice safe commits and a merge.                      |

Read [JavaScript essentials](01-javascript-essentials.md), [Functions and data](02-functions-and-data.md), [Modules, async, and errors](03-modules-async-errors.md), and [Git and GitHub](05-git-and-github.md) alongside the schedule. Git should be practiced throughout, not postponed to one day.

## Week 3 — TypeScript and integration

| Day | Focus                                | Hands-on evidence                                                                 |
| --- | ------------------------------------ | --------------------------------------------------------------------------------- |
| 6   | Types, inference, unions, interfaces | Model test cases and execution results with explicit types.                       |
| 7   | Optional properties, enums, classes  | Represent optional metadata and encapsulate a small run summary.                  |
| 8   | Basic generics and typed functions   | Write a reusable typed result wrapper and explain where a generic helps.          |
| 9   | Capstone implementation and tests    | Complete the test-run audit, then test happy paths, boundaries, and invalid data. |
| 10  | Polish, PR, and interview rehearsal  | Run all checks, open/review/merge a GitHub PR, and explain the work succinctly.   |

Read [TypeScript for QE automation](04-typescript.md) and [Capstone](06-capstone.md). If the schedule slips, prioritize understanding and a finished capstone over rushing through syntax.

## How to study at an experienced QE level

For every exercise, articulate:

1. **Risk:** What failure or ambiguity could affect product confidence?
2. **Oracle:** How do you know the output is correct?
3. **Coverage:** Which boundaries, invalid inputs, and realistic cases matter?
4. **Diagnostics:** If this fails in CI, what information helps someone act?
5. **Maintainability:** What should be a function/type/module, and what would be unnecessary abstraction?

## Definition of done

- Complete the tasks in all six lessons and the capstone.
- Explain promises/async-await, array transformations, TypeScript's compile-time role, and Git's working tree/index/commit model in your own words.
- Add tests for at least one normal case, one boundary case, and one invalid case.
- Use a feature branch and pull request; keep `main` in a usable state.
- Review your own changes from the PR diff and leave a concise summary of trade-offs and next steps.
