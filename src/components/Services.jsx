import React from 'react';

export default function Services() {
  const items = [
    { icon: 'fas fa-hotel', title: 'affortable hotels' },
    { icon: 'fas fa-utensils', title: 'food and drinks' },
    { icon: 'fas fa-bullhorn', title: 'safty guides' },
    { icon: 'fas fa-globe-asia', title: 'around the world' },
    { icon: 'fas fa-plane', title: 'fastest travels' },
    { icon: 'fas fa-hiking', title: 'adventures' }
  ];

  return (
    <section className="services" id="services">
      <h1 className="heading">
        <span>s</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span>
      </h1>
      <div className="box-container">
        {items.map((s, i) => (
          <div className="box" key={i}>
            <i className={s.icon}></i>
            <h3>{s.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veriteatis,num!</p>
          </div>
        ))}
      </div>
    </section>
  );
}
