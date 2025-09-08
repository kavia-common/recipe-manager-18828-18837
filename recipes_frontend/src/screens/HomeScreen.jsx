import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * HomeScreen
 * A welcoming home page after successful sign-in. Presents entry points for
 * common recipe actions and is structured to easily expand into a dashboard
 * or a recipe list in the future using the same app artboard/layout tokens.
 */
function HomeScreen() {
  return (
    <div className="page home-screen" data-screen="home">
      <div className="artboard" role="main" aria-label="Home screen">
        {/* Status Bar placeholder for design fidelity */}
        <div className="status-bar" aria-hidden="true" />

        <div className="screen-content">
          <div className="content-flex">
            {/* Title / Welcome */}
            <div className="title-group" style={{ width: 315 }}>
              <h1 className="hello">Welcome to Recipe Manager!</h1>
              <p className="welcome">Browse, search, and add your favorite recipes.</p>
            </div>

            {/* Primary actions - structured as placeholders for easy expansion */}
            <div className="home-actions" style={{ display: 'grid', gap: 16 }}>
              <Link className="btn primary-btn" to="/recipes/add" aria-label="Add a recipe">
                <span className="label">Add a Recipe</span>
                <svg className="icon-arrow-right" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 10h11" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M11 5l5 5-5 5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link className="btn primary-btn" to="/dashboard" aria-label="Go to dashboard">
                <span className="label">Go to Dashboard</span>
                <svg className="icon-arrow-right" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 10h11" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M11 5l5 5-5 5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Placeholder nav items for future features */}
              <div style={{ display: 'grid', gap: 10 }}>
                <span style={{ fontSize: '14px', color: 'var(--color-121212)' }}>
                  Quick links (placeholders):
                </span>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-121212)' }}>
                  <li>Browse all recipes (coming soon)</li>
                  <li>Search recipes (coming soon)</li>
                  <li>Recently added (coming soon)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area anchored to bottom */}
        <div className="bottom-area" aria-hidden="true">
          <div className="home-indicator">
            <div className="pill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
