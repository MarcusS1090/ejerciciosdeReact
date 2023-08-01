import { useState } from 'react';
import './App.css'

/* The `const TURNS` is defining an object that represents the possible turns in a Tic Tac Toe game. It
has two properties, `X` and `O`, which are assigned the string values `'x'` and `'o'` respectively.
These values represent the symbols used by the players in the game. */
const TURNS = {
  X: 'x',
  O: 'o'
};



const Square = ({children,isSelected, updatedBoard, index}) => {
  const className= `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updatedBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const Winner_Combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


function App() {


  /* The line `const [board, SetBoard] = useState(Array(9).fill(null));` is using the `useState` hook
  from React to create a state variable called `board`. The initial value of `board` is set to an
  array with 9 elements, all initialized to `null`. */
  const [board, SetBoard] = useState(Array(9).fill(null));

  /* The line `const [turn, setTurn ] = useState(TURNS.X);` is using the `useState` hook from React to
  create a state variable called `turn`. The initial value of `turn` is set to `TURNS.X`, which is
  the string value `'x'`. */
  const [turn, setTurn ] = useState(TURNS.X);

  const [ winner, setWinner ] = useState(null); //null no hay ganador, false es que hay un empate

  const checkWinner = (boardToCheck) => {
    for (const combo of Winner_Combos) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b]&&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null;
  }
  const updatedBoard = (index) => {

    if (board[index]) return

    const newBoard = [...board]
    newBoard[index] = turn //x u o
    SetBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index}
              index={index}
              updatedBoard={updatedBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
