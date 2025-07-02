import React, { useState, useEffect } from 'react';
import '../css/common.css';

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();  // a 태그 기본 이동 막기
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(window.scrollY);
  };

  if (!show) return null;

  return (
  <a
    href="#"
    className="topbt"
    onClick={scrollToTop}
    style={{ display: show ? 'block' : 'none' }}
  >
    <p>TOP</p>
  </a>
  );
}

export default ScrollTopButton;