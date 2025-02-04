function countdown() {
  const launchDate = new Date("2025-03-01T00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById(
      "countdown"
    ).innerHTML = `${days}روز ${hours}ساعت ${minutes}دقیقه ${seconds}ثانیه`;
  }, 1000);
}
countdown();

const text = `چیزی بزرگ در راه است...
زمان صبر خواهد کرد، اما ما نه!
چشم‌ها را باز کن، آینده در حال رقم خوردن است.`;
let index = 0;
let isDeleting = false;
function typeEffect() {
  const element = document.getElementById("animatedText");
  element.textContent = text.substring(0, index);
  if (!isDeleting && index < text.length) {
    index++;
  } else if (isDeleting && index > 0) {
    index--;
  } else {
    isDeleting = !isDeleting;
  }
  setTimeout(typeEffect, isDeleting ? 100 : 200);
}
typeEffect();
