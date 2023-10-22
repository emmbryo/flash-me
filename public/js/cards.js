document.querySelector('.flashcards').addEventListener('click', (event) => {
  if (event.target.className === 'flip-flashcards') {
    flipCard(event)
    event.stopPropagation()
    event.preventDefault()
  } else if (event.target.className === 'delete-card') {
    console.log('deleted card id:', event.target.id)
  } else {
    event.stopPropagation()
    event.preventDefault()
  }
})

function flipCard (event) {
  const grandParent = document.querySelector(`#${event.target.id}`).parentElement.parentElement
  grandParent.querySelector('.back').classList.toggle('hidden')
  grandParent.querySelector('.front').classList.toggle('hidden')
}


