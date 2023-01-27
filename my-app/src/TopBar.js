import React, { useState, useEffect } from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

export default function Header() {

const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

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

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

useEffect(() => {
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
    }, true)

return(
  <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center">
        <AiOutlineMail class="mail"/> <a href="mailto:contact@example.com">teocaragea@yahoo.com</a>
        <BsFillTelephoneFill class="phone"/> +40 752 002 841
      </div>
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="#" class="facebook"><BsFacebook/></a>
        <a href="#" class="instagram"><BsInstagram/></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
);
}