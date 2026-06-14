# Patch intro vidéo — Fondation XXVII

Ce patch relie l'intro vidéo plein écran au site.

## 1. Ajouter dans `<head>` après `assets/css/upgrade.css`

```html
<link rel="stylesheet" href="assets/css/intro-gate.css">
```

## 2. Ajouter juste après `<body>`

```html
<div id="intro-gate">
  <video id="intro-video" autoplay muted playsinline preload="auto">
    <source src="grok-video-ace4858f-22f5-4b70-8254-2447f6666adf.mp4" type="video/mp4">
  </video>
  <div class="intro-welcome">Bienvenue à vous</div>
</div>
```

## 3. Ajouter avant `</body>`

```html
<script>
document.addEventListener('DOMContentLoaded',function(){
  var g=document.getElementById('intro-gate');
  if(!g)return;
  var v=document.getElementById('intro-video');
  document.body.classList.add('intro-active');
  function closeIntro(){
    g.classList.add('intro-leaving');
    document.body.classList.remove('intro-active');
    setTimeout(function(){g.remove();},1500);
  }
  if(v){
    v.addEventListener('ended',closeIntro);
    v.addEventListener('error',function(){setTimeout(closeIntro,1200);});
  }
  setTimeout(closeIntro,14000);
});
</script>
```

## Effet attendu

- vidéo plein écran au chargement du site
- texte street art : `Bienvenue à vous`
- disparition premium avec fondu et flou
- révélation automatique du site
