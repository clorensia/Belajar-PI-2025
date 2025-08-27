console.log('Hello World')

var name = 'john' // problem ketika mendeklarasikan lagi di tempat lain. bisa niban.
let age = 20  //gabakal niban. lebih sering pake let
const address = 'jakarta' // gabisa ditiban, kelebihannya datanya gabisa diubah.
// tergantung kebutuhan mau pake let atau const

let hobbies = ['baca', 'tulis', 'main'] // array
let friends = {
    name: 'jane',
    age: 21,
    address: 'bandung'
} // object

let a = 1;
let b = 2;

[a, b] = [b, a]; // destructuring assigment
console.log(a);
console.log(b);

console.log(name)
console.log(age)
console.log(address)

console.log(name, age, address)
console.log(name + ',' + age + ',' + address)
console.log(`${name}, ${age}, ${address}`) //template literals pake backtick

// conditional
// bisa pake if else atau switch

let lampu = 'merah'


if (lampu == "hijau") {
    console.log("jalan")
} else if (lampu == "kuning") {
    console.log("hati-hati")
} else if (lampu == "merah"){
    console.log("berhenti")
} else {
    console.log("lampu rusak")
}

// switch tiap ada kondisi selalu ada break!

//loop
//for (bisa dihitung)
/* for (let i = 0; i < 10; i++){
    console.log(i)
}*/

for (let i = 10; i < 0; i--){
    console.log(i)
}
//while (gabisa dihitung)

// do while (gabisa dihitung)