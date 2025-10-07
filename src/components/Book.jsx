import React from 'react';

export default function Book({ onBook }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onBook) onBook();
  };

  return (
    <section className="book" id="book">
      <h1 className="heading">
        <span>b</span><span>o</span><span>o</span><span>k</span><span className="space"></span>
        <span>n</span><span>o</span><span>w</span>
      </h1>
      <div className="row">
        <div className="image">
          <img src="pic-5.jpg" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <h3>Where to</h3>
            <input type="text" placeholder="place name" />
          </div>
          <div className="inputBox">
            <h3>How many</h3>
            <input type="number" placeholder="how many guests" />
          </div>
          <div className="inputBox">
            <h3>arrivals</h3>
            <input type="date" />
          </div>
          <div className="inputBox">
            <h3>leaving</h3>
            <input type="date" />
          </div>
          <input type="submit" className="btn" value="book now" id="bookButton" />
        </form>
      </div>
    </section>
  );
}
