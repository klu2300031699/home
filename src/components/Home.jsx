import React, { useState } from 'react';
import './Home.css';

const Home = ({ userName, onLogout, onNavigate }) => {
  const [searchData, setSearchData] = useState({
    location: '',
    serviceType: '',
    priceRange: ''
  });
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const allServices = [
    {
      id: 1,
      title: 'Plumbing Services',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.8,
      reviews: 245,
      price: '$50 - $200',
      description: 'Professional plumbing solutions for all your needs'
    },
    {
      id: 2,
      title: 'Electrical Work',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.9,
      reviews: 312,
      price: '$75 - $300',
      description: 'Licensed electricians for safe installations'
    },
    {
      id: 3,
      title: 'House Cleaning',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.7,
      reviews: 428,
      price: '$40 - $150',
      description: 'Professional deep cleaning services'
    },
    {
      id: 4,
      title: 'AC Repair & Service',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.8,
      reviews: 189,
      price: '$60 - $250',
      description: 'Fast and reliable AC solutions'
    },
    {
      id: 5,
      title: 'Painting Services',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.6,
      reviews: 156,
      price: '$100 - $500',
      description: 'Interior and exterior painting by experts'
    },
    {
      id: 6,
      title: 'Carpentry Work',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.7,
      reviews: 203,
      price: '$80 - $350',
      description: 'Custom carpentry and furniture repair'
    },
    {
      id: 7,
      title: 'Pest Control',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.5,
      reviews: 178,
      price: '$45 - $180',
      description: 'Effective pest elimination and prevention'
    },
    {
      id: 8,
      title: 'Appliance Repair',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.8,
      reviews: 267,
      price: '$55 - $220',
      description: 'Quick appliance repair and maintenance'
    },
    {
      id: 9,
      title: 'Landscaping',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.6,
      reviews: 142,
      price: '$90 - $400',
      description: 'Garden design and landscape maintenance'
    },
    {
      id: 10,
      title: 'Home Security',
      image: '/welcome.jpg',
      location: 'Available Nationwide',
      rating: 4.9,
      reviews: 198,
      price: '$120 - $450',
      description: 'Security system installation and monitoring'
    }
  ];

  const services = allServices.slice(0, 4); // Show first 4 on home page

  const stats = [
    { number: '8K+', label: 'Happy Customers' },
    { number: '6K+', label: 'Services Completed' },
    { number: '2K+', label: 'Expert Professionals' }
  ];

  const features = [
    {
      icon: '🏆',
      title: 'Verified Professionals',
      description: 'All our service providers are background checked and verified'
    },
    {
      icon: '💎',
      title: 'Transparent Pricing',
      description: 'Fair, transparent pricing with no hidden costs or surprise fees'
    },
    {
      icon: '🎯',
      title: '24/7 Support',
      description: 'Get round-the-clock customer support for all your queries'
    }
  ];

  const handleLogout = () => {
    setShowProfileMenu(false);
    if (onLogout) {
      onLogout();
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayServices = currentPage === 'service' ? allServices : services;

  return (
    <div className="home-wrapper">
      {/* Navigation Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo-section">
            <h1 className="brand-logo">HomeServe</h1>
          </div>
          
          <nav className="main-nav">
            <a href="#home" className={currentPage === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavigation('home')}>Home</a>
            <a href="#service" className={currentPage === 'service' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavigation('service')}>Service</a>
            <a href="#bookings" className={currentPage === 'bookings' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavigation('bookings')}>My Bookings</a>
            <a href="#about" className={currentPage === 'about' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavigation('about')}>About Us</a>
          </nav>

          <div className="header-actions">
            <div className="profile-dropdown-wrapper">
              <button 
                className="profile-icon-btn" 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                {userName ? userName.charAt(0).toUpperCase() : 'G'}
              </button>
              
              {showProfileMenu && (
                <div className="profile-dropdown">
                  <div className="profile-info">
                    <div className="profile-avatar">{userName ? userName.charAt(0).toUpperCase() : 'G'}</div>
                    <div className="profile-details">
                      <div className="profile-name">{userName || 'Gnanesh'}</div>
                      <div className="profile-email">gnanesh@gmail.com</div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" onClick={() => setShowProfileMenu(false)}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 18a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    My Profile
                  </button>
                  <button className="dropdown-item" onClick={() => setShowProfileMenu(false)}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M2 6h16M2 10h16M2 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    My Bookings
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout-item" onClick={handleLogout}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h4m5 10l4-4m0 0l-4-4m4 4H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Conditional Rendering based on current page */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="hero-section-main">
        <div className="hero-container">
          <div className="hero-content-left">
            <h1 className="hero-main-title">
              Find Your<br />
              Perfect Service
            </h1>
            <p className="hero-description">
              Explore our curated selection of professional home services 
              meticulously tailored to your unique needs and preferences
            </p>
            <button className="cta-button">Book Services</button>

            {/* Search Bar */}
            <div className="search-box-wrapper">
              <div className="search-field">
                <label className="search-label">Location</label>
                <input 
                  type="text" 
                  placeholder="Enter location" 
                  className="search-input"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                />
              </div>
              
              <div className="search-field">
                <label className="search-label">Type</label>
                <select 
                  className="search-input"
                  value={searchData.serviceType}
                  onChange={(e) => setSearchData({...searchData, serviceType: e.target.value})}
                >
                  <option value="">Select service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="ac">AC Repair</option>
                  <option value="painting">Painting</option>
                  <option value="carpentry">Carpentry</option>
                </select>
              </div>

              <div className="search-field">
                <label className="search-label">Price Range</label>
                <select 
                  className="search-input"
                  value={searchData.priceRange}
                  onChange={(e) => setSearchData({...searchData, priceRange: e.target.value})}
                >
                  <option value="">Select range</option>
                  <option value="0-100">$0 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200+">$200+</option>
                </select>
              </div>

              <button className="search-submit-btn">Search</button>
            </div>
          </div>

          <div className="hero-content-right">
            <div className="hero-image-card">
              <img src="/welcome.jpg" alt="Dream Home" className="hero-main-image" />
              
              {/* Stats Card Overlay */}
              <div className="stats-overlay-card">
                <h3 className="stats-title">We Help You Find The Best Home Services</h3>
                <p className="stats-subtitle">
                  From quick repairs to complete renovations, our dedicated team of verified 
                  professionals guides you through every step
                </p>
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us Card */}
              <div className="why-choose-card">
                <h4 className="why-title">Why Choose Us</h4>
                <p className="why-subtitle">
                  Elevate Your Home Service Experience with Expertise, Integrity, and Unmatched Quality
                </p>
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item-inline">
                      <div className="feature-icon-small">{feature.icon}</div>
                      <div className="feature-content-small">
                        <h5>{feature.title}</h5>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="popular-section">
        <div className="section-container">
          <div className="section-heading">
            <h2 className="section-title-main">Discover Popular Services</h2>
            <a href="#all" className="see-all-link" onClick={(e) => { e.preventDefault(); handleNavigation('service'); }}>See All →</a>
          </div>

          <div className="services-grid-modern">
            {services.map((service) => (
              <div key={service.id} className="service-card-modern">
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <span className="service-badge">Featured</span>
                </div>
                <div className="service-info">
                  <div className="service-header-row">
                    <h3 className="service-name">{service.title}</h3>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <p className="service-location">📍 {service.location}</p>
                  <p className="service-desc">{service.description}</p>
                  <div className="service-footer-row">
                    <div className="rating-info">
                      <span className="star">⭐</span>
                      <span className="rating-text">{service.rating}</span>
                      <span className="reviews-text">({service.reviews} reviews)</span>
                    </div>
                    <button className="book-service-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title-main">What People Say About HomeServe</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src="/welcome.jpg" alt="Client" className="client-avatar" />
                <div className="client-info">
                  <h4 className="client-name">Michael Rodriguez</h4>
                  <p className="client-location">San Diego</p>
                </div>
                <div className="testimonial-rating">⭐ 4.3</div>
              </div>
              <p className="testimonial-text">
                "HomeServe provided exceptional service! The plumber was professional, 
                punctual, and fixed our issue quickly. Best home service platform!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src="/welcome.jpg" alt="Client" className="client-avatar" />
                <div className="client-info">
                  <h4 className="client-name">Emily Johnson</h4>
                  <p className="client-location">Los Angeles</p>
                </div>
                <div className="testimonial-rating">⭐ 4.8</div>
              </div>
              <p className="testimonial-text">
                "Amazing experience! The cleaning service was thorough and the staff 
                was friendly. Will definitely use HomeServe again."
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {/* Service Page - Show all 10 services */}
      {currentPage === 'service' && (
        <section className="all-services-section">
          <div className="section-container">
            <div className="section-heading">
              <h2 className="section-title-main">All Our Services</h2>
              <p className="section-subtitle">Choose from our complete range of professional home services</p>
            </div>

            <div className="services-grid-modern">
              {allServices.map((service) => (
                <div key={service.id} className="service-card-modern">
                  <div className="service-image-wrapper">
                    <img src={service.image} alt={service.title} className="service-image" />
                    <span className="service-badge">Available</span>
                  </div>
                  <div className="service-info">
                    <div className="service-header-row">
                      <h3 className="service-name">{service.title}</h3>
                      <span className="service-price">{service.price}</span>
                    </div>
                    <p className="service-location">📍 {service.location}</p>
                    <p className="service-desc">{service.description}</p>
                    <div className="service-footer-row">
                      <div className="rating-info">
                        <span className="star">⭐</span>
                        <span className="rating-text">{service.rating}</span>
                        <span className="reviews-text">({service.reviews} reviews)</span>
                      </div>
                      <button className="book-service-btn">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* My Bookings Page */}
      {currentPage === 'bookings' && (
        <section className="bookings-section">
          <div className="section-container">
            <h2 className="section-title-main">My Bookings</h2>
            <div className="bookings-content">
              <p className="empty-state">You don't have any bookings yet. Start booking services to see them here!</p>
              <button className="cta-button" onClick={() => handleNavigation('service')}>Browse Services</button>
            </div>
          </div>
        </section>
      )}

      {/* About Us Page */}
      {currentPage === 'about' && (
        <section className="about-section">
          {/* Our Story Section */}
          <div className="story-section">
            <div className="section-container">
              <h2 className="story-title">Our Story</h2>
              <p className="story-description">
                Born from a simple idea: every home deserves exceptional care. We've revolutionized 
                how homeowners connect with trusted professionals, creating a platform built on trust, 
                transparency, and unwavering quality.
              </p>
              <div className="stats-boxes">
                <div className="stat-box">
                  <h3 className="stat-number">50K+</h3>
                  <p className="stat-label">Happy Homes</p>
                </div>
                <div className="stat-box">
                  <h3 className="stat-number">1,200+</h3>
                  <p className="stat-label">Trusted Pros</p>
                </div>
                <div className="stat-box">
                  <h3 className="stat-number">200+</h3>
                  <p className="stat-label">Cities Served</p>
                </div>
                <div className="stat-box">
                  <h3 className="stat-number">98%</h3>
                  <p className="stat-label">5-Star Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Journey Section */}
          <div className="journey-section">
            <div className="section-container">
              <h2 className="section-title-main">Our Journey</h2>
              <div className="journey-cards">
                <div className="journey-card">
                  <div className="journey-icon">💡</div>
                  <h3 className="journey-card-title">The Dream</h3>
                  <p className="journey-card-text">
                    In 2022, we saw homeowners struggling to find reliable service providers. Long waits, hidden 
                    fees, and questionable quality were the norm.
                  </p>
                </div>
                <div className="journey-card">
                  <div className="journey-icon">🎯</div>
                  <h3 className="journey-card-title">The Solution</h3>
                  <p className="journey-card-text">
                    We built a platform that connects verified professionals directly with homeowners, 
                    offering real-time availability and transparent pricing.
                  </p>
                </div>
                <div className="journey-card">
                  <div className="journey-icon">🚀</div>
                  <h3 className="journey-card-title">The Impact</h3>
                  <p className="journey-card-text">
                    Today, thousands of families trust us for their home services. We've not just built a platform - 
                    we've created a community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="values-section">
            <div className="section-container">
              <h2 className="section-title-main">Our Core Values</h2>
              <p className="values-subtitle">
                These principles guide everything we do, from how we select professionals to how we serve our customers.
              </p>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🛡️</div>
                  <h3 className="value-title">Trust First</h3>
                  <p className="value-text">
                    Every professional is thoroughly vetted, insured, and background-checked before joining our platform.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">📊</div>
                  <h3 className="value-title">Transparency Always</h3>
                  <p className="value-text">
                    No hidden fees, upfront pricing, and real-time updates throughout your service journey.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">✅</div>
                  <h3 className="value-title">Quality Guaranteed</h3>
                  <p className="value-text">
                    We stand behind every service with our quality guarantee and satisfaction promise.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🔬</div>
                  <h3 className="value-title">Innovation Driven</h3>
                  <p className="value-text">
                    We continuously improve our technology to make booking and managing home services effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <div className="section-container">
              <h2 className="section-title-main">Meet Our Team</h2>
              <p className="team-subtitle">
                The passionate individuals behind HomeServe, dedicated to revolutionizing home care.
              </p>
              <div className="team-grid">
                <div className="team-card">
                  <div className="team-image">
                    <img src="/welcome.jpg" alt="Team Member" />
                  </div>
                  <h3 className="team-name">USL Challivary</h3>
                  <p className="team-id">2300031193</p>
                  <p className="team-role">CEO & Founder</p>
                  <p className="team-specialty">Platform Architecture</p>
                </div>
                <div className="team-card">
                  <div className="team-image">
                    <img src="/welcome.jpg" alt="Team Member" />
                  </div>
                  <h3 className="team-name">G Gnanesh</h3>
                  <p className="team-id">2300031699</p>
                  <p className="team-role">Head of Operations</p>
                  <p className="team-specialty">Service Management</p>
                </div>
                <div className="team-card">
                  <div className="team-image">
                    <img src="/welcome.jpg" alt="Team Member" />
                  </div>
                  <h3 className="team-name">C Chetan Siva</h3>
                  <p className="team-id">2300031840</p>
                  <p className="team-role">CTO</p>
                  <p className="team-specialty">Technology Innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Mission Section */}
          <div className="mission-section">
            <div className="section-container">
              <h2 className="mission-title">Join Our Mission</h2>
              <div className="mission-cards">
                <div className="mission-card">
                  <h3 className="mission-card-title">For Homeowners</h3>
                  <p className="mission-card-text">
                    Get superior service and enjoy hassle-free home maintenance with complete peace of mind.
                  </p>
                </div>
                <div className="mission-card">
                  <h3 className="mission-card-title">For Professionals</h3>
                  <p className="mission-card-text">
                    Grow your business with our platform while we handle all the complicated parts.
                  </p>
                </div>
                <div className="mission-card">
                  <h3 className="mission-card-title">For Communities</h3>
                  <p className="mission-card-text">
                    We're building stronger communities through better home care services.
                  </p>
                </div>
              </div>
              <button className="cta-button mission-cta">Start Your Journey Today</button>
            </div>
          </div>
        </section>
      )}

      {/* Footer - Shown on all pages */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-column">
              <h3 className="footer-brand">HomeServe</h3>
              <p className="footer-tagline">
                Connecting homeowners with trusted professionals for all your home needs.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📸</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><a href="#" onClick={() => handleNavigation('service')}>Find Services</a></li>
                <li><a href="#" onClick={() => handleNavigation('service')}>Book Now</a></li>
                <li><a href="#" onClick={() => handleNavigation('bookings')}>Track Bookings</a></li>
                <li><a href="#" onClick={() => handleNavigation('bookings')}>My Bookings</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#" onClick={() => handleNavigation('about')}>About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Safety Info</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-stats">
              <div className="footer-stat">
                <span className="footer-stat-number">50K+</span>
                <span className="footer-stat-label">Services Completed</span>
              </div>
              <div className="footer-stat">
                <span className="footer-stat-number">15K+</span>
                <span className="footer-stat-label">Happy Customers</span>
              </div>
              <div className="footer-stat">
                <span className="footer-stat-number">850+</span>
                <span className="footer-stat-label">Verified Professionals</span>
              </div>
              <div className="footer-stat">
                <span className="footer-stat-number">99%</span>
                <span className="footer-stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2025 HomeServe. All rights reserved. Made with ❤️ by KLU Team.</p>
            <div className="footer-legal">
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
