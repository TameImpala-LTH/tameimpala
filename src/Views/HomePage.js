import React, { useEffect } from 'react';
import './HomePage.css'; // Assuming you have a CSS file for styles

// Component for the Floating Navigation Bar
const Navbar = () => (
    <nav className="floating-nav">
        <div className="nav-container">
            <div className="nav-logo">🌿 Verdant Nexus</div>
            <div className="nav-links">
                <a href="#features" className="nav-link">Explore Platform</a>
                <a href="#team" className="nav-link">Meet Team Members</a>
            </div>
        </div>
    </nav>
);

// Component for the Hero Section
const Hero = () => (
    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Verdant Nexus</h1>
                <p className="subtitle">Collaborative Platform for Climate Action & Biodiversity Protection</p>
                <p className="description">
                    Unifying IoT, satellite data, and citizen science into one powerful platform for environmental action.
                    Connect communities, researchers, and organizations to protect our planet together.
                </p>
                <div className="cta-buttons">
                    <a href="#features" className="btn btn-primary">Explore Platform</a>
                    <a href="#team" className="btn btn-secondary">Meet the Team</a>
                </div>
            </div>
        </div>
    </section>
);

// Component for the Features Section
const Features = () => (
    <section className="features" id="features">
        <div className="container">
            <h2>Key Features</h2>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">🔬</div>
                    <h3>Citizen Science App</h3>
                    <p>Empower everyday citizens to contribute valuable environmental data through easy-to-use mobile reporting tools and gamified conservation activities.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Marine Health Dashboard</h3>
                    <p>Real-time monitoring and visualization of ocean health metrics, combining IoT sensors, satellite data, and crowdsourced observations.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🦎</div>
                    <h3>Species Tracker</h3>
                    <p>Advanced biodiversity monitoring system using AI-powered species identification and collaborative data collection from researchers worldwide.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🌿</div>
                    <h3>Biodiversity Hot Spot</h3>
                    <p>Interactive mapping and protection planning for critical biodiversity areas, enabling targeted conservation efforts and resource allocation.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🤝</div>
                    <h3>Collaboration Hub</h3>
                    <p>Unified platform connecting NGOs, governments, researchers, and communities for coordinated environmental action and knowledge sharing.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Real-Time Impact</h3>
                    <p>Immediate data processing and decision support tools that enable rapid response to environmental threats and opportunities.</p>
                </div>
            </div>
        </div>
    </section>
);

// Component for the Innovation Section
const Innovation = () => (
    <section className="innovation">
        <div className="container">
            <h2>Innovation & Technology</h2>
            <div className="innovation-content">
                <div className="innovation-item">
                    <h3>🛰️ Multi-Source Data</h3>
                    <p>Combines IoT sensors, satellite imagery, and crowdsourced data for comprehensive environmental monitoring</p>
                </div>
                <div className="innovation-item">
                    <h3>🌐 Global Connectivity</h3>
                    <p>Inclusive, data-driven platform that connects stakeholders worldwide for collaborative climate action</p>
                </div>
                <div className="innovation-item">
                    <h3>🎯 Impact-Driven</h3>
                    <p>Real-time decision support empowers communities and researchers to make immediate, effective interventions</p>
                </div>
                <div className="innovation-item">
                    <h3>🔄 Unified Platform</h3>
                    <p>All-in-one solution eliminating data silos and enabling seamless collaboration across organizations</p>
                </div>
            </div>
        </div>
    </section>
);

