import {expect, test} from '@jest/globals';
import { fetchUser, subtract, sum } from "./index";

test('Should return 8 if sum() input is (3, 5)', () => {
    const actual = sum(3, 5);
    const expected = 8;

    expect(actual)
      .toBe(expected);
  }
);

test('Should be greater than 5 if sum() input is (2, 4)', () => {
  const actual = sum(2, 4);
  const expected = 5;

  expect(actual)
    .toBeGreaterThan(expected);
}
);

test('Should return -2 if subtract() input is (3, 5)', () => {
    const actual = subtract(3, 5);
    const expected = -2;

    expect(actual)
      .toBe(expected);
  }
);

test('Should load user', async () => {
    const user = await fetchUser();
    const actual = user.name;
    const expected = 'Jhon Doe';

    expect(actual)
      .toBe(expected);
  }
);
