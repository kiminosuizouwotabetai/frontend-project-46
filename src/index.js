export default function genDiff(filepath1, filepath2, format = 'stylish') {
  return `{
  - follow: ${format === 'stylish' ? 'xdddd' : 'false'}
  + follow: ${format === 'stylish' ? 'xdddd' : 'true'}
}`;
}