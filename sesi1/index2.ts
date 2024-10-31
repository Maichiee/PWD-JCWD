let myName : string = "Imam  Harits Nasruddin"
let age : Number = 17
console.log (myName , age)

const hobbies : Array<string> = ["GTA V","Genshin Impact","CS 1.6"]
console.log (hobbies)

interface IPerson {
    name:string
    title:string
    age:number
}

const person : IPerson = {
    name:"Imam",
    title:"Programmer",
    age:23
}

console.log (person)

console.log(myName.split(""))
console.log(myName.split(' '))
console.log(myName.split("a"))

console.log(`Imam
Harits
Nasruddin
${myName}
`)

console.log(typeof age)
console.log(typeof myName)

console.log(typeof age.toString())

let myNumber = - 12.34
console.log(myNumber.toFixed())
console.log(parseFloat("12.34"))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)

console.log(Number.NEGATIVE_INFINITY < -1111111111111)
console.log(person.name)
console.log(Number)

console.log(Boolean(1)) //true
console.log(Boolean(0)) //false karena 0 bukan angka
console.log(Boolean(123)) //true
console.log(Boolean("")) //false
console.log(Boolean(" ")) //true karna spasi ada isinya
console.log(Boolean("abc")) //true
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false
// thruty falsy

console.log(myNumber + 90)
console.log(90 + "ab")
console.log("ab" + 90)

let myDate : Date = new Date()

console.log(new Date()) // untuk melihat tanggal di waktu sekarang
console.log(new Date(365 * 24 * 60 * 60 * 1000)) // tanggal setahun setelah 1970
console.log(new Date("2024/10/28")) // penulisan tanggal
console.log(new Date("2024/10/28 16:05:00")) //penulisan tanggal bersama jam

console.log(myDate.getDate())
console.log(myDate.getUTCDay())
console.log(myDate.getTime())

console.log(myNumber ** 2) // ** simbol pangkat

let num = -12
let res : number = num

res += 10
res += 5
console.log(res)

myNumber = 100 
myNumber += 50
myNumber += 60  // peningkatan nilai myNumber
myNumber *= 2 // myNumber = myNumber * 2
myNumber *= 3 // total my Number 1260

console.log(myNumber)
console.log(myNumber++) // (postfix) masih tetap 1260 karena plusnya dibelakang dan dijumlahkan di log selanjutnya
console.log(myNumber) //1261
console.log(++myNumber) // (prefix) 1262 dikarenakan plusnya didepan 

let num2 : number = 45
let num3 : number = 78
let num4 : string = "78"
console.log("--------------------------")
console.log(num2 == num3)
console.log(num2 <= num3)
console.log(num3 < num2)
console.log(num3 > num2)
console.log(num3 >= num2)
//console.log(num3 == num4) true
//console.log(num3 === num4) false

