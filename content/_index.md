---
title: Hi!
layout: profile
showPagination: false
showRecent: true
---

Hello! Welcome to my very professional blog/portfolio/internet thing. You can find some cool stuff around here hopefully, maybe a blog or two about some computer science-y stuff, or a stupid project that I took on, maybe an occasional book review, or some other random stuff.

<script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>
<script>
  const hasSeenForever = localStorage.getItem("typeitFinishedForever");
  const target = document.querySelector("#typeit-target");
  if (hasSeenForever) {
    target.innerText = "tecknet.gg";  // permanent text
    target.classList.add("color-shift"); 
  } else {
    new TypeIt("#typeit-target", {
      strings: ["just a guy","tecknet.gg"],
      speed: 60,
      deleteSpeed: 40,
      nextStringDelay: 1000,
      breakLines: false,
      loop: false,
      cursor: true,
      waitUntilVisible: true,
      afterComplete: function (instance) {
        localStorage.setItem("typeitFinishedForever", "true");
        target.classList.add("color-shift");
        setTimeout(() => {
          instance.destroy();
        }, 1000);
      },
    }).go();
  }
</script>
---
