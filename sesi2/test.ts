//nomor 1
let myNumber : number = 25
if(myNumber % 2 ){
    console.log("Odd Number")
} else{
    console.log("Even Number")
}

if(myNumber % 2 == 1 ){ // SOLUSI YANG LEBIH BAIK DARI DIATAS
    console.log("Odd Number")
} else{
    console.log("Even Number")
}

//nomor 2 () (UNTUK MENCARI BILANGAN PRIMA)
let res = true
let num = 19
for(let i = 2; i < num; i++){
    if(num % i == 0){
        res = false
        break
    }
}

console.log(res == true ? "prime" : "not prime" )

//nomor 3
let res2 = 0
for(let i = 1; i <= 5; i++){
    console.log("hallo")
    res2 = res2 + i

}
console.log(res2)

//nomor 4 
let res3 = 1
for(let i = 1; i <= 4; i++){
    console.log("hallo")
    res3 = res3 * i

}
console.log(res3)

//nomor 5
let previous_number = 0 // dimulai dari 0 karena ini nomor sebelumnya
let current_number = 1 // 1 disini adalah nomor sekarang
console.log(" i = ", 1, " current_number = ", current_number)
for(let i = 2; i <=15 ; i++){ // i nya dimuali dari 2 karena  0 dan 1 sudah terlewati.
    let temp = previous_number
    previous_number = current_number
    current_number = current_number + temp
    console.log(" i = ", i , "current_number = ", current_number)
}

//bonus soal algoritma
let kopi = 10
let jus = 4
let kosong = 0
kosong = kopi
kopi=jus
jus=kosong

console.log(kopi)
console.log(jus)

