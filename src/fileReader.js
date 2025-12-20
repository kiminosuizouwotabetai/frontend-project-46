import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

function getAbsolutePath(filepath) {
  return path.resolve(process.cwd(), filepath);
}

function getFileExtension(filepath) {
  return path.extname(filepath).slice(1);
}

function parseJSON(content) {
  return JSON.parse(content);
}

export default function readAndParseFile(filepath) {
  const absolutePath = getAbsolutePath(filepath);
  const fileContent = readFileSync(absolutePath, 'utf-8');
  const format = getFileExtension(filepath);

  if (format === 'json') {
    return parseJSON(fileContent);
  }
  throw new Error(`Неподдерживаемый формат: ${format}`);
}
