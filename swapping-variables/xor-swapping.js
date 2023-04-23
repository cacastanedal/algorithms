/**
 * Bitwise xor ^
 * Changes binary representation where values are different 0 and 1 or 1 and 0
 * Example
 * a = 5 -> 0101
 * b = 3 -> 0011
 * 
 * 0101 
 * 0011
 * ----
 * 0110 -> 6
 */

let a = 1;
let b = 2;

console.log( a ^ b ); 

// XOR swap algorithm

/**
 * x = x xor ys
 * y = y xor x
 * x = x xor y
 * 
 */

function xorSwap(x, y){
    console.log("before swapping ->", x, y);
    x = x ^ y;
    y = y ^ x;
    x = x ^ y;
    console.log("after swapping ->", x, y);
}

xorSwap(0, -1);
xorSwap(123, 234);

// Bitwise xor is commutative, the order doesnt affect the result
// In step two, either y xor x and x xor y will work

