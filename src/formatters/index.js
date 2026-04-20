import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
};

const getFormatter = (formatName) => {
  if (!formatters[formatName]) {
    throw new Error(`Unknown format: ${formatName}. Available formats: stylish, plain`);
  }
  return formatters[formatName];
};

export default getFormatter;
