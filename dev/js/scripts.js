// console.log("hello class");
import {gsap} from "gsap";

function aquaAnimation(){
    var tl = gsap.timeline();
    tl.to("#aqua-box",{duration:1, x:"100%"},"anything")
        .to("#aqua-box",{duration:1, y:"100%"})
        .to("#aqua-box",{duration:1, scale:2},"anything");
        return tl;
}

function yellowAnimation(){
    var tl = gsap.timeline();
    tl.to("#yellow-rect",{duration:1, x:"300%"})
        .to("#yellow-rect",{duration:2, y:"50%"})
        .to("#yellow-rect",{duration:1, scale:0.5});
        return tl;
}

function redAnimation(){
    var tl = gsap.timeline();
    tl.to("#red-circle",{duration:1, x:"100%"})
        .to("#red-circle",{duration:0.5, y:"30%"})
        return tl;
}

var mainTL = gsap.timeline();

mainTL.add(redAnimation())
.add(aquaAnimation())
.add(yellowAnimation());











// gsap.set("#aqua-box",{transformOrigin:"center center",y:500});

// v:1 DO NOT USE
// TweenLight.to(("#aqua-box",1,{x:100});
// v:2 DO NOT USE
// gsap.to(("#aqua-box",1,{x:100});

// let defaultTime = 2;
// let halfDefault = defaultTime / 2;
// // let doubleDefault = defaultTime * 2;

// access to gsap | object you to animate {objects properties that you want to change or animate}
// gsap.to("#aqua-box",{duration:1,x:100});
// gsap.to("#aqua-box",{duration:1,y:100, delay:1});
// gsap.to(".aqua-box", {
//     duration: defaultTime,
//     rotation: 360,
//     x: 200,
//     backgroundColor: "#fff",
//     scale: 1.25,
//     stagger: halfDefault
// });
// gsap.to("#aqua-box",{duration:1,x: "+=100"});

// let box = document.querySelector("#aqua-box");

// box.addEventListener("click",function(){
//     // gsap.to("#aqua-box",{duration:1,x:100});
//     gsap.to("#aqua-box",{duration:1,x: "+=100"});
// })