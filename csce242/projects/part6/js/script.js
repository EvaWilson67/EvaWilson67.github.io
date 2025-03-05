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


