import _ from 'lodash';
import readAndParseFile from './fileReader.js';

function buildDiff(data1, data2) {
  const allKeys = _.union(Object.keys(data1), Object.keys(data2));

  const sortedKeys = _.sortBy(allKeys);

  const diffLines = sortedKeys.flatMap((key) => {
    const hasInData1 = Object.hasOwn(data1, key);
    const hasInData2 = Object.hasOwn(data2, key);

    if (hasInData1 && !hasInData2) {
      return `  - ${key}: ${data1[key]}`;
    }

    if (!hasInData1 && hasInData2) {
      return `  + ${key}: ${data2[key]}`;
    }

    const value1 = data1[key];
    const value2 = data2[key];

    if (value1 === value2) {
      return `    ${key}: ${value1}`;
    }

    return [
      `  - ${key}: ${value1}`,
      `  + ${key}: ${value2}`,
    ];
  });

  return `{\n${diffLines.join('\n')}\n}`;
}
// eslint-disable-next-line no-unused-vars
export default function genDiff(filepath1, filepath2, _format = 'stylish') {
  const data1 = readAndParseFile(filepath1);
  const data2 = readAndParseFile(filepath2);

  const diff = buildDiff(data1, data2);

  return diff;
}
