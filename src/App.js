import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Book from './components/Book';
import Packages from './components/Packages';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('/images/main.mp4');

  // close menus on scroll (mimic original behaviour)
  useEffect(() => {
    const onScroll = () => {
      setSearchOpen(false);
      setMenuOpen(false);
      setLoginOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBook = (formData) => {
    // show the same alert as original
    alert('You Booking is Sucessful');
  };

  const handleMessage = (formData) => {
    alert('Thank you for Your Response');
  };

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        isSearchOpen={isSearchOpen}
        setSearchOpen={setSearchOpen}
        isLoginOpen={isLoginOpen}
        setLoginOpen={setLoginOpen}
      />
      {isLoginOpen && (
        <div className={`login-form-container ${isLoginOpen ? 'active' : ''}`}>
          <div className="login-overlay" onClick={() => setLoginOpen(false)} />
          <div className="login-card">
            <i className="fas fa-close" id="form-close" onClick={() => setLoginOpen(false)}></i>
            <form>
              <h3>Login</h3>
              <input type="email" className="box" placeholder="enter your email" />
              <input type="password" className="box" placeholder="enter your password" />
              <input type="submit" value="login now" className="btn" onClick={(e) => e.preventDefault()} />
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <p>Forget Password?<a href="#">Click here</a></p>
              <p>Don't have and Account? <a href="#">register now</a></p>
            </form>
          </div>
        </div>
      )}
      <Home currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />
      <Book onBook={handleBook} />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Contact onMessage={handleMessage} />
      <Footer />
    </>
  );
}

export default App;
