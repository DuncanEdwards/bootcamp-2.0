import { getFullName } from "./getFullName";

test("Get the full name ('Donald','Duck')", () => {
  const result = getFullName("Donald", "Duck");

  expect(result).toEqual("Full name: Donald Duck");
});

test("Get the full name with middle name ('Donald','Duke','Duck')", () => {
  const result = getFullName("Donald", "Duck", "Duke");

  expect(result).toEqual("Full name: Donald Duke Duck");
});

test("Get the full name with middle name blank ('Donald','','Duck')", () => {
  const result = getFullName("Donald", "Duck", "");

  expect(result).toEqual("Full name: Donald Duck");
});
