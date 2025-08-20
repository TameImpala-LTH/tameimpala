// src/Views/HomePage.js
import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    useEffect(() => {
    const script = document.createElement('script');
    script.src = './script.js';
    script.async = true; // or false for synchronous loading
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

    return (
    
<>

    <nav class="floating-nav">
        <div class="nav-container">
            <div class="nav-logo">🌿 Verdant Nexus</div>
            <div class="nav-links">
                <a href="#features" class="nav-link">Explore Platform</a>
                <a href="#team" class="nav-link">Meet Teams</a>
            </div>
        </div>
    </nav>

 
    <section class="hero">
        <div class="hero-background-image"></div>
        <div class="container">
            <div class="hero-content">
                <h1>Verdant Nexus</h1>
                <p class="subtitle">Collaborative Platform for Climate Action & Biodiversity Protection</p>
                <p class="description">
                    Unifying IoT, satellite data, and citizen science into one powerful platform for environmental action. 
                    Connect communities, researchers, and organizations to protect our planet together.
                </p>
                <div class="cta-buttons">
                    <a href="#features" class="btn btn-primary">Explore Platform</a>
                    <a href="#team" class="btn btn-secondary">Meet the Team</a>
                </div>
            </div>
        </div>
        <div class="hero-particles"></div>
    </section>

    <section class="features" id="features">
        <div class="container">
            <h2>Key Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🔬</div>
                    <h3>Citizen Science App</h3>
                    <p>Empower everyday citizens to contribute valuable environmental data through easy-to-use mobile reporting tools and gamified conservation activities.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Marine Health Dashboard</h3>
                    <p>Real-time monitoring and visualization of ocean health metrics, combining IoT sensors, satellite data, and crowdsourced observations.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🦎</div>
                    <h3>Species Tracker</h3>
                    <p>Advanced biodiversity monitoring system using AI-powered species identification and collaborative data collection from researchers worldwide.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🌿</div>
                    <h3>Biodiversity Hot Spot</h3>
                    <p>Interactive mapping and protection planning for critical biodiversity areas, enabling targeted conservation efforts and resource allocation.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🤝</div>
                    <h3>Collaboration Hub</h3>
                    <p>Unified platform connecting NGOs, governments, researchers, and communities for coordinated environmental action and knowledge sharing.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Real-Time Impact</h3>
                    <p>Immediate data processing and decision support tools that enable rapid response to environmental threats and opportunities.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="innovation">
        <div class="container">
            <h2>Innovation & Technology</h2>
            <div class="innovation-content">
                <div class="innovation-item">
                    <h3>🛰️ Multi-Source Data</h3>
                    <p>Combines IoT sensors, satellite imagery, and crowdsourced data for comprehensive environmental monitoring</p>
                </div>
                
                <div class="innovation-item">
                    <h3>🌐 Global Connectivity</h3>
                    <p>Inclusive, data-driven platform that connects stakeholders worldwide for collaborative climate action</p>
                </div>
                
                <div class="innovation-item">
                    <h3>🎯 Impact-Driven</h3>
                    <p>Real-time decision support empowers communities and researchers to make immediate, effective interventions</p>
                </div>
                
                <div class="innovation-item">
                    <h3>🔄 Unified Platform</h3>
                    <p>All-in-one solution eliminating data silos and enabling seamless collaboration across organizations</p>
                </div>
            </div>
        </div>
    </section>

    <section class="tech-stack">
        <div class="container">
            <h2>Technical Architecture</h2>
            <div class="tech-categories">
                <div class="tech-category">
                    <h3>Backend</h3>
                    <ul class="tech-list">
                        <li>Django (Python)</li>
                        <li>Django REST Framework</li>
                        <li>SQLite/PostgreSQL</li>
                    </ul>
                </div>
                
                <div class="tech-category">
                    <h3>Frontend</h3>
                    <ul class="tech-list">
                        <li>React.js</li>
                        <li>HTML5 & CSS3</li>
                        <li>Bootstrap/Tailwind CSS</li>
                        <li>AXIOS/Fetch API</li>
                    </ul>
                </div>
                
                <div class="tech-category">
                    <h3>Development</h3>
                    <ul class="tech-list">
                        <li>Git + GitHub</li>
                        <li>Agile Methodology</li>
                        <li>RESTful APIs</li>
                    </ul>
                </div>
                
                <div class="tech-category">
                    <h3>Deployment</h3>
                    <ul class="tech-list">
                        <li>Heroku/Render/Firebase</li>
                        <li>Netlify/Vercel</li>
                        <li>Cloud Integration</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="impact">
        <div class="container">
            <h2>Impact & Benefits</h2>
            <div class="impact-grid">
                <div class="impact-card">
                    <span class="impact-number">🌍</span>
                    <h3>Environmental Protection</h3>
                    <p>Protects oceans, forests, and wildlife while reducing carbon footprints through coordinated action</p>
                </div>
                
                <div class="impact-card">
                    <span class="impact-number">👥</span>
                    <h3>Community Empowerment</h3>
                    <p>Easy-to-use tools enable local communities to join climate and conservation efforts effectively</p>
                </div>
                
                <div class="impact-card">
                    <span class="impact-number">📈</span>
                    <h3>Policy Impact</h3>
                    <p>Provides governments & NGOs clear, real-time insights to shape smarter environmental policies</p>
                </div>
                
                <div class="impact-card">
                    <span class="impact-number">🔬</span>
                    <h3>Research Acceleration</h3>
                    <p>Shared space for researchers & students to explore data, ideas, and solutions collaboratively</p>
                </div>
                
                <div class="impact-card">
                    <span class="impact-number">💡</span>
                    <h3>Innovation</h3>
                    <p>Powered by IoT, AI, and open data to keep the platform smart, scalable, and future-ready</p>
                </div>
                
                <div class="impact-card">
                    <span class="impact-number">💰</span>
                    <h3>Cost Efficiency</h3>
                    <p>Saves costs through collaboration and opens doors to green funding opportunities</p>
                </div>
            </div>
        </div>
    </section>

    <section class="team" id="team">
        <div class="container">
            <h2>Team ByteMe</h2>
            <p>HackHeritage 3.0 | Problem Statement HH306</p>
            <div class="team-grid">
                <div class="team-member team-leader">
                    <h3>Bijit Chatterjee</h3>
                    <p>Team Lead</p>
                </div>
                
                <div class="team-member">
                    <h3>Archit Bhattacharya</h3>
                    <p>Developer</p>
                </div>
                
                <div class="team-member">
                    <h3>Disha Datta</h3>
                    <p>Developer</p>
                </div>
                
                <div class="team-member">
                    <h3>Kaustavi Mullick</h3>
                    <p>Developer</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 Verdant Nexus - Team ByteMe | Building a sustainable future through collaborative technology</p>
            <p>
                HackHeritage 3.0 | Climate Action • Marine Conservation • Biodiversity Protection
            </p>
        </div>
    </footer>
        
</>

        

    );
};

export default HomePage;

