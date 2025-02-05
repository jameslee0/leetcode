// Arrays and Hashing 



// Question 1
// Contains Duplicates
const nums = [1, 2, 3, 3];

x = hasDuplicates(nums);

console.log(x);

function hasDuplicates(nums) {
  const mapTable = new Map();

  for (num of nums) {
    if (mapTable.has(num)) {
      return true;
    } else {
      mapTable.set(num, true);
    }
  }

  return false;
}



// Question 2
// isAnagram to see if the strings s and t are anagrams.

const s = 'racecar';
const t = 'carrace';

const result = isAnagram(s, t);

function isAnagram(s, t){
  const mapS = new Map();
  const mapT = new Map();
  let value = 0;

  if(s.length !== t.length) {
    return false;
  }

  for (letter of s){
    if(!mapS.get(letter)){
      mapS.set(letter, 1);
    }
    else {
      mapS.set(letter, mapS.get(letter) + 1);
    }
  }

  for (letter of t){
    if(!mapT.get(letter)){
      mapT.set(letter, 1);
    }
    else {
      mapT.set(letter, mapT.get(letter) + 1);
    }
  }


}
