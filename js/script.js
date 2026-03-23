const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', function(){
  console.log("დაჭერა");
  menu.classList.toggle('active');

});