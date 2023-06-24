window.addEventListener("DOMContentLoaded", () => {
  let cells = document.querySelectorAll(".grid-cell");

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

});
