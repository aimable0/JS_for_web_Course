console.log("Hello vvorld\n");


// Let's do some stuff with dateobject


const now = new Date()
console.log(now);

console.log(now.getFullYear());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getHours());
// console.log(now.getDate());

// time stamp.
console.log(now.getTime());


// Let's compare today and tomorrow
console.log("\n");
console.log("\n");

const before  = new Date('August 06 2025 00:00:00');

const diff = now.getTime() - before.getTime();

// Let's try using datestring
console.log(before.toDateString());
console.log(now.toDateString());

console.log("Difference:", diff);
// seconds
let sec = Math.round(diff / 1000);
console.log("Sec: ", sec);

let min = Math.round(sec / 60);
console.log("Min: ", min);

let hours = Math.round(min / 60);
console.log("Hours: ", hours);

let day = Math.round(hours /24);
console.log(day, "days ago");


console.log("\n");
console.log("\n");
// Let's get a time stamp from a date and do
const beforeYesterday = new Date('August 05 2025 00:00:00');
console.log(beforeYesterday.toDateString());

const timeStampY = beforeYesterday.getTime();
console.log(timeStampY);

// from timestamp to date
const beforeYesterDayDate = new Date(timeStampY);
console.log(beforeYesterDayDate.toDateString());



console.log("\n");
// Let's build a digital clock
// format HH:MIN:SEC

let HH = now.getHours();
console.log("HH:", HH);

let MIN = now.getMinutes();
console.log("MIN:", MIN);

let SECS = now.getSeconds();
console.log("SEC:", SECS);

console.log(`${HH}:${MIN}:${SECS}`);