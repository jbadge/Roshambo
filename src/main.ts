import './style.css'

let sections = document.querySelectorAll('section')
let gameMessages = document.querySelector('h2')
let playerOne: string | null = ''
let playerTwo: string | null = ''

function handleClickSquare(event: MouseEvent) {
  // event.stopPropagation()
  // event.preventDefault()

  const thingClickedOn = event.target

  if (
    thingClickedOn instanceof HTMLLIElement ||
    thingClickedOn instanceof Image
  ) {
    const currentPlayer = thingClickedOn.closest('section')
    const throwChoice = thingClickedOn.closest('div')

    if (
      currentPlayer?.classList.contains('activePlayer') &&
      currentPlayer?.classList.contains('p1')
    ) {
      if (
        throwChoice?.classList.item(0) !== undefined &&
        throwChoice?.classList.item(0) !== null
      ) {
        playerOne = throwChoice.classList.item(0)
        currentPlayer.classList.toggle('activePlayer')
        sections[1].classList.toggle('activePlayer')
      }
      if (gameMessages instanceof HTMLHeadingElement) {
        gameMessages.innerHTML = 'Player Two...Throw!'
      }
    } else if (
      currentPlayer?.classList.contains('activePlayer') &&
      currentPlayer?.classList.contains('p2')
    ) {
      if (
        throwChoice?.classList.item(0) !== undefined &&
        throwChoice?.classList.item(0) !== null
      ) {
        playerTwo = throwChoice.classList.item(0)
        currentPlayer.classList.toggle('activePlayer')
        results()

        document.querySelector('button')?.classList.remove('hidden')
      }
    }
  }
}

function results() {
  switch (playerOne) {
    case 'rock':
      if (playerTwo === 'rock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Tie!'
        }
      }
      if (playerTwo === 'paper') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Paper Covers Rock. Player Two Wins!'
        }
      }
      if (playerTwo === 'scissors') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Rock Breaks Scissors. Player One Wins!'
        }
      }
      if (playerTwo === 'lizard') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Rock Crushes Lizard. Player One Wins!'
        }
      }
      if (playerTwo === 'spock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Spock Vaporizes Rock. Player Two Wins!'
        }
      }
      break

    case 'paper':
      if (playerTwo === 'rock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Paper Covers Rock. Player One Wins!'
        }
      }
      if (playerTwo === 'paper') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Tie!'
        }
      }
      if (playerTwo === 'scissors') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Scissors Cut Paper. Player Two Wins!'
        }
      }
      if (playerTwo === 'lizard') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Lizard Eats Paper. Player Two Wins!'
        }
      }
      if (playerTwo === 'spock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Paper Disproves Spock. Player One Wins!'
        }
      }
      break

    case 'scissors':
      if (playerTwo === 'rock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Rock Breaks Scissors. Player Two Wins!'
        }
      }
      if (playerTwo === 'paper') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Scissors Cut Paper. Player One Wins!'
        }
      }
      if (playerTwo === 'scissors') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Tie!'
        }
      }
      if (playerTwo === 'lizard') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML =
            'Scissors Decapitate Lizard. Player One Wins!'
        }
      }
      if (playerTwo === 'spock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Spock Melts Scissors. Player Two Wins!'
        }
      }
      break

    case 'lizard':
      if (playerTwo === 'rock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Rock Crushes Lizard. Player Two Wins!'
        }
      }
      if (playerTwo === 'paper') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Lizard Eats Paper. Player One Wins!'
        }
      }
      if (playerTwo === 'scissors') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML =
            'Scissors Decapitate Lizard. Player Two Wins!'
        }
      }
      if (playerTwo === 'lizard') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Tie!'
        }
      }
      if (playerTwo === 'spock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Lizard Poisons Spock. Player One Wins!'
        }
      }
      break

    case 'spock':
      if (playerTwo === 'rock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Spock Vaporizes Rock. Player One Wins!'
        }
      }
      if (playerTwo === 'paper') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Paper Disproves Spock. Player Two Wins!'
        }
      }
      if (playerTwo === 'scissors') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Spock Melts Scissors. Player One Wins!'
        }
      }
      if (playerTwo === 'lizard') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Lizard Poisons Spock. Player Two Wins!'
        }
      }
      if (playerTwo === 'spock') {
        if (gameMessages instanceof HTMLHeadingElement) {
          gameMessages.innerHTML = 'Tie!'
        }
      }
      break
  }
}

function playAgain(event: MouseEvent) {
  const thingClickedOn = event.target

  if (thingClickedOn instanceof HTMLButtonElement) {
    sections[0].classList.toggle('activePlayer')
    sections[1].classList.remove('activePlayer')

    if (gameMessages instanceof HTMLHeadingElement) {
      gameMessages.innerHTML = 'Player One...Throw!'
    }

    document.querySelector('button')?.classList.add('hidden')
  }
}

// START HERE
sections.forEach((turn) => turn.addEventListener('click', handleClickSquare))

document.querySelector('button')?.addEventListener('click', playAgain)
