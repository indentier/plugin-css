import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for CSS / SCSS / Less (.css .scss .less)
 *
 * Ruby mode is **disabled** for stylesheets — `end` has no meaning in CSS.
 *
 * This plugin registers stylesheet extensions so indentier can apply basic
 * formatting (brace exiling) to them.
 */
const plugin: IndentierPlugin = {
  extensions: ['.css', '.scss', '.less'],
  rubyCompatible: false,
  declarationTemplate: null,
};

export default plugin;
