// Write your solution in this file!
var driver = {
  key: "value",
}

function updateDriverWithKeyAndValue(driver, key, value) {
  var newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  Driver[key] = value;
  return Driver;
}