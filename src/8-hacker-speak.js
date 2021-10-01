export const hackerSpeak = (words) => {
let splitWords =  words.split('');

splitWords = splitWords.map((letter) => {
  if (letter === 'o' || letter === 'O') {
    return 0 
  } else if (letter === 'a' || letter === 'A') {
    return 4
  } else if (letter === 'e' || letter === 'E') {
    return 3
  } else if (letter === 'i' || letter === 'I') {
    return 1
  } else if (letter === 's' || letter === 'S') {
    return 5
  }
})
  return words;
};
