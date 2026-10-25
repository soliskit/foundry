import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const documents = {
  'docs/charter.md': '# Charter',
  'docs/roadmap.md': '# Roadmap',
  'docs/how-it-works.md': '# How It Works',
  'DECISIONS.md': '# Decision Log',
  'docs/evidence-record.md': '# Evidence Record',
  'REQUIREMENTS.md': '# Requirements',
};

for (const [file, heading] of Object.entries(documents)) {
  test(`document shell: ${file}`, async () => {
    const content = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    assert.ok(content.startsWith(`${heading}\n`), 'expected document heading');
    assert.ok(content.trim().length > heading.length, 'expected document structure');
  });
}
