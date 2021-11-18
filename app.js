Splitting()

const target = document.querySelector('.text_area')
const results = Splitting({
  target: target,
  by: 'chars',
})

gsap.from('.char, .text_area', 1.5, {
    duration: 1.5,
    opacity: 1,
    y: 500,
    stagger: 0.09,
    ease: 'elastic.out(0.2)',
  })

var btn = document.querySelector('.red:last-child')

btn.addEventListener('click', function () {
  gsap.from('.char, .text_area', 1.5, {
    duration: 1.5,
    opacity: 1,
    y: 500,
    stagger: 0.09,
    ease: 'elastic.out(0.2)',
  })
})
