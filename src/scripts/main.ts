import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import initSmoothScroll from './utils/initSmoothScroll'
import MouseFollower from 'mouse-follower'
import { gsap } from 'gsap'
import { listen } from 'quicklink'

window.addEventListener(`load`, () => {
  listen()
})

document.documentElement.classList.add(`is-loaded`)

if (!window.matchMedia(`pointer: coarse`).matches) {
  await initSmoothScroll()
}

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

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

const initAnimations = () => {
  gsap.utils
    .toArray(`.fade-in-section`)
    .forEach((section: HTMLElement, index) => {
      const w = section.querySelectorAll(`.fade-in`)

      gsap.fromTo(
        w,
        { opacity: 0, y: `5rem` },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: { trigger: section, start: `top 80%` },
          stagger: 0.08,
          duration: 0.7,
          delay: 0.1,
          ease: gsap.parseEase(`.22,.61,.35,1`),
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
        trigger: `footer`,
        start: `top 2%`,
        scrub: true,
      },
      className: `burger-dark`,
      ease: `none`,
    },
  )
}
if (window.matchMedia(``).matches) {
  initAnimations()
}

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

gsap.fromTo(
  `.rotate-hr`,
  {
    rotation: -90,
    transformOrigin: `top right`,
    width: Math.sqrt(window.innerHeight ** 2 + window.innerWidth ** 2),
  },
  {
    rotation:
      -(Math.atan(window.innerHeight / window.innerWidth) * 180) / Math.PI,
    duration: 1,
    scrollTrigger: { trigger: `footer`, scrub: true, end: `top top` },
  },
)
