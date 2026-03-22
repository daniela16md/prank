let count = 0;

function showPopup() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("show");
}

document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("overlay").classList.remove("show");
});

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 140);
    const y = Math.random() * (window.innerHeight - 80);
    return { x, y };
}

function spawnButton() {
    count++;

    // Show popup every 10 clicks
    if (count % 10 === 0) {
        showPopup();
    }

    const btn = document.createElement("button");
    btn.innerText = "Click here";

    const { x, y } = getRandomPosition();
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;

    btn.style.transform = `scale(${1 - count * 0.02})`;
    btn.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;

    // Desktop click
    btn.addEventListener("click", spawnButton);

    // Mobile touch
    btn.addEventListener("touchstart", () => {
        const { x, y } = getRandomPosition();
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    });

    // Desktop hover
    btn.addEventListener("mouseover", () => {
        const { x, y } = getRandomPosition();
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    });

    document.body.appendChild(btn);
}

document.getElementById("startBtn").addEventListener("click", spawnButton);