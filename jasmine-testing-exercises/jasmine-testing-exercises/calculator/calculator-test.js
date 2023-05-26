
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10000, years:5,rate:5})).toEqual("188.71");
  expect(calculateMonthlyPayment({amount:200000, years:5,rate:5})).toEqual("3774.25");

  // ...
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:200000, years:5,rate:5}).toString()).toMatch(/^\d+\.\d\d$/)
  // ..
});

/// etc
