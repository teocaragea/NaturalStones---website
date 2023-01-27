import React, { useState, useEffect } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx';

export default function Header() {

  const [navbarOpen, setNavbarOpen] = useState(false)


  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
function handleClick(){
  setNavbarOpen(!navbarOpen);
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}
const scrollto = (el) => {
  let header = select('#header')
  let offset = header.offsetHeight

  let elementPos = select(el).offsetTop
  window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
  })
}


const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

useEffect(() => {
  function toggleMenu(){
     on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
  })
      /**
   * Mobile nav dropdowns activate
   */
       on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
     on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
          e.preventDefault()

          let navbar = select('#navbar')
          if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile')
              let navbarToggle = select('.mobile-nav-toggle')
              navbarToggle.classList.toggle('bi-list')
              navbarToggle.classList.toggle('bi-x')
          }
          scrollto(this.hash)
      }
  }, true)
}
toggleMenu()
}, [navbarOpen])

return(
<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">Mărțișoare din pietre semiprețioase</a></h1>

      <nav id="navbar" class="navbar order-last order-lg-0" onClick={handleClick}>
        <ul>
          <li><a class="nav-link scrollto active" href="/">Acasă</a></li>
          <li><a class="nav-link scrollto" href="/#about">Zodiac</a></li>
          <li><a class="nav-link scrollto" href="/pietre">Pietre</a></li>
          <li><a class="nav-link scrollto" href="/produse">Brațări</a></li>
          <li><a class="nav-link scrollto" href="/pandantive">Pandantive</a></li>
          <li><a class="nav-link scrollto" href="/#galerie">Galerie</a></li>
          <li><a class="nav-link scrollto" href="/#contact">Contact</a></li>
        </ul>
        <RxHamburgerMenu class="mobile-nav-toggle"/>
      </nav>

    </div>
  </header>
);
}