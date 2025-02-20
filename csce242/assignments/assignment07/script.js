document.getElementById("btn-stairs").onclick = () => {
  const displayLadder = document.getElementById("ladder");
  const climb = document.getElementById("btn-climb");
  const displayPerson = document.getElementById("person");

  let counter = 0;
  let pos = 250;

  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    displayLadder.append(div);
    climb.classList.remove("hidden");
    displayPerson.classList.remove("hidden");
    displayPerson.src = "images/left.png";

    climb.onclick = () => {
      updatePos = setInterval(() => {
        if (pos < 750) {
          if (counter % 2 == 0) {
            counter++;
            pos += 5;
            displayPerson.src = "images/right.png";
            document
              .getElementById("person")
              .style.setProperty("bottom", pos + "px");
            return;
          } else {
            counter++;
            pos += 5;
            displayPerson.src = "images/left.png";
            document
              .getElementById("person")
              .style.setProperty("bottom", pos + "px");
          }
        } else {
          clearInterval(updatePos);
          console.log("cleared");
        }
      }, 300);
    };
  }
};
