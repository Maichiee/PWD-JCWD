//nomor 1
var myLength = 5;
var myWidht = 3;
console.log(myLength * myWidht);
//nomor 2
var myLength2 = 5;
var myWidht2 = 3;
console.log(myLength2 + myLength2 + myWidht2 + myWidht2);
//nomor 3
var myRadius = 5;
var myPI = 3.14;
console.log(2 * myRadius); // diameter
console.log(2 * myPI * myRadius); // keliling
console.log(myPI * myRadius * myRadius); // area
//nomor 4
var myA = 80;
var myB = 65;
console.log(180 - (myA + myB));
//nomor 5 bagian a
var myDays = 400;
var sisaYear = myDays % 365;
var bagiYear = Math.round(myDays / 365); //mencari tahu berapa tahun dalam hitungan hari
var sisaMonth = sisaYear % 30;
var bagiMonth = Math.round(sisaYear / 30); // mencari tahu berapa bulan dalam hitungan hari
console.log("".concat(bagiYear, " year, ").concat(bagiMonth, " month, ").concat(sisaMonth, " day"));
//nomor 5 bagian b
var myDay = 366;
var sisaYears = myDay % 365;
var bagiYears = Math.round(myDay / 365); //mencari tahu berapa tahun dalam hitungan hari
var sisaMonths = sisaYears % 30;
var bagiMonths = Math.round(sisaYears / 30); // mencari tahu berapa bulan dalam hitungan hari
console.log("".concat(bagiYears, " year, ").concat(bagiMonths, " month, ").concat(sisaMonths, " day"));
//nomor 6
var myDate1 = new Date("2022/01/20");
var myDate2 = new Date("2022/01/22");
var diff = myDate2.getDay() - myDate1.getDay();
console.log(diff);
