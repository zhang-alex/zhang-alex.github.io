

const modalBackground = document.getElementById('modal-background');
const body = document.querySelector('body');

const modal = document.getElementById("lift-modal");

document.getElementById('squat-button').onclick = () => lift_listener("https://www.youtube.com/embed/f7DyEnjTKFg");
document.getElementById('bench-press-button').onclick = () => lift_listener("https://www.youtube.com/embed/n1f9tYosyAw");
document.getElementById('paused-bench-button').onclick = () => lift_listener("https://www.youtube.com/embed/VgEdAXVJ1l4");
document.getElementById('conventional-deadlift-button').onclick = () => lift_listener("https://www.youtube.com/embed/5NbM8EVRBKc");
document.getElementById('sumo-deadlift-button').onclick = () => lift_listener("https://www.youtube.com/embed/jSUbAPyZQzA");
document.getElementById('leg-press-button').onclick = () => lift_listener("https://www.youtube.com/embed/KsGGw8-xxs0");
document.getElementById('deficit-deadlift-button').onclick = () => lift_listener("https://www.youtube.com/embed/XEnzBf-RX4s");


function lift_listener(this_str) {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('modal-open');
        body.classList.add('modal-open');
    }, 10);

    // const this_str = "https://www.youtube.com/embed/f7DyEnjTKFg";

    render_modal(this_str);
}



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
    // const source = createMyElement('source', {src: `videos/${this_str}.mp4`, type: "video/mp4"})
    // const video = createMyElement('video', source)
    // video.controls = true;
    const video = `<iframe width="100%" height="100%" src=${this_str} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    // const video = `<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="100%" height="100%" type="text/html" src="https://www.youtube.com/embed/f7DyEnjTKFg?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/de/">youtubeembedcode.com/de/</a></small></div><div><small><a href="https://yatzyregler.se/">https://yatzyregler.se/</a></small></div></iframe>`
    // const video = createMyElement('iframe', {src: "https://youtu.be/f7DyEnjTKFg"});
    // const body = createMyElement('div', {id: "modal-content"}, video);
    const body = createMyElement('div', {id: "modal-content"});
    body.innerHTML = video;
    document.querySelector(".modal").appendChild(body);
}


modalBackground.addEventListener('click', () => {
    closeModal();
});

function closeModal() {
    modal.classList.remove('modal-open');
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