// Component for the Tech Stack Section
const TechStack = () => (
    <section className="tech-stack">
        <div className="container">
            <h2>Technical Architecture</h2>
            <div className="tech-categories">
                <div className="tech-category">
                    <h3>Backend</h3>
                    <ul className="tech-list">
                        <li>Django (Python)</li>
                        <li>Django REST Framework</li>
                        <li>SQLite/PostgreSQL</li>
                    </ul>
                </div>
                <div className="tech-category">
                    <h3>Frontend</h3>
                    <ul className="tech-list">
                        <li>React.js</li>
                        <li>HTML5 & CSS3</li>
                        <li>Bootstrap/Tailwind CSS</li>
                        <li>AXIOS/Fetch API</li>
                    </ul>
                </div>
                <div className="tech-category">
                    <h3>Development</h3>
                    <ul className="tech-list">
                        <li>Git + GitHub</li>
                        <li>Agile Methodology</li>
                        <li>RESTful APIs</li>
                    </ul>
                </div>
                <div className="tech-category">
                    <h3>Deployment</h3>
                    <ul className="tech-list">
                        <li>Heroku/Render/Firebase</li>
                        <li>Netlify/Vercel</li>
                        <li>Cloud Integration</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// Component for the Impact Section
const Impact = () => (
    <section className="impact">
        <div className="container">
            <h2>Impact & Benefits</h2>
            <div className="impact-grid">
                <div className="impact-card">
                    <span className="impact-number">🌍</span>
                    <h3>Environmental Protection</h3>
                    <p>Protects oceans, forests, and wildlife while reducing carbon footprints through coordinated action</p>
                </div>
                <div className="impact-card">
                    <span className="impact-number">👥</span>
                    <h3>Community Empowerment</h3>
                    <p>Easy-to-use tools enable local communities to join climate and conservation efforts effectively</p>
                </div>
                <div className="impact-card">
                    <span className="impact-number">📈</span>
                    <h3>Policy Impact</h3>
                    <p>Provides governments & NGOs clear, real-time insights to shape smarter environmental policies</p>
                </div>
                <div className="impact-card">
                    <span className="impact-number">🔬</span>
                    <h3>Research Acceleration</h3>
                    <p>Shared space for researchers & students to explore data, ideas, and solutions collaboratively</p>
                </div>
                <div className="impact-card">
                    <span className="impact-number">💡</span>
                    <h3>Innovation</h3>
                    <p>Powered by IoT, AI, and open data to keep the platform smart, scalable, and future-ready</p>
                </div>
                <div className="impact-card">
                    <span className="impact-number">💰</span>
                    <h3>Cost Efficiency</h3>
                    <p>Saves costs through collaboration and opens doors to green funding opportunities</p>
                </div>
            </div>
        </div>
    </section>
);

// Component for the Team Section
const Team = () => (
    <section className="team" id="team">
        <div className="container">
            <h2>Team ByteMe</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>HackHeritage 3.0 | Problem Statement HH306</p>
            <div className="team-grid">
                <div className="team-member team-leader">
                    <h3>Bijit Chatterjee</h3>
                    <p>Team Lead</p>
                </div>
                <div className="team-member">
                    <h3>Archit Bhattacharya</h3>
                    <p>Developer</p>
                </div>
                <div className="team-member">
                    <h3>Disha Datta</h3>
                    <p>Developer</p>
                </div>
                <div className="team-member">
                    <h3>Kaustavi Mullick</h3>
                    <p>Developer</p>
                </div>
            </div>
        </div>
    </section>
);

// Component for the Footer
const Footer = () => (
    <footer>
        <div className="container">
            <p>&copy; 2025 Verdant Nexus - Team ByteMe | Building a sustainable future through collaborative technology</p>
            <p style={{ marginTop: '10px' }}>
                HackHeritage 3.0 | Climate Action • Marine Conservation • Biodiversity Protection
            </p>
        </div>
    </footer>
);

// Main App Component
function App() {
    useEffect(() => {
        // --- Smooth scrolling for navigation ---
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });

        // --- Intersection Observer for scroll animations ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elementsToAnimate = document.querySelectorAll('.feature-card, .innovation-item, .tech-category, .impact-card, .team-member');
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
        
        // --- Parallax effect for hero section ---
        // Note: This simple transform can cause jerky scrolling.
        // For production, consider using a more robust library or CSS-based parallax.
        const handleParallax = () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                // Applying a smaller factor to reduce the effect's intensity
                hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
            }
        };
        
        window.addEventListener('scroll', handleParallax);


        // --- Cleanup function to remove event listeners ---
        return () => {
            navLinks.forEach(anchor => {
                anchor.removeEventListener('click', handleSmoothScroll);
            });
            elementsToAnimate.forEach(el => observer.unobserve(el));
            window.removeEventListener('scroll', handleParallax);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <Innovation />
            <TechStack />
            <Impact />
            <Team />
            <Footer />
        </div>
    );
}

export default App;