// expecting time to be a string in the format like '8:15' or '12:30'

const numMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }
  if (time === "12:00") {
    return "midday";
  }
  const [hour, min] = time.split(":");

  const strHour = numMap[hour];

  if (min == "00") {
    return `${strHour} o'clock`;
  }

  const parsedMin = parseInt(min, 10);

  if (parsedMin <= 30) {
    if (parsedMin === 30) {
      return `half past ${strHour}`;
    }

    if (parsedMin === 15) {
      return `quarter past ${strHour}`;
    }

    return `${numMap[min]} past ${strHour}`;
  }

  const parsedHour = parseInt(hour, 10) + 1;
  const strParsedHour = numMap[parsedHour];

  if (parsedMin > 30) {
    if (parsedMin === 45) {
      return `quarter to ${strParsedHour}`;
    }

    return `${numMap[60 - parsedMin]} to ${strParsedHour}`;
  }

  return "";
}

module.exports = { convertTimeToWords };
