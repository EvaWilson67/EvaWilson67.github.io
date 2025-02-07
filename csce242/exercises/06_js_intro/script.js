// alert("hello");
// console.log("hi me");

//Do stuff when button clicked
//Parenthesis mean NOW**
document.getElementById("btn-click-me").onclick = () => {
  console.log("Wow!");
};

//You need to only use const, do lets when it is non constant like 4 loops and shi...
//If we need to change more, we can call it a const
document.getElementById("result").innerHTML = "Hi <strong> you </strong>";

document.getElementById("btn-color").onclick = () => {
  console.log("Hello World");

  const colorP = document.getElementById("color-p");
  colorP.innerHTML = "Goodbye";
  colorP.classList.toggle("sad");
};

//Button Happy
document.getElementById("btn-happy").onclick = () => {
  const colorMe = document.getElementById("color-text");
  colorMe.classList.remove("hidden"); //added from portia
  colorMe.classList.add("happy");
  colorMe.innerHTML = "Good Times";
};

//Button Happy
document.getElementById("btn-sad").onclick = () => {
  const colorMe = document.getElementById("color-text");
  colorMe.classList.remove("hidden"); //added from portia

  colorMe.classList.remove("happy"); //Gets rid weird happy thing...

  colorMe.classList.add("sad");
  colorMe.innerHTML = "Bad Times";
};

document.getElementById("btn-clear").onclick = () => {
  document.getElementById("color-text").classList.add("hidden");
};

// document.getElementById("txt-emotion").onkeydown = () =>{
//     // console.log("woah");
//    // const emotion = document.getElementById("txt-emotion").value;
//    }

document.getElementById("txt-emotion").onkeyup = (event) => {
  const emotion = event.currentTarget;
  //   console.log(emotion);
  document.getElementById("emotional-message").innerHTML =
    "You are feeling " + event.currentTarget.value;
};
