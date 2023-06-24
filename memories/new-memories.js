window.addEventListener("DOMContentLoaded", () => {
  const totalImages = {
    2019: 4,
    2020: 1,
    2021: 0,
  };

  let cells = document.querySelectorAll(".grid-cell");
  var counter;

  // Function to set background image for a cell
  const setBackgroundImage = (cell, year) => {
    const imageUrl = `${year}.png`;
    cell.style.backgroundImage = `url('${imageUrl}')`;
  };

  // Loop through each cell and set the background image
  cells.forEach((cell) => {
    const year = cell.textContent; // Set year to the text content of the cell
    setBackgroundImage(cell, year);
  });

  const modalBackground = document.getElementById("modal-background");
  const body = document.querySelector("body");
  const modal = document.getElementById("media-modal");

  document.getElementById("2019").onclick = () => show_media(2019);
  document.getElementById("2020").onclick = () => show_media(2020);
  document.getElementById("2021").onclick = () => show_media(2021);
  document.getElementById("2022").onclick = () => show_media(2022);
  document.getElementById("2023").onclick = () => show_media(2023);
  document.getElementById("2024").onclick = () => show_media(2024);
  document.getElementById("2025").onclick = () => show_media(2025);

  function show_media(year) {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("modal-open");
      body.classList.add("modal-open");
    }, 10);

    counter = 1;
    updateModalContent(year);

    // Left arrow click event
    modal.querySelector(".modal-arrow.left").onclick = () => {
      if (counter > 1) {
        counter--;
        updateModalContent(year);
      } else {
        closeModal();
      }
    };

    // Right arrow click event
    modal.querySelector(".modal-arrow.right").onclick = () => {
      const totalImagesForYear = totalImages[year] || 0;
      if (counter < totalImagesForYear) {
        counter++;
        updateModalContent(year);
      } else {
        closeModal();
      }
    };
  }

  function updateModalContent(year) {
    const imageUrl = `${year}/${counter}.png`;
    modal.style.backgroundImage = `url('${imageUrl}')`;

    // Update counter and total images
    const counterElement = modal.querySelector(".counter");
    if (counterElement) {
      counterElement.textContent = `${counter} / ${totalImages[year] || 0}`;
    } else {
      const counterElement = createMyElement("div", { class: "counter" }, [
        `${counter} / ${totalImages[year] || 0}`,
      ]);
      modal.appendChild(counterElement);
    }
  }

  modalBackground.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    modal.classList.remove("modal-open");
    body.classList.remove("modal-open");
    setTimeout(() => {
      modal.style.display = "none";
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
        myElement.appendChild(
          child instanceof HTMLElement ? child : document.createTextNode(child)
        );
      }
    }

    return myElement;
  };
});

//   document.getElementById("2019").onclick = () =>
//     lift_listener("https://www.youtube.com/embed/f7DyEnjTKFg");
//   document.getElementById("2020").onclick = () =>
//     lift_listener("https://www.youtube.com/embed/n1f9tYosyAw");
//   document.getElementById("2021").onclick = () =>
//     lift_listener("https://www.youtube.com/embed/VgEdAXVJ1l4");
//   document.getElementById("2022").onclick = () =>
//     lift_listener("https://www.youtube.com/embed/5NbM8EVRBKc");
//   document.getElementById("2023").onclick = () =>
//     lift_listener("https://www.youtube.com/embed/jSUbAPyZQzA");
//   document.getElementById("2024").onclick = () =>
//     lift_listener("https://www.youtube.com/embed/KsGGw8-xxs0");
//   document.getElementById("2025").onclick = () =>
//     lift_listener("https://www.youtube.com/embed/XEnzBf-RX4s");
