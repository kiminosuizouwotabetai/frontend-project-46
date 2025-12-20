import readAndParseFile from './fileReader.js';

export default function genDiff(filepath1, filepath2, format = 'stylish') {
  const data1 = readAndParseFile(filepath1);
  const data2 = readAndParseFile(filepath2);
  console.log('Данные из file1:', data1);
  console.log('Данные из file2:', data2);

  return 'ПОБЕДА!!!!';
}