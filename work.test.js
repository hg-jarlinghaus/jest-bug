describe("Working tests", () => {
  it("1", (cb) => {
    Promise.all([
      new Promise((aa) => {
        setTimeout(() => {
          console.log(1);
          expect(1).toBe(1);
          aa();
        }, 2000);
      }),
    ]).then(() => {
      cb();
    });
  });
  it("2", (cb) => {
    Promise.all([
      new Promise((aa) => {
        setTimeout(() => {
          console.log(2);
          expect(2).toBe(2);
          aa();
        }, 1000);
      }),
    ]).then(() => {
      cb();
    });
  });
});
