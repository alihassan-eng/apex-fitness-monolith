/// <reference types="node" />
import fs from 'node:fs';
import path from 'node:path';
import { axe } from 'vitest-axe';
import { describe, it, expect } from 'vitest';

describe('Accessibility Compliance (WCAG 2.2)', () => {
  it('index.html should have zero accessibility violations', async () => {
    const html = fs.readFileSync(
      path.resolve(process.cwd(), 'index.html'),
      'utf-8',
    );
    document.documentElement.innerHTML = html;
    const results = await axe(document.body);
    if (results.violations.length > 0) {
      console.log(
        'A11Y VIOLATIONS:',
        JSON.stringify(
          results.violations.map((v) => ({
            id: v.id,
            help: v.help,
            nodes: v.nodes.map((n) => n.html),
          })),
          null,
          2,
        ),
      );
    }
    expect(results.violations.length).toBe(0);
  });
});
