// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: 0(1)
// Explain: Here the number of operations is constant and not relative to the size of 
// input(problem size), hence the time complexity is constant.

module.exports = function createBase(integer) {
  // TODO
  // **************** method 1 ***********************
  // using outer function and inner function (closure)
  //**************************************************
  
    function inpNum(num){
      return num + specNum;
    }
    return inpNum;
  

  // *********** method 2 **************
  // we can also use return function
  
  //   return function(num){
  //     return num + specNum;
  //   }
  //********************************
  
  // example
  // const addTen = createBase(10);
  // console.log(addTen(5));
  // output will be 15
  
  // const subtractTwenty = createBase(-20);
  // console.log(subtractTwenty(-40));
  // output will be -60
};
