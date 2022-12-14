import "./styles.css";
const zone = document.querySelector(".zone");
const templateDrop = document.createElement("div");
templateDrop.classList.add("drop");

let counter = 1;

function makeDrop(x, y) {
  const newDrop = templateDrop.cloneNode();
  newDrop.style.left = `${x}px`;
  newDrop.style.top = `${y}px`;
  newDrop.textContent = counter;
  counter += 1;
  zone.appendChild(newDrop);
}

zone.addEventListener("click", (e) => {
  makeDrop(e.offsetX, e.offsetY);
});

function tick() {
  Array.from(zone.querySelectorAll(".drop")).forEach((drop) => {
    const currentSize = parseInt(getComputedStyle(drop).width, 10);
    const newSize = currentSize + 1 + Math.random() * 6;
    drop.style.width = `${newSize}px`;
    drop.style.height = `${newSize}px`;
    drop.style.opacity = (400 - newSize) / 400;

    if (newSize > 400) {
      drop.remove();
    }
  });
}

function loop() {
  window.requestAnimationFrame(() => {
    tick();
    loop();
  });
}
loop();

setInterval(() => {
  // makeDrop(Math.floor(Math.random() * 600), Math.floor(Math.random() * 400));
}, 1);
