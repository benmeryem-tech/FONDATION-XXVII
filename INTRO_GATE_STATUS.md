# État intro gate — Fondation XXVII

## Commits préparatoires

- `6411306` — styles de l'intro vidéo plein écran
- `cb8f3d2` — patch d'intégration documenté
- `d3cbb35` — snippet loader HTML
- `b55a2b5` — snippet loader texte
- `ee6f90b` — stylesheet de câblage CSS

## Fichiers créés

- `assets/css/intro-gate.css`
- `assets/css/intro-wire.css`
- `assets/js/intro-loader.html`
- `assets/js/intro-loader.txt`
- `INTRO_GATE_PATCH.md`

## À connecter dans index.html

Le site aura l'intro complète quand `index.html` chargera :

```html
<link rel="stylesheet" href="assets/css/intro-wire.css">
```

et contiendra juste après `<body>` :

```html
<div id="intro-gate">
  <video id="intro-video" autoplay muted playsinline preload="auto">
    <source src="grok-video-ace4858f-22f5-4b70-8254-2447f6666adf.mp4" type="video/mp4">
  </video>
  <div class="intro-welcome">Bienvenue à vous</div>
</div>
```

## Effet attendu

- vidéo d'entrée plein écran
- message street art : `Bienvenue à vous`
- disparition premium par fondu, flou et révélation du site
- fallback automatique après 14 secondes
