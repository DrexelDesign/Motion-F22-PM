import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);



function simpleMotion(){
    var tl = gsap.timeline()

    return tl;
}

function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".odd",{duration:0.5, rotate:180, drawSVG:0, stagger:0.25, transformOrigin:"center"},"playPattern")
    .fromTo(".even",{drawSVG:"0% 0%"},{duration:0.5, rotate:180, drawSVG:"0% -100%", stagger:0.25, transformOrigin:"center"},"playPattern")
    return tl;
}

function UIMotion(){

    // make a var that represents the line in the SVG
    var bottomLine = document.querySelector("#bottom-line");
    // make a var that uses the svg line var from above and sets the BBox property
    bottomLine = bottomLine.getBBox();

    var tl = gsap.timeline()
    tl.to("#pencil",{duration:0.5,x:bottomLine.width},"drawIn")
    .from("#bottom-line",{duration:0.5,drawSVG:0},"drawIn")
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion());



GSDevTools.create();