import React from 'react';

export default function Packages() {
  const packages = [
    { img: 'mumbai.jpeg', title: 'mumbai', price: '$99.00', old: '$120.00' },
    { img: 'kerala.jpg', title: 'kerala', price: '$99.00', old: '$120.00' },
    { img: 'manali.jpg', title: 'Manali', price: '$99.00', old: '$120.00' },
    { img: 'usa.jpeg', title: 'usa', price: '$200.00', old: '$250.00' },
    { img: 'paris.jpeg', title: 'Paris', price: '$200.00', old: '$220.00' }
  ];

  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>p</span><span>a</span><span>c</span><span>k</span><span>a</span><span>g</span><span>e</span><span>s</span>
      </h1>
      <div className="box-container">
        {packages.map((p, i) => (
          <div className="box" key={i}>
            <img src={p.img} alt={p.title} />
            <div className="content">
              <h3><i className="fas fa-map-marker-alt"></i>{p.title}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veriteatis,num!</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="prices"> {p.price} <span>{p.old}</span></div>
              <a href="#" className="btn">book now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
