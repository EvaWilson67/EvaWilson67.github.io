/*Navigation*/
const navigation = document.getElementById("toggle-nav");
// console.log(navigation);
if (navigation) {
  navigation.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
} else {
  console.log("Button not found!");
}


