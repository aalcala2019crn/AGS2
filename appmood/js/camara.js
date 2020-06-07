var contingut=document.getElementById('contingut');
var imatge=document.getElementsByTagName('img');
var desenfoque=document.getElementById('blur');


  contingut.addEventListener('change', canvia);

function canvia(){
  imatge[0].src=URL.createObjectURL(event.target.files[0]);
  imatge[1].src=URL.createObjectURL(event.target.files[1]);
}
