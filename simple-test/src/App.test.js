import { add, total } from "./App";

// Mock function is a fake function
// that gives us a fake result
const sub = jest.fn((a, b) => a - b);

test("sub", ()=> {
  expect(sub(9, 5)).toBe(4);
  expect(sub).toHaveBeenCalledTimes(1);
  expect(sub).toBeCalledWith(9, 5);
  expect(sub(5, 2)).toBe(3);
})

// Unit test
// It only tests one thing
test("add", () => {
  const value = add(3, 6);
  expect(value).toBe(9);
});

//Integration test
//It tests things working together
test("total", () => {
    expect(total(5, 30)).toBe("$35");
})

