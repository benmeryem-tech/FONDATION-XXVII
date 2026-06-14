from pathlib import Path

path = Path('index.html')
html = path.read_text(encoding='utf-8')

css = '<link rel="stylesheet" href="assets/css/intro-wire.css">'
js = '<script src="assets/js/intro-controller.js" defer></script>'
intro = '''<div id="intro-gate">
  <video id="intro-video" autoplay muted playsinline preload="auto">
    <source src="grok-video-ace4858f-22f5-4b70-8254-2447f6666adf.mp4" type="video/mp4">
  </video>
  <div class="intro-welcome">Bienvenue à vous</div>
</div>
'''

if css not in html:
    html = html.replace('<link rel="stylesheet" href="assets/css/upgrade.css">', '<link rel="stylesheet" href="assets/css/upgrade.css">\n' + css)
if js not in html:
    html = html.replace('</head>', js + '\n</head>')
if 'id="intro-gate"' not in html:
    html = html.replace('<body>', '<body>\n' + intro, 1)

path.write_text(html, encoding='utf-8')
print('intro gate wired into index.html')
