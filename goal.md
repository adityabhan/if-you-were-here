# 🌙 If You Were Here — Interactive Romantic Website

## 1. Project Goal

Build a small interactive website as a romantic gesture.

The experience should feel like the visitor is discovering a personal night sky created specifically for her.

### Core concept

The website starts with a short message:

> I wanted to send you something.
> But then I realized...
> some things can't really be sent.

The screen gradually transforms into a night sky containing several clickable stars.

Each star reveals a different personal message, memory, photo, song, or surprise.

The final special star reveals the main romantic message.

---

# 2. Desired User Experience

The visitor should experience the website in the following order:

```text
Opening
   ↓
Intro message
   ↓
Transition into night sky
   ↓
Discover stars
   ↓
Click individual stars
   ↓
Explore messages / memories / media
   ↓
Discover hidden final star
   ↓
Main personal message
   ↓
Ending
```

The experience should feel:

* Personal
* Minimal
* Romantic
* Slightly mysterious
* Interactive
* Not overly cheesy
* Visually calm
* Designed primarily for mobile

---

# 3. Technology Stack

Keep the first version simple.

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### Optional libraries

Avoid libraries initially.

Use:

* CSS animations
* CSS transitions
* JavaScript DOM manipulation
* Web Audio API / HTML audio if required

Libraries can be introduced later only if they provide a clear benefit.

### Hosting

Recommended:

* GitHub Pages

Alternative:

* Netlify
* Vercel

No backend is required for the initial version.

---

# 4. Project Structure

Create the following structure:

```text
if-you-were-here/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   │   ├── photo-1.jpg
│   │   ├── photo-2.jpg
│   │   └── ...
│   │
│   ├── audio/
│   │   └── song.mp3
│   │
│   └── icons/
│
└── README.md
```

Keep personal content separate from the application logic as much as practical.

---

# 5. Phase 1 — Basic Website

## Goal

Create the initial experience without any interactive stars.

### Build

Create:

* Full-screen page
* Dark background
* Centered text
* Subtle fade-in animation
* "Continue" button

### Initial text

```text
I wanted to send you something.

But then I realized...

some things can't really be sent.
```

Button:

```text
look up ↑
```

### Requirements

* Full viewport height
* Responsive
* No scrolling
* Minimal typography
* Slow fade-in
* Button appears after the text

---

# 6. Phase 2 — Transition Into the Night Sky

## Goal

When the user clicks the button, transition from the introductory screen to the night sky.

### Visual design

Background should transition toward:

```text
dark navy / almost black
```

Add:

* Small stars
* Different star sizes
* Slight randomness
* Subtle twinkling
* Optional moon

### Text

Display near the bottom:

```text
I remember you telling me
you like looking at the moon.

So I thought...

maybe I could leave you
a few stars.
```

### Animation

Sequence:

```text
Intro disappears
       ↓
Background darkens
       ↓
Stars appear gradually
       ↓
Moon appears
       ↓
Message fades in
       ↓
Stars become interactive
```

---

# 7. Phase 3 — Create Interactive Stars

## Goal

Allow the visitor to discover different pieces of content.

Create approximately:

```text
6 normal stars
+
1 special final star
```

### Star categories

| Star       | Content                    |
| ---------- | -------------------------- |
| Star 1     | Something I like about you |
| Star 2     | A memory                   |
| Star 3     | Photo                      |
| Star 4     | Song                       |
| Star 5     | Something funny            |
| Star 6     | Something more personal    |
| Final Star | Main message               |

---

# 8. Star Interaction

When the user moves over a star:

### Desktop

* Star becomes brighter
* Slight scale increase
* Glow effect
* Cursor changes to pointer

### Mobile

Use touch interaction.

When clicked/tapped:

```text
Star
 ↓
Small zoom/glow animation
 ↓
Content card appears
```

---

# 9. Content Card

Create a reusable modal/card component.

Example:

```text
┌─────────────────────────────┐
│                             │
│       Something I noticed   │
│                             │
│  You somehow make ordinary  │
│  conversations feel like    │
│  something worth           │
│  remembering.               │
│                             │
│          ✕ close            │
└─────────────────────────────┘
```

### Design

Use:

* Transparent/dark glass effect
* Slight blur
* Rounded corners
* Soft border
* Subtle shadow
* Smooth entrance animation

