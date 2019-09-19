const calculateChange = function(total, cash) {
  let denominations = {
    "twenties" : 0,
    "tens" : 0,
    "fives" : 0,
    "toonies": 0,
    "loonies": 0,
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0
  };
  let change = cash - total;

  while (change > 0) {
    if (change >= 2000) {
      denominations.twenties += 1;
      change -= 2000;
    } else if (change >= 1000) {
      denominations.tens += 1;
      change -= 1000;
    } else if (change >= 500) {
      denominations.fives += 1;
      change -= 500;
    } else if (change >= 200) {
      denominations.toonies += 1;
      change -= 200;
    } else if (change >= 100) {
      denominations.loonies += 1;
      change -= 100;
    } else if (change >= 25) {
      denominations.quarters += 1;
      change -= 25;
    } else if (change >= 10) {
      denominations.dimes += 1;
      change -= 10;
    } else if (change >= 5) {
      denominations.nickels += 1;
      change -= 5;
    } else {
      denominations.pennies += 1;
      change -= 1;
    }
  }

  for (let prop in denominations) {
    if (denominations[prop] === 0) {
      delete denominations[prop];
    }
  }

  return denominations;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));