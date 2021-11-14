/**
 * @author Kotori Y
 */

import TicTacToeState from "./gameState.js";


let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], currentPlayer = 1
let State = new TicTacToeState(board, currentPlayer)


const grid = document.querySelectorAll(".grid")

grid.forEach(elem => {
  elem.addEventListener("click", (event) => {

    if (elem.classList.length !== 1) {
      return;
    }

    let _idx = parseInt(elem.id)
    let [x, y] = State.mapping[_idx];

    const action = {
      x: x,
      y: y,
      currentPlayer: State.currentPlayer
    }
    State = State.takeAction(action)
    console.log(State.board, State.getReward())

    if (State.currentPlayer * -1 === 1) {
      elem.classList.add("circle")
    } else {
      elem.classList.add('cross')
    }


    if (State.isTerminal()) {
      console.log("OVER")
    }

  })
})