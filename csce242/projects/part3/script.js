


// //key down
// document.getElementById("txt-emotion").onkeyup = (event) => {
//     //const emotion = document.getElementById("txt-emotion").value;
//     // document.getElementById("emotional-message").innerHTML = 
//     // "You are feeling " + event.currentTarget.value;
// }


// const element = document.getElementById('yourElementId');

// if (element) {
//   element.onclick = function() {
//     // Your code here
//   };
// } else {
//   console.error('Element with ID "yourElementId" not found.');
// }

const element = document.getElementById('btn-submit');

if (element) {
    document.getElementById("btn-submit").onclick = () => {
        document.getElementById("submission-response").innerHTML="Submission Sent!";
        // console.log("WOW!");
    };
}




document.getElementById("hidden-2").onmouseover = () => {
    document.getElementById("hidden-2").classList.add("unhidden-title");
    console.log("Fukcs!");
};

document.getElementById("hidden-2").onmouseleave = () => {
    document.getElementById("hidden-2").classList.remove("unhidden-title");
    console.log("WOW!");
};