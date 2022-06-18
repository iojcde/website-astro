import { ScrollTrigger } from 'gsap/ScrollTrigger'
import initSmoothScroll from './utils/initSmoothScroll'
import MouseFollower from 'mouse-follower'
import { gsap } from 'gsap'
import barba from '@barba/core'

const scroll = initSmoothScroll()

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

  import(`./utils/magnetic`).then(({ Magnetic }) => {
    new Magnetic(document.getElementById(`burger`), {
      x: 0.08,
      y: 0.08,
      s: 0.2,
      rs: 0.7,
    })
  })
}

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
  const html = document.querySelector(`html`)
  html.classList.toggle(`menu-open`)
  if (html.classList.contains(`menu-open`)) {
    document.body.style.overflow = `hidden`
  } else {
    document.body.style.overflow = ``
  }
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
