document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.querySelector('i').classList.remove('fa-times');
      menuToggle.querySelector('i').classList.add('fa-bars');
    });
  });

  // Theme toggle
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener('click', function() {
    document.body.setAttribute('data-theme', 
      document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    
    const icon = this.querySelector('i');
    if (document.body.getAttribute('data-theme') === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

  // Skills data
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
     { name: 'WordPress', icon: 'fab fa-wordpress' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
  ];

  const projects = [
    {
      title: "Crochet Artist Portfolio",
      description: "A beautiful showcase for fiber artists with gallery and contact features",
      tags: ["HTML", "CSS", "JavaScript"],
      screenshot: "projects/screenshot1.png",
      demoPath: "projects/Hopell/index.html"
    },
    {
      title: "E-Commerce Store",
      description: "Online shop with shopping cart functionality and product filtering",
      tags: ["HTML", "CSS", "JavaScript"],
      screenshot: "projects/screenshot2.png",
      demoPath: "projects/E-commerce/index.html"
    },
    {
      title: "Star Pulse Pro",
      description: "Product landing page for a premium smartwatch with animated features",
      tags: ["HTML", "CSS", "GSAP"],
      screenshot: "projects/screenshot3.png",
      demoPath: "projects/Product Landing Page/index.html"
    },
    {
      title: "Simple Omelette",
      description: "Recipe app with step-by-step instructions and cooking timers",
      tags: ["React", "Firebase", "API"],
      screenshot: "projects/screenshot4.png",
      demoPath: "projects/Recipe Main Page/index.html"
    },
    {
      title: "Budget Tracker",
      description: "Interactive finance dashboard with expense categorization and spending analytics",
      tags: ["JavaScript", "Chart.js", "Data Visualization"],
      screenshot: "projects/screenshot6.png",
      demoPath: "projects/budget/index.html"
    },
    {
      title: "Task Manager",
      description: "Drag-and-drop task organizer with progress tracking",
      tags: ["JavaScript", "LocalStorage", "Drag API"],
      screenshot: "projects/screenshot5.png",
      demoPath: "projects/taskmanager/index.html"
    },
  ];

  // Populate skills
  const skillsContainer = document.getElementById('skills-container');
  skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
      <i class="${skill.icon} skill-icon"></i>
      <h3 class="skill-name">${skill.name}</h3>
    `;
    skillsContainer.appendChild(skillCard);
  });

  // Populate projects
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <img src="${project.screenshot}" alt="${project.title}" class="project-image">
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          <a href="${project.demoPath}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
      </div>
    `;
    projectsContainer.appendChild(projectCard);
  });

  // Project slider functionality
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  
  if (projectsContainer && prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      projectsContainer.scrollBy({
        left: -projectsContainer.offsetWidth * 0.85,
        behavior: 'smooth'
      });
    });
    
    nextButton.addEventListener('click', () => {
      projectsContainer.scrollBy({
        left: projectsContainer.offsetWidth * 0.85,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar shadow on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // WhatsApp form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;
      
      const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
      
      const whatsappNumber = '2349029278707';
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
      this.reset();
      alert('Thank you for your message! You will be redirected to WhatsApp to complete the conversation.');
    });
  }
});