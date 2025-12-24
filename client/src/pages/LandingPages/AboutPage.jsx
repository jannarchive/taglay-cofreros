import React from 'react';

function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">About</p>
        <h1>Meet the Pawradise Project: Inspiring kindness to animals</h1>
        <p className="lead">
          Connecting hearts and paws. <br/> Guiding you on how to help, care, and create change for homeless dogs & cats.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="feature-icon"></div>
          <h3>For every stray dog</h3>
          <p>
            Many stray dogs are gentle and still trust people despite being left behind. 
            The Pawradise Project shares their stories to help readers understand how to care, protect, 
            and show kindness to dogs on the streets.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon"></div>
          <h3>For every stray cat</h3>
          <p>
            Stray cats live quietly and are easily ignored. Through simple guides and stories, 
            The Pawradise Project helps people learn how to feed and help cats safely and responsibly.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon"></div>
          <h3>Built on care and love</h3>
          <p>
            The Pawradise Project is driven by compassion. You do not need to be an expert to help. 
            Willingness to care, learn, and choose kindness for animals who have no home matters.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-row">
          <strong>Why Pawradise Started</strong>
          <p>
            Pawradise started as a simple idea, to give stray dogs and cats a voice, 
            and to help people see them not as a problem in the community, but as lives that matter.
          </p>
        </div>
        <div className="timeline-row">
          <strong>What We Stand For</strong>
          <p>
            This project supports animal care, rescue, and welfare, guided by compassion and 
            aligned with the Republic Act No. 8485 of the Philippines, also known as the Animal Welfare Act of 1998.
          </p>
        </div>
        <div className="timeline-row">
          <strong>Where We Are Now</strong>
          <p>
            The Pawradise Project just started as blog inspired 
            by stray dogs and cats, aimed at awareness, compassion, and future action.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h3>Start with understanding</h3>
        <p>
          Read the stories, learn the basics, and know how even small 
          actions can make a real difference for stray dogs and cats.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
