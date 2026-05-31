---
title: Balancing the Balls
date: 2026-01-31
description:
summary: How I got a robot to do something a 3 year old could.
tags:
  - levitation
  - electronics
  - PCB
featureImage: images/ballbalancer.png
showReadingTime: true
showTableOfContents: "false"
draft: false
---
This write-up been a long time waiting. I started this project in something like October of last year, and for the most part, the hardware was done within about 2 weeks. 

I don't feel like dropping the hardware development since its pretty boring. Read the [journal](https://github.com/tecknet-gg/ball-balancer/blob/master/JOURNAL.md) if you really want to for whatever reason.

![Balancer](images/balancer1.png)

Ignore the PCB, I never actually got around to that.

Anyways the construction was rather painless. After that it was a matter of setting up the Pi for SSH, and then programming. The supporting architecture was rather boring, mainly just networking, and hardware interfacing. The CV was pretty fun, go read the [post](https://tecknet.dev/blog/cv-pipeline/) on that if you want details about the CV pipeline.

The IK was derived from [George Yuanji Wang's](https://www.george-yuanji-wang.xyz/blog/3rrs) derivation. Implementing it Python was trivial from that. Then it just became a matter of tuning. Which I suck at. I did get it tuned to the point where it balanced the ball for ~45s before giving up. Don't really have the time to sync into it right now. Surprisingly my hardware is rather compliant, and it does play well. I have full confidence that with a bit more time tuning, it should work amazingly, even given the janky Flask powered camera edge compute nonsense I have going on (it was a budgetary thing :]). 

All the code and files can be found [here](https://github.com/tecknet-gg/ball-balancer). That's pretty much all I have the energy for! Maybe I'll give it the write-up it deserves one day...