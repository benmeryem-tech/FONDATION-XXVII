fetch('assets/html/intro-gate-snippet.html')
  .then(function(response){ return response.text(); })
  .then(function(markup){
    document.body.insertAdjacentHTML('afterbegin', markup);
    var script = document.createElement('script');
    script.src = 'assets/js/intro-controller.js';
    script.defer = true;
    document.body.appendChild(script);
  })
  .catch(function(){
    console.warn('Intro gate could not be loaded.');
  });
