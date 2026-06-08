from pathlib import Path
p = Path('index.html')
html = p.read_text(encoding='utf-8')
old = '<div class="cta-row"><a class="btn" href="#page3">Découvrir la vision</a><a class="btn alt" href="#galerie">Voir la galerie</a><a class="btn alt" href="assets/pdf/Fondation_XXVII_v3_sans_derniere_page.pdf" target="_blank" rel="noopener">Télécharger le dossier PDF</a></div><div class="logo-showcase hero-video-showcase"><video class="hero-logo-video" autoplay muted loop playsinline preload="metadata" poster="grok-image-b3504fb1-696f-4ca2-b0f3-4447067c842b%20(1).jpg" aria-label="Vidéo Fondation XXVII"><source src="grok-video-b3504fb1-696f-4ca2-b0f3-4447067c842b.mp4" type="video/mp4">Votre navigateur ne peut pas lire cette vidéo.</video></div>'
if old not in html:
    raise SystemExit('target block not found')
html = html.replace(old, '', 1)
p.write_text(html, encoding='utf-8')
print('OK removed hero CTA buttons and hero video')
