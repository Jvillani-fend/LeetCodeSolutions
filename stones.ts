function removeTwoElements(number1:number,number2:number,array:number[]){
    let difference = number1 - number2;
    console.log(difference)
    array = array.slice(0, -2);
    array.push(difference);
    console.log(array)
    return array
}

function lastStoneWeight(stones: number[]): number {
let lastStone: number = 0;
let stoneSorted = stones.sort((a,b)=>{return a-
b});
do {
   console.log(stoneSorted)
  let firstStone: number = stoneSorted[stoneSorted.length - 1];
  let secondStone: number = stoneSorted[stoneSorted.length - 2];
  if (firstStone > secondStone) {
    stones = removeTwoElements(firstStone,secondStone,stoneSorted);
  } else {
    if (firstStone < secondStone) {
        stones = removeTwoElements(secondStone,firstStone,stoneSorted);
    } else {
      if (firstStone === secondStone) {
        stones = removeTwoElements(secondStone,firstStone,stoneSorted);  
      }
    }
  }
  stoneSorted = stones.sort((a,b)=>{return a-
    b});
//   console.log(stones)
} while (stones.length !== 1);

lastStone = stones[0];
return lastStone;
}
lastStoneWeight([8,10,4])