The card should not feel like a generic website modal.

---

# 10. Phase 4 — Personal Content

Replace placeholder text with real content.

Prepare content for each star before implementing it.

## Star 1 — Compliment

Keep it specific.

Avoid generic:

> You're beautiful.

Prefer something based on an actual characteristic or interaction.

---

## Star 2 — Memory

Use a real memory.

Structure:

```text
I don't know if you remember this...

[describe memory]

But I remember it.
```

---

## Star 3 — Photo

Show one meaningful photo.

Possible interaction:

```text
Star clicked
    ↓
Photo slowly appears
    ↓
Small caption
```

Do not overload the page with photos.

One meaningful photo is better than ten random ones.

---

## Star 4 — Song

Display:

```text
This song reminded me of you.
```

Provide:

* Song title
* Artist
* Play button

Avoid autoplaying audio without user interaction.

---

## Star 5 — Funny Moment

Use something playful.

Example:

```text
A completely unnecessary fact:

I still smile when your name
randomly appears on my screen.
```

Keep this one lighter.

---

## Star 6 — Personal Message

This should be more emotionally honest.

Possible theme:

```text
Something I've been meaning to tell you...
```

Keep it authentic rather than overly poetic.

---

# 11. Phase 5 — Hidden Final Star

This is one of the most important interactions.

Initially, show only six stars.

After the visitor interacts with all six:

```text
Something changed...
```

Then reveal the final star.

Possible text:

```text
There seems to be one star missing...
```

Wait.

Then:

```text
Oh.

There it is.
```

The final star slowly appears.

---

# 12. Final Star Experience

The final star should feel different from the others.

### Visual treatment

Normal stars:

```text
small
subtle
white glow
```

Final star:

```text
larger
stronger glow
slightly warmer appearance
slow pulse
```

When clicked:

```text
Stars fade slightly
        ↓
Camera/viewport slowly zooms toward star
        ↓
Screen transitions
        ↓
Final message appears
```

---

# 13. Final Message

This should contain the most meaningful part of the experience.

Potential structure:

```text
You once told me
you like looking at the moon.

I told you I like looking at the stars.

So I thought I'd leave you
a little piece of my sky.

I couldn't send you the moon.

I couldn't send you a garden.

But I could make you this.

For you. ❤️
```

Replace this with your own writing.

The final message should be personal rather than copied from the example.

---

# 14. Phase 6 — Constellation

Optional but highly recommended.

After the final message, the stars can gradually connect with thin lines.

Example:

```text
     ⭐
       \
        ⭐
       /  \
     ⭐    ⭐
       \  /
        ⭐
```

The constellation could form:

* A heart
* Her initial
* Your initials
* A custom symbol

The constellation should only become visible near the end.

---

# 15. Phase 7 — Moon Interaction

Add a moon to the sky.

Possible interaction:

```text
Click moon
     ↓
Moon grows slightly
     ↓
Message appears
```

Example:

> You said you liked watching the moon.

Then:

> So obviously I had to give it a cameo.

This can provide a lighter moment before the final emotional section.

---

# 16. Phase 8 — Music

Optional.

Do not autoplay music immediately.

Instead, provide a subtle control:

```text
♫
```

or:

```text
play our song
```

### Requirements

* User must explicitly start playback
* Volume should start low
* Provide pause control
* Remember playback state during the session

Music should enhance the experience rather than dominate it.

---

# 17. Phase 9 — Micro Animations

Add subtle animations only.

### Stars

* Twinkle
* Glow
* Slight movement

### Cards

* Fade in
* Slight upward movement
* Fade out

### Moon

* Slow glow

### Final star

* Pulse
* Glow
* Slight movement

### Background

Optional:

* Very slow gradient movement
* Extremely subtle particles

Avoid excessive animations.

The website should feel calm.

---

# 18. Phase 10 — Mobile Design

Mobile should be the primary target.

Test on:

* Android Chrome
* iPhone Safari
* Desktop Chrome
* Desktop Edge

### Requirements

* No horizontal scrolling
* Text remains readable
* Stars are large enough to tap
* Cards fit within the viewport
* Buttons have adequate touch area
* No hover-dependent functionality

Minimum touch target:

```text
~44px
```

---

# 19. Phase 11 — Performance

Optimize personal assets.

### Images

Before adding photos:

