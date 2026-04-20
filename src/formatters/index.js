import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
};

const chooseFormatter = (ast, formatName = 'stylish') => {
  if (!formatters[formatName]) {
    throw new Error(`Unknown format: ${formatName}. Available formats: stylish, plain`);
  }
  return formatters[formatName](ast);
};

export default chooseFormatter;