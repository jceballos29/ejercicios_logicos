function mcd(a,b){
  let c;
  while(b){
    c = b;
    b = a % b;
    a = c
  }
  return a;
}

function mcm (a, b) {
  return (a * b)/mcd(a,b)
}


module.exports = mcm;