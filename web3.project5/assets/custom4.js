// -----------Date
let time = new Date();
console.log(time);
time = new Date(100000000);
console.log(time);
time = new Date("2015 11 5 02:18:25");
console.log(time);
time = new Date(2016, 12, 8);
console.log(time);
const x = time.constructor();
console.log(x);
const time1 = new Date();
let day1 = time1.getDate();
console.log(day1);
const time2 = new Date("july 21, 1983 01:15:00.260");
let day2 = time2.getDate();
console.log(day2);
day1 = time1.getDay();
console.log(day1);
day2 = time2.getDay();
console.log(day2);
day1 = time1.getFullYear();
console.log(day1);
day2 = time2.getFullYear();
console.log(day2);
day1 = time1.getHours();
console.log(day1);
day2 = time2.getHours();
console.log(day2);
day1 = time1.getMilliseconds();
console.log(day1);
day2 = time2.getMilliseconds();
console.log(day2);
day1 = time1.getMinutes();
console.log(day1);
day2 = time2.getMinutes();
console.log(day2);
day1 = time1.getMonth();
console.log(day1);
day2 = time2.getMonth();
console.log(day2);
// -----------
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
const clock = new Date();
let hour = addZero(clock.getHours());
let minute = addZero(clock.getMinutes());
let second = addZero(clock.getSeconds());
let clockShow = hour + ":" + minute + ":" + second;
console.log(clockShow);
// ----------------
const minute1 = 1000 * 60;
const hour1 = minute1 * 60;
const day = hour1 * 24;
const year = day * 365;
const d = new Date();
let years = Math.round(d.getTime() / year);
console.log(years);
console.log(clock.getTimezoneOffset());
// --------------
day1 = time1.getUTCDate();
console.log(day1);
day2 = time2.getUTCDate();
console.log(day2);
day1 = time1.getUTCDay();
console.log(day1);
day2 = time2.getUTCDay();
console.log(day2);
day1 = time1.getUTCFullYear();
console.log(day1);
day2 = time2.getUTCFullYear();
console.log(day2);
day1 = time1.getUTCHours();
console.log(day1);
day2 = time2.getUTCHours();
console.log(day2);
day1 = time1.getUTCMilliseconds();
console.log(day1);
day2 = time2.getUTCMilliseconds();
console.log(day2);
day1 = time1.getUTCMinutes();
console.log(day1);
day2 = time2.getUTCMinutes();
console.log(day2);
day1 = time1.getUTCMonth();
console.log(day1);
day2 = time2.getUTCMonth();
console.log(day2);
day1 = time1.getUTCMinutes();
console.log(day1);
day2 = time2.getUTCMinutes();
console.log(day2);
day1 = time1.getUTCSeconds();
console.log(day1);
day2 = time2.getUTCSeconds();
console.log(day2);
// -----------
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
const clock1 = new Date();
let hour2 = addZero(clock.getUTCHours());
let minute2 = addZero(clock.getUTCMinutes());
let second2 = addZero(clock.getUTCSeconds());
let clockShow2 = hour2 + ":" + minute2 + ":" + second2;
console.log(clockShow2);
// -------------
const minute3 = 1000 * 60;
const hour3 = minute3 * 60;
const day3 = hour3 * 24;
const year3 = day3 * 365;
let years3 = Math.round(Date.now() / year3);
console.log(years3);
// -------------
let ms = Date.parse("March 21, 2012");
console.log(ms);
// ---------------
Date.prototype.myMonth = function () {
  if (this.getMonth() == 0) {
    return "January";
  }
  if (this.getMonth() == 1) {
    return "February";
  }
  if (this.getMonth() == 2) {
    return "March";
  }
  if (this.getMonth() == 3) {
    return "April";
  }
  if (this.getMonth() == 4) {
    return "May";
  }
  if (this.getMonth() == 5) {
    return "June";
  }
  if (this.getMonth() == 6) {
    return "July";
  }
  if (this.getMonth() == 7) {
    return "August";
  }
  if (this.getMonth() == 8) {
    return "September";
  }
  if (this.getMonth() == 9) {
    return "October";
  }
  if (this.getMonth() == 10) {
    return "November";
  }
  if (this.getMonth() == 11) {
    return "December";
  }
};
console.log(clock.myMonth());
// ---------------
time1.setDate(15);
console.log(time1);
time2.setDate(15);
console.log(time2);
time1.setFullYear(2021);
console.log(time1);
time2.setFullYear(2021);
console.log(time2);
time1.setHours(10);
console.log(time1);
time2.setHours(12);
console.log(time2);
time1.setMilliseconds(420);
console.log(time1);
time2.setMilliseconds(192);
console.log(time2);
time1.setMinutes(5);
console.log(time1);
time2.setMinutes(20);
console.log(time2);
time1.setMonth(3);
console.log(time1);
time2.setMonth(4);
console.log(time2);
time1.setSeconds(24);
console.log(time1);
time2.setSeconds(46);
console.log(time2);
console.log(time1.setTime(102810630));
// -------------------
time1.setUTCDate(15);
console.log(time1);
time2.setUTCDate(15);
console.log(time2);
time1.setUTCFullYear(2021);
console.log(time1);
time2.setUTCFullYear(2021);
console.log(time2);
time1.setUTCHours(10);
console.log(time1);
time2.setUTCHours(12);
console.log(time2);
time1.setUTCMilliseconds(420);
console.log(time1);
time2.setUTCMilliseconds(192);
console.log(time2);
time1.setUTCMinutes(5);
console.log(time1);
time2.setUTCMinutes(20);
console.log(time2);
time1.setUTCMonth(3);
console.log(time1);
time2.setUTCMonth(4);
console.log(time2);
time1.setUTCSeconds(24);
console.log(time1);
time2.setUTCSeconds(46);
console.log(time2);
// --------------------
console.log(clock.toDateString());
console.log(clock.toISOString());
console.log(clock.toJSON());
console.log(clock.toLocaleDateString());
console.log(clock.toLocaleTimeString());
console.log(clock.toLocaleString());
console.log(clock.toString());
console.log(clock.toTimeString());
console.log(clock.toUTCString());
let ms1 = Date.UTC(2020, 12, 30);
console.log(ms1);
console.log(clock.valueOf());
