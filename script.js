var h1=document.querySelector('h1')
var btn=document.querySelector('button')


btn.addEventListener('click', function(){
    h1.innerHTML='Changing user'
  setTimeout(function(){
    h1.innerHTML=' Hello I am Ahmad'
  },2000)
})
