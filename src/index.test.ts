import {expect, test} from '@jest/globals';
import { fetchUser, mult, subtract, sum } from "./index";

test('Should return 8 if sum() input is (3, 5)', () => {
    const expected = 8;

    const actual = sum(3, 5);

    expect(actual)
      .toBe(expected);
  }
);

test('Should return -2 if subtract() input is (3, 5)', () => {
    const expected = -2;

    const actual = subtract(3, 5);

    expect(actual)
      .toBe(expected);
  }
);

test('Should return 15 if mult() input is (3, 5)', () => {
    const expected = 15;

    const actual = mult(3, 5);

    expect(actual)
      .toBe(expected);
  }
);

test('Should load user', async () => {
    const expected = 'Jhon Doe';

    const { name } = await fetchUser();

    expect(name)
      .toBe(expected);
  }
);
