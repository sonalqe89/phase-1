# Phase 1: QE Automation Foundations

A practical, step-by-step learning repository for an experienced Quality Engineer returning to the IT industry. This phase refreshes the JavaScript/TypeScript and Git skills needed to read, write, review, and maintain Playwright automation—not to become a general-purpose application developer.

> **Timebox:** Weeks 2–3 of the larger preparation plan. Aim for 60–90 minutes a day, 5 days a week. Revisit concepts as needed; demonstrate understanding by explaining the code and its trade-offs, not by memorizing syntax.

## Outcomes

By the end, you should be able to:

- Read automation code involving variables, objects, arrays, functions, modules, promises, and async/await.
- Transform and validate realistic QE data with array methods and clear error handling.
- Add useful TypeScript types, interfaces, optional properties, enums, classes, and basic generics.
- Use Git safely from a fresh local repository and collaborate through a GitHub pull request.
- Explain how your code improves test reliability, diagnosability, and maintainability.

## Start here

1. Install a current Node.js LTS release, Git, and VS Code. Verify `node --version`, `npm --version`, and `git --version` in a terminal.
2. Open this folder in VS Code and run `npm install` once to install TypeScript.
3. Read the curriculum in this order:
   - [Day-by-day plan](curriculum/README.md)
   - [JavaScript essentials](curriculum/01-javascript-essentials.md)
   - [Functions, arrays, and data transformations](curriculum/02-functions-and-data.md)
   - [Modules, async, and errors](curriculum/03-modules-async-errors.md)
   - [TypeScript for QE automation](curriculum/04-typescript.md)
   - [Git and GitHub from scratch](curriculum/05-git-and-github.md)
   - [Capstone instructions](curriculum/06-capstone.md)
4. Work in small commits. Keep a learning journal in your own notes (do not commit private or employer information).

## Run the starter checks

- `npm test` runs the JavaScript practice tests.
- `npm run typecheck` checks the TypeScript exercises without generating output.
- `npm run build` compiles TypeScript into the ignored `dist/` folder.

Some starter tests are expected to fail until the exercises are completed. Read each lesson's **Do** and **Done when** sections before changing code. A useful rhythm is: predict → implement → run checks → inspect failure → improve → commit.

## Suggested daily routine

1. Spend 10 minutes recalling yesterday's ideas without notes.
2. Read one lesson and type examples yourself rather than copy/pasting.
3. Complete its tasks against the QE scenario in the lesson.
4. Run checks and deliberately try at least one edge case.
5. Commit a small, descriptive change and add one interview explanation to your notes.

## Repository map

- `curriculum/` — sequential learning instructions, goals, exercises, and checkpoints.
- `src/js/` — JavaScript practice modules.
- `src/ts/` — TypeScript practice and capstone modules.
- `test/` — Node's built-in test runner tests.
- `.github/copilot-instructions.md` — repository-specific coding guidance.

## Working agreement

Use synthetic data only. Do not add credentials, customer data, confidential test results, screenshots, or proprietary code. Keep solutions readable and explainable; prefer simple code over clever abstractions. This is a skills repo, not a production test framework. Playwright itself belongs to a later phase.

## Completion checklist

- [ ] Complete all lessons and explain the concepts without relying on notes.
- [ ] `npm test`, `npm run typecheck`, and `npm run build` pass.
- [ ] Complete the capstone and write its README with setup, behavior, assumptions, and limitations.
- [ ] Make a clean GitHub repository, push a feature branch, open a pull request, review it, and merge it.
- [ ] Be ready to discuss one defect found, one design choice, and one improvement you would make next.
