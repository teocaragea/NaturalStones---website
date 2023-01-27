import React, { useState, useEffect } from 'react';
import img1 from './assets/img/gallery/gallery-1.jpeg';
import img2 from './assets/img/gallery/gallery-2.jpeg';
import img3 from './assets/img/gallery/gallery-3.jpeg';
import img4 from './assets/img/gallery/gallery-4.jpeg';
import img5 from './assets/img/gallery/gallery-5.jpeg';
import img6 from './assets/img/gallery/gallery-6.jpeg';
import img7 from './assets/img/gallery/gallery-7.jpeg';
import img8 from './assets/img/gallery/gallery-8.jpeg';
import GLightbox from 'glightbox';

export default function Footer() {
  

  useEffect(() => {
    const galelryLightbox = GLightbox({
      selector: '.galelry-lightbox'
    });
  }, []);

return(
    <section id="galerie" class="gallery">
      <div class="container">

        <div class="section-title">
          <h2>Galerie</h2>
          <p>In această secțiune vă prezentăm câteva dintre produsele noastre. Pentru a vedea gama completă, va invităm să accesați pagina de Produse.</p>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row g-0">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={img1} class="galelry-lightbox">
                <img src={img1} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4" >
            <div class="gallery-item">
              <a href={img2} class="galelry-lightbox">
                <img src={img2} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={img3} class="galelry-lightbox">
                <img src={img3} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={img4} class="galelry-lightbox">
                <img src={img4} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={img5} class="galelry-lightbox">
                <img src={img5} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={img6} class="galelry-lightbox">
                <img src={img6} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={img7} class="galelry-lightbox">
                <img src={img7} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={img8} class="galelry-lightbox">
                <img src={img8} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
);
}