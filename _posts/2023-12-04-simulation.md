---
title: "simulation"
date: 2023-12-04
author: aoshima
categories: ["devlog"]
---

### Progress

Currently, there's a bunch of things happening all at once in the project.

- An ECS implementation running Update on Components that inherit IUpdate and is called every frame
- The ITickable interface, implemented by simulation Components to perform in a simulation rate
- Coroutines that can be either automatically or manually updated (usually by ITickables performing sequencial tasks)
- Messages that are passed across IMessageResponders that, currently, are one Component and all personality traits to define decisions (such as whether a character will come to work at a certain time or not; an EarlyBird will come earlier than others)
- Jobs, that are sequential steps to perform a complex action (such as going home after work where the character must GoTo a certain coordinate and then Leave the map) -- these use Coroutines and are ticked by the Mind component (that is an ITickable)
- Components such as _Body_ and _Personality_ that define properties for a character

I'm slowly going insane, but I'm happy with the exploring. I am a very perfectionist person and I tend to give up things when I can't __understand__ them. This is one of those times: I can't quite understand what of these systems make sense and, honestly? They seem redundant in relation to one another. I could scrape the Jobs implementation and use only Coroutines. I could also replace the _Traits_ implementation by just using regular components.

However, __I want to experiment__. Having a lot of systems working all at once is the very definition of video games, but my mind wants to put order to the chaos most often than not.

I feel that's a __mistake__.

Before you <strike>know</strike> think I'm an anarchist that worships chaos, I still think structure is vital; just not when you're trying to figure things out. I spent so much time doing what I knew that it led me to... well, here. I _make games_™ since 2015 and have released [one little selfjam game](/stuff.html). I've got comfortable with the hobby of creating a project and messing with it until I forgot it existed. I kept doing the stuff I knew.

### A little (too) personal story

I went to college with two things in mind: 1) having a job in a field that was growing at the time (this was mainly influenced by my parents, who I wholeheartedly love) and 2) making games. This was in 2010 and I had just started working in the software development industry (the majority of brazilians start working very early in their lives, some way earlier than me at 18; my wife would finish her basic education as an adult because she had to work as a teenager).

Fast-forward to the end of 2015. I have completely forgot that I wanted to make games and my drinking and partying took most of my life in the years that passed. I have met my wife to-be in said parties and just got married. As we start to slowly build our home, I start to turn my focus towards video games again and start messing a bit with a thing called Unity. I don't quite grasp the concepts of it, as I'm used to programming; object-oriented programming, to be specific. I download Monogame and find that's more in my area of expertise, and start messing with it.

January 4th, 2016. I'm at a hospital bed and my dad comes to talk to me. His face is scared, even though he was trying to hide it. I had just taken some tests because my blood platelets were too low. I find out that I have cancer.

The next months weren't the easier of my life if I'm being honest. Brazil's public healthcare is not ideal, even though SUS (Health Unic System, in a free translation) still holds things together against the insanity that is the absence of public healthcare in countries such as United States. The main issue here is having exams in plausible time; when you're talking about cancer, the early you discover it the better. I had health insurance because of my job and, frankly? That's why I'm here. I had leukemia or 'blood cancer', and I could start bleeding internally had I not discovered it in that precise time.

All this seemingly grim story is to say that shit happens regardless of yourself and that all you can do is your best with what you can at the moment. And I think that, after much time of physical and mental treatment, I'm ready to handle the discomfort of being purposefully chaotic in the hopes I learn with it. _<sub>PS: This is me being positive.</sub>_

> "Not knowing stuff is hard"  
> Me, 2023.

Working chaotically and experimentally is _figuratively_ making me die inside a little bit, I admit, but in a controlled manner. __Learning is difficult__, and it feels like it gets more difficult as you age. Even so, I'm looking forward for my next years of learning and exploration.  

### Images

A couple of images from last week, starting with a little pathfinding:

<p style="text-align: center;">
<img src="{{ site.baseurl }}/assets/images/2023-12-04-simulation/pathfinding.gif" alt="A character walking after a pathfinding implementation" />
<br/>
<sub>A* never failed me</sub>
</p>

And finishing with the implementation of a dual grid system to render complex terrain/wall shapes, thanks to [this Oskar Stålberg's presentation](https://www.youtube.com/watch?v=Uxeo9c-PX-w){:target="_blank"}; it's pure genius in it's simplicity:

<p style="text-align: center;">
<img src="{{ site.baseurl }}/assets/images/2023-12-04-simulation/dualgrid.png" alt="Some characters scattered throughout a terrain" />
<br/>
<sub>Some humanlike creatures start walking</sub>
</p>

---

If you ever wonder, I changed the theme of the game between the day I started and ended the writing of this post. Bye!