//changes to nav bar
// let button = document.querySelector('.bottom-banner-left');
//     button.addEventListener('click', function(){
//         button.style.background = 'gold';
//     })
// for the home-page header-right class 
   let head = document.querySelector('.header-right');
   head.addEventListener('dblclick', function (e) {
    head.classList.toggle('large');
  });

//used queryselector all with forEach to change the color 
 let button = document.querySelectorAll('.button');
 isGold = false;

 button.forEach(element => {
     if(isGold){
        element.style.color = '@straw';
        isGold = false;
     }
     else{
        element.style.color = 'gold';
        isGold =true;
     }
 });
