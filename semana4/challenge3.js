function isSpecialArray (specialArr) {

  const even = specialArr.filter((element, index) => {
    if(index%2===0){
      return element;
    }
  })
  const odd = specialArr.filter((element, index) => {
    if(index%2!==0){
      return element;
    }
  })

  return even.every(element => element%2===0) && odd.every(element => element%2===1);
}

const result = isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])
console.log(result);

module.exports = isSpecialArray;