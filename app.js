/*----- constants -----*/
// Image data objects
const getImgs = [
    {imgSrc: "./images/giyu.jpg", name: "giyu"},
    {imgSrc: "./images/inosuke.jpg", name: "inosuke"},
    {imgSrc: "./images/nezuko.jpg", name: "nezuko"},
    {imgSrc: "./images/rengoku.jpg", name: "rengoku"},
    {imgSrc: "./images/shinobu.jpg", name: "shinobu"},
    {imgSrc: "./images/tanjiro.jpg", name: "tanjiro"},
    {imgSrc: "./images/tengen.jpg", name: "tengen"},
    {imgSrc: "./images/zenitsu.jpg", name: "zenitsu"},
    {imgSrc: "./images/giyu.jpg", name: "giyu"},
    {imgSrc: "./images/inosuke.jpg", name: "inosuke"},
    {imgSrc: "./images/nezuko.jpg", name: "nezuko"},
    {imgSrc: "./images/rengoku.jpg", name: "rengoku"},
    {imgSrc: "./images/shinobu.jpg", name: "shinobu"},
    {imgSrc: "./images/tanjiro.jpg", name: "tanjiro"},
    {imgSrc: "./images/tengen.jpg", name: "tengen"},
    {imgSrc: "./images/zenitsu.jpg", name: "zenitsu"}
];
const cardTable = document.querySelector('section');
const playerTurnsCount = document.getElementById('turnCount');
const matchesCount = document.getElementById('matchCount');
/*----- state variables -----*/
let turns;
let matches;
/*----- cached elements  -----*/
const messageEl = document.getElementById('win-message');
const playAgainBtn = document.querySelector('button');
/*----- event listeners -----*/
playAgainBtn.addEventListener('click', newGame);
/*----- functions -----*/
init();

function init() {
    turns = 8;
    playerTurnsCount.textContent = turns;
    matches = 0;
    matchesCount.textContent = matches;
    render();
}

function newGame() {
    resetCards();
    setTimeout(() => reshuffle(), 1500);
    setTimeout(() => resetPointer(), 1500);
    restart();
}

function render() {
    renderGame();
}

// Function randomizes the card images in the getImgs array
// and generates the HTML elements for the cards and appends them to the DOM
// checkCards function is called at the end
function renderGame() {
    const randomImgs = getImgs.sort(() => Math.random() - 0.5);
    randomImgs.forEach(randomImg => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        // Attach the randomImgs to the face of the cards
        face.src = randomImg.imgSrc;
        card.setAttribute('name', randomImg.name);
        // Append the cards to the section element(cardTable) && the images to the card faces
        cardTable.append(card);
        card.append(face);
        card.append(back);
        // Click event listener located here due to the HTML elements being created
        // locally in this function
        card.addEventListener('click', (flipCard) => {
            card.classList.toggle('toggleCard');
            checkCards(flipCard);
            checkResult();
        });
    });
}
// Check Cards
function checkCards(flipCard) {
    const clickedCard = flipCard.target;
    clickedCard.classList.add('toggled');
    const toggledCards = document.querySelectorAll('.toggled');
    // Check Cards Logic
    if (toggledCards.length === 2) {
        if (toggledCards[0].getAttribute('name') === toggledCards[1].getAttribute('name')) {
            matches++;
            setTimeout(() => matchesCount.textContent = matches, 1000);
            toggledCards.forEach((toggledCard) => {
            toggledCard.classList.remove('toggled');
            toggledCard.style.pointerEvents = 'none';
            });
        } else {
            toggledCards.forEach(toggledCard =>{
                toggledCard.classList.remove('toggled');
                setTimeout(() => toggledCard.classList.remove('toggleCard'), 1000);
            });
            // Player turns count updates
            turns--
            setTimeout(() => playerTurnsCount.textContent = turns, 1000);
        }
    }
}
// Win/Loss logic
function checkResult() {
    if (turns === 0 && matches < 8) {
        resetCards();
        cardTable.style.pointerEvents = 'none';
        setTimeout(() => messageEl.innerText = 'You lose, try again!', 1000);
    } else if (matches === 8 && turns > 0) {
        cardTable.style.pointerEvents = 'none';
        setTimeout(() => messageEl.innerText = 'You Win!', 1000);
    }
}
// Function flips all cards back to face down
function resetCards() {
    let currentImgs = getImgs;
    let cards = document.querySelectorAll('.card');
    currentImgs.forEach((img, idx) => {
        setTimeout(() => cards[idx].classList.remove('toggleCard'), 1000);
    });
}
// Function resets pointer events on all cards and resets the name attribute
// after being reshuffled
function resetPointer() {
    let currentImgs = getImgs;
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    currentImgs.forEach((img, idx) => {
        cards[idx].style.pointerEvents = 'all';
        faces[idx].src = img.imgSrc;
        cards[idx].setAttribute('name', img.name);
    });
}
// Function reshuffles the images on the card faces
function reshuffle() {
    getImgs.sort(() => Math.random() - 0.5);
}
// Resets game info
function restart() {
    turns = 8;
    matches = 0;
    playerTurnsCount.textContent = turns;
    matchesCount.textContent = matches;
    messageEl.innerText = 'Match the cards!';
}
    


