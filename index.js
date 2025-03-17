/** @type {Element} */
// @ts-ignore
const gridSizePromptButton = document.querySelector("#grid-size-prompt");
gridSizePromptButton.addEventListener("click", promptAndUpdateGridSize);

function promptAndUpdateGridSize() {
  const input = prompt("Grid size?");
  const inputNumber = parseInt(input ?? "16", 10);
  const gridSize = Number.isNaN(inputNumber)
    ? 16
    : inputNumber > 100
    ? 100
    : inputNumber;
  resetGrid(gridSize);
}

/** @type {HTMLDivElement} */
// @ts-ignore
const mainContainer = document.querySelector(".main-container");

const MAIN_CONTAINER_WIDTH_PX = 320;
mainContainer.style.width = `${MAIN_CONTAINER_WIDTH_PX}px`;

function activateGridCell(event) {
  event.target.classList.add("grid-cell--activated");
}

function resetGrid(gridSize) {
  mainContainer.replaceChildren();
  for (let i = 0; i < gridSize * gridSize; ++i) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridCell.style.width = `${MAIN_CONTAINER_WIDTH_PX / gridSize}px`;
    gridCell.addEventListener("mouseenter", activateGridCell);
    mainContainer.appendChild(gridCell);
  }
}

resetGrid(16);
