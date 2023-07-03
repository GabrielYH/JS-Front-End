function PrintMatrixSquareMatrixBasedOnInputSize(size) {
  for (let index = 0; index < size; index++) {
    let row = "";
    for (let index = 0; index < size; index++) {
      row+= size.toString() + " ";
    }
    console.log(row);
  }
}

PrintMatrixSquareMatrixBasedOnInputSize(3);
