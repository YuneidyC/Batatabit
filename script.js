const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');
const card = document.getElementById('cards');

function showTable(id) {
    card.classList.toggle("is-flipped");
    if (id === 'leftArrow') {
        switchState(leftArrow, false);
        switchState(rightArrow, true);
    } else if (id === 'rightArrow') {
        switchState(leftArrow, true);
        switchState(rightArrow, false);
    }
}

function switchState(arrowObject, bActivate) {
    if (bActivate) {
        arrowObject.parentNode.classList.remove('is-inactive');
    } else {
        arrowObject.parentNode.classList.add('is-inactive');
    }
    arrowObject.disabled = !bActivate;
}
