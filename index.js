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
  incrementHoverCount();
  event.target.classList.add("grid-cell--activated");
  event.target.style.backgroundColor = createRandomColorValue();
  event.target.style.opacity = getOpacityValue();
}

let nHovers = 0;

function resetHoverCount() {
  nHovers = 0;
}

function incrementHoverCount() {
  ++nHovers;
}

function getOpacityValue() {
  return `${nHovers > 10 ? 1 : nHovers / 10}`
}

function createRandomColorValue() {
  const randomHue = Math.floor(Math.random() * 360);
  return `hsl(${randomHue}deg 100% 50%)`;
}

function resetGrid(gridSize) {
  resetHoverCount();
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
