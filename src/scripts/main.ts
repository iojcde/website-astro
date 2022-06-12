import { ScrollTrigger } from 'gsap/ScrollTrigger'

import MouseFollower from 'mouse-follower'
import { gsap } from 'gsap'
import Magnetic from './utils/magnetic'

gsap.registerPlugin(ScrollTrigger)

if (!window.matchMedia(`(pointer: coarse)`).matches) {
  MouseFollower.registerGSAP(gsap)
  document.getElementsByClassName(`mf-cursor`).length == 0 &&
    new MouseFollower({
      stateDetection: {
        '-pointer': `a,button`,
        '-hidden': `iframe`,
      },
    })
}

new Magnetic(document.getElementById(`burger`), {
  x: 0.08,
  y: 0.08,
  s: 0.2,
  rs: 0.7,
})

gsap.utils
  .toArray(`.fade-in-section`)
  .forEach((section: HTMLElement, index) => {
    const w = section.querySelectorAll(`.fade-in`)

    gsap.fromTo(
      w,
      { opacity: 0, y: 75 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: { trigger: section, start: `top 90%` },
        stagger: 0.08,
        duration: 0.6,
        delay: 0.2,
        ease: `power2.out`,
      },
    )
  })

gsap.fromTo(
  `#burger span`,
  {
    className: `burger`,
  },
  {
    scrollTrigger: {
      trigger: `main`,
      start: `bottom top`,
      scrub: true,
    },
    className: `burger-dark`,
    ease: `none`,
  },
)

const toggleMenu = () => {
  const menu = document.querySelector(`#menu`)
  const overlay = document.querySelector(`#overlay`)

  menu.classList.toggle(`active`)
  overlay.classList.toggle(`active`)
}

const button = document.getElementById(`nav-button`)
const overlay = document.getElementById(`overlay`)
button.onclick = toggleMenu
overlay.onclick = toggleMenu

const toggleTheme = () => {
  const isDarkMode = localStorage.getItem(`darkMode`)

  if (isDarkMode == `true`) {
    localStorage.setItem(`darkMode`, `false`)
  } else {
    localStorage.setItem(`darkMode`, `true`)
  }

  document.querySelector(`html`).classList.toggle(`dark`)
}
const themeButton = document.getElementById(`theme-button`)
themeButton.onclick = toggleTheme
