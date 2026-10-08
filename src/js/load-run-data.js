import { readFile } from "node:fs/promises";

/**
 * Read and parse a JSON file containing synthetic run data.
 * Lesson 3: implement I/O and provide useful error context without swallowing errors.
 */
export async function loadRunData(filePath) {
  // TODO: await readFile(filePath, "utf8"), then JSON.parse the contents.
  // Remember: parsed JSON is unknown runtime data, not automatically a valid run.
  throw new Error(`TODO: implement loadRunData for ${filePath}`);
}
