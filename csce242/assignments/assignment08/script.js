window.onload = function () {
  // your code here
  // console.log("Page loaded");

  // const toys = [];
  // toys["ball"] = "An item to throw";

  const persons = [];
  persons["Happy Birthday"] = "birthday";
  persons["Crazy Clown"] = "clown";
  persons["It's Raining"] = "rain";
  persons["Quiet Time"] = "read";
  persons["Working Hard"] = "shovel";
  persons["Working from Home"] = "work";

  const section = document.getElementById("display-person-title");
  const displayPerson = document.getElementById("popup-box");

  const closeButton = document.getElementById("close");

  for (let person in persons) {
    const p = document.createElement("p");
    section.append(p);
    p.innerHTML = `${person}`;
    p.onclick = () => {
      displayPerson.classList.remove("hidden");
      document.getElementById("person-title").innerHTML = `${person}`;
      document.getElementById("person-image").src =
        "images/" + persons[person] + ".jpg";

      closeButton.onclick = () => {
        displayPerson.classList.add("hidden");
      };
    };
  }
};
