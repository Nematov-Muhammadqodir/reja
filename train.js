//MITASK-F
function findDoublers(word) {
  const hasDuplicate = word.split("").reduce((acc, char, index, arr) => {
    if (arr.indexOf(char) !== index) {
      acc = true;
    }
    return acc;
  }, false);

  return hasDuplicate;
}

console.log(findDoublers("ferferro")); // true (because 'l' repeats)
console.log(findDoublers("kevin"));

//MITASK-E
// function makeReverese(string) {
//   const arr = [...string].reverse().join("");
//   console.log(arr);
// }

// makeReverese("hello");

//MITASK D
// function returnTrue(first, second) {
//   const firstTring = [...first].sort().join("");
//   const secondString = [...second].sort().join("");
//   console.log(firstTring === secondString);
// }

// returnTrue("hello", "lohel");

// MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

//Masalani yechimi
// const moment = require("moment");
// const currentTime = moment().format("HH-mm");
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     console.log(
//       `Hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`
//     );
//   }

//   sotish(mahsulot, son) {
//     if (mahsulot === "non") {
//       this.non = this.non - son;
//     } else if (mahsulot === "lagmon") {
//       this.lagmon = this.lagmon - son;
//     } else if (mahsulot === "cola") {
//       this.cola = this.cola - son;
//     }
//   }

//   qabul(mahsulot, son) {
//     if (mahsulot === "non") {
//       this.non = this.non + son;
//     } else if (mahsulot === "lagmon") {
//       this.lagmon = this.lagmon + son;
//     } else if (mahsulot === "cola") {
//       this.cola = this.cola + son;
//     }
//   }
// }

// const shop = new Shop(2, 4, 3);
// shop.qoldiq();
// shop.sotish("cola", 2);
// shop.sotish("non", 1);
// shop.sotish("lagmon", 2);
// shop.qabul("cola", 8);
// shop.qoldiq();
// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

//Masalani yechimi
// function countDigits(string) {
//   const array = [...string].sort().filter((el) => Number(el));
//   console.log(array.length);
// }

// countDigits("thg3ebh3ngbh3");
// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

//Maslani yechimi
// function countLetters(letter, word) {
//   const toLowerCase = word.toLowerCase();
//   const wordArray = [...toLowerCase];
//   const filteredArray = wordArray.filter((let) => let === letter);
//   const numOfLetters = filteredArray.length;
//   return numOfLetters;
// }

// console.log(countLetters("a", "EshmamatAka"));

//Darsdagi materiallar.com...
// const maslahatlar = [
//   "Yaxshi talaba boling", //0-20
//   "Togri boshliq tanlang", //20-30
//   "Yoqtirgan ishingizni bajaring", //30-40
//   "Tajriba to'plang", //40-50
//   "Yoshlarga investitsiya qiling", //50-60
//   "Kayf qilib dam oling",
// ];

// function maslahatBering(yosh, callback) {
//   if (typeof yosh !== "number") {
//     callback("Please insert a number", null);
//   } else if (yosh <= 20) callback(null, maslahatlar[0]);
//   else if (yosh > 20 && yosh <= 30) callback(null, maslahatlar[1]);
//   else if (yosh > 30 && yosh <= 40) callback(null, maslahatlar[2]);
//   else if (yosh > 40 && yosh <= 50) callback(null, maslahatlar[3]);
//   else if (yosh > 50 && yosh <= 60) callback(null, maslahatlar[4]);
//   else {
//     callback(null, maslahatlar[5]);
//   }
// }
// console.log("Before calling a function");
// maslahatBering(87, function (err, data) {
//   if (err) console.log("Error", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("After calling a function");

// async function maslahatBering(yosh, callback) {
//   if (typeof yosh !== "number") throw new Error("Please insert a number");
//   else if (yosh <= 20) return maslahatlar[0];
//   else if (yosh > 20 && yosh <= 30) return maslahatlar[1];
//   else if (yosh > 30 && yosh <= 40) return maslahatlar[2];
//   else if (yosh > 40 && yosh <= 50) return maslahatlar[3];
//   else if (yosh > 50 && yosh <= 60) return maslahatlar[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve(maslahatlar[5]);
//       }, 3000);
//     });
//   }
// }
// console.log("Before calling a function");
//IT CREATES A CALLBACK HELL
// maslahatBering(87)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function run() {
//   let javob = await maslahatBering(26);
//   console.log(javob);
//   javob = await maslahatBering(64);
//   console.log(javob);
//   javob = await maslahatBering(36);
//   console.log(javob);
// }

// run();

// console.log("After calling a function");
