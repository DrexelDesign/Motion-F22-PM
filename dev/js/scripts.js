// console.log("hello class");
import { gsap } from "gsap";

// Sets
gsap.set("#hero h1 span",{alpha:0.25})

gsap.from("#first-line",{duration:1,alpha:0, y:-100});
gsap.from("#second-line",{duration:1,alpha:0, y:-100, delay:0.25});
gsap.from("#trails-btn",{duration:1,y:100, alpha:0, delay:0.5});
gsap.from("#trails-btn i",{duration:1,rotation:90, alpha:0, delay:0.75, transformOrigin: "left bottom"});

let trailsBtn = document.querySelector("#trails-btn");

trailsBtn.addEventListener("mouseover",function(){
    gsap.to("#trails-btn",{duration:0.25,scale:2, backgroundColor:"#881d02" });
    gsap.to("#first-line",{duration:0.25, alpha:0, y:50});
    gsap.to("#second-line",{duration:0.25, alpha:0, y:20});
    gsap.to("#trails-btn i",{duration:0.25, rotateY:180, delay:0.15});
})

trailsBtn.addEventListener("mouseout",function(){
    gsap.to("#trails-btn",{duration:0.25, scale:1, backgroundColor:"#e23636"});
    gsap.to("#first-line",{duration:0.25, alpha:1, y:0});
    gsap.to("#second-line",{duration:0.25, alpha:1, y:0});
    gsap.to("#trails-btn i",{duration:0.25, rotateY:-180});
})
