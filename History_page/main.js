const canvas = document.getElementById("securityChart");
const ctx = canvas.getContext("2d");

const gradientSafe = ctx.createRadialGradient(140, 140, 10, 140, 140, 140);
gradientSafe.addColorStop(0, "#4ade80");
gradientSafe.addColorStop(1, "#15803d");

const gradientSuspicious = ctx.createRadialGradient(140, 140, 10, 140, 140, 140);
gradientSuspicious.addColorStop(0, "#fde047");
gradientSuspicious.addColorStop(1, "#d97706");

const gradientMalicious = ctx.createRadialGradient(140, 140, 10, 140, 140, 140);
gradientMalicious.addColorStop(0, "#fb7185");
gradientMalicious.addColorStop(1, "#b91c1c");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Safe", "Suspicious", "Malicious"],
    datasets: [
      {
        data: [10, 7, 7],
        backgroundColor: [gradientSafe, gradientSuspicious, gradientMalicious],
        borderColor: "#050b1b",
        borderWidth: 5,
        hoverBorderColor: "#38bdf8",
        hoverOffset: 18,
      },
    ],
  },
  options: {
    responsive: true,
    animation: {
      duration: 1400,
      easing: "easeOutQuint",
    },
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(3, 10, 31, 0.9)",
        titleColor: "#e0f2ff",
        bodyColor: "#c9dcff",
        borderColor: "rgba(14, 165, 233, 0.45)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 10,
      },
    },
  },
});

