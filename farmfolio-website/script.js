function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  //   crsr.style.scale = 5;
});

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers:true,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);

// // var tl2 = gsap.timeline({
// //   scrollTrigger: {
// //     trigger: ".page1 h1",
// //     scroller: ".main",
// //     // markers:true,
// //     start: "top -115%",
// //     end: "top -120%",
// //     scrub: 3,
// //   },
// // });
// // tl2.to(".main", {
// //   backgroundColor: "#fff",
// // });

// // var tl3 = gsap.timeline({
// //   scrollTrigger: {
// //     trigger: ".page1 h1",
// //     scroller: ".main",
// //     // markers:true,
// //     start: "top -280%",
// //     end: "top -300%",
// //     scrub: 3,
// //   },
// // });

// // tl3.to(".main", {
// //   backgroundColor: "#D2691E",
// // });

// // var tl4 = gsap.timeline({
// //   scrollTrigger: {
// //     trigger: ".page1 h1",
// //     scroller: ".main",
// //     // markers: true,
// //     start: "top -350%",
// //     end: "top -360%",
// //     scrub: 3,
// //   },
// // });

// // tl4.to(
// //   ".main",
// //   {
// //     backgroundColor: "#000",
// //   },
// //   "a"
// // );
// // tl4.to(
//   ".page5 h1",
//   {
//     color: "#fff",
//   },
//   "a"
// );











var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to(".main", {
  background: "linear-gradient(135deg, #fff, #d2691e, #6c6c6c)",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -280%",
    end: "top -300%",
    scrub: 3,
  },
});

tl3.to(".main", {
  background: "linear-gradient(135deg, #d2691e, #ae9463, #6c6c6c)",
  // backgroynd:"#D2691E",
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -350%",
    end: "top -360%",
    scrub: 3,
  },
});

tl4.to(".main", {
  // background: "linear-gradient(135deg, #000, #d2691e, #6c6c6c)",
  background:"#000",
}, "a");
tl4.to(".page5 h1", {
  color: "#fff",
}, "a");

// var tl5 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page4 h1",
//     trigger: ".pg4-h1",
//     scroller: ".main",
//     // markers: true,
//     start: "top -350%",
//     end: "top -360%",
//     scrub: 3,
//   },
// });

// tl5.to(
//   ".main",
//   {
//     backgroundColor: "#000",
//   },
//   "a"
// );
// tl5.to(
//   ".page5 h1",
//   {
//     color: "#fff",
//   },
//   "a"
// );
// var boxes = document.querySelectorAll(".box");
// boxes.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     var att = elem.getAttribute("data-image");
//     crsr.style.width = "470px";
//     crsr.style.height = "370px";
//     crsr.style.borderRadius = "0";
//     crsr.style.backgroundImage = `url(${att})`;
//   });
//   elem.addEventListener("mouseleave", function () {
//     elem.style.backgroundColor = "transparent";
//     crsr.style.width = "20px";
//     crsr.style.height = "20px";
//     crsr.style.borderRadius = "50%";
//     crsr.style.backgroundImage = `none`;
//   });
// });

// window.addEventListener('scroll', () => {
//   // Get the scroll percentage (0 at top, 1 at bottom)
//   const scrollTop = window.scrollY;
//   const docHeight = document.body.scrollHeight - window.innerHeight;
//   const scrollPercent = scrollTop / docHeight;

//   // Define start and end colors (in RGB format)
//   const startColor = 
//   const endColor = rgb(212, 156, 52);  

//   // Calculate the interpolated color based on scroll percent
//   const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercent);
//   const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercent);
//   const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercent);

//   // Set the new background color
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });


var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    purple.style.display = "block";
    purple.style.opacity = "1";
  });
  elem.addEventListener("mouseleave", function () {
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});





// Reference the anchor link
const openChatbotLink = document.getElementById('openChatbot');

// Add an event listener to open the chatbot when the link is clicked
openChatbotLink.addEventListener('click', () => {
  window.botpressWebChat.sendEvent({ type: 'show' }); // Show the chatbot
});
