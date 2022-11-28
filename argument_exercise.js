function sum(...argument) {
    let total = 0
    for (let i = 0; i < argument.length; i++) {
        total += argument[i]
    }
    return total;
}

console.log(sum(1, 2, 3, 4))


Function.prototype.myBind = function(context, ...bindargs) {
    let that = this;
    return function(...callargs) {
        return that.apply(context, bindargs.concat(callargs))
    }
}

// Function.prototype.curry = function(numargs) {
//     let arr = [];
//     let that = this;
//     return function _curry(ele) {
//         arr.push(ele);
//         if (arr.length === numargs) {
//             return that(...arr)
//         } else {
//             return _curry; 
//         }
//     }
// }

Function.prototype.curry1 = function(numargs) {
    let arr = [];
    let that = this;
    return function _curry(ele) {
        arr.push(ele);
        if (arr.length === numargs) {
            return that.apply(undefined, arr)
        } else {
            return _curry; 
        }
    }
}
  
function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  sumThree(4, 20, 6); // == 30
  
  // you'll write `Function#curry`!
  let f1 = sumThree.curry1(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
  f1 = f1(4); // [Function]
  console.log(f1)
  f1 = f1(20); // [Function]
  console.log(f1)
  f1 = f1(6); // = 30
  console.log(f1)
  
  // or more briefly:
  console.log(sumThree.curry1(3)(4)(20)(6)); // == 30
  
 