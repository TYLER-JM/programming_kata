// takes in a URL encoded string and returns an object with the appropriate information

const urlDecode = function(text) {
  let objComplete = {};
  let regex = /%20/g;
  let objPairs = text.split("&");
  for (let i = 0; i < objPairs.length; i++) {
    let splitPairs = objPairs[i].split("=");
    if (regex.test(splitPairs[0]) || regex.test(splitPairs[1])) {
      objComplete[splitPairs[0].replace(regex, " ")] = splitPairs[1].replace(regex, " ");
    } else {
      objComplete[splitPairs[0]] = splitPairs[1];
    }
  }
  return objComplete;
};