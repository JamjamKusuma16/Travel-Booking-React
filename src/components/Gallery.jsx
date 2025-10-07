import React from 'react';

const images = [
  'pic-6.jpg',
  'pic-2.jpg',
  'pic-3.jpg',
  'pic-4.jpg',
  'kerala,ga.jpg',
  'manali.ga.jpg'
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        <span>g</span><span>a</span><span>l</span><span>l</span><span>e</span><span>r</span><span>y</span>
      </h1>
      <div className="box-container">
        {images.map((src, i) => (
          <div className="box" key={i}>
            <img src={src} alt={`gallery-${i}`} />
            <div className="content">
              <h3>amazing places</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" className="btn">see more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
