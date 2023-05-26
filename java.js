const board = document.getElementById("board")
const knight1 = document.getElementById("knight1")
const knight2 = document.getElementById("knight2")
const correctMove = document.getElementById("correctmove")
const success = document.getElementById("success")

knight1.addEventListener('dragstart', dragStart);
correctMove.addEventListener('dragenter', dragEnter);
correctMove.addEventListener('dragover', dragOver);
correctMove.addEventListener('drop', drop);

const jsConfetti = new JSConfetti()

function dragStart(e) {
    console.log('drag starts...')
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragEnter(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {3
    knight1.classList.add("hide")
    knight2.classList.remove("hide");
    setTimeout(() => {
        board.classList.add('hide');
        knight2.classList.add('hide');
        success.classList.remove('hide');
        jsConfetti.addConfetti({
            confettiRadius:10,
            confettiNumber: 1000
        });
    }, 500);
}

