const makeCase = function(input, style) {
  let stringOut = "";
  let firstStyle;
  let secondStyle;
  if (typeof style === "object") {
    firstStyle = style[0];
    secondStyle = style[1];
  } else {
    firstStyle = style;
    secondStyle = false;
  }

  //remove or change spaces
  //according to the character given as 2nd argument
  const changeSpace = function(str, char) {
    let complete = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        complete += char;
      } else {
        complete += str[i];
      }
    }
    return complete;
  };

  //capitalize each word
  //provide a truthy value as 2nd argument to capitalize the first word
  //otherwise capitalization starts from 2nd word
  const capitalizeWords =  function(str, truthy) {
    let complete = "";
    let i = 0;
    if (truthy) {
      complete += str[0].toUpperCase();
      i++;
    }
    while (i < str.length) {
      if (str[i] === " ") {
        complete += str[i];
        i++;
        complete += str[i].toUpperCase();
        i++;
      } else {
        complete += str[i];
        i++;
      }
    }
    return complete;
  };
  //capitalize vowels or consonants
  //provide a falsely value as the 2nd argument
  //to capitalize consonants
  const capitalizeVowels = function(str, truthy = true) {
    let complete = "";
    let regEx = /a|e|i|o|u/;
    let check;
    for (let i = 0; i < str.length; i++) {
      if (truthy) check = regEx.test(str[i]);
      else check = !regEx.test(str[i]);

      if (check) {
        complete += str[i].toUpperCase();
      } else {
        complete += str[i];
      }
    }
    return complete;
  };

  switch (firstStyle) {

  case "camel":
    return changeSpace(capitalizeWords(input), "");
  case "pascal":
    return changeSpace(capitalizeWords(input, true), "");
  case "snake":
    return changeSpace(input, "_");
  case "kebab":
    return changeSpace(input, "-");
  case "title":
    stringOut = capitalizeWords(input, true);
    break;
  case "vowel":
    stringOut = capitalizeVowels(input);
    break;
  case "consonant":
    stringOut = capitalizeVowels(input, false);
    break;
  case "upper":
    stringOut = input.toUpperCase();
    break;
  case "lower":
    stringOut = input.toLowerCase();
    break;

  } //end switch statement

  if (secondStyle === "snake") {
    return changeSpace(stringOut, "_");
  } else if (secondStyle === "kebab") {
    return changeSpace(stringOut, "-");
  }

  return stringOut;

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));