/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: O(N)
// Explain: The loop executes N times i.e the size of input 
// so the sequence of statements also executes N times. 
// we assume the statements are O(1), the total time for the for loop is N * O(1), 
// which is O(N) overall.


module.exports = function reverseWordsInSentence(input) {
  // TODO

  input_len = input.length-1;
  msg_lst = [];

  for(let x of input){
    msg_lst.push(input[input_len]);
    input_len -= 1;
  }

  var res = msg_lst.join('');
  return res;
};


