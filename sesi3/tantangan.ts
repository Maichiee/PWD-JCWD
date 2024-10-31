console.log("HELLO THURSDAY")

//looping dalam looping 
let input = 5
let result = ""
for(let i = 1; i <= input; i++){
    result += "*" // ini loopingan untuk mendapatkan jumlah variable yang dilooping dala 1 baris
}
for(let j = 1; j <= input; j++){
    console.log(result)
} // ini loopingan untung melooping console.log

console.log("------------------------")

let submit = 5
let hasil = ""
for(let k = 1; k <= submit; k++){
    hasil += "*"
    console.log(hasil)
}
console.log("----------------------")
for(let l = 0; l <= submit; l++){
    let hasil2 = ""  // declare and assign ""
    hasil2 += "*"  // tambah / add "*"
    console.log(hasil2) // display *
}

//console.log(a)
//console.log(a.length) // ini untuk melihat berapa jumlah variabel

let a = "a"
a = a + "b"
console.log(a)
a += "c"
a += "d"
a += "ef"
a += "gh"
console.log(a)
console.log(a[3])
console.log(a.length)

for(let i = 4; i < a. length; i++){
    console.log(a[i])
}