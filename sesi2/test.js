//nomor 1
var myNumber = 25;
if (myNumber % 2) {
    console.log("Odd Number");
}
else {
    console.log("Even Number");
}
if (myNumber % 2 == 1) { // SOLUSI YANG LEBIH BAIK DARI DIATAS
    console.log("Odd Number");
}
else {
    console.log("Even Number");
}
//nomor 2 () (UNTUK MENCARI BILANGAN PRIMA)
var res = true;
var num = 19;
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        res = false;
        break;
    }
}
console.log(res == true ? "prime" : "not prime");
//nomor 3
var res2 = 0;
for (var i = 1; i <= 5; i++) {
    console.log("hallo");
    res2 = res2 + i;
}
console.log(res2);
//nomor 4 
var res3 = 1;
for (var i = 1; i <= 4; i++) {
    console.log("hallo");
    res3 = res3 * i;
}
console.log(res3);
//nomor 5
var previous_number = 0; // dimulai dari 0 karena ini nomor sebelumnya
var current_number = 1; // 1 disini adalah nomor sekarang
console.log(" i = ", 1, " current_number = ", current_number);
for (var i = 2; i <= 15; i++) { // i nya dimuali dari 2 karena  0 dan 1 sudah terlewati.
    var temp = previous_number;
    previous_number = current_number;
    current_number = current_number + temp;
    console.log(" i = ", i, "current_number = ", current_number);
}
//bonus soal algoritma
var kopi = 10;
var jus = 4;
var kosong = 0;
kosong = kopi;
kopi = jus;
jus = kosong;
console.log(kopi);
console.log(jus);
