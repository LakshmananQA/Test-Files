const cards = document.querySelectorAll('.card');
const nextButton = document.getElementById('next-button');
let currentCardIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentCardIndex < cards.length) {
        // Reveal the current card
        cards[currentCardIndex].classList.add('revealed');
        currentCardIndex++;
    } else {
        // Disable the button if all cards are revealed
        nextButton.disabled = true;
        nextButton.textContent = "All cards revealed!";
    }
});
