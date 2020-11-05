
let startMove;
let endMove;
let numberOfMoves = 0;
let win = false;
let stone = null;
// let stoneOne = document.getElementById("1").id
// let stoneTwo = document.getElementById("2").id
// let stoneThree = document.getElementById("3").id
// let stoneFour = document.getElementById("4").id
let a = document.getElementById("bottom-row")
let b = document.getElementById("middle-row")
let c = document.getElementById("top-row")
let currentStoneSize;
let lastStoneSize;
let startingSize = parseInt(c.childElementCount)

const checkForWin = () => {
  if (a.childElementCount == startingSize || b.childElementCount == startingSize) {
    alert("You Win!")
  }
}

const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")
  const selectedRow = row.id;
  const selectedRowID = document.getElementById(selectedRow)
  console.log("selected Row " + selectedRow)
  // console.log("Yay, we clicked an item", row)
  // console.log("Here is the stone's id: ", row.id)
  // console.log("Here is the stone's data-size: ", currentRow)
  console.log("There are stones to pickup = " + row.hasChildNodes())
  if (row.hasChildNodes() && !stone) {
    pickUpStone(selectedRow)
  } else if (row.hasChildNodes() && stone) {
    lastStoneSize = parseInt(selectedRowID.lastElementChild.getAttribute("data-size"))
    console.log("lastStoneSize" + lastStoneSize)
    if (lastStoneSize > currentStoneSize) {
      dropStone(selectedRow, stone)
      stone = null
    } else {
      console.log("illegal Move")
      console.log((lastStoneSize > currentStoneSize))
      console.log(lastStoneSize)
      console.log(currentStoneSize)
    }
  } else if (stone) {
    dropStone(selectedRow, stone)
    stone = null
  }
} 

// stone = selectedRow.removeChild(selectedRow.lastElementChild);

const pickUpStone = (rowID) => {
  console.log("stone picked up")
  const selectedRow = document.getElementById(rowID);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  currentStoneSize = parseInt(stone.getAttribute('data-size'))
  if (selectedRow.lastElementChild != null) {
    lastStoneSize = parseInt(selectedRow.lastElementChild.getAttribute("data-size"))
  } else {
    document.getElementById(rowID).innerHTML = null;
  }
  console.log("current stone size: " + currentStoneSize)
  console.log("Last Stone Size " + lastStoneSize)
  
  lastStoneSize = null;
  // console.log(selectedRow.lastElementChild.getAttribute("data-size"))
  // console.log(stone)
}



const dropStone = (rowID, stone) => {
  console.log("stone dropped")
  document.getElementById(rowID).appendChild(stone)
  console.log("dropped")
  if (document.getElementById(rowID) === "bottom-row") {
    movePiece()
  }
  currentStoneSize = null;
  checkForWin();
  // stone = null
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.



// let stacks = {
//   a: [stoneFour, stoneThree, stoneTwo, stoneOne],
//   b: [],
//   c: []
// };

// let startingSize = stacks.a.length

// const movePiece = (startStack, endStack) => {
//     let playerMove = startMove.pop();
//     endMove.push(playerMove)
//     numberOfMoves++;
//     if (checkForWin()) {
//       console.log(`You won in ${numberOfMoves} moves!`)
//     };
// }


// const isLegal = (x, y) => {
//   startMove = stacks[x]
//   endMove = stacks[y]
//   if (startMove[startMove.length - 1] > endMove[endMove.length - 1]) {
//     console.log("false")
//     return false
//   } else {
//     console.log("true")
//     return true
//   }
// }

// const checkForWin = () => {
//   if (stacks.b.length === startingSize || stacks.c.length === startingSize) {
//     win = true
//     return true
//   } else {
//     return false
//   }
// }

// const towersOfHanoi = (startStack, endStack) => {
//   startMove = stacks[startStack]
//   endMove = stacks[endStack]
//   if (isLegal(startStack, endStack)) {
//     movePiece();
//   }
// }
