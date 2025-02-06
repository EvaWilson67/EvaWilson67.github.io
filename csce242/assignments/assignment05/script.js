

document.getElementById("hello-grid").onclick = () =>{
    //https://stackoverflow.com/questions/41764061/adding-text-to-an-existing-text-element-in-javascript-via-dom
    document.getElementById("hello-grid").innerHTML+="<p>hello</p>";
}

document.getElementById("txt-color").onchange = (e) => {
    //document.getElementById("ball").style.setProperty("background-color", e.target.value);
    document.querySelector(":root").style.setProperty("--star-color", e.target.value);
}

//changeable-image
const img = document.getElementById("changeable-image");
img.addEventListener('click', function(){
    // Append a timestamp to force a new image to load... ONLINE
    img.src = `https://picsum.photos/200?random=${Date.now()}`;
})
