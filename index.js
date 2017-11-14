const driver={}

function updateDriverWithKeyAndValue(driver, key, value) {

  let newDriver = { ...driver };

  newDriver[key] = value;

  return newDriver;

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}


function deleteFromDriverByKey(driver, key) {
  //const newDriver =  Object.assign({}, driver);
  let newDriver = { ...driver };
  delete newDriver[key];
  return newDriver
}

function destructivelyDeleteFromdriverByKey(driver, name){
let newDriver = destructivelyDeleteFromDriverByKey(driver, driver, name);
return newDriver;
return driver
}
