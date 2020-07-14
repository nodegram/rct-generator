const { existsSync, mkdirSync, writeFileSync, readFileSync } = require('fs');
const { join } = require('path');

const _toPascalCase = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
};

const _replaceAll = (str, replacement) => {
  const delimiter = '__name__';
  const DELIMETER = '__NAME__';
  const Delimeter = '__Name__';

  const title = '__TITLE__';

  return str
    .replace(new RegExp(delimiter, 'g'), replacement.toLowerCase())
    .replace(new RegExp(DELIMETER, 'g'), replacement.toUpperCase())
    .replace(new RegExp(Delimeter, 'g'), _toPascalCase(replacement))
    .replace(new RegExp(title, 'g'), replacement.replace('Component', ''));
};

const formatName = (name) => {
  const delimiter = /-|_/;
  const extra = /container|screen/i;
  return name.replace(extra, '').split(delimiter).map(_toPascalCase).join('');
};

const generateTemplate = (destination, templateSrc, replacement) => {
  const template = readFileSync(join(__dirname, '..', 'templates', templateSrc), 'utf8');
  const content = replacement ? _replaceAll(template, replacement) : template;
  writeFileSync(destination, content);
};

const getBasePath = (overridePath) => {
  const base = process.cwd();

  if (overridePath) {
    return join(base, overridePath);
  }

  const defaultPaths = ['src', 'app'];

  for (const path of defaultPaths) {
    const expectedPath = join(base, `/${path}`);

    if (existsSync(expectedPath)) {
      return expectedPath;
    }
  }

  return join(base, defaultPaths[0]);
};

const mkdirp = (path) => {
  let currentPath = process.cwd();

  path.replace(currentPath + '/', '').split('/').forEach(dir => {
    currentPath += `/${dir}`;

    if (!existsSync(currentPath)) {
      mkdirSync(currentPath);
    }
  });
};

module.exports = { mkdirp, getBasePath, generateTemplate, formatName };
