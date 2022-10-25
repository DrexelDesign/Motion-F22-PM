import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function boxAnimation(){
    var tl = gsap.timeline();
    tl.fromTo("#box",{drawSVG:"0% 5%"},{duration:1, fill:"red", drawSVG:"95% 100%"})
    .from("#line",{duration:1, drawSVG:"0%"});
    return tl;
}


var mainTl = gsap.timeline();
mainTl.add(boxAnimation());






GSDevTools.create();