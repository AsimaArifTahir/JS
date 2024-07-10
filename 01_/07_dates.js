// DATE

const myDate = new Date() // is an object
/*console.log(myDate.toDateString()) // full date with day, Wed Jul 10 2024
// Same Answer, time and date both in num, 2024-07-10T08:16:09.033Z (GMT+0000 (Coordinated Universal Time))
console.log(myDate.toISOString())
console.log(myDate.toJSON())
// Same Answer, shows date, 7/10/2024
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleString()) // time and date both, 7/10/2024, 8:16:09 AM (GMT+0000 (Coordinated Universal Time))
console.log(myDate.toLocaleTimeString()) // time only 8:16:09 AM (GMT+0000 (Coordinated Universal Time))
console.log(myDate.toString()) // full date with day and time, Wed Jul 10 2024 08:18:51 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString()) // 08:20:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()) //Wed, 10 Jul 2024 08:20:15 GMT
console.log(typeof myDate)
*/

/*let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());
let myCreateDate = new Date(2023,0,23,5,3)//console.log(myCreateDate.toLocaleString());
let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString()); 
*/

let myTimeStamp = Date.now() // now will get you todays date

// console.log(myTimeStamp); gets time in millisecond
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); will get time in seconds to compare with other times

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 so the user will not get confused as the code will show 0 for first month
console.log(newDate.getDay()); 

// `${newDate.getDay()} and the time `, to give date in an sting

newDate.toLocaleString('default'// inerternationlization, in string format, { // you define an object in it
    // add properties to further customize the date
    weekday: "long",
    
}) // 2 arguments, 1st internationalization, 2nd customization










