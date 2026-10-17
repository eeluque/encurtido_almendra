import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { test } from 'node:test';

const require = createRequire(import.meta.url);
const pluginRequire = createRequire(require.resolve('@next/eslint-plugin-next'));
const { getRootDirs } = pluginRequire('./utils/get-root-dirs.js');

test('Next.js root directory matching works with the glob replacement', () => {
  const root = mkdtempSync(path.join(tmpdir(), 'next-lint-glob-'));
  try {
    for (const name of ['web', 'admin']) {
      mkdirSync(path.join(root, name));
    }
    writeFileSync(path.join(root, 'file.txt'), 'not a directory');
    const normalized = root.replaceAll('\\', '/');
    const match = (rootDir) => getRootDirs({
      cwd: root,
      settings: { next: { rootDir } },
    }).map((dir) => path.basename(dir)).sort();

    assert.deepEqual(getRootDirs({ cwd: root, settings: {} }), [root]);
    assert.deepEqual(match(`${normalized}/*`), ['admin', 'web']);
    assert.deepEqual(match(`${normalized}/{web,admin}`), ['admin', 'web']);
    assert.deepEqual(match([`${normalized}/web`, `${normalized}/admin`]), ['admin', 'web']);
    assert.deepEqual(match(`${normalized}/missing-*`), []);
    assert.deepEqual(match(`${root}\\*`), ['admin', 'web']);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('the esbuild-kit transform API works with patched esbuild', async () => {
  const { transform } = require('@esbuild-kit/core-utils');
  const result = await transform('const value: number = 42; export { value };',
    path.join(tmpdir(), 'dependency-smoke.ts'));
  assert.match(result.code, /42/);
  assert.doesNotMatch(result.code, /: number/);
});

test('Tailwind typography processes selectors with the patched parser', () => {
  const typographyRequire = createRequire(require.resolve('@tailwindcss/typography'));
  const parser = typographyRequire('postcss-selector-parser');
  const selectors = [];
  parser((root) => root.walkClasses((node) => selectors.push(node.value)))
    .processSync('.prose :where(h1, h2):not(:where(.not-prose, .not-prose *))');
  assert.deepEqual(selectors, ['prose', 'not-prose', 'not-prose']);
  const { commonTrailingPseudos } = typographyRequire('./utils.js');
  assert.deepEqual(commonTrailingPseudos('h1::before, h2::before'),
    ['::before', 'h1, h2']);
  assert.deepEqual(commonTrailingPseudos('h1::before, h2::after'),
    [null, 'h1::before, h2::after']);
});
