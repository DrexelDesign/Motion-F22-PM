import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

gsap.to("#shades",{duration:1,rotate:180, transformOrigin:'center'});
gsap.to("#clip",{duration:1,scale:0, transformOrigin:'center',rotate:-180});

GSDevTools.create();

