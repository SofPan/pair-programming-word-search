const mapAndJoinLetters = (arr) => {
  return arr.map(ls => ls.join(''));
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = mapAndJoinLetters(letters);
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let reveresedMatrix = [];

  for (let i = 0; i < letters[0].length; i++) {
    reveresedMatrix[i] = [];
    for (let j = 0; j < letters.length; j++) {
      reveresedMatrix[i].push(letters[j][i]);
    }
  }

  const verticalJoin = mapAndJoinLetters(reveresedMatrix);
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;