const squareCode = function(message) {
  let noSpace = "";
  let coded = "";
  let sqrt = Math.ceil(Math.sqrt(noSpace.length));
  
  //remove the spaces
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      i++;
      noSpace += message[i];
    } else {
      noSpace += message[i];
    }
  }
  
  //convert to square code
  for (let j = 0; j < sqrt; j++) {
    let indx = j;
    let k = 0;
    while (indx < noSpace.length) {
      coded += noSpace[indx];
      k += sqrt;
      indx = j + k;
    }
    if (j < sqrt - 1) coded += " ";
  }
  
  return coded;
};