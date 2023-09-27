import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#pre-register-btn", { transformOrigin: "center bottom" })

var registerButtonTL = gsap.timeline({ paused: true });
registerButtonTL
  .to(".new_link1", { duration: 0.25, alpha: 0, y: 50 }, "trigger")
  .to(".new_link1", { duration: 0.25, y: 100, scale: 2 }, "trigger");
 // .to("#pre-register-btn i", { duration: 1, rotation: 20, delay: 0, repeat: 2, yoyo: true }, "-=.5");

var preregisterBtn = document.querySelector("#pre-register-btn");

preregisterBtn.addEventListener("mouseover", function () {
  registerButtonTL.play();
})

preregisterBtn.addEventListener("mouseout", function () {
  registerButtonTL.reverse();
})

var mainTimeline = gsap.timeline();
mainTimeline.add(registerAnimation())

; 