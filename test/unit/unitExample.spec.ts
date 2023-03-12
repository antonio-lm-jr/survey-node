import { describe, expect, test } from 'vitest';

describe('Main test', () => {
  test.skip('sum two numbers', () => {
    expect(1 + 5).toBe(6)
  });
})