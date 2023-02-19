const K_ANSWERS = 4;
const pageNum = 0;

function main() {
    console.log(createListOfNRandInts(3, 20));
    render();
}

function render() {
    renderImage();
    renderAnswerButtons();
}

function renderAnswerButtons() {
    let container = document.querySelector(".mid-col-content");
    container.insertBefore(createAnswerButtons(), document.querySelector("#buttons-before"));
}

function renderImage() {
    let i = 0;
    const myImage = createMyElement('img', {src: `images/${i}.jpg`, height: '700px'})
    let container = document.querySelector(".subject-icon-container");
    container.appendChild(myImage);
}

function createAnswerButtons() {
    let correctAnswer = Math.floor(Math.random() * K_ANSWERS);
    let otherAnswers = createListOfNRandInts(K_ANSWERS - 1, Object.keys(database).length, correctAnswer);
    let buttonArray = [];

    for (let i = 0; i < K_ANSWERS; i++) {
        let text = (i == correctAnswer) ? database[pageNum] : database[otherAnswers.pop()];
        buttonArray[i] = createMyElement('button', {class: "button", id: `button${i}`}, [text]);
    }

    return createMyElement('div', {class: "btn-group"}, buttonArray);
}

function createListOfNRandInts(n, upperLimitExcl, skip) {
    let res = [];

    while (res.length < n) {
        let candidate = Math.floor(Math.random() * upperLimitExcl);
        if (!res.includes((candidate)) && candidate !== skip) {
            res.push(candidate);
        }
    }

    return res;
}


createMyElement = (type, attributes, children) => {
    let myElement = document.createElement(type);

    for (let a in attributes) {
        myElement.setAttribute(a, attributes[a]);
    }

    if (children) {
        for (let child of children) {
            myElement.appendChild(child instanceof HTMLElement ? child : document.createTextNode(child));
        }
    }

    return myElement;
};
