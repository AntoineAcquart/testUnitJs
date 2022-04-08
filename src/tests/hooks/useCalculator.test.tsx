import { renderHook } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";


test("substraction", () => {
    const { result } = renderHook(() => useCalculator());
    const { substraction } = result.current;
    expect(substraction("9", "6")).toEqual("3");
});

test("square", () => {
    const { result } = renderHook(() => useCalculator());
    const { square } = result.current;
    expect(square("9")).toEqual("3");
});
