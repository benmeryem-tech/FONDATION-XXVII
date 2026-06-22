
(function(){
  const figure = document.querySelector('.institute-mission-figure-section .mission-figure');
  if(!figure || figure.dataset.mirrorReady === 'true') return;
  figure.dataset.mirrorReady = 'true';

  const quadrants = Array.from(figure.querySelectorAll('.mission-quadrant'));
  if(!quadrants.length) return;

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;

  const overlay = document.createElement('div');
  overlay.className = 'tam-mirror-shards';
  overlay.setAttribute('aria-hidden', 'true');
  figure.appendChild(overlay);

  const colors = {
    'mission-quadrant-observer': ['#f6f0ea','#efe6dc','#ffffff'],
    'mission-quadrant-comprendre': ['#b87350','#a96443','#d39872'],
    'mission-quadrant-experimenter': ['#b87350','#a96443','#d39872'],
    'mission-quadrant-anticiper': ['#f0e8df','#e5d8ca','#ffffff']
  };

  function quadrantColors(q){
    for(const k in colors){
      if(q.classList.contains(k)) return colors[k];
    }
    return ['#ffffff','#b87350','#f0e8df'];
  }

  function buildShards(){
    overlay.innerHTML = '';
    const rect = figure.getBoundingClientRect();
    const cols = window.innerWidth < 900 ? 8 : 16;
    const rows = window.innerWidth < 900 ? 6 : 12;
    const total = cols * rows;

    for(let i = 0; i < total; i++){
      const col = i % cols;
      const row = Math.floor(i / cols);
      const w = 100 / cols;
      const h = 100 / rows;
      const centerX = (col + .5) / cols;
      const centerY = (row + .5) / rows;
      const quadrantIndex = (centerY < .5 ? 0 : 2) + (centerX >= .5 ? 1 : 0);
      const palette = quadrantColors(quadrants[quadrantIndex] || quadrants[0]);

      const shard = document.createElement('i');
      shard.className = 'tam-shard';
      shard.style.left = (col * w) + '%';
      shard.style.top = (row * h) + '%';
      shard.style.width = `calc(${w}% + 1px)`;
      shard.style.height = `calc(${h}% + 1px)`;
      shard.style.setProperty('--sx', ((Math.random() - .5) * rect.width * 1.45).toFixed(1) + 'px');
      shard.style.setProperty('--sy', ((Math.random() - .5) * rect.height * 1.35).toFixed(1) + 'px');
      shard.style.setProperty('--sr', ((Math.random() - .5) * 86).toFixed(1) + 'deg');
      shard.style.setProperty('--sd', (Math.random() * .75).toFixed(2) + 's');
      shard.style.background = `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 64%, ${palette[2]})`;
      shard.style.clipPath = Math.random() > .5
        ? 'polygon(0 0, 100% 8%, 88% 100%, 10% 88%)'
        : 'polygon(8% 0, 100% 0, 92% 86%, 0 100%)';
      overlay.appendChild(shard);
    }
  }

  buildShards();

  const replay = () => {
    figure.classList.remove('tam-mirror-replay');
    void figure.offsetWidth;
    figure.classList.add('tam-mirror-replay');
  };

  setTimeout(replay, 200);

  figure.addEventListener('mouseenter', replay);
  figure.addEventListener('focusin', replay);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildShards();
      replay();
    }, 180);
  });
})();
