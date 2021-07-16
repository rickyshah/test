/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

 // Average and worst case time complexity (Big-O) of my function is:
 /* ----------------------------------------------------------------------------------
For method 1 loop: O(N2)
Explain: First the sort method has to convert and put the input in (ASCII) order
then it has to run through the inner comparision function for each set of element
the larger the loop, the more time it takes, hence the number of operations double
when the problem size double 

** Efficiency - using the time method to check the efficiency
the sort functionook on avg (0.569 + 0.273 + 0.149) = 0.33ms

For method 2 loop: O(N2)
Explain: 
The outer loop executes N times. Every time the outer loop executes, 
the inner loop executes M times. As a result, the statements in the inner loop 
execute a total of N * M times. Thus, the complexity is O(N * M). 
In a common special case where the stopping condition of the inner loop 
is j < N instead of j < M (i.e., the inner loop also executes N times), 
the total complexity for the two loops is O(N2)

method 2 - using for loop function, it took on on avg (0.159 + 0.153 + 0.149) = 0.15
----------------------------------------------------------------------------------*/

module.exports = function sortArray(arr) {
  // TODO
  // if empty array, return empty array
  if(arr.length===0){
    arr = [];
    return arr;
  }
  
  // if not an integer array, throw error
  for(let x of arr){
    if (x % 1 !== 0){
      throw new Error("Invalid input");
    }
  }
  
  // if it is valid integer array
  // ------method 1 ---------
  // using inbuilt sort function
  arr.sort(function(a,b){return a-b;});
  return arr;
  
  // // ------method 2 ---------
  // // using loop to sort array
  // let len = arr.length-1
  // for(let i=0; i<len; i++){
  //   for(let j=0; j<len; j++){
  //     console.log(j)
  //     console.log(arr)
  //     if (arr[j] > arr[j+1]){
  //       let temp = arr[j];
  //       arr[j] = arr[j+1];
  //       arr[j+1] = temp;
  //       console.log(arr)
  //     }
  //   }
  // }
  // return arr;
};
