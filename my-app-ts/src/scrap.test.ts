type Example = "big" | "medium" | "small";

test.each<Example>(["big", "medium", "small"])(
  "simple single test (%s)",
  (myNumber) => {
    //do something
    //expect something
    //expect(myNumber).toBeLessThan(9);
  }
);
