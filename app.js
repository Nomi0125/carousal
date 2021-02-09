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
// setInterval(, 1000)
function plusSlides(n) {
  showSlides(slideIndex += n);
}


// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  console.log('chal raha hai')
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      // console.log(slides[i])
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
  // setInterval(showSlides(slideIndex), 1000)
}
