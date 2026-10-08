/**
 * Count test results by status.
 * @param {{ status: string }[]} results
 * @returns {{ passed: number, failed: number, skipped: number, total: number }}
 */
export function summarizeResults(results) {
  // TODO: Validate recognized statuses and calculate the summary.
  // Decide and document whether an unrecognized status should throw or be returned separately.
  return { passed: 0, failed: 0, skipped: 0, total: 0 };
}

/** Return the names of failed tests in their original order. */
export function getFailedTestNames(results) {
  // TODO: Use filter and map. Define behavior for missing names.
  return [];
}

/** Return the pass rate as a number between 0 and 1. */
export function getPassRate(results) {
  // TODO: Decide what an empty run means, then implement and document it.
  return 0;
}

/** Return whether every result has a unique, non-empty ID. */
export function haveUniqueResultIds(results) {
  // TODO: Handle the empty list and duplicate IDs deliberately.
  return false;
}
