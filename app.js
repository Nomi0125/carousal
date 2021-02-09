// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   if(slideIndex < 1 ){ slideIndex = slides.length;}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// var prev = document.querySelector('.prev')
// prev.addEventListener('click', ()=> {
//     console.log("previes")
//     slideIndex--
//     showSlides()
// } )

// ---------------------manual------------
var slideIndex = 1;
showSlides(slideIndex)
function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

setInterval(function plusSlides() {
  showSlides(slideIndex += 1);
}, 3000)