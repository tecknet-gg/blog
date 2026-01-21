---
title: "Welcome to My Profile"
layout: "profile"
showPagination: false
showRecent: true
---

Hi! I'm Jeevan, a 16 year old student slogging through their A-Levels. This site was mainly created out of wanting to have a site. Now that I have it, I don't particularly know what to do with it. So its a blog? I suppose I'll try and keep things updated (not that anyone is reading this, but I operate on levels of delusion).  If you do happen to find this (or have had this shoved down your throat by me), you can find some write ups on some stuff that I probably read in an article and thought was cool. That is assuming that you're reading this a solid few months after I'm writing, the whole website is a tad bit barren right now...

<script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>
<script>
  const hasSeenForever = localStorage.getItem("typeitFinishedForever");
  const target = document.querySelector("#typeit-target");
  if (hasSeenForever) {
    target.innerText = "tecknet.gg";  // permanent text
    target.classList.add("color-shift"); 
  } else {
    new TypeIt("#typeit-target", {
      strings: ["Student", "Self Proclaimed Nerd", "Guy", "I ran out of tags","<i> cough cough </i>","tecknet.gg"],
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
