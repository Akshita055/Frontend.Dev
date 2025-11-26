import React from 'react';
import './Portfolio.css';
import avatar from '../Assets/cartoon.svg';

export default function Portfolio() {
  return (
    <main id="portfolio" className="portfolio-root">
      <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="name">Ram kumar</h1>
          <p className="tagline">Frontend developer — building accessible, responsive interfaces</p>
          <div className="cta-row">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn outline" href="#contact">Contact</a>
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-avatar" src={avatar} alt="cartoon avatar" />
        </div>
      </section>

      <section className="profile-card-wrapper" aria-hidden>
        <div className="profile-card">
          <img src={avatar} className="profile-img" alt="cartoon avatar" />
          <h3>Ram kumar</h3>
          <p className="role">Frontend Developer</p>
          <p className="bio">I craft accessible, responsive interfaces with React, CSS, and a strong eye for detail.</p>
          <div className="card-ctas">
            <a className="btn small" href="#projects">See Work</a>
            <a className="btn small outline" href="#contact">Hire Me</a>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Selected Projects</h2>
        <div className="cards">
          <article className="card">
            <h3>Project One</h3>
            <p>Simple React app demonstrating components and state.</p>
            <button className="link-btn" type="button">View</button>
          </article>
          <article className="card">
            <h3>Project Two</h3>
            <p>Responsive landing page built with modern CSS.</p>
            <button className="link-btn" type="button">View</button>
          </article>
          <article className="card">
            <h3>Project Three</h3>
            <p>Small interactive UI using vanilla JS.</p>
            <button className="link-btn" type="button">View</button>
          </article>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>If you'd like to work together, email <a href="mailto:ram@example.com">ram@example.com</a></p>
      </section>
      </div>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Ram kumar — Built with React</div>
        <div className="socials">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
