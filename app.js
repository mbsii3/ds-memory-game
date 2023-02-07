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
const playerTurnsCount = document.querySelector('span');


/*----- state variables -----*/
let turns = 3;
playerTurnsCount.textContent = turns;

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');


/*----- event listeners -----*/
// playAgainBtn.addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    render();
}

function render() {
    renderGame();
    // renderButton();
}

// Function randomizes the card images in the getImgs array
// and generates the HTML elements for the cards and appends them to the DOM
//checkCards function is called at the end

function renderGame() {
    const randomImgs = getImgs.sort(() => Math.random() - 0.5);
    randomImgs.forEach(randomImg => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //Attach the randomImgs to the face of the cards
        face.src = randomImg.imgSrc;
        card.setAttribute('name', randomImg.name);
        // Append the cards to the section element(cardTable) && the images to the card faces
        cardTable.append(card);
        card.append(face);
        card.append(back);
        
        card.addEventListener('click', (flipCard) => {
            card.classList.toggle('toggleCard');
            checkCards(flipCard);
        });
    });
}

//Check Cards
function checkCards(flipCard) {
    const clickedCard = flipCard.target;
    clickedCard.classList.add('toggled');
    const toggledCards = document.querySelectorAll('.toggled');
    //Check Cards Logic
    if (toggledCards.length === 2) {
        if (toggledCards[0].getAttribute('name') === toggledCards[1].getAttribute('name')) {
            toggledCards.forEach((toggledCard) => {
            toggledCard.classList.remove('toggled');
            toggledCard.style.pointerEvents = 'none';
            });
        } else {
            toggledCards.forEach(toggledCard =>{
                toggledCard.classList.remove('toggled');
                setTimeout(() => toggledCard.classList.remove('toggleCard'), 1800);
            });
            // Player turns count updates
            turns--
            setTimeout(() => playerTurnsCount.textContent = turns, 1800);
            if (turns === 0) {
                resetCards();
            }
        }
    }
}

function resetCards() {
    let currentImgs = getImgs;
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    currentImgs.forEach((img, idx) => {
        setTimeout(() => cards[idx].classList.remove('toggleCard'),1800);
    });
}




// function renderButton() {
//     playAgainBtn.style.visibility = lose ? 'visibile' : 'hidden';
// }
    


