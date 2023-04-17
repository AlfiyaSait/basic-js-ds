const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */



function removeKFromList(l, k) {
  if (l.value===k) { //если удаляемый элемент это первый
    l=l.next; //то следующий становится первым
  }
  let currentNode = l;
  if (currentNode!=null) { //список не пустой
    while (currentNode.next) { //пока не дошли до конца и currentNode.next!=null
      if (currentNode.next.value===k) { //если следующий элемент искомый
        currentNode.next=currentNode.next.next; //ссылка на следующий будет через одного
      } else {
        currentNode=currentNode.next; //переходим к следующему элементу
      }        
    }
  }
  return l;

}




module.exports = {
  removeKFromList
};
