import React, { useState, useEffect } from 'react';
import sol from './assets/img/ANPC/SOL.png';
import anpc from './assets/img/ANPC/anpc.png';
import img from './assets/img/zodiac.jpeg'

export default function Footer() {
return(

    <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img src={img} class="img-zodiac"></img>
          </div>

          <div id="pietre" class="col-sm-12 col-md-6">
            <h3>Pietre în funcție de zodii</h3>
            <p>Daca esti pasionat de astrologie, lasa-ne sa te conducem printr-o lista de pietre semipretioase recomandate pentru fiecare zodie.</p>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-aries" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Berbec</a></h4>
              <p class="description">Opal, Ametist, Jasp Rosu, Acvamarin, Aventurin, Carneol</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-taurus" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Taur</a></h4>
              <p class="description">Cuart roz, Agata, Malachit, Aventurin, Turcoaz, Sodalit</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-gemini" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Gemeni</a></h4>
              <p class="description">Ametist, Aventurin, Citrin, Turcoaz</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-cancer" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Rac</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-leo" width="36" height="36"></iconify-icon></div>
              <h4 class="title"><a href="">Leu</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-virgo" width="36" height="36"></iconify-icon></div>              
              <h4 class="title"><a href="">Fecioara</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-libra" width="36" height="36"></iconify-icon></div>              
              <h4 class="title"><a href="">Balanta</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-scorpio" width="36" height="36"></iconify-icon></div>              
              <h4 class="title"><a href="">Scorpion</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-sagittarius" width="36" height="36"></iconify-icon></div>              
              <h4 class="title"><a href="">Sagetator</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-capricorn" width="36" height="36"></iconify-icon></div>              
              <h4 class="title"><a href="">Capricorn</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-aquarius" width="36" height="36"></iconify-icon></div>              
              <h4 class="title"><a href="">Varsator</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

            <div class="icon-box">
              <div class="icon"><iconify-icon icon="mdi:zodiac-pisces" width="36" height="36"></iconify-icon></div>              
              <h4 class="title"><a href="">Pesti</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
);
}