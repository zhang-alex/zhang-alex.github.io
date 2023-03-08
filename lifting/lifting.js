

const modalBackground = document.getElementById('modal-background');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

let openModal = null;

const squatModal = document.getElementById("squat-modal");

document.getElementById('squat-button').addEventListener('click', () => {
    squatModal.style.display = 'block';
    setTimeout(() => {
        openModal = squatModal;
        squatModal.classList.add('modal-open');
        body.classList.add('modal-open');
    }, 10);

    const this_str = "squat";

    render_modal(this_str);
});



function render_modal(this_str) {
    // render_modal_header(this_str);
    render_body(this_str);
}

function render_modal_header(this_str) {
    const title = createMyElement('h2', null, this_str.charAt(0).toUpperCase() + this_str.slice(1));
    const close_button = createMyElement('button', {id: "close-modal"}, "×");
    const header = createMyElement('div', {id: "modal-header"}, [title, close_button])

    document.querySelector(".modal").appendChild(header);

    const closeModalButton = document.getElementById('close-modal');
    closeModalButton.addEventListener('click', () => {
        closeModal();
    });
}

function render_body(this_str) {
    const source = createMyElement('source', {src: `videos/${this_str}.mp4`, type: "video/mp4"})
    const video = createMyElement('video', source)
    video.controls = true;
    const body = createMyElement('div', {id: "modal-content"}, video);
    document.querySelector(".modal").appendChild(body);
}


modalBackground.addEventListener('click', () => {
    closeModal();
});

function closeModal() {
    openModal.classList.remove('modal-open');
    body.classList.remove('modal-open');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
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



