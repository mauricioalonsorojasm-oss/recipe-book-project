import React from 'react'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1 className="about-title">About RecipeBook</h1>

        <p className="about-text">
          <strong>RecipeBook</strong> is a simple and elegant recipe management
          web application built with React. The goal of this project is to allow
          users to create, browse, edit, and organize their favorite recipes in
          one place using a clean and intuitive interface.
        </p>

        <p className="about-text">
          This project was developed as part of a learning journey focused on
          modern front-end development concepts such as component-based
          architecture, state management, and client-side routing.
        </p>

        <h2 className="about-subtitle">About the creators</h2>

        <p className="about-text">
          <strong>RecipeBook</strong> was created by <strong>Elahe Hashemi</strong> and{" "}
          <strong>Mauricio Rojas</strong>, combining a passion for clean UI
          design, user experience, and modern web technologies.
        </p>

        <div className="about-links">
          <a
            href="https://github.com/mauricioalonsorojasm-oss/recipe-book-project"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            GitHub Repository
          </a>

      
          <a
            href="https://www.linkedin.com/in/mauricioalonsorojasm/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Mauricio Rojas · LinkedIn
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Elahe Hashemi · LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

