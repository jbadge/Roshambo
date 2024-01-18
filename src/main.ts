import './style.css'

let currentPlayer = 'Player One'
let moveCounter = 0

function handleClickSquare(event: MouseEvent) {
  // event.stopPropagation()
  // event.preventDefault()

  const thingClickedOn = event.target

  // NEED SOMETHING HERE TO CHANGE PLAYERS, CHECK FOR ACTIVE PLAYER

  moveCounter++

  const header = document.querySelector('h1')

  if (header instanceof HTMLHeadingElement) {
    header.textContent = `Move ${moveCounter}`
  }
}

const gameBoard = document.querySelector('ul')

if (gameBoard instanceof HTMLUListElement) {
  gameBoard.addEventListener('click', handleClickSquare)
}
