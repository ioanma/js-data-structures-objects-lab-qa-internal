// Write your solution in this file!
var driver = {
  key: "value",
}

function updateDriverWithKeyAndValue(driver, key, value) {
  var newDriver = {...driver};
  newDriver.key = key;
  newDriver.value = value;
  return newDriver;
}