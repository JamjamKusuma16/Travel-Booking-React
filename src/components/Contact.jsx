import React from 'react';

export default function Contact({ onMessage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onMessage) onMessage();
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span>
      </h1>
      <div className="row">
        <div className="image">
          <img src="contact.jpg" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="number" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea placeholder="message.." cols="30" rows="10"></textarea>
          <input type="submit" className="btn" value="send message" id="messageSent" />
        </form>
      </div>
    </section>
  );
}
