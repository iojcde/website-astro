import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const initSmoothScroll = async () => {
  const { default: LocomotiveScroll } = await import(`locomotive-scroll`)

  const scroll = new LocomotiveScroll({
    el: document.querySelector(`[data-scroll-container]`),
    smooth: true,
    tablet: { breakpoint: 0 },
  })

  window.onresize = scroll.update()

  scroll.on(`scroll`, () => ScrollTrigger.update())

  ScrollTrigger.scrollerProxy(`[data-scroll-container]`, {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: (
      document.querySelector(`[data-scroll-container]`) as HTMLDivElement
    ).style.transform
      ? `transform`
      : `fixed`,
  })

  ScrollTrigger.defaults({
    scroller: document.querySelector(`[data-scroll-container]`),
  })

  /**
   * Remove Old Locomotive Scrollbar
   */

  const scrollbar = document.querySelectorAll(`.c-scrollbar`)

  if (scrollbar.length > 1) {
    scrollbar[0].remove()
  }

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener(`refresh`, () => scroll.update())

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh()

  return scroll
}
export default initSmoothScroll
