const makeTestFn = (fns) => (cb) => {
  Promise.all(fns).then(() => {
    cb();
  });
};

describe("Out of Order Tests", () => {
  it(
    "3",
    makeTestFn([
      new Promise((cb) => {
        setTimeout(() => {
          console.log(3);
          expect(3).toBe(3);
          cb();
        }, 2000);
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
        }, 1000);
      }),
    ])
  );
});
