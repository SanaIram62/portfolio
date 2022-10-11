
const timeline = gsap.timeline();
timeline.from('.title span', {
    y:150, skewY:7, duration:2
}).from('.txt', {
    letterSpacing:-10,
    opacity:0,
    duration:1
})
const timeline1 = gsap.timeline();
timeline.from('.v-container', {
    y:150, skewY:7, duration:2
})