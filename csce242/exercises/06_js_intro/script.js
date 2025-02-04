// alert("hello");
// console.log("hi me");


//Do stuff when button clicked
//Parenthesis mean NOW**
document.getElementById("btn-click-me").onclick = () =>{
    console.log("Wow!");
};


//You need to only use const, do lets when it is non constant like 4 loops and shi...
//If we need to change more, we can call it a const
document.getElementById("result").innerHTML="Hi <strong> you </strong>";

document.getElementById("btn-color").onclick = () =>{
    console.log("Hello World");

    const colorP = document.getElementById("color-p");
    colorP.innerHTML="Goodbye";


    colorP.classList.toggle("sad");

}

