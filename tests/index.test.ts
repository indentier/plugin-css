import { describe, expect, it } from 'vitest';
import { format, resolveOptions } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-css', () => {
  it('registers .css / .scss / .less extensions', () => {
    expect(plugin.extensions).toContain('.css');
    expect(plugin.extensions).toContain('.scss');
    expect(plugin.extensions).toContain('.less');
  });

  it('is NOT ruby compatible', () => {
    expect(plugin.rubyCompatible).toBe(false);
  });

  it('formats a CSS file in default mode (brace exiling)', () => {
    const input = '.foo {\n  color: red;\n}\n';
    const out = format(input, resolveOptions({ minColumn: 40, offset: 4 }), '.css', plugin);
    expect(out.split('\n')[0]).toMatch(/\.foo\s+\{$/);
  });

  it('does NOT inject declaration or end in ruby mode', () => {
    const input = '.foo {\n  color: red;\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.css',
      plugin,
    );
    expect(out).not.toContain('null');
    expect(out.split('\n').some((l) => l.trim() === 'end')).toBe(false);
  });
});
