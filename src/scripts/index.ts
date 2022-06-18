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

// gsap.utils
//   .toArray(`.scrub-section`)
//   .forEach((section: HTMLDivElement, index) => {
//     const w = section.querySelector(`.wrapper`)

//     const [x, xEnd] =
//       index % 2
//         ? [`100%`, (w.scrollWidth - section.offsetWidth) * -1]
//         : [w.scrollWidth * -1, 0]

//     gsap.fromTo(
//       w,
//       { x },
//       {
//         x: xEnd,
//         scrollTrigger: {
//           trigger: `#skills-container`,

//           scrub: 0.5,
//         },
//       },
//     )
//   })

let direction = 1 // 1 = forward, -1 = backward scroll

const roll1 = roll(`.scrub-section .wrapper`, { duration: 20 }, false),
  roll2 = roll(`.scrub-section-inverse .wrapper`, { duration: 20 }, true),
  scroll = ScrollTrigger.create({
    trigger: document.querySelector(`[data-scroll-container]`),
    onUpdate(self) {
      if (self.direction !== direction) {
        direction *= -1
        gsap.to([roll1, roll2], { timeScale: direction, overwrite: true })
      }
    },
  })

// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars,
  reverse: boolean,
) {
  vars = vars || {}
  vars.ease || (vars.ease = `none`)
  const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10) // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
      },
    }),
    elements = gsap.utils.toArray(targets),
    clones = elements.map((el: HTMLDivElement) => {
      const clone = el.cloneNode(true)
      el.parentNode.appendChild(clone)
      return clone
    }),
    positionClones = () =>
      elements.forEach((el: HTMLDivElement, i) =>
        gsap.set(clones[i], {
          position: `absolute`,
          overwrite: false,
          top: el.offsetTop,
          left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
        }),
      )
  positionClones()
  elements.forEach((el, i) =>
    tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0),
  )
  window.addEventListener(`resize`, () => {
    const time = tl.totalTime() // record the current time
    tl.totalTime(0) // rewind and clear out the timeline
    positionClones() // reposition
    tl.totalTime(time) // jump back to the proper time
  })
  return tl
}
