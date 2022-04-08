import { renderHook } from "@testing-library/react-hooks";
import useJustForTest, { User } from "../../hooks/useJustForTest";

test("show multiple examples", () => {
  const { result } = renderHook(() => useJustForTest());
  const {
    testBoolTrue,
    testAssertEquals,
    testToBeInstanceOf,
    testToHaveReturned,
    testToContainEqual,
    testToStrictEqual,
    testToBeLessThan,
    testToBeNull
  } = result.current;

  expect(testBoolTrue()).toBeTruthy();
  expect(testAssertEquals()).toEqual("same");
  expect(1).not.toBeNaN();
  expect(testToBeInstanceOf()).toBeInstanceOf(User);
  const fnTest = jest.fn(testToHaveReturned);
  fnTest();
  expect(fnTest).toHaveReturnedWith(0);
  //
  expect(testToContainEqual()).toContainEqual({ delicious: true, sour: false });
  expect(testToStrictEqual()).toStrictEqual([{ delicious: true, sour: false }]);
  expect(testToBeLessThan()).toBeLessThan(1001);
  expect(testToBeNull()).toBeNull();
});
