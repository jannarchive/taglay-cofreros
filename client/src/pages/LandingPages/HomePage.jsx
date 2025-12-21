import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../article-content';

function HomePage() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-copy">
            <p className="eyebrow">Taglay studio</p>
            <h1>Build better <br /> with React</h1>
            <p className="lead">
              Insights and practical guides to help you understand React-one component at a time. 
              Level up your React skills today!
            </p>
            <div className="hero-actions">
              <Link to="/articles" className="button-link primary">
                Browse articles
              </Link>
              <Link to="/about" className="button-link secondary">
                About us
              </Link>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>{articles.length}+</strong>
                <span>React breakdowns</span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span>UI micro-guides</span>
              </div>
              <div className="stat">
                <strong>Zero</strong>
                <span>fluff allowed</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-panel">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Design desk with colorful UI elements"
              />
              <p className="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices in velit varius
                rutrum vitae arcu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <section className="feature-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2>What you will learn here</h2>
          </div>
          <span className="muted">Clean patterns, real-world snippets.</span>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Beginner-friendly explanations</h3>
            <p>
              Clear explanations that make React easier to understand, 
              even if you are just getting started.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>React clarity</h3>
            <p>
              Break down React concepts into small, 
              understandable components. Learn how and why they work together.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Practical real-world guides</h3>
            <p>
              Follow step-by-step tutorials that show how React 
              is actually used in real projects.
            </p>
          </div>
        </div>
        </section>

        <section className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Articles</p>
            <h2>Latest reads.</h2>
          </div>
          <Link to="/articles" className="button-link primary">
            View all
          </Link>
        </div>
        <div className="article-preview-grid">
          {featuredArticles.map((article) => (
            <div key={article.name} className="article-preview">
              <div className="article-meta">
                <span className="pill">React</span>
                <span className="muted">{article.content[0].substring(0, 30)}...</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
              <Link to={`/articles/${article.name}`} className="button-link secondary">
                Read article
              </Link>
            </div>
          ))}
        </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
