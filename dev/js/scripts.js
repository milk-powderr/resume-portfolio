import { gsap } from "gsap";


gsap.set(".new__page1", { transformOrigin: "center bottom" })

var registerButtonTL = gsap.timeline({ paused: true });
registerButtonTL
  .to(".new__page1", { duration: 0.25, alpha: 0, y: 50 }, "trigger")
  .to(".new__page1", { duration: 0.25, y: 100, scale: 2 }, "trigger");
 // .to("#pre-register-btn i", { duration: 1, rotation: 20, delay: 0, repeat: 2, yoyo: true }, "-=.5");

var preregisterBtn = document.querySelector(".new__page1");

preregisterBtn.addEventListener("mouseover", function () {
  registerButtonTL.play();
})

preregisterBtn.addEventListener("mouseout", function () {
  registerButtonTL.reverse();
})


var mainTimeline = gsap.timeline();
mainTimeline.add(registerAnimation())
;   