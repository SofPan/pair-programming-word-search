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

// check the joined sub arrays for the required word
const checkIfWordIncluded = (joinedArr, word) => {
  for (const subString of joinedArr) {
    if (subString.includes(word)) {
      return true;
    }
  }

  return false;
};

const wordSearch = (letters, word) => {
  // if array is empty, return false
  if (letters.length === 0) return false;

  // map and join letters horizontally
  const horizontalJoin = mapAndJoinLetters(letters);
  // transpose, and map and join letters vertically
  const transposed = transposeArray(letters);
  const verticalJoin = mapAndJoinLetters(transposed);

  const checkHorizontal = checkIfWordIncluded(horizontalJoin, word);

  // if horizontal check is false, check vertically. Otherwise return true.
  return !checkHorizontal ? checkIfWordIncluded(verticalJoin, word) : true;
};

module.exports = wordSearch;