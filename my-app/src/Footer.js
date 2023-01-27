import React, { useState, useEffect } from 'react';
import sol from './assets/img/ANPC/SOL.png';
import anpc from './assets/img/ANPC/anpc.png';

export default function Footer() {
return(
    <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Mărțișoare din pietre semiprețioase</h3>
            <p>
              Județul Galați<br/>
              Galați<br/>
              România <br/><br/>
              <strong>Telefon:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Link-uri utile</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Acasa</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/#about">Zodiac</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/pietre">Pietre</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/produse">Produse</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/#galerie">Galerie</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <div class="SOL">
              <a href="https://anpc.ro/ce-este-sal/"> <img src={sol} class="anpc"></img></a>
              <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"><img src={anpc} class="img-sol"></img></a>
          </div>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Abonațivă la newsletter-ul nostru</h4>
            <p>Introduceți adresa dumneavoastră de email</p>
              <div class="container">
              <input type="text" class="form-control form-rounded" placeholder="Email"></input>
              </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Mărțișoare din pietre semiprețioase</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://www.linkedin.com/in/caragea-theodor">Caragea Theodor</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
);
}