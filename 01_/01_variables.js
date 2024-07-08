const accountId = 235841; //can not be changed
let accountEmail = "@gmail.com";// can be change with scoop
var accountPassword = "12534" // can be changed all the time, prefer not to use the bz of issue in block & function scoop
accountCity = "Lahore"; // an other way to assign variable, prefer not to use this
let accountState;// can be used, but would return undefined, as it is undefinded

console.log(accountId); // to log one const/variable
console.table([accountId, accountEmail, accountPassword, accountCity,  accountState]);// to log more then one variable, will show index as well