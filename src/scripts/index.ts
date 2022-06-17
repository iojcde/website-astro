import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Magnetic from './utils/magnetic'
gsap.registerPlugin(ScrollTrigger)

new Magnetic(document.querySelector(`.round-button-text`), {
  x: 0.2,
  y: 0.2,
  s: 0.2,
  rs: 0.7,
})

// const spanWord = document.querySelectorAll(`.span-lines`)

// for (let i = 0; i < spanWord.length; i++) {
//   const wordWrap = spanWord.item(i)
//   wordWrap.innerHTML = wordWrap.innerHTML.replace(
//     /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
//     `$1<span class="span-line"><span class="span-line-inner">$2</span></span>`,
//   )
// }

// const triggerElement = document.querySelector(`.span-lines`)

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: triggerElement,
//     toggleActions: `play none none reset`,
//     start: `50% 100%`,
//   },
// })
// tl.from(`.span-lines .span-line-inner`, {
//   y: `100%`,
//   stagger: 0.01,
//   ease: `power3.out`,
//   duration: 1,
//   delay: 0,
// })

gsap.utils
  .toArray(`.scrub-section`)
  .forEach((section: HTMLDivElement, index) => {
    const w = section.querySelector(`.wrapper`)

    const [x, xEnd] =
      index % 2
        ? [`100%`, (w.scrollWidth - section.offsetWidth) * -1]
        : [w.scrollWidth * -1, 0]

    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: `#skills-container`,

          scrub: 0.5,
        },
      },
    )
  })
