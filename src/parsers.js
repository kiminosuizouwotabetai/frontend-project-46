import yaml from 'js-yaml';

const parseJSON = (content) => JSON.parse(content);

const parseYAML = (content) => yaml.load(content);

const parse = (content, format) => {
  switch (format) {
    case 'json':
      return parseJSON(content);
    case 'yml':
    case 'yaml':
      return parseYAML(content);
    default:
      throw new Error(`Неподдерживаемый формат: ${format}`);
  }
};

export default parse;
