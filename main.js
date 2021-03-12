var add = "192.168.1.1"
var addarr = add.split(".")

for (let g = 0; g <= addarr.length; g++) {
    if (addarr[g] === "") {
    console.log(add+" is Invalid IP Address")
        }
    }
if (addarr.length > 4){
    console.log(add+" is Invalid IP Address")
    addarr = false
    }


for (var a = addarr.length; a>=0; a--) {
   add1 = addarr[a]
   add2 = addarr[a+1]
   add3 = addarr[a+2]
   add4 = addarr[a+3]
}

var add1n = Number(add1)
var add2n = Number(add2)
var add3n = Number(add3)
var add4n = Number(add4)


if (add1n != Number){
    console.log(typeof add1n)
    console.log(add+" is Invalid IP Address")
    add1n = 0
}else if (add2n != Number){
    console.log(add+" is Invalid IP Address")
    add2n = 0
}else if (add3n != Number){
    console.log(add+" is Invalid IP Address")
    add3n = 0
}else if (add4n != Number){
    console.log(add+" is Invalid IP Address")
    add4n = 0
}

var add1bin = add1n.toString(2).split("")
var add2bin = add2n.toString(2).split("")
var add3bin = add3n.toString(2).split("")
var add4bin = add4n.toString(2).split("")
var oktet1 = 8 - add1bin.length
var oktet2 = 8 - add2bin.length
var oktet3 = 8 - add3bin.length
var oktet4 = 8 - add4bin.length

if (add1bin.length < 8){
    for (var b = 0; b < oktet1; b++) {
        add1bin.unshift("0")
    }
}
if (add2bin.length < 8){
    for (var c = 0; c < oktet2; c++) {
        add2bin.unshift("0")
    }
}
if (add3bin.length < 8){
    for (var d = 0; d < oktet3; d++) {
        add3bin.unshift("0")
    }
}
if (add4bin.length < 8){
    for (var f = 0; f < oktet4; f++) {
        add4bin.unshift("0")
    }
}
var add1fin = add1bin.join("")
var add2fin = add2bin.join("")
var add3fin = add3bin.join("")
var add4fin = add4bin.join("")

/*
console.log(add1fin)
console.log(add2fin)
console.log(add3fin)
console.log(add4fin)
*/

console.log("IP Adress: "+add)
console.log("In binary: "+add1fin+"."+add2fin+"."+add3fin+"."+add4fin)





/*if (add1bin.length < oktet){
    for (var l = 0; l < oktet; l++) {
        add1bin = add1bin+"0"
    }
}
if (add2bin.length < oktet){
    for (var l = 0; l < oktet; l++) {
        add2bin = add2bin+"0"
    }
}
if (add3bin.length < oktet){
    for (var l = 0; l < oktet; l++) {
        add3bin = add3bin+"0"
    }
}
if (add4bin.length < oktet){
    for (var l = 0; l < oktet; l++) {
        add4bin = add4bin+"0"
    }
}
var add1bina = add1bin.split("")
var add1rev = add1bina.reverse()
var add1fin = add1rev.join("")

var add2binb = add2bin.split("")
var add2rev = add2binb.reverse()
var add2fin = add2rev.join("")

var add3binc = add3bin.split("")
var add3rev = add3binc.reverse()
var add3fin = add3rev.join("")

var add4bind = add1bin.split("")
var add4rev = add4bind.reverse()
var add4fin = add4rev.join("")*/