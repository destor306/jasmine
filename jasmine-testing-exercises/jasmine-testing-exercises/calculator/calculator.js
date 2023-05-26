window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
 
  const loan_val =  document.getElementById("loan-amount");
  loan_val.value = 10000;
  const years_val =  document.getElementById("loan-years");
  years_val.value = 5;
  const rate_val =  document.getElementById("loan-rate");
  rate_val.value = 5;

  const values = getCurrentUIValues();

  const monthly_val = document.getElementById("monthly-payment");
  monthly_val.innerHTML = calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = values.rate /100/12;
  console.log("values: ", values);
  let result =   (values.amount * (i))/(1- Math.pow((1+i),-(values.years*12)));
  let output = result.toFixed(2);
  output.toString();
  return output;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthly_val = document.getElementById("monthly-payment");
  monthly_val.innerHTML = monthly;
}
