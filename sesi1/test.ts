//nomor 1
const myLength : number = 5
const myWidht : number = 3
console.log (myLength * myWidht)

//nomor 2
const myLength2 : number = 5
const myWidht2 : number = 3
console.log (myLength2 + myLength2 + myWidht2 + myWidht2 )

//nomor 3
const myRadius : number = 5
const myPI : number = 3.14
console.log(2 * myRadius) // diameter
console.log(2 * myPI * myRadius) // keliling
console.log(myPI * myRadius * myRadius) // area


//nomor 4
const myA : number = 80
const myB : number = 65
console.log(180 - (myA+myB))

//nomor 5 bagian a
let myDays : number = 400
let sisaYear : number = myDays % 365 
let bagiYear : number = Math.round(myDays / 365) //mencari tahu berapa tahun dalam hitungan hari
let sisaMonth : number = sisaYear % 30
let bagiMonth : number = Math.round(sisaYear / 30) // mencari tahu berapa bulan dalam hitungan hari

console.log(`${bagiYear} year, ${bagiMonth} month, ${sisaMonth} day`)

//nomor 5 bagian b
let myDay : number = 366
let sisaYears : number = myDay % 365 
let bagiYears : number = Math.round(myDay / 365) //mencari tahu berapa tahun dalam hitungan hari
let sisaMonths : number = sisaYears % 30
let bagiMonths : number = Math.round(sisaYears / 30) // mencari tahu berapa bulan dalam hitungan hari

console.log(`${bagiYears} year, ${bagiMonths} month, ${sisaMonths} day`)

//nomor 6
let myDate1 = new Date("2022/01/20")
let myDate2 = new Date("2022/01/22")
let diff = myDate2.getDay() - myDate1.getDay()

console.log(diff)


