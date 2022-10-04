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
    let mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
        // mobile setup code here...
        tl.to("#yellow-rect",{duration:1, x:"100"})
        .to("#yellow-rect",{duration:2, y:"50%"})
        .to("#yellow-rect",{duration:1, scale:0.5});
    });

    mm.add("(min-width: 768px)", () => {
    // desktop setup code here...
        tl.to("#yellow-rect",{duration:1, x:"200%"})
        .to("#yellow-rect",{duration:2, y:"50%"})
        .to("#yellow-rect",{duration:1, scale:0.5});
    });


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
