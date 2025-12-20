import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const normalizeLineEndings = (str) => str.trim().replace(/\r\n/g, '\n');

test('genDiff compares two flat JSON files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expected.txt');
  const result = genDiff(filepath1, filepath2);

  expect(normalizeLineEndings(result)).toBe(normalizeLineEndings(expected));
});

test('genDiff compares two flat YAML files', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const expected = readFile('expected.txt');
  const result = genDiff(filepath1, filepath2);

  expect(normalizeLineEndings(result)).toBe(normalizeLineEndings(expected));
});

test('genDiff compares JSON and YAML files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.yml');
  const expected = readFile('expected.txt');
  const result = genDiff(filepath1, filepath2);

  expect(normalizeLineEndings(result)).toBe(normalizeLineEndings(expected));
});
