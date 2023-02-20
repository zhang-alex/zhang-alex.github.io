const K_ANSWERS = 4;
const K_RANDOM_FACTS = 4;
const pageNum = 0;

let correctAnswer = Math.floor(Math.random() * K_ANSWERS);

function main() {
    render();
}

function render() {
    renderLeft();
    renderMid();
}

function renderLeft() {
    renderNRandomFacts(K_RANDOM_FACTS);
}

function renderMid() {
    renderMidTitle();
    renderImage();
    renderAnswerButtons();
}

function renderMidTitle() {
    let title = createMyElement('h2', {class: "mid-col-title"}, database[correctAnswer].question);
    document.querySelector(".mid-col-content").prepend(title);
}

function renderAnswerButtons() {
    let container = document.querySelector(".mid-col-content");
    container.insertBefore(createAnswerButtons(), document.querySelector("#buttons-before"));
}

function renderImage() {
    let i = 0;
    const myImage = createMyElement('img', {src: `images/${i}.jpg`, height: '400px'})
    let container = document.querySelector(".subject-icon-container");
    container.appendChild(myImage);
}

function renderNRandomFacts(n) {
    let random_facts = getNRandomFacts(n);
    for (let i = 0; i < n; i++) {
        // Find the element with ID "facts-below"
        const factsBelow = document.getElementById("facts-below");

        // Create a new div element with the class "fact-container"
        const factContainer = createMyElement("div", {class: "fact-container"}, random_facts[i]);

        // Insert the new element below the "facts-below" element
        factsBelow.insertAdjacentElement("afterend", factContainer);
    }
}

function createAnswerButtons() {
    let otherAnswers = createListOfNRandInts(K_ANSWERS - 1, Object.keys(database).length, correctAnswer);
    let buttonArray = [];

    for (let i = 0; i < K_ANSWERS; i++) {
        let text = (i === correctAnswer) ? database[correctAnswer].name : database[otherAnswers.pop()].name;
        buttonArray[i] = createMyElement('button', {class: "button", id: `button${i}`}, [text]);
    }

    return createMyElement('div', {class: "btn-group"}, buttonArray);
}

function createListOfNRandInts(n, upperLimitExcl, skip) {
    if (!skip) {
        skip = []
    }
    if (!(skip instanceof Array)) {
        skip = [skip]
    }

    let res = [];

    while (res.length < n) {
        let candidate = Math.floor(Math.random() * upperLimitExcl);
        if (res.includes((candidate)) || skip.includes(candidate)) {
            continue;
        }
        res.push(candidate);
    }

    return res;
}

function getNRandomFacts(n) {
    let res = createListOfNRandInts(n, random_facts.length, );
    res.forEach((elem, idx) => res[idx] = random_facts[elem]);
    return res;
}


createMyElement = (type, attributes, children) => {
    if (!(children instanceof Array)) {
        children = [children];
    }

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
