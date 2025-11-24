var h1 = document.querySelector("h1");
var btn = document.querySelector("button");

// btn.addEventListener('click', function(){
//     h1.innerHTML='Changing user'
//   setTimeout(function(){
//     h1.innerHTML=' Hello I am Ahmad'
//   },2000)
// })

// let a=0

//  var b= setInterval(function(){
//     console.log(a)
//     a++
//   },100)

//   setTimeout(()=>{
// clearInterval(b)

// },5000)

let a = 0;
btn.addEventListener("click", function () {
  var b = setInterval(function () {
    h1.innerHTML = a;
    a++;
  }, 100);

  setTimeout(() => {
    clearInterval(b);
  }, 5000);
});