* Resize them
* Compress them
* Prefer WebP
* Avoid unnecessarily large files

### Audio

Keep the audio file reasonably small.

### JavaScript

Avoid unnecessary libraries.

The entire website should load quickly even on mobile data.

---

# 20. Phase 12 — Privacy

Because this is a personal website:

Do not include:

* Private credentials
* Personal addresses
* Phone numbers
* Sensitive information
* Private API keys

If photos are included, remember that anything hosted publicly can potentially be accessed by someone who obtains the URL.

For extra privacy, avoid putting highly sensitive personal content on a public site.

---

# 21. Phase 13 — Deployment

Recommended deployment:

## GitHub Pages

Steps:

```text
Create GitHub repository
        ↓
Push project
        ↓
Enable GitHub Pages
        ↓
Select main branch
        ↓
Deploy
        ↓
Test public URL
```

Example final URL:

```text
https://username.github.io/if-you-were-here/
```

---

# 22. Phase 14 — Final Testing

Before sending the link, test the entire experience from beginning to end.

## Functional checklist

* [ ] Intro loads correctly
* [ ] Intro animation works
* [ ] Continue button works
* [ ] Night sky loads
* [ ] Stars appear correctly
* [ ] Every star is clickable
* [ ] Every star opens the correct content
* [ ] Cards close correctly
* [ ] Photos load
* [ ] Music works
* [ ] Final star remains hidden initially
* [ ] Final star appears after required interactions
* [ ] Final message works
* [ ] Website works after refreshing
* [ ] Website works on mobile
* [ ] Website works without console errors

---

# 23. Content Checklist

Before deployment, prepare:

* [ ] Opening message
* [ ] 6 star messages
* [ ] 1–3 meaningful photos
* [ ] Song
* [ ] One funny message
* [ ] One personal/vulnerable message
* [ ] Final message
* [ ] Optional constellation design
* [ ] Optional moon message

---

# 24. Suggested Development Order

Do not build everything at once.

Implement in this order:

```text
1. Basic HTML
       ↓
2. Intro screen
       ↓
3. Night sky
       ↓
4. Random/static stars
       ↓
5. Clickable stars
       ↓
6. Content modal
       ↓
7. Personal content
       ↓
8. Hidden final star
       ↓
9. Final message
       ↓
10. Photos
       ↓
11. Music
       ↓
12. Constellation
       ↓
13. Animations
       ↓
14. Mobile optimization
       ↓
15. Deployment
```

---

# 25. Definition of Done

The project is complete when:

> Someone can open the link on their phone, experience a short introduction, enter a beautiful interactive night sky, discover personal messages by clicking stars, unlock a hidden final star, and receive a meaningful final message.

The website should feel less like:

> "I made you a webpage."

And more like:

> "I made you a little place on the internet."

---

# 26. Future Ideas

If the basic version works well, consider adding:

* A shooting star that appears randomly
* A secret clickable moon
* A constellation based on an important date
* A countdown to your next meeting
* A tiny interactive envelope
* A "replay the night" button
* A second hidden message unlocked by a specific interaction
* A personalized cursor
* A subtle typing animation
* A "goodnight" mode
* A changing sky based on the actual time
* A secret URL/path containing another message

Do not add all of these.

The goal is **emotional impact, not feature count**.

---

# 27. Recommended Final Structure

The final experience should roughly feel like:

```text
                 START
                   │
                   ▼
          ┌─────────────────┐
          │  Intro message  │
          └────────┬────────┘
                   │
                   ▼
              NIGHT SKY
                   │
          ┌────────┴────────┐
          │                 │
       ⭐ ⭐ ⭐           ⭐ ⭐ ⭐
          │                 │
          └────────┬────────┘
                   │
             All discovered
                   │
                   ▼
            Hidden ⭐ appears
                   │
                   ▼
             Final message
                   │
                   ▼
              CONSTELLATION
                   │
                   ▼
              ❤️ THE END
```

---

## Core Principle

**Make the website tell a story.**

Don't think of it as a collection of animations.

Think:

> **What should she feel at each stage?**

```text
Curiosity
   ↓
Discovery
   ↓
Amusement
   ↓
Recognition
   ↓
Warmth
   ↓
Surprise
   ↓
Emotion
```

If the emotional progression works, even a technically simple website can become a very memorable gesture.
