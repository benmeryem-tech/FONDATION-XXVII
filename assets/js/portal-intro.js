window.addEventListener('load', function () {
  var gate = document.getElementById('portal-gate');
  if (!gate) return;

  document.body.classList.add('portal-active');

  var v1 = document.getElementById('portal-v1');
  var openedAt = Date.now();
  var minimumDisplayMs = 5200;
  var safetyCloseMs = 14000;

  function closePortal() {
    if (gate.dataset.closed) return;

    var elapsed = Date.now() - openedAt;
    var remaining = Math.max(0, minimumDisplayMs - elapsed);

    if (remaining > 0) {
      setTimeout(closePortal, remaining);
      return;
    }

    gate.dataset.closed = '1';
    gate.classList.add('portal-leaving');
    document.body.classList.remove('portal-active');
    setTimeout(function () { gate.remove(); }, 1700);
  }

  if (v1) {
    v1.addEventListener('ended', closePortal);
    v1.addEventListener('error', function () { setTimeout(closePortal, minimumDisplayMs); });
    v1.play().catch(function () { setTimeout(closePortal, minimumDisplayMs); });
  } else {
    setTimeout(closePortal, minimumDisplayMs);
  }

  var skip = gate.querySelector('.portal-skip');
  if (skip) {
    skip.addEventListener('click', function (e) {
      e.stopPropagation();
      gate.dataset.closed = '';
      openedAt = Date.now() - minimumDisplayMs;
      closePortal();
    });
  }

  // Filet de sécurité : ferme l'intro si la vidéo reste bloquée.
  setTimeout(closePortal, safetyCloseMs);
});
