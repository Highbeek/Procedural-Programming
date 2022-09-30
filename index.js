// ^Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// ^Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// ^Modify the previous algorithm if you use a dot_product function instead of a procedure.

// dot product of two vector array.

function dot_Product(v1, v2) {
  let product = [];
  for (let i = 0; i < 3; i++) {
    product += v1[i] * v2[i];
  }
  return product;
}

console.log(dot_Product([1, 2, 3], [1, 2, 3]));
// To determine if 2 vectors are orthogonal or not 
var v1 = [3, -5, 4];
var v2 = [2, 6, 5];
var n = [5];
function cross_Product(v1, v2, n) {
  n[0] = v1[1] * v2[2] - v1[2] * v2[1];
  n[1] = v1[2] * v2[0] - v1[0] * v2[2];
  n[2] = v1[0] * v2[1] - v1[1] * v2[0];

  return n.reduce((a, b) => a + b) ;
}

console.log(cross_Product(v1, v2, n));


