let mouseX = 0;
let mouseY = 0;

function createParticles() {
  const container = document.getElementById('particleContainer');
  
  // Clear any existing particles
  container.innerHTML = '';
  
  const particleCount = 100;
  
  for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Varied sizes for snowflakes
      const size = Math.random() * 15 + 10; // Between 10px and 25px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Start particles from random positions
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Store original position for movement calculation
      particle.dataset.x = parseFloat(particle.style.left);
      particle.dataset.y = parseFloat(particle.style.top);
      
      // Random animation delay and duration
      const duration = 15 + Math.random() * 15; // Between 15-30s
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * duration}s`;
      
      // Random rotation on start
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      container.appendChild(particle);
  }
}

function moveParticles(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        // Calculate distance from cursor
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        const distX = mouseX - particleX;
        const distY = mouseY - particleY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Move particles away from cursor
        if (distance < 200) { // Influence radius
            const angle = Math.atan2(distY, distX);
            const force = (200 - distance) / 10; // Stronger effect when closer
            
            const moveX = Math.cos(angle) * force;
            const moveY = Math.sin(angle) * force;
            
            particle.style.transform = `translate(${-moveX}px, ${-moveY}px) rotate(${distance}deg)`;
        } else {
            particle.style.transform = 'translate(0, 0)';
        }
    });
}

// Helper function to wrap text in animated spans
function wrapTextInSpans(text) {
    return text.split(' ').map((word, index) => 
        `<span class="fade-in-text" style="animation-delay: ${index * 0.1}s">${word} </span>`
    ).join('');
}

// Call createParticles when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    createParticles();
    
    const aboutBtn = document.getElementById('about-btn');
    aboutBtn.addEventListener('click', function() {
        aboutBtn.style.display = 'none';
        
        const nameElements = document.querySelectorAll('#name');
        nameElements.forEach(element => {
            element.style.display = 'none';
        });

        const mainContent = document.createElement('div');
        mainContent.className = 'portfolio-layout fade-in';
        
        // Create home button separately
        const homeButton = document.createElement('div');
        homeButton.className = 'home-button';
        homeButton.innerHTML = '<i class="fas fa-home" data-tooltip="Back to Home"></i>';
        homeButton.addEventListener('click', function() {
            // Remove about page content
            mainContent.remove();
            homeButton.remove();
            
            // Restore initial elements
            aboutBtn.style.display = 'block';
            nameElements.forEach(element => {
                element.style.display = 'block';
            });
            
            // Remove the about-page-active class to show background animation
            document.body.classList.remove('about-page-active');
        });

        mainContent.innerHTML = `
<!--------------------------------------- Left Content  ---------------------------------------------------------------->

            <div class="left-content">
                <div class="intro-section">
<!--------------------------------------- About ME  ---------------------------------------------------------------->

                    <div class="greeting">Hi, Its me</div>
                    <div class="name"> 👋Sumina Khadka </div>
                    <div class="description">
                        Graduated with Bachelor in Computer Science and Information Technology.<br>
                        Passionate about Software Testing, I am working to build a strong foundation in both manual and automated testing.<br>
                        And trying to excel different skills in the testing field.
                    </div>
<!--------------------------------------- Connect With me  ---------------------------------------------------------------->

                    <div class="links">
                      <div class="section-title">Connect With Me On</div>
                        <div class="info-box">
                           <img src="linkedin.png"></img>
                            <span>https://www.linkedin.com/in/sumina-khadka/</span>
                        </div>
                        <div class="info-box">
                           <img src="github.png"></img>
                            <span>https://github.com/sumeina</span>
                        </div>
                        <div class="info-box">
                        <img src="gmail.png"></img>
                            <span>suminakdk057@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
<!---------------------------------------   ---------------------------------------------------------------->

            <div class="center-content">
                <!-- Your profile image here -->
            </div>
<!--------------------------------------- Right side content  ---------------------------------------------------------------->

            <div class="right-content">
