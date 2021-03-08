// input type text to number convirt
const textToNumber = (e) => {
  e.target.value = e.target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
};

// Number english to Bangla number
function numEnToBn(num) {
  let newNum = num.toString();
  let numArray = newNum.split("");
  let banglaNumber = "";
  numArray[0] == "-" ? (banglaNumber += "-") : "";
  numArray.forEach((each) => {
    if (each == 1) {
      banglaNumber += "১";
    } else if (each == 2) {
      banglaNumber += "২";
    } else if (each == 3) {
      banglaNumber += "৩";
    } else if (each == 4) {
      banglaNumber += "৪";
    } else if (each == 5) {
      banglaNumber += "৫";
    } else if (each == 6) {
      banglaNumber += "৬";
    } else if (each == 7) {
      banglaNumber += "৭";
    } else if (each == 8) {
      banglaNumber += "৮";
    } else if (each == 9) {
      banglaNumber += "৯";
    } else if (each == 0) {
      banglaNumber += "০";
    } else if (each == ".") {
      banglaNumber += ".";
    } else if (each == ",") {
      banglaNumber += ",";
    } else if (each == "/") {
      banglaNumber += "/";
    }
  });

  return banglaNumber;
}

// convirt input field Date into Date Object

function convertIntoDate(date) {
  var parts = date.split("-");
  var myDate = new Date(parts[0], parts[1] - 1, parts[2]);
  return myDate.toString() === "Invalid Date" ? null : myDate;
}

// Get array of Object between two Days
function dataBetweenTwoDays(array, startDate, endDate) {
  const newArray = array.filter((obj) => {
    return obj.date >= startDate && obj.date <= endDate;
  });
  return newArray;
}
