/*----- constants -----*/
// Image data objects
const imgs = [
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
const turns = 10;
playerTurnsCount.textContent = turns;

/*----- state variables -----*/


/*----- cached elements  -----*/



/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    render();
}

function render() {
    renderCards();
}

// Function randomizes the card images in the getImgs array
// and generates the HTML elements for the cards and appends them to the DOM

function renderCards() {
    const randomImgs = imgs.sort(() => Math.random() - 0.5);
    randomImgs.forEach(randomImg => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //Attach the randomImgs to the face of the cards
        face.src = randomImg.imgSrc;
        // Append the cards to the section element(cardTable) && the images to the card faces
        cardTable.append(card);
        card.append(face);
        card.append(back);
    });
}
