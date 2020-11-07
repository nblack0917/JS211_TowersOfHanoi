'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest
let startMove;
let endMove;
let numberOfMoves = 0;
let win = false;


let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let startingSize = stacks.a.length
// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
  // console.log(startMove)
  // console.log(endMove)
    let playerMove = startMove.pop();
    endMove.push(playerMove)
    numberOfMoves++;
    console.log(`${numberOfMoves} moves`)
    if (checkForWin()) {
      console.log(`You won in ${numberOfMoves} moves!`)
    };


}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (x, y) => {
  // console.log(startMove)
  startMove = stacks[x]
  endMove = stacks[y]
  // console.log(startMove)
  // Your code here
  if (startMove[startMove.length - 1] > endMove[endMove.length - 1]) {
    console.log("Illegal move. Please choose another.")
    return false
  } else {
    // console.log("true")
    return true
  }
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  if (stacks.b.length === startingSize || stacks.c.length === startingSize) {
    win = true
    return true
  } else {
    return false
  }
}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  // console.log("startStack: " + startStack)
  // console.log("endStack: " + endStack)
  startMove = stacks[startStack]
  endMove = stacks[endStack]
  if (isLegal(startStack, endStack)) {
    movePiece();
  }
}

const getPrompt = () => {
  printStacks();
  if (win === false) {
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      // console.log(isLegal('a', 'b'))
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      // console.log(isLegal('a', 'c'))
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
