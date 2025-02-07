

document.getElementById("hello-grid").onclick = () => {
  //https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom
  document.getElementById("hello-grid").innerHTML += "<p>hello</p>";
};



//portiaportia.github.io/csce242-fall2024/exercises/07_js_nav/index.html
document.getElementById("txt-color").onchange = (e) => {
  document
    .querySelector(":root")
    .style.setProperty("--star-color", e.target.value);
};

document.getElementById("image-change").onclick = () => {
  const img = document.getElementById("changeable-image");
  https://stackoverflow.com/questions/1077041/refresh-image-with-a-new-one-at-the-same-url
  img.src="https://picsum.photos/200?" + new Date().getTime();
};
