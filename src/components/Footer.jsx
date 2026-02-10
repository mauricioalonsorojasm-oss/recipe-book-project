import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner footer-column">
        <span>
          © 2026 · Created by <strong>Elahe Hashemi</strong> &{" "}
          <strong>Mauricio Rojas</strong>
        </span>

        <a
          href="https://github.com/mauricioalonsorojasm-oss/recipe-book-project"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
