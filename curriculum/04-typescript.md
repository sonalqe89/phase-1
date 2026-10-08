# Lesson 4 — TypeScript for QE automation

## Goal

Add enough static typing to make automation data and helper contracts easier to understand, without treating types as a substitute for runtime validation.

## Learn

- TypeScript checks source during development/build; JavaScript runs at runtime. Types are erased and do not validate JSON from a file or an API by themselves.
- Type annotations, inference, unions, literal types, and interfaces describe the shapes functions expect and return.
- Optional properties (`owner?: string`) may be absent. Model this intentionally; do not mark everything optional.
- Enums can name a fixed set of values. String literal unions are often a lighter alternative; understand both and follow the codebase convention.
- Classes bundle state and behavior when that improves the model. Do not create a class for every object.
- Generics preserve relationships between input and output types, e.g. `Result<T>`; avoid generics with no practical benefit.

## Do

1. In `src/ts/test-run.ts`, define a `TestStatus` and an interface for a run result. Use a union or enum for the allowed statuses.
2. Give `summarizeRun` an explicit input and return type. Make the result status counts safe to access and straightforward to test.
3. Add an optional `durationMs` or `owner` field and demonstrate the difference between absent and present values.
4. Create a small `RunSummary` class only if it makes the behavior clearer; otherwise explain why plain functions are simpler.
5. Add a generic `Outcome<T>` (success value or error message) and use it in a small parsing/validation helper. Explain what `T` represents.
6. Run `npm run typecheck`, then add an intentionally invalid call locally, observe the compiler error, and remove the invalid call before committing.
7. Convert or mirror a piece of runtime data from `src/js/` into the typed model. Add a runtime validation step for external JSON rather than assuming a type annotation validates it.

## QE review questions

- Does the type prevent a defect, or only document an assumption?
- Can runtime data still violate this interface? Where should it be checked?
- Is a status union more useful than arbitrary strings? What would happen if the product adds a new status?
- Is a generic helping reuse, or making a small helper harder to understand?

## Done when

- `npm run typecheck` passes.
- You can explain a compile-time check versus a runtime check.
- Optional fields and status values are modeled deliberately.
- Types describe behavior accurately and have not been added only for decoration.
