import React, { useEffect, useRef } from 'react'
import hero from './data/hero.json'
import pdf from '../pdf/Rupesh__Ghumare_Php.pdf'
import Typed from 'typed.js';

export default function Home() {
  const typedRef = useRef(null)
  useEffect(() =>{

    const options = {
      strings: ["Welcome to My Profile", "My Name is Rupesh ghumare","I'm PHP Developer"],
      typeSpeed: 60,
      backSpeed: 70,
      loop:true
    }
    const typed = new Typed(typedRef.current, options);
    return () =>{
      typed.destroy()
    }
  })
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Rupesh__Ghumare_Php.pdf" className="btn btn-outline-warning my-3">Dowanload Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
          
        </div>
      </div>  
    </>
  )
}
