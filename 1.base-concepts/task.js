"use strict"


function solveEquation(a, b, c) {
  let arr = [];
  let x = "";
  let x1 = "";
  let discriminant = b*b-4*a*c;
  if (discriminant < 0) {
    x = arr;
  }
  else if (discriminant == 0){
    x = -b/(2*a);
    arr.push(x);
  }
  else {
    x = (-b + Math.sqrt(discriminant) )/(2*a);
    x1 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(x);
    arr.push(x1);
    
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P = percent/100/12; 
  let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let total = (monthlyPayment*countMonths).toFixed(2);
  let total1 = parseFloat(total);
  return total1;
}
calculateTotalMortgage(13, 15000, 4000, 3);