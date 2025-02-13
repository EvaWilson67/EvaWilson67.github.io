/*
@author Eva Wilson
*/

document.getElementById("arrow-down").onclick = () => {
    document.getElementById("arrow-up").classList.remove("hide");
    document.getElementById("exercise-elements").classList.remove("hide-small");
    document.getElementById("arrow-down").classList.add("hide");
}

document.getElementById("arrow-up").onclick = () => {
    document.getElementById("arrow-down").classList.remove("hide");
    document.getElementById("exercise-elements").classList.add("hide-small");
    document.getElementById("arrow-up").classList.add("hide");
}


document.getElementById("exercise-one").onclick = () => {
    document.getElementById("travelling-exercise").classList.remove("hide");
    document.getElementById("color-exercise").classList.add("hide");
}

document.getElementById("exercise-two").onclick = () => {
    document.getElementById("travelling-exercise").classList.add("hide");
    document.getElementById("color-exercise").classList.remove("hide");
}


//Red script
document.getElementById("btn-red").onclick = () => {
    document
    .querySelector(":root")
    .style.setProperty("--heart-color", "red");
};

//Green script
document.getElementById("btn-green").onclick = () => {
    document
    .querySelector(":root")
    .style.setProperty("--heart-color", "green");
};

//Blue script
document.getElementById("btn-blue").onclick = () => {
    document
    .querySelector(":root")
    .style.setProperty("--heart-color", "blue");
};


document.getElementById("txt-transportation").onkeyup = (event) => {
    const transportation = document.getElementById("txt-transportation").value.toLowerCase().trim();

    if(transportation=="bike"){
        //https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb
        document.getElementById("changeable-image").src="images/bike.jpg";
    }
    else if(transportation=="car"){
        document.getElementById("changeable-image").src="images/car.jpg";
    }
    else if(transportation=="scooter"){
        document.getElementById("changeable-image").src="images/scooter.jpg";
    }
    else if(transportation=="skateboard"){
        document.getElementById("changeable-image").src="images/skateboard.jpg";
    }
    else{
        document.getElementById("changeable-image").src="https://place-hold.it/200";

    }
}