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

// funbtion classic func. variable function. arroe function
function sayHello(name) {
    console.log("Gello, HI!" + name)
}

sayHello("candra"); // argumen: proses memasukkan inputan, yang akan dimasukan ke parameter

//function membuat luas lingkaran
function luasLingkaran(jariJari) {
    const pi = Math.PI;
    //rumus luas lingkarab: pi * jari.jari * jarijari
    const luas = pi * jariJari * jariJari;
    return luas; //ngembaliin nilai. bisa keluar alias global scopes. nggak wajib ada, sesuai kebutuhan.
}
console.log(luasLingkaran(9)) //buat ngeprint

// menjumlahkan bil genap dari a -> b
// a = 4, b = 10 | 4 6 8 10 => 28
// Deklarasi variabel a dan b
const c = 4;
const d = 10;
let total = 0; // Variabel untuk menyimpan hasil penjumlahan!!

// Loop dari nilai 'a' hingga 'b'
for (let i = c; i <= d; i++) {
  // Cek apakah angka saat ini adalah bilangan genap
  if (i % 2 === 0) {
    // Jika ya, tambahkan ke variabel 'total'
    total = total + i;
  }
}

// Menampilkan hasil
console.log(total); // Output: 28
