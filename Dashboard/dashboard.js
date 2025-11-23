// BUTTON ANIMATION (Get Started does not navigate — user requested no navigation)
const startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    // keep the simple animation but do NOT redirect
    startBtn.style.transform = "scale(1.25)";
    setTimeout(() => (startBtn.style.transform = "scale(1)"), 300);
  });
}

// Login button: open the renamed login page
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    // navigate to sibling login-page/login.html
    window.location.href = "../login-page/login.html";
  });
}

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
