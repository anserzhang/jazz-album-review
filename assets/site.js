/* Jazz Album Review · 主题切换（与各专辑 review 页共用 localStorage 键 mavis-theme） */
(function(){
  var root=document.documentElement, btn=document.getElementById('themeBtn');
  if(!btn) return;
  var saved=null;
  try{saved=localStorage.getItem('mavis-theme')}catch(e){}
  if(saved){root.setAttribute('data-theme',saved);}
  btn.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('mavis-theme',next)}catch(e){}
  });
})();
