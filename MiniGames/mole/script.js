const blocks = document.querySelectorAll(".block");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timer = document.querySelector("#timer");

let result = 0;

let time = 60;

function updateTimer() {
    timer.textContent = `Timer: ${time} sec`;
    time--;

    if (time < 0) {
        clearInterval(timerInterval);
        alert("Game Over! Your final score is " + result);
        window.location.reload();
    }
}

updateTimer();

const timerInterval = setInterval(updateTimer, 1000);

function randomBlock() {
    blocks.forEach(block => {
        block.classList.remove('mole');
    });

    let random = blocks[Math.floor(Math.random() * 9)];
    random.classList.add('mole');
}

function randomMole() {
    let timerID = null;
    timerID = setInterval(randomBlock, 500);
}
randomMole();

blocks.forEach(block => {
    block.addEventListener("click", () => {
        if (block.classList.contains("mole")) {
            result++;
            score.textContent = `Score: ${result}`;
            block.classList.remove("mole");
        }
    });
})
