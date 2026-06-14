from pathlib import Path
p=Path('index.html')
html=p.read_text(encoding='utf-8')
start=html.find('<section class="section" id="page15">')
end=html.find('<section class="section" id="page16">')
if start==-1 or end==-1 or end<=start:
    raise SystemExit('page15/page16 boundary not found')
new='''<section class="section institute-missions-section" id="page15"><div class="page-num">Page 15</div><h2 class="section-title">XXVII Future of Art Institute</h2><p class="lead section-intro">Un laboratoire d’observation, de compréhension et d’expérimentation consacré à l’art, à l’éducation et à la transmission.</p><div class="mission-editorial-grid"><article class="mission-editorial-card"><span>1</span><strong>Observer</strong><p>Analyser les évolutions de l’art, des pratiques culturelles et des nouveaux publics.</p></article><article class="mission-editorial-card"><span>2</span><strong>Comprendre</strong><p>Produire des études et des repères sur l’éducation artistique, l’inclusion et la transmission.</p></article><article class="mission-editorial-card"><span>3</span><strong>Anticiper</strong><p>Identifier les grandes tendances culturelles, sociales et technologiques.</p></article><article class="mission-editorial-card"><span>4</span><strong>Expérimenter</strong><p>Imaginer et tester des formats innovants avec des artistes, écoles et partenaires.</p></article></div><div class="divider"></div><div class="brown"><strong>Appel à projets</strong><p>La Fondation XXVII souhaite lancer une initiative dédiée à la détection, à l’accompagnement et à la valorisation des jeunes talents artistiques, avec une attention particulière portée aux enfants, aux jeunes créateurs et aux artistes émergents.</p></div></section>'''
html=html[:start]+new+html[end:]
p.write_text(html,encoding='utf-8')
print('OK page15 converted to editorial missions layout')
