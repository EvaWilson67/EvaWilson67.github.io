//For future contacting...
// //key down
// document.getElementById("txt-emotion").onkeyup = (event) => {
//     //const emotion = document.getElementById("txt-emotion").value;
//     // document.getElementById("emotional-message").innerHTML =
//     // "You are feeling " + event.currentTarget.value;
// }

/*Navigation*/
const navigation = document.getElementById("toggle-nav");
console.log(navigation);
if (navigation) {
  navigation.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
} else {
  console.log("Button not found!");
}

/*Gardening Stuff*/
const garden = document.getElementById("hidden-2");
if (garden) {
  document.getElementById("hidden-2").onmouseover = () => {
    document.getElementById("hidden-2").classList.add("unhidden-title");
  };

  document.getElementById("hidden-2").onmouseleave = () => {
    document.getElementById("hidden-2").classList.remove("unhidden-title");
  };
}


/*Contact Page Submit information*/
const element = document.getElementById("btn-submit");
if (element) {
  document.getElementById("btn-submit").onclick = () => {
    document.getElementById("submission-response").innerHTML =
      "Submission Sent!";
  };
}
