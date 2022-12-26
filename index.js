const colorBlocks = document.querySelectorAll('.color-generator__block');
const hexCodes = '0123456789ABCDEF';

function getRandomIndex () {
  return Math.floor(Math.random() * (15 - 0));
}

function getRandomHexCode () {
  let newHexCode = '#';
  for (i = 1; i <= 6; i++) {
    newHexCode += hexCodes[getRandomIndex()];
  }
  return newHexCode
}

function setButtons() {
  colorBlocks.forEach( (item) => {
    const lockButton = item.querySelector('.color-generator__lock');
    lockButton.addEventListener('click', function (event) {
      eventTarget = event.target;
      eventTarget.classList.toggle('fa-lock-open')
      eventTarget.blur();
      item.classList.toggle('locked')
    });
  });
}

function updateColorBlocks() {
  colorBlocks.forEach( (item) => {
    let newHexCode = getRandomHexCode();
    if (item.classList.contains('locked')) {
      return
    } else {
      item.style.backgroundColor = newHexCode;
      item.firstElementChild.textContent = newHexCode;
    }
  });
}

document.addEventListener('keydown', (event) => {
	if (event.code.toLowerCase() === 'space')	updateColorBlocks();
})

setButtons()
updateColorBlocks();
