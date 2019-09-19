let whiteQueen = [0, 5];
let blackQueen = [5, 0];
const generateBoard = function(whiteQueen, blackQueen) {
  let [x1, y1] = whiteQueen;
  let [x2, y2] = blackQueen;
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  board[y1][x1] = 1;
  board[y2][x2] = 1;
  return board;
};

const queenThreat = function(boardState) {
  let x1 = -1;
  let y1 = 0;
  let x2 = -1;
  let y2 = 0;
  let i = 0;
  //get coordinates of first queen
  while (i < boardState.length) {
    x1 = boardState[i].indexOf(1);
    if (x1 >= 0) break;
    i++;
  }
  y1 = i;

  //check to see if both queens are in the same array
  x2 = boardState[i].lastIndexOf(1);
  //otherwise continue getting coordinates for 2nd queen
  if (x2 === x1) {
    i++;
    x2 = -1;
    while (i < boardState.length) {
      x2 = boardState[i].indexOf(1);
      if (x2 >= 0) break;
      i++;
    }
  }
  y2 = i;
  //check if the 2nd queen is within range...
  //check horizontally and vertically
  if (x1 === x2 || y1 === y2) return true;
  //check diagonally from bottom-left to top-right
  if (x1 + y1 === x2 + y2) return true;

  let posX = x1 - 1;
  let posY = y1 - 1;
  //check diagonally up and left
  while (posX >= 0 && posY >= 0) {
    if (boardState[posY][posX] === 1) return true;
    posX--;
    posY--;
  }

  posX = x1 + 1;
  posY = y1 + 1;
  //check diagonally down and right;
  while (posX <= boardState.length - 1 && posY <= boardState.length - 1) {
    if (boardState[posY][posX] === 1) return true;
    posX++;
    posY++;
  }

  return false;
};
console.log(generateBoard(whiteQueen, blackQueen));
console.log(queenThreat(generateBoard(whiteQueen, blackQueen)));