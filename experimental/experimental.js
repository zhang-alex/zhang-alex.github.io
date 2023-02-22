const K_ANSWERS = 4;
const K_RANDOM_FACTS = 4;
let pageNum = 0;
let correctAnswer = Math.floor(Math.random() * K_ANSWERS);
const K_TOTAL_PAGES = 5;

function main(n) {
    pageNum = n;
    render();
}

function render() {
    renderHeader();
    renderBody();
    renderFooter();
}

function renderHeader() {
    let header_text = createMyElement('h1', null, "IQMaster");
    let header = createMyElement('header', null, header_text);
    let body = document.querySelector('body')
    body.appendChild(header);
    body.innerHTML +=
`
<main>
    <div id="left-col" class="col">
        <h2 class="left-col-title">Did you know?</h2>
        <hr id="facts-below">
    </div>
    <div id="mid-col" class="col">
        <div class="mid-col-content">
            <div class="subject-icon-container">
            </div>
            <div class="ad">
                <!-- Google AdSense Ad -->
            </div>
            <div class="ad" id="buttons-before">
                <!-- Google AdSense Ad -->
            </div>
            <div class="ad">
                <!-- Google AdSense Ad -->
            </div>
            <button id="continue">Continue</button>
        </div>
    </div>
    <div id="right-col" class="col">
        <div class="ad">
            <!-- Google AdSense Ad -->
        </div>
        <div class="ad">
            <!-- Google AdSense Ad -->
        </div>
    </div>
</main>
<footer>
    <div class="ad">
        <!-- Google AdSense Ad -->
    </div>
</footer>
`
}

function renderBody() {
    renderLeft();
    renderMid();
}

function renderFooter() {

}

function renderLeft() {
    renderNRandomFacts(K_RANDOM_FACTS);
}

function renderMid() {
    document.querySelector("#continue").addEventListener('click', nextPage);
    renderMidTitle();
    renderImage();
    renderAnswerButtons();
}

function renderMidTitle() {
    let title = createMyElement('h2', {class: "mid-col-title"}, database[pageNum].question);
    document.querySelector(".mid-col-content").prepend(title);
}

function renderAnswerButtons() {
    let container = document.querySelector(".mid-col-content");
    let button_group = createAnswerButtons();
    container.insertBefore(button_group, document.querySelector("#buttons-before"));
}

function renderImage() {
    const myImage = createMyElement('img', {src: `images/${pageNum}.jpg`, height: '400px'})
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
    let otherAnswers = createListOfNRandInts(K_ANSWERS - 1, Object.keys(database).length, pageNum);
    let buttonArray = [];
    // console.log(otherAnswers[0]);
    // console.log(otherAnswers[1]);
    // console.log(otherAnswers[2]);
    // console.log(pageNum);
    // console.log('-');

    for (let i = 0; i < K_ANSWERS; i++) {
        let text;
        if (i === correctAnswer) {
            text = database[pageNum].name;
        } else {
            text = database[otherAnswers.pop()].name;
        }
        buttonArray[i] = createMyElement('button', {class: "button", id: `button${i}`}, [text]);
        buttonArray[i].addEventListener("click", answerButtonClick)
    }

    return createMyElement('div', {class: "btn-group"}, buttonArray);
}

function answerButtonClick() {
    let button_group = document.querySelector(".btn-group");
    for (let child = button_group.firstChild; child !== null; child = child.nextSibling) {
        if (child.textContent === database[pageNum].name) {
            child.style.backgroundColor = "green";
        } else {
            child.style.backgroundColor = "red";
        }
    }
}

function nextPage() {
    window.location.href = `${(pageNum+1) % K_TOTAL_PAGES}.html`;
}

function createListOfNRandInts(n, upperLimitExcl, skip) {
    console.log(n, upperLimitExcl, skip);
    if (typeof skip === 'undefined') {
        skip = []
    }
    if (!(skip instanceof Array)) {
        skip = [skip];
        console.log("YAYAYAYAYA");
    }

    let res = [];

    while (res.length < n) {
        let candidate = Math.floor(Math.random() * upperLimitExcl);
        if (res.includes((candidate)) || skip.includes(candidate)) {
            continue;
        }
        console.log(candidate);
        console.log(skip[0]);
        console.log(skip.includes(candidate));
        console.log(skip.includes(0));
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