<!--------------------------------------- Skils & Expertise  ---------------------------------------------------------------->
                <div class="technical-skills">
                    <div class="section-title">Skills & Expertise</div>
                    <div class="skills-grid">
                       <div class="skill-item" data-skill="Test Report">
                            <i class="fas fa-file-alt"></i>
                            <div class="hover-grid">
                                <p>Test Reporting</p>
                                <div class="icons-grid">
                                    <i class="fas fa-tasks" style=" color: #4CAF50;" data-tooltip="Test Plan"></i>
                                    <i class="fas fa-check-square" style=" color: #2196F3;" data-tooltip="Test Cases"></i>
                                    <i class="fas fa-sitemap" style="color: #FF9800;" data-tooltip="Test Scenario"></i>
                                    <i class="fas fa-book" style="color: #E91E63;" data-tooltip="User Manual"></i>

                                </div>
                            </div>
                        </div>
                           <div class="skill-item" data-skill="Manual Testing" style="color: #2196F3;">
                            <i class="fas fa-hand-pointer"></i>
                            <div class="hover-grid">
                                <p>Manual Testing</p>
                                <div class="icons-grid">
                                    <i class="fas fa-globe" style=" color: #2196F3;" data-tooltip="Web Testing"></i>
                                    <i class="fas fa-mobile-alt" style=" color: #4CAF50;" data-tooltip="APK Testing"></i>
                                    <i class="fas fa-desktop" style="color: #9C27B0;" data-tooltip="UI Testing"></i>
                                    <i class="fas fa-code" style="color: #E91E63;" data-tooltip="API Testing"></i>

                                </div>
                            </div>
                        </div>
                        <div class="skill-item" data-skill="Programming Languages" style="color: #9C27B0;">
                            <i class="fas fa-code"></i>
                            <div class="hover-grid">
                                <p>Programming Languages</p>
                                <div class="icons-grid">
                                    <i class="fab fa-html5" style="color: #E34F26;" data-tooltip="HTML5"></i>
                                    <i class="fab fa-css3-alt" style="color: #1572B6;" data-tooltip="CSS3"></i>
                                    <i class="fab fa-bootstrap" style="color: #7952B3;" data-tooltip="Bootstrap"></i>
                                    <i class="fab fa-js" style="color: #F7DF1E;" data-tooltip="JavaScript"></i>
                                    <i class="fab fa-python" style="color: #3776AB;" data-tooltip="Python"></i>
                                    <i class="fab fa-java" style="color: #007396;" data-tooltip="Java"></i>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-skill="Project Management" style="color: #FF9800;">
                            <i class="fas fa-tasks"></i>
                            <div class="hover-grid">
                                <p>Project Management Tools</p>
                                <div class="icons-grid">
                                    <i class="fab fa-jira" style="color: #0052CC;" data-tooltip="Jira"></i>
                                    <i class="fab fa-trello" style="color: #0079BF;" data-tooltip="Trello"></i>
                                    <i class="fab fa-git-alt" style="color: #F05032;" data-tooltip="Git"></i>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-skill="Test Automation" style="color: #E91E63;">
                            <i class="fas fa-cogs"></i>
                            <div class="hover-grid">
                                <p>Automation Testing</p>
                                <div class="icons-grid">
                                    <i class="fas fa-check-circle" style="color: #43B02A;" data-tooltip="Selenium"></i>
                                    <i class="fas fa-vial" style="color:rgb(88, 94, 103);" data-tooltip="Cypress"></i>
                                    <i class="fas fa-ghost" style="color: #00D8A2;" data-tooltip="Puppeteer"></i>
                                </div>
                            </div>
                        </div>

                        <div class="skill-item" data-skill="API Testing" style="color: #00BCD4;">
                            <i class="fas fa-robot"></i>
                            <div class="hover-grid">
                                <p>API Testing</p>
                                <div class="icons-grid">
                                    <i class="fas fa-paper-plane" style="color: #FF6C37;" data-tooltip="Postman"></i>
                                    <i class="fas fa-leaf" style="color: #47A248;" data-tooltip="MongoDB"></i>
                                    <i class="fas fa-file-contract" style="color: #85EA2D;" data-tooltip="Swagger"></i>
                                    <i class="fas fa-database" style="color: #336791;" data-tooltip="PostgreSQL"></i>
                                </div>
                            </div>
                        </div>
                          <div class="skill-item" data-skill="Load Testing" style="color: #FF5722;">
                            <i class="fas fa-tachometer-alt"></i>
                            <div class="hover-grid">
                                <p>Performance & Load Testing</p>
                                <div class="icons-grid">
                                    <i class="fas fa-chart-line" style="color: #FF6C37;" data-tooltip="Jmeter"></i>
                                </div>
                            </div>
                        </div>
                          <div class="skill-item" data-skill="Version Control">
                            <i class="fas fa-code-branch"></i>
                            <div class="hover-grid">
                                <p>Version Control</p>
                                <div class="icons-grid">
                                    <i class="fab fa-github" style="color: #FF6C37;" data-tooltip="Github"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<!--------------------------------------- Project  ---------------------------------------------------------------->
<div class="project-stats">
      <div class="section-title">Projects</div>
    <div class="progress-item">
        <div class="progress-bar">
            <div class="progress" style="width: 85%">
                <span class="progress-number"> 8 + </span>
            </div>
        </div>
    </div>
</div>
<!--------------------------------------- Company  ---------------------------------------------------------------->
<div class="company-slider">
    <div class="section-title">Companies I've Worked With</div>
    <div class="slider-container">
        <div class="slider-track">
            <!-- company  -->
            <div class="slide">
                <img src="ch.jpeg" alt="Code Himalaya">
            </div>
            <div class="slide">
                <img src="darsetech_logo.jpeg" alt="Darse Technologies">
            </div>
            <div class="slide">
                <img src="avocadopos_logo.jpeg" alt="Avocado Technology">
            </div>
              <div class="slide">
                <img src="db.jpeg" alt="Durbarmart">
            </div>
        </div>
    </div>
</div>
            </div>
        `;
        
        document.querySelector('.content-wrapper').appendChild(mainContent);
        document.body.appendChild(homeButton);
    });
    
});

// Add mouse move listener
document.addEventListener('mousemove', moveParticles);

// Recreate particles periodically
setInterval(createParticles, 15000);

document.getElementById('about-btn').addEventListener('click', function() {
    // When showing about page
    document.body.classList.add('about-page-active');
    // Your existing about page show logic
});

//  Handle returning to home/main page
document.querySelector('.home-button').addEventListener('click', function() {
    // Hiding about page
    document.body.classList.remove('about-page-active');
    // Existing about page hide logic
});
document.addEventListener('touchmove', function (e) {
    const touch = e.touches[0];
    moveParticles(touch);
});




