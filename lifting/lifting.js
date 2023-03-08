
const closeModalButton = document.getElementById('close-modal');
const modalBackground = document.getElementById('modal-background');
const modal = document.getElementById('modal');
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
    render_modal_header(this_str);
    render_body(this_str);
}

function render_modal_header(this_str) {
    const title = createMyElement('h2', null, this_str.charAt(0).toUpperCase() + this_str.slice(1));
    const close_button = createMyElement('button', {id: "close-modal"}, "×");
    const header = createMyElement('div', {id: "modal-header"}, [title, close_button])

    document.querySelector(".modal").appendChild(header);
}

function render_body(this_str) {
    // <div id="modal-content">
    //     <video width="100%" height="100%" controls>
    //         <source src= type="video/mp4">
    //             Your browser does not support the video tag.
    //     </video>
    // </div>
    const source = createMyElement('source', {src: `videos/${this_str}.mp4`, type: "video/mp4"})
    const video = createMyElement('video', {width: "100%", height: "100%", controls: "true"}, source)
    const body = createMyElement('div', {id: "modal-content"}, video);
    document.querySelector(".modal").appendChild(body);
}


closeModalButton.addEventListener('click', () => {
    closeModal();
});

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



