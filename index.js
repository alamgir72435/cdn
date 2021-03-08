// input type text to number convirt
const textToNumber = (e) => {
  e.target.value = e.target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
};

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
