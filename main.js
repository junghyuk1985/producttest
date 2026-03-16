const button = document.querySelector(".cheer-button");
const confettiHost = document.querySelector(".confetti");

const colors = ["#ff7b7b", "#ffcf5c", "#9fe6c3", "#8ec5ff", "#ffc2d1"];

function burstConfetti() {
  for (let index = 0; index < 24; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDuration = `${2.6 + Math.random() * 1.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    confettiHost.append(piece);

    setTimeout(() => {
      piece.remove();
    }, 4200);
  }
}

button?.addEventListener("click", burstConfetti);

window.addEventListener("load", () => {
  burstConfetti();
});
