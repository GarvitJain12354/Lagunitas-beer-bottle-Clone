
function anim(){
  gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
anim()

gsap.to("#img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page2",
   scrub:0.5,
    
  },
 
  rotate:"-15deg",
  


})
gsap.to("#img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
   scrub:0.5,
   
  },
 
  rotate:"intial",


})
gsap.to("#img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page5",
   scrub:3,
   start:"top 50%",
 
  },
 
  rotate:"-25deg",
  height:"10vw",
  top:"40%",
  position:`absolute`



})
gsap.from("#left1>img,#left1>h2,#right1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#left1>img",
    
    start:"top 80%",
    
    
  },
  opacity:0,
  y:50,
  duration:2,
  
})
gsap.from("#page4>img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4>img",
    
    start:"top 90%",
    
    
    
  },
  x:-100,
  opacity:0,
})
gsap.from("#bottle>img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#bottle>img",
    
    start:"top 80%",
    end:"bottom 75%",
    scrub:.5
     
    
  }, 
  y:30,
  opacity:0,
  stagger:{
    each:.2,
    amount:1
  },ease:Expo.easeInOut
})

gsap.to("#img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page5",
    start:"top 0%",
    
    scrub:.5
  },
  display:"none",
  opacity:0
})