// Navbar toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Chart.js for dashboard
window.addEventListener('load', () => {
  // Sales chart
  const ctxSales = document.getElementById('salesChart');
  if (ctxSales) {
    new Chart(ctxSales, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Car Sales',
          data: [30, 40, 50, 60, 55, 70, 80],
          borderColor: '#ff4b1f',
          backgroundColor: 'rgba(255, 75, 31, 0.2)',
          fill: true,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Customers chart
  const ctxCustomers = document.getElementById('customersChart');
  if (ctxCustomers) {
    new Chart(ctxCustomers, {
      type: 'bar',
      data: {
        labels: ['Active', 'Inactive', 'New'],
        datasets: [{
          label: 'Customers',
          data: [350, 150, 45],
          backgroundColor: ['#ff4b1f', '#ff8f6b', '#ff4b1f']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});
