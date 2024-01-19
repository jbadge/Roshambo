import './style.css'

let moveCounter = 0
let sections = document.querySelectorAll('section')

function handleClickSquare(event: MouseEvent) {
  // event.stopPropagation()
  // event.preventDefault()

  const thingClickedOn = event.target

  if (
    thingClickedOn instanceof HTMLLIElement ||
    thingClickedOn instanceof Image
  ) {
    const currentPlayer = thingClickedOn.closest('section')

    if (
      currentPlayer?.classList.contains('activePlayer') &&
      currentPlayer?.classList.contains('p1')
    ) {
      currentPlayer.classList.toggle('activePlayer')
      sections[1].classList.toggle('activePlayer')
    } else if (
      currentPlayer?.classList.contains('activePlayer') &&
      currentPlayer?.classList.contains('p2')
    ) {
      currentPlayer.classList.add('HIT')
      currentPlayer.classList.toggle('activePlayer')
      sections[0].classList.toggle('activePlayer')
    }
  }

  moveCounter++

  const header = document.querySelector('h1')

  if (header instanceof HTMLHeadingElement) {
    header.textContent = `Move ${moveCounter}`
  }
}

// START HERE
sections.forEach((turn) => turn.addEventListener('click', handleClickSquare))
// const gameBoard = document.querySelector('ul')

// if (gameBoard instanceof HTMLUListElement) {
//   gameBoard.addEventListener('click', handleClickSquare)
// }
