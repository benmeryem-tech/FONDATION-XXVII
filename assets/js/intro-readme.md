# Intro controller

The intro system is now split into three safe assets:

- `assets/css/intro-gate.css` — fullscreen visual layer and transition
- `assets/css/intro-wire.css` — CSS import helper
- `assets/js/intro-controller.js` — automatic closing controller

To activate the intro on the homepage, `index.html` must load:

```html
<link rel="stylesheet" href="assets/css/intro-wire.css">
<script src="assets/js/intro-controller.js" defer></script>
```

and place this block right after `<body>`:

```html
<div id="intro-gate">
  <video id="intro-video" autoplay muted playsinline preload="auto">
    <source src="grok-video-ace4858f-22f5-4b70-8254-2447f6666adf.mp4" type="video/mp4">
  </video>
  <div class="intro-welcome">Bienvenue à vous</div>
</div>
```
