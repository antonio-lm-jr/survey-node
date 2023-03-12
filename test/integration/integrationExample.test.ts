import { describe, expect, test } from 'vitest';

describe('EE', () => {
  test('sum 3 numbers..', () => {
    expect(1 + 5 + 1).toBe(7)
  });

  test('sum 4 numbers..', () => {
    expect(1 + 5 + 1 + 2).toBe(9)
  })
})