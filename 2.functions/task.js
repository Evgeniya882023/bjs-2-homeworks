function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 10; 
  for (let i=0; i < arr.length; i++){
    if (i > max) {
      max = i;
    }
    else if (i < min){
     min = i;
    }
    sum+=arr[i];
  }
  let avg = parseFloat((sum/arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
  }

function summElementsWorker(...arr) {
let sum = 0;
for (let i=0; i < arr.length; i++){
  sum+=arr[i];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i=0; i < arr.length; i++){
    if (i > max) {
      max = i;
    }
    else if (i < min){
     min = i;
    }
}
return max-min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0; i < arr.length; i++){
    if (i%2==0) {
      sumEvenElement+= 1;
    }
    else if (i%2!=0){
      sumOddElement+=1;
    }
    return sumEvenElement-sumOddElement;
}
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement =0;
  for (let i=0; i < arr.length; i++){
    if (i%2==0) {
      sumEvenElement+= i;
    }
    else if (i%2!=0){
      countEvenElement+=1;
    }
    return sumEvenElement/countEvenElement;
}

}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i=0; i < arrOfArr.length; i++){
  let arrOfArrSpread = [...arrOfArr];
  func(i);
  const resultFunc = func;
  }
  if (resultFunc > maxWorkerResult) {
    maxWorkerResult = resultFunc; 
  }
  return maxWorkerResult;
}
