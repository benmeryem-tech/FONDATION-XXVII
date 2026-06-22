window.addEventListener('load', function () {
  var gate = document.getElementById('portal-gate');
  if (!gate) return;

  document.body.classList.add('portal-active');

  var v1 = document.getElementById('portal-v1');

  function closePortal() {
    if (gate.dataset.closed) return;
    gate.dataset.closed = '1';
    gate.classList.add('portal-leaving');
    document.body.classList.remove('portal-active');
    setTimeout(function () { gate.remove(); }, 1700);
  }

  if (v1) {
    v1.addEventListener('timeupdate', function () {
      if (v1.duration && v1.currentTime >= v1.duration - 0.35) {
        closePortal();
      }
    });
    v1.addEventListener('ended', closePortal);
    v1.addEventListener('error', function () { setTimeout(closePortal, 600); });
    v1.play().catch(closePortal);
  } else {
    closePortal();
  }

  var skip = gate.querySelector('.portal-skip');
  if (skip) {
    skip.addEventListener('click', function (e) {
      e.stopPropagation();
      closePortal();
    });
  }

  // Filet de sécurité
  setTimeout(closePortal, 8000);

  // N'afficher qu'une fois par session
  if (sessionStorage.getItem('xxviiPortalSeen')) {
    closePortal();
  } else {
    sessionStorage.setItem('xxviiPortalSeen', '1');
  }
});
