export type TestStatus = "passed" | "failed" | "skipped";

export interface TestResult {
  id: string;
  title: string;
  status: TestStatus;
  durationMs?: number;
}

export interface RunSummary {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  passRate: number | null;
}

/** Summarize already-validated test results; validation of external data is a separate concern. */
export function summarizeRun(results: TestResult[]): RunSummary {
  // TODO: Count recognized statuses and define the empty-run pass-rate behavior.
  return { total: 0, passed: 0, failed: 0, skipped: 0, passRate: null };
}

/** Names of failed tests, preserving input order. */
export function getFailedTitles(results: TestResult[]): string[] {
  // TODO: Complete using appropriately typed array callbacks.
  return [];
}

export type Outcome<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

/** Example generic contract. Extend this during the TypeScript lesson. */
export function asOutcome<T>(value: T): Outcome<T> {
  return { ok: true, value };
}
