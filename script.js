// Parsing the provided CSV data
const data = [
  { Occupation: "Management Occupations", MedianEarnings: 191578 },
  { Occupation: "Business & Financial Operations Occupations", MedianEarnings: 164742 },
  { Occupation: "Computer & Mathematical Occupations", MedianEarnings: 175189 },
  { Occupation: "Architecture & Engineering Occupations", MedianEarnings: 152057 },
  { Occupation: "Life, Physical, & Social Science Occupations", MedianEarnings: 119295 },
  { Occupation: "Community & Social Service Occupations", MedianEarnings: 90131 },
  { Occupation: "Legal Occupations", MedianEarnings: 222699 }
];

const details = {
  roles: `Management Occupations lead with median earnings of $191,578. Legal Occupations, on the other hand, have the highest earnings at $222,699. This indicates that specialized and high-responsibility roles tend to offer the most lucrative salaries in Boston. Additionally, occupations in computer and mathematical fields also command high salaries, reflecting the tech industry's significant presence in the city. Understanding these high-paying roles can help you align your career goals with lucrative opportunities available in Boston.`,
  costOfLiving: `Despite the high cost of living in Boston, the earnings in top occupations are substantial enough to maintain a good quality of life. For example, Management Occupations with a median salary of $191,578 can comfortably cover living expenses while leaving room for savings and leisure. This chart underscores the importance of weighing salary potential against living costs when considering a career move. High salaries in Boston's top professions can offset the city's living costs, making it a viable option for those seeking financial stability and growth.`,
  incomeLevels: `Income levels rise significantly with experience across all industries, highlighting the value of gaining experience in your field. For instance, a Software Engineer's salary increases from $80,000 at the entry level to $140,000 with over 15 years of experience. This pattern is consistent across other sectors, such as finance, healthcare, education, and sales, demonstrating that long-term career growth can lead to substantial financial rewards. This insight emphasizes the importance of career development and continuous learning to achieve higher income levels over time.`
};

// High Paying Roles Data
const rolesData = {
  labels: data.map(item => item.Occupation),
  datasets: [{
      label: 'Median Earnings in USD',
      data: data.map(item => item.MedianEarnings),
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)'
      ],
      borderWidth: 1
  }]
};

// Cost of Living vs Pay Data with updated colors
const costOfLivingData = {
  labels: data.map(item => item.Occupation),
  datasets: [{
      label: 'Cost of Living vs Pay',
      data: data.map(item => item.MedianEarnings),
      backgroundColor: 'rgba(255, 159, 64, 0.2)', // New color for bars
      borderColor: 'rgba(255, 159, 64, 1)', // New color for borders
      borderWidth: 1
  }]
};

// Income Levels by Industry and Experience Data
const incomeLevelsData = {
  labels: ['0-5 years', '5-10 years', '10-15 years', '15+ years'],
  datasets: [
      {
          label: 'Software Engineer',
          data: [80000, 100000, 120000, 140000],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
      },
      {
          label: 'Accountant/Finance',
          data: [60000, 70000, 90000, 110000],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
      },
      {
          label: 'Healthcare',
          data: [70000, 85000, 95000, 105000],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
      },
      {
          label: 'Education',
          data: [50000, 60000, 70000, 80000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
      },
      {
          label: 'Sales',
          data: [55000, 65000, 75000, 85000],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
      }
  ]
};

// Configuration for Roles Chart
const rolesConfig = {
  type: 'pie',
  data: rolesData,
  options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
          tooltip: {
              callbacks: {
                  label: function(context) {
                      return `${context.label}: $${context.raw}`;
                  }
              }
          }
      }
  }
};

// Configuration for Cost of Living Chart
const costOfLivingConfig = {
  type: 'bar',
  data: costOfLivingData,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
          tooltip: {
              callbacks: {
                  label: function(context) {
                      return `$${context.raw}`;
                  }
              }
          }
      }
  }
};

// Configuration for Income Levels Chart
const incomeLevelsConfig = {
  type: 'bar',
  data: incomeLevelsData,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
          tooltip: {
              callbacks: {
                  label: function(context) {
                      return `$${context.raw}`;
                  }
              }
          }
      }
  }
};

// Render Charts
window.onload = function() {
  const rolesCtx = document.getElementById('rolesChart').getContext('2d');
  new Chart(rolesCtx, rolesConfig);

  const costOfLivingCtx = document.getElementById('costOfLivingChart').getContext('2d');
  new Chart(costOfLivingCtx, costOfLivingConfig);

  const incomeLevelsCtx = document.getElementById('incomeLevelsChart').getContext('2d');
  new Chart(incomeLevelsCtx, incomeLevelsConfig);

  document.getElementById('rolesDetails').textContent = details.roles;
  document.getElementById('costOfLivingDetails').textContent = details.costOfLiving;
  document.getElementById('incomeLevelsDetails').textContent = details.incomeLevels;
};

let currentIndex = 0;
const sections = document.querySelectorAll('.chart-container');

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    sections[currentIndex].style.display = 'none';
    currentIndex--;
    sections[currentIndex].style.display = 'block';
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < sections.length - 1) {
    sections[currentIndex].style.display = 'none';
    currentIndex++;
    sections[currentIndex].style.display = 'block';
  }
});

// Initialize by showing the first section only
sections.forEach((section, index) => {
  if (index !== 0) section.style.display = 'none';
});
