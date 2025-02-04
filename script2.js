const cursor = document.getElementById('cursor');
const blackOverlay = document.querySelector('.black-overlay');
let mouseX = 0, mouseY = 0;
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateCursor);
    }
});

function updateCursor() {
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    blackOverlay.style.clipPath = `circle(60px at ${mouseX}px ${mouseY}px)`;

    isMoving = false;
}