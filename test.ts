function isPalindrome(x: number): boolean {
  let stringNumber: string = x.toString();
  let numberArray = stringNumber.split("");
  let reversedNumber = numberArray.reverse().toString().replace(/[,]/g, "");
  let isPalindrome: boolean = stringNumber === reversedNumber;
  return isPalindrome;
}

function kthPalindrome(queries: number[], intLength: number): number[] {
  let arrayResult: number[] = [];
  let fullArray: number[] = [];
  let startCount: number | string = intLength > 1 ? "1" : "0";
  let endCount: number | string;
  let count: number = 0;
  if (intLength > 1) {
    do {
      count++;
      startCount = startCount.concat("0");
    } while (count !== intLength - 1);
  }
  endCount = intLength > 1 ? startCount.concat("0") : "10";
  startCount = parseInt(startCount);
  endCount = parseInt(endCount);
  do {
    startCount++;
  } while (!isPalindrome(startCount));


  for (let i = 0; i < Math.floor(endCount / 10); i++) {
    let increment =  (i % 10) == 0 ? 11 : 10;
    startCount += increment;
    if (isPalindrome(startCount)) {
    startCount < endCount && fullArray.push(startCount);
    }
  }

  queries.forEach((el) => {
    fullArray[el - 1]
      ? arrayResult.push(fullArray[el - 1])
      : arrayResult.push(-1);
  });
  console.log(fullArray);
  console.log(arrayResult);
  return arrayResult;
}
kthPalindrome([1, 9, 5, 2, 4, 3], 3);

// kthPalindrome([659108523,547414705,89,81,4,346605675,12,355852667,34,781116116],7)
