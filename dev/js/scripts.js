import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);


function easeDemo(){

    var tl = gsap.timeline();
    tl.to("#ball",{duration:2,x:-400, transformOrigin:"center", ease:"none"})
    .to("#ball",{duration:1, x:0, ease:"elastic.out(1, 0.3)"})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(easeDemo());








GSDevTools.create();
