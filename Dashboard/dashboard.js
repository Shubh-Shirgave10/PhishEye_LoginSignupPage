// BUTTON ANIMATION + REDIRECT
document.getElementById("startBtn").addEventListener("click", () => {
  let btn = document.getElementById("startBtn");

  btn.style.transform = "scale(1.25)";
  setTimeout(() => (btn.style.transform = "scale(1)"), 300);

  setTimeout(() => {
    window.location.href = "../login-page/login.html";
  }, 300);
});

// WHY CARDS EXPAND
document.querySelectorAll(".why-card").forEach(card => {
  card.addEventListener("click", () => {
    let details = card.querySelector(".details");
    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });
});

// SECURITY REVEAL ON SCROLL
const securityItems = document.querySelectorAll(".security-item");

function revealSecurity() {
  securityItems.forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => item.classList.add("show"), i * 200);
    }
  });
}

window.addEventListener("scroll", revealSecurity);
revealSecurity();
