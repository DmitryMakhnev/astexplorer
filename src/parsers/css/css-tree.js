import defaultParserInterface from './utils/defaultCSSParserInterface';
import pkg from 'css-tree/package.json';

const ID = 'csstree';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,

  loadParser(callback) {
    require(['css-tree/lib/parser'], callback);
  },

  parse(CSSTree, code) {
    return CSSTree(code, {
      positions: true,
      filename: 'ast explorer example',
    });
  },

  opensByDefault(node, key) {
    return key === 'rules'
      || key === 'sequence'
      || key === 'declarations'
      || key === 'selectors';
  },

  _ignoredProperties: new Set(['source']),

};