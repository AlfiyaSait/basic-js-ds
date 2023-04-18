const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.arr=[];
} 

push(elem) {
    this.arr.push(elem);
}

peek() { //peek - достать верхний элемент, это последний добавленный элемент массива
  let peekElem = this.arr[this.arr.length-1];
  return peekElem;
}

pop(elem) {
  let topElem=this.arr.pop();
  return topElem;
}

}

module.exports = {
  Stack
};
