window.addEventListener('load',function(){
  var gate=document.getElementById('intro-gate');
  if(!gate)return;
  var video=document.getElementById('intro-video');
  document.body.classList.add('intro-active');
  function closeIntro(){
    if(gate.dataset.closed)return;
    gate.dataset.closed='1';
    gate.classList.add('intro-leaving');
    document.body.classList.remove('intro-active');
    setTimeout(function(){gate.remove();},1500);
  }
  if(video){
    video.addEventListener('ended',closeIntro);
    video.addEventListener('error',function(){setTimeout(closeIntro,1200);});
  }
  setTimeout(closeIntro,14000);
});
