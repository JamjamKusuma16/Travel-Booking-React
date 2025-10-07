import React from 'react';

const videoList = [
  'main.mp4',
  'mainpage2.mp4',
  'mainpage3.mp4',
  'mainpage4.mp4',
  'mainpage5.mp4'
];

export default function Home({ currentVideo, setCurrentVideo }) {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>adventure is worthwhile</h3>
        <p>Discover new places with us, adventue awits </p>
        <a href="#" className="btn">Discover more</a>
      </div>

      <div className="controls">
        {videoList.map((src, idx) => (
          <span
            key={idx}
            className={`vid-btn ${currentVideo === src ? 'active' : ''}`}
            data-src={src}
            onClick={() => setCurrentVideo(src)}
          />
        ))}
      </div>

      <div className="video-container">
        <video id="video-slider" src={currentVideo} loop autoPlay muted />
      </div>
    </section>
  );
}
