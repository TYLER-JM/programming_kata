const blocksAway = function(directions) {
  let blocksNorth = 0;
  let blocksEast = 0;
  let orientation = "northEast";
  let finalOutput = {
    east: 0,
    north: 0,
  };

  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] === "right") {
      switch (orientation) {
      case "north":
      case "northEast":
        blocksEast += directions[i + 1];
        orientation = "east";
        break;
      case "east":
        blocksNorth -= directions[i + 1];
        orientation = "south";
        break;
      case "south":
        blocksEast -= directions[i + 1];
        orientation = "west";
        break;
      case "west":
        blocksNorth += directions[i + 1];
        orientation = "north";
        break;
      } //end switch
    } else {
      switch (orientation) {
      case "east":
      case "northEast":
        blocksNorth += directions[i + 1];
        orientation = "north";
        break;
      case "north":
        blocksEast -= directions[i + 1];
        orientation = "west";
        break;
      case "west":
        blocksNorth -= directions[i + 1];
        orientation = "south";
        break;
      case "south":
        blocksEast += directions[i + 1];
        orientation = "east";
        break;
      } //end switch
    } //end else
  } //end for
  
  finalOutput.east = blocksEast;
  finalOutput.north = blocksNorth;
  return finalOutput;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));