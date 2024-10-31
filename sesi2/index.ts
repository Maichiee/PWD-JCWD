console.log("hello world")

let grade = 90
if(grade >= 85){
    console.log("LULUS!!!!!!")
} else {
    console.log("you only participant")
}

// type IColor = ("red" | "yellow" | "green")
let trafficlight : string = "green" 
if(trafficlight == "red"){
    console.log("stop") //untuk perumpamaan pertama
} else if(trafficlight == "yellow"){
    console.log("be careful") //jika ada banyak menggunakan else if
} else if(trafficlight == "green"){
    console.log("run")
} else{
    console.log("invalid") // else digunakan jika diakhir atau yang tidak masuk kategori
}

switch(trafficlight){
    case "red": //jangan lupa tanda titik 2 (:)
        console.log("stop")
        break //  break disini gunanya untuk memisahkan agar tidak menyatu
    case "yellow":
        console.log("be careful")
        break
    case "green":
        console.log("run")
        break
    default: // default disini sama seperti else
        console.log("invalid")
}

const stock: string = "orange"
switch (stock){
    case "orange":
        console.log("orange are $0.59 a pound")
        break
    case "mango":
    case "papaya":
        console.log("mango and papaya are $2.79 a pound")
        break // break disini yang menggabungkan mango dan papaya
    default:
        console.log("sorry, we are out of ${stock}")
}

//perbedaan if else dan switch
//if else itu lebih khusus untuk membandingkan komparansi.

//percobaan mengkonvert if else dalam swicth
switch(true){
    case grade >= 85:
        console.log("LULUS!!!!!!")
        break
    default:
        console.log("you only participant")
}

// Short Circuiting
console.log("-----------------")
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log("----------------")
console.log(true || true)
console.log(true || false)
console.log(false || false)
// dalam konteks huruf ,huruf kapital tidak sama dengan huruf kecil jadi masuknya ke FALSE

//TERNARY OPERATOR
let str : string = "Typescript"
if(str === "Typescript"){
    console.log("This is Typescript")
} else {
    console.log("This is not Typescript")
}
let result3 =(str === "Typescript" ? "This is Typescript" : "This in not Typescript") //(ini yang ternary operator mulai dari buka kurung
console.log(result3)

let value4: number = 0
let result4: number | string = value4 && "Hello"
console.log(result4)

let value5 : string = "World"
let result5: string = value5 && "Hello"
console.log(result5)

let value6 : string = "Dimas"
let result6 : string = value6 || "Guest"
console.log(result6)

