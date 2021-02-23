// input type text to number convirt
const textToNumber = (e) => {
  e.target.value = e.target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
};
