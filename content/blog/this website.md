---
title: Building this cool little portfolio.
date: 2026-01-11
description:
summary: Diving into the tech stack used and some other cool things on the way.
tags:
  - website
  - hugo
thumbnail: images/default.png
showReadingTime: true
showTableOfContents: false
---
For whatever reason, the last weekend I dreamed of having my own developer portfolio. Pretty weird way to start a project post but here we are. Like any sane person would do in my circumstances, I googled "cool developer portfolios", and landed on [this](https://github.com/emmabostian/developer-portfolios) (i.e the first search results :]). As luck would have it, the first page I found myself ogling at was this beautiful [page](https://www.daanhessen.nl/)by Daan Hessen. Coincidentally, that same week I had been reading around about Perlin Noise (a topic for a future blog post perhaps...), and struck by a wave of inspiration, I wanted to make my background a Perlin Noise-esque vector map type deal. 

The only problem was that I'm not really a developer. I've never really messed around with web development at all really, and it wasn't particularly something I was interested in. I keep myself in the domain of Python and maybe some occasional C++ whenever I'm working on some hardware projects, but JS, CSS and HTML and what not, and probably won't be something I intend on learning properly any time soon. 

Regardless, I would deem my self at least somewhat competent, and I thought I could make a cool looking website without ever having to really learn web development (now that I say that I realise that wasn't the best attitude to go into this with, but whatever). And in my research for a solution to this very problem I came across [Hugo](https://gohugo.io/). Using Hugo, all I would need to do is install a theme and modify the CSS and other configs a bit to my liking, and voila, cool portfolio (notice how its no longer a "dev" portfolio). A bit of searching later, I saw that Blowfish was all the rage, and so I set up a GitHub repository (so we can host using GitHub Pages), and set about tweaking it to my liking. 

After a good few hours alt-tabbing between the various .toml config files and some more painful hours of debugging why GitHub couldn't build it I had a working site! It was sadly the default Blowfish themed site, and this wouldn't do. Coincidentally, I built this cool looking Perlin Theme in python the other day:

```
import pygame  
import math  
from noise import pnoise3  
  
width, height = 2400, 1600  
res = 16  
scale = 0.005  
speed = 0.01  
fps = 60  
  
top = pygame.Color(31, 80, 255)  
bottom = pygame.Color(255, 0, 0)  
  
  
def draw():  
    pygame.init()  
    screen = pygame.display.set_mode((width, height))  
    pygame.display.set_caption("Perlin Thingy")  
    clock = pygame.time.Clock()  
  
    font = pygame.font.SysFont("couriernew", res, bold=True)  
    characters = {"1": font.render("1", True, (255, 255, 255)),"0": font.render("0", True, (255, 255, 255))}  
    z = 0  
  
    while True:  
        for event in pygame.event.get():  
            if event.type == pygame.QUIT:  
                pygame.quit()  
                return  
  
        screen.fill((10, 10, 15))  
  
        for x in range(0, width, res):  
            for y in range(0, height, res):  
                noise = pnoise3(x * scale, y * scale, z, octaves=2)  
                character = characters["1"] if noise > 0 else characters["0"]  
  
                fx, fy = x / width, y / height  
                colour = top.lerp(bottom, (fx + fy) / 2)  
  
                brightness = max(50, min(255, int(150 + (noise * 105))))  
                mult = brightness / 255.0  
  
                surface = character.copy()  
                surface.fill((int(colour.r * mult), int(colour.g * mult), int(colour.b * mult)),special_flags=pygame.BLEND_RGB_MULT)  
                screen.blit(surface, (x, y))  
  
        z += speed  
        pygame.display.flip()  
        clock.tick(fps)  
  
  
if __name__ == "__main__":  
    draw()
```


I spent far too long converting that over to .js, and frankensteining it into Blowfish, but the results are the cool flowly background theme that we have today.

Anyways for actual content and hosting, I'm using Obsidian to handle content generation. I have a few templates set up with the necessary front-matter to make these posts work. To make pushing to GitHub a bit more seamless, I installed a terminal plugin (you can get a plugin for practically anything at this point...), and now whenever I want to post anything, I just hit do a cheeky git commit -m and a git push, and voila, we're up. For the custom domain, I managed got myself this .dev domain for free using name.com's year long free domain that comes with GitHub education. If you want you can definitely get a .dev domain for like £5 off Namecheap. Otherwise, it will be up and running on https://yourgithubusername.github.io/reponame for free.

With the why and how of this website now explained, the more trivial "what" remains unanswered. As I explained above, I'm not exactly a dev, just someone who likes coding, and is somewhat competent. Most posts on this website will probably be random projects I'm working on, and some articles on something cool I learnt (like Perlin!). I do have a book review segment for now. I don't know if I'll get around to that, but thats something I'd like to explore. And finally I'll eventually add my Resume here to round of my "personal brand" if you will. Its all pretty obnoxious I know, but an internet rite of passage for sure... 

Welp, thank you for wasting however many minutes Hugo thinks this post is, reading this.