gsap.registerPlugin(ScrollTrigger);

scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

window.onresize = scroll.update();

scroll.on("scroll", () => ScrollTrigger.update());

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.defaults({
  scroller: document.querySelector("[data-scroll-container]"),
});

/**
 * Remove Old Locomotive Scrollbar
 */

const scrollbar = document.querySelectorAll(".c-scrollbar");

if (scrollbar.length > 1) {
  scrollbar[0].remove();
}

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => scroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.utils.toArray(`.scrub-section`).forEach((section, index) => {
  const w = section.querySelector(`.wrapper`);

  const [x, xEnd] =
    index % 2
      ? [`100%`, (w.scrollWidth - section.offsetWidth) * -1]
      : [w.scrollWidth * -1, 0];

  gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5,
      },
    }
  );
});

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


var spanWord = document.querySelectorAll(".span-lines");
for (var i = 0; i < spanWord.length; i++) {

  var wordWrap = spanWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');

}
let triggerElement = document.querySelector('.span-lines');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: triggerElement,
    toggleActions: 'play none none reset',
    start: "50% 100%",
  }
});
tl.from('.span-lines .span-line-inner', {
  y: "100%",
  stagger: .01,
  ease: "power3.out",
  duration: 1,
  delay: 0
});


const toggleMenu = () => {
    const menu = document.querySelector('#menu')
    const overlay=document.querySelector('#overlay')

    menu.classList.toggle('active')
    overlay.classList.toggle('active')
}

const button = document.getElementById("nav-button")
const overlay = document.getElementById("overlay")
button.onclick = toggleMenu
overlay.onclick = toggleMenu

const toggleTheme=()=>{
  const isDarkMode = localStorage.getItem('darkMode');
 
  if (isDarkMode=='true'){
     localStorage.setItem('darkMode', 'false');
  }else{
    
    localStorage.setItem('darkMode', 'true');
    
  }
  
  document.querySelector("html").classList.toggle('dark');

}
const themeButton = document.getElementById("theme-button")
themeButton.onclick = toggleTheme