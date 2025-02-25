// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

//Maslani yechimi
function countLetters(letter, word) {
  const toLowerCase = word.toLowerCase();
  const wordArray = [...toLowerCase];
  const filteredArray = wordArray.filter((let) => let === letter);
  const numOfLetters = filteredArray.length;
  return numOfLetters;
}

console.log(countLetters("a", "EshmamatAka"));

//Darsdagi materiallar.com...
const maslahatlar = [
  "Yaxshi talaba boling", //0-20
  "Togri boshliq tanlang", //20-30
  "Yoqtirgan ishingizni bajaring", //30-40
  "Tajriba to'plang", //40-50
  "Yoshlarga investitsiya qiling", //50-60
  "Kayf qilib dam oling",
];

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
// maslahatBering(87, (err, data) => {
//   if (err) console.log("Error", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("After calling a function");

async function maslahatBering(yosh, callback) {
  if (typeof yosh !== "number") throw new Error("Please insert a number");
  else if (yosh <= 20) return maslahatlar[0];
  else if (yosh > 20 && yosh <= 30) return maslahatlar[1];
  else if (yosh > 30 && yosh <= 40) return maslahatlar[2];
  else if (yosh > 40 && yosh <= 50) return maslahatlar[3];
  else if (yosh > 50 && yosh <= 60) return maslahatlar[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(maslahatlar[5]);
      }, 3000);
    });
  }
}
console.log("Before calling a function");
//IT CREATES A CALLBACK HELL
// maslahatBering(87)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function run() {
  let javob = await maslahatBering(26);
  console.log(javob);
  javob = await maslahatBering(64);
  console.log(javob);
  javob = await maslahatBering(36);
  console.log(javob);
}

run();

console.log("After calling a function");
