// map over each sub-array and join the letters
const mapAndJoinLetters = (arr) => {
  return arr.map(ls => ls.join(''));
};

// transpose the array when checking vertically
const transposeArray = (arr) => {
  const reversed = [];

  for (let i = 0; i < arr[0].length; i++) {
    reversed[i] = [];
    for (let j = 0; j < arr.length; j++) {
      reversed[i].push(arr[j][i]);
    }
  }
  return reversed;
};


const wordSearch = (letters, word) => {
  // if array is empty, return false
  if (letters.length === 0) return false;

  // map and join letters horizontally
  const horizontalJoin = mapAndJoinLetters(letters);
  // transpose, and map and join letters vertically
  const verticalJoin = mapAndJoinLetters(transposeArray(letters));

  // both horizontal and vertical arrays are the same length
  // loop over both and check if the sub-arrays include the word, then return
  for (let i = 0; i < horizontalJoin.length; i++) {
    if (horizontalJoin[i].includes(word)
      || verticalJoin[i].includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;