document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Elements
  const userMenuBtn = document.getElementById('userMenuBtn');
  const navPanel = document.getElementById('navPanel');
  const panelItems = document.querySelectorAll('.panel-item[data-tab]');

  // Toggle Nav Panel
  userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navPanel.classList.toggle('hidden');
  });

  // Close Panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!navPanel.contains(e.target) && !userMenuBtn.contains(e.target)) {
      navPanel.classList.add('hidden');
    }
  });

  // Tab Switching Logic
  panelItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');

      // Special handling for history tab - redirect to history page
      if (targetTab === 'history') {
        window.location.href = '../History/history.html';
        return;
      }

      // Special handling for settings tab - redirect to settings page
      if (targetTab === 'settings') {
        window.location.href = '../setting/settings.html';
        return;
      }

      // Special handling for quick scan - show scan interface
      if (targetTab === 'quickscan') {
        alert('Quick Scan feature - Enter a URL to scan for phishing threats!');
        navPanel.classList.add('hidden');
        return;
      }

      // Close panel after selection
      navPanel.classList.add('hidden');
    });
  });

  // Logout Button
  const logoutBtn = document.querySelector('.logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to logout?')) {
        window.location.href = '../login-page/login.html';
      }
    });
  }

  // Chart.js Configuration
  const ctx = document.getElementById('securityChart').getContext('2d');

  const securityData = {
    labels: ['Safe', 'Suspicious', 'Malware'],
    datasets: [{
      label: 'Detection Analysis',
      data: [92, 21, 15],
      borderColor: '#06b6d4', // cyan-500
      backgroundColor: 'rgba(6, 182, 212, 0.1)',
      borderWidth: 3,
      tension: 0.4, // Smooth curve like 'monotone'
      pointBackgroundColor: '#06b6d4',
      pointBorderColor: '#0e7490', // cyan-700
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: false
    }]
  };

  new Chart(ctx, {
    type: 'line',
    data: securityData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#111827', // gray-900
          titleColor: '#f3f4f6', // gray-100
          bodyColor: '#f3f4f6',
          borderColor: '#1f2937', // gray-800
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: function (context) {
              return `Value: ${context.parsed.y}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            color: '#9ca3af', // gray-400
            font: {
              size: 14
            }
          }
        },
        y: {
          grid: {
            color: '#1f2937', // gray-800
            borderDash: [5, 5]
          },
          ticks: {
            color: '#9ca3af',
            font: {
              size: 14
            }
          },
          min: 0,
          max: 100
        }
      }
    }
  });
});
