let primeList = [];
let list = [];

const findPrimes = (listTwo) => {
  if (listTwo.length === 0) {
    return primeList;
  } else {
    primeList.push(listTwo[0]);
    return findPrimes(listTwo.filter(e => e%listTwo[0] != 0));
  }
}

const numList = (num) => {
  if (num < 2) {
    let listTwo = list.reverse();
    return findPrimes(listTwo);
  } else {
    list.push(num);
    return numList(num - 1);
  }
};

console.log(numList(200));



// let listTwo = []
// console.log(findPrimes(listTwo)); // expected: [2, 3, 5, 7, 11, 13, 17]

// const numArray = [7, 14, 32, 8];
// const filteredArray = numArray.filter(e => e > 10);
// [14, 32]