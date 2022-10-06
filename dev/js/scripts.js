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





let trailBtn = document.querySelector("#trails-btn");

var buttonAnimation = gsap.timeline();
buttonAnimation.to("#trails-btn",{duration:1, scale:3});
//         .to("#trails-btn i",{duration: 1, rotateY:180})
//         .to("#first-line",{duration: 1, alpha:0, y:50})
//         .to("#second-line",{duration: 1, alpha:0, y:20});


trailBtn.addEventListener("mouseover",function(){
   
})

trailBtn.addEventListener("mouseout",function(){
    // gsap.to("#trails-btn",{duration:1, scale:1});

    // gsap.to("#trails-btn i",{duration: 1, rotateY:0});

    // gsap.to("#first-line",{duration: 1, alpha:1, y:0});
    // gsap.to("#second-line",{duration: 1, alpha:1, y:0});
})