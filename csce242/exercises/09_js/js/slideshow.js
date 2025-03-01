window.onload = () => {
  setInterval(() => {
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    // console.log(currentSlide);
    let nextSlide = currentSlide.nextElementSibling;
    // console.log(nextSlide);

    // console.log(nextSlide);

    if(nextSlide==null){
        nextSlide = document.querySelector("#slideshow :first-child");
    }
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");


    // console.log("hi");
    // let currentSlide = document.querySelector('#slideshow:not(.hidden)');

    // // If there is a current slide, get the next sibling
    // if (currentSlide) {
    //   let nextSlide = currentSlide.nextElementSibling;

    //   // Log both the current slide and the next slide
    //   console.log('Current slide:', currentSlide);
    //   console.log('Next slide:', nextSlide);

    // }
  }, 1000);
};
