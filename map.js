Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let arr = [1, 2, 3, 4];
let multipleOfThree = arr.myMap((num) => {
  return num * 3;
});
console.log(multipleOfThree);
