function convertToTitle(columnNumber: number): string {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  if (columnNumber > 26) {
    let resto = columnNumber % 26;
    let counter = 0;
    let indexArray = [0];
    let result = "";
    columnNumber = columnNumber - resto;
    let cycles = columnNumber / 26;
    let cyclesCounter = 0;
    while (resto ? cyclesCounter <= cycles : cyclesCounter < cycles){
      counter += 13 ;
      indexArray[0] = counter;

      if (indexArray.includes(26)) {
        console.log("indexArray initial",indexArray)
        cyclesCounter++;
        counter = 0;
        while(indexArray.includes(26)){
          let index = indexArray.findIndex((el) => {
            return el === 26;
          });
          indexArray[index] = 0;
          console.log("indexArray mod:",indexArray)
          if (indexArray[index + 1] === undefined) {
            console.log("und")
            indexArray.push(0);
            console.log("indexArray und",indexArray)
          } else {
            console.log("def")
            indexArray[index + 1] += 1;
            console.log("indexArray def",indexArray)
          }
        }
       
      }
    } 
    indexArray[0]+= resto
    result = indexArray
      .map((el) => {
        letters[el]
      }) 
      .reverse()
      .toString()
      .replace(/[,]+/g, "");
      console.log(indexArray.reverse())
      console.log(result)
      console.log(String.fromCharCode(65))
    return result;
  } else {
    return letters[columnNumber - 1];
  }
}
convertToTitle(1000);
