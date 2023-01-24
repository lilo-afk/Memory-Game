const grid = document.querySelector(".grid");

const animals = [
"dog",
"cat",
"bear",
"bird",
"snake",
"tiger",
"monkey",
"fish",
"panda",
"elephant",
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element; 
}

const createCard = () => {
    
    const card = document.createElement("div", "card");
    const front = document.createElement("div", "face front");
    const back = document.createElement("div", "face back");

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {
    animals.forEach((animal) => {

    const card = createCard();
    grid.appendChild(card);


    }); 

}

loadGame();