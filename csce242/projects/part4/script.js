//For future contacting...
// //key down
// document.getElementById("txt-emotion").onkeyup = (event) => {
//     //const emotion = document.getElementById("txt-emotion").value;
//     // document.getElementById("emotional-message").innerHTML =
//     // "You are feeling " + event.currentTarget.value;
// }

const element = document.getElementById("btn-submit");
if (element) {
  document.getElementById("btn-submit").onclick = () => {
    document.getElementById("submission-response").innerHTML =
      "Submission Sent!";
  };
}

// // document.getElementById("txt-box").onkeyup = (event) => {
// //   this.style.height = this.scrollHeight + "px";
// // };

// document.getElementById("hidden-2").onmouseover = () => {
//   document.getElementById("hidden-2").classList.add("unhidden-title");
// };

// document.getElementById("hidden-2").onmouseleave = () => {
//   document.getElementById("hidden-2").classList.remove("unhidden-title");
// };

// document.getElementById("toggle-nav").onclick = () => {
//   document.getElementById("nav-items").classList.toggle("hide");
//   // document.getElementById("nav-items").classList.remove("hidden");
//   console.log("FUCKV");
// }

// const navigation = document.getElementById("toggle-nav");
// if (navigation) {
//   document.getElementById("toggle-nav").onclick = () => {
//     // document.getElementById("submission-response").innerHTML =
//     //   "Submission Sent!";
//     // document.getElementById("nav-items").classList.toggle("hide");
//     console.log("FUCKV");
//   };
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const navigation = document.getElementById("toggle-nav");
//   if (navigation) {
//     navigation.onclick = () => {
//       console.log("FUCKV");
//     };
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const button = document.getElementById("work-please");
//   console.log(button); // This will log the button element if it is found
//   if (button) {
//     button.onclick = () => {
//       console.log("FUCKV");
//     };
//   } else {
//     console.log("Button not found!");
//   }
// });

// const button = document.getElementById("work-please");
// console.log(button); // This will log the button element if it is found
// if (button) {
//   button.onclick = () => {
//     console.log("FUCKV");
//   };
// } else {
//   console.log("Button not found!");
// }

const navigation = document.getElementById("toggle-nav");
console.log(navigation);
if (navigation) {
  navigation.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide");
    console.log("FUCKV");
  };
} else {
  console.log("Button not found!");
}

// document.getElementById("nav-items").onclick = () => {
//   // document.getElementById("nav-items").classList.toggle("hidden");
//   // document.getElementById("nav-items").classList.remove("hidden");
//   console.log("FUCKV");
// }
