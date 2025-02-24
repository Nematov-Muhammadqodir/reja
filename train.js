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
