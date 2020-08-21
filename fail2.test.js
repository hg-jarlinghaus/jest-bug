const makeTestFn = (fns) => (cb) => {
  return Promise.all(fns).then(() => {
    cb();
  });
};
//Test timings should be ~1000ms and ~1500ms for 3 and 4 respectively,
//instead we get ~1000ms and ~500ms. More generally the timing for
//test 4 appears to be actual test 4 time - test 3 time
describe("Wrong Test Timing 2", () => {
  it(
    "3",
    makeTestFn([
      new Promise((cb) => {
        setTimeout(() => {
          console.log(3);
          expect(3).toBe(3);
          cb();
        }, 1000);
      }),
    ])
  );
  it(
    "4",
    makeTestFn([
      new Promise((cb) => {
        setTimeout(() => {
          console.log(4);
          expect(4).toBe(4);
          cb();
        }, 1500);
      }),
    ])
  );
});
