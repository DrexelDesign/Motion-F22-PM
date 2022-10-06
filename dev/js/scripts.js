import { gsap } from "gsap";
gsap.set("#trails-btn i",{transformOrigin:"center bottom"});

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration: 1, alpha:0, y:-100})
        .from("#second-line",{duration: 1, alpha:0, y:-70})
        .from("#trails-btn",{duration: 1, alpha:0, y:50})
        .from("#trails-btn i",{duration: 1, alpha:0, rotation:180});
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation());


var heroSizeNumber = 1;

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // desktop setup code here...
  heroSizeNumber = 2;
});

mm.add("(max-width: 767px)", () => {
  // mobile setup code here...
  heroSizeNumber = 1.25;
});

let trailBtn = document.querySelector("#trails-btn");

var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#trails-btn",{duration:0.25, scale:heroSizeNumber},"goAway")
        .to("#trails-btn i",{duration: 0.25, rotateY:180})
        .to("#first-line",{duration: 0.25, alpha:0, y:50},"goAway")
        .to("#second-line",{duration: 0.25, alpha:0, y:20},"goAway");

trailBtn.addEventListener("mouseover",function(){
   buttonAnimation.play();
})

trailBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})