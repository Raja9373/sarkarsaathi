// Simple, streaming/chunked CSV parser that splits lines and handles quotes properly
// without creating giant arrays or duplicate copies in memory.

export interface CsvParseOptions {
  delimiter?: string;
}

export function* parseCsvLines(csvText: string): Generator<string[], void, unknown> {
  const len = csvText.length;
  let index = 0;
  let currentField = '';
  let currentRow: string[] = [];
  let inQuotes = false;

  while (index < len) {
    const char = csvText[index];

    if (inQuotes) {
      if (char === '"') {
        if (index + 1 < len && csvText[index + 1] === '"') {
          currentField += '"';
          index += 2;
          continue;
        } else {
          inQuotes = false;
          index++;
          continue;
        }
      } else {
        currentField += char;
        index++;
        continue;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
        index++;
        continue;
      } else if (char === ',') {
        currentRow.push(currentField);
        currentField = '';
        index++;
        continue;
      } else if (char === '\r') {
        if (index + 1 < len && csvText[index + 1] === '\n') {
          index++;
        }
        currentRow.push(currentField);
        currentField = '';
        if (currentRow.length > 0 && !(currentRow.length === 1 && currentRow[0].trim() === '')) {
          yield currentRow;
        }
        currentRow = [];
        index++;
        continue;
      } else if (char === '\n') {
        currentRow.push(currentField);
        currentField = '';
        if (currentRow.length > 0 && !(currentRow.length === 1 && currentRow[0].trim() === '')) {
          yield currentRow;
        }
        currentRow = [];
        index++;
        continue;
      } else {
        currentField += char;
        index++;
        continue;
      }
    }
  }

  // Last field/row if any
  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.length > 0 && !(currentRow.length === 1 && currentRow[0].trim() === '')) {
      yield currentRow;
    }
  }
}

export function parseCsvToObjects(csvText: string): Record<string, string>[] {
  const iterator = parseCsvLines(csvText);
  const first = iterator.next();
  if (first.done || !first.value) {
    return [];
  }

  const headers = first.value.map(h => h.trim());
  const rows: Record<string, string>[] = [];

  for (const row of iterator) {
    const obj: Record<string, string> = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      if (header) {
        obj[header] = row[i] !== undefined ? row[i] : '';
      }
    }
    rows.push(obj);
  }

  return rows;
}
