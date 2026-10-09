import { parseCsvToObjects } from './csvParser';

export interface FileParseResult {
  records: Record<string, any>[];
  format: 'CSV' | 'JSON' | 'XML';
  error?: string;
}

function parseXmlFallback(xmlText: string): Record<string, any>[] {
  const candidateTags = ['opportunity', 'tender', 'record', 'item', 'entry', 'row'];
  const results: Record<string, any>[] = [];

  for (const tag of candidateTags) {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
    let match: RegExpExecArray | null;
    while ((match = regex.exec(xmlText)) !== null) {
      const inner = match[1];
      const obj: Record<string, any> = {};
      const childRegex = /<([a-zA-Z0-9_-]+)[^>]*>([\s\S]*?)<\/\1>/g;
      let childMatch: RegExpExecArray | null;
      while ((childMatch = childRegex.exec(inner)) !== null) {
        obj[childMatch[1]] = childMatch[2].trim();
      }
      if (Object.keys(obj).length > 0) {
        results.push(obj);
      }
    }
    if (results.length > 0) break;
  }
  return results;
}

export function parseXmlToObjects(xmlText: string): Record<string, any>[] {
  if (typeof DOMParser === 'undefined') {
    return parseXmlFallback(xmlText);
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
  const parserError = xmlDoc.querySelector('parsererror');
  if (parserError) {
    throw new Error(`XML parsing error: ${parserError.textContent?.slice(0, 150) || 'Malformed XML document'}`);
  }

  // Look for records or items or opportunities or tenders
  const candidateTags = ['record', 'item', 'opportunity', 'tender', 'entry', 'row'];
  let nodes: Element[] = [];

  for (const tag of candidateTags) {
    const matches = xmlDoc.getElementsByTagName(tag);
    if (matches.length > 0) {
      nodes = Array.from(matches);
      break;
    }
  }

  // If no specific tag matched, use direct child elements of documentElement
  if (nodes.length === 0 && xmlDoc.documentElement) {
    nodes = Array.from(xmlDoc.documentElement.children);
  }

  return nodes.map(node => {
    const obj: Record<string, any> = {};
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      obj[child.tagName] = child.textContent?.trim() || '';
    }
    // Also capture any attributes on the node
    for (let i = 0; i < node.attributes.length; i++) {
      const attr = node.attributes[i];
      if (!obj[attr.name]) {
        obj[attr.name] = attr.value;
      }
    }
    return obj;
  });
}

export async function parseImportFile(file: File): Promise<FileParseResult> {
  const fileName = file.name.toLowerCase();
  const maxSizeBytes = 50 * 1024 * 1024; // 50MB safety limit

  if (file.size > maxSizeBytes) {
    throw new Error(`File exceeds the maximum allowed size of 50MB (received ${(file.size / (1024 * 1024)).toFixed(1)}MB).`);
  }

  const isCsv = fileName.endsWith('.csv');
  const isJson = fileName.endsWith('.json');
  const isXml = fileName.endsWith('.xml');

  if (!isCsv && !isJson && !isXml) {
    throw new Error('Unsupported file format. Please provide a verified .csv, .json, or .xml file.');
  }

  const text = await file.text();
  const trimmed = text.trim();

  if (!trimmed) {
    throw new Error('The selected file is empty.');
  }

  if (isJson || trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      const records = Array.isArray(parsed) ? parsed : [parsed];
      return { records, format: 'JSON' };
    } catch {
      throw new Error('Malformed JSON syntax in file.');
    }
  }

  if (isXml || trimmed.startsWith('<?xml') || trimmed.startsWith('<')) {
    try {
      const records = parseXmlToObjects(trimmed);
      return { records, format: 'XML' };
    } catch (err: any) {
      throw new Error(err?.message || 'Malformed XML structure in file.');
    }
  }

  // Otherwise CSV
  try {
    const records = parseCsvToObjects(trimmed);
    return { records, format: 'CSV' };
  } catch (err: any) {
    throw new Error(`Failed to parse CSV: ${err?.message || 'Malformed CSV'}`);
  }
}
