/*Gardening Stuff*/
// const garden = document.getElementById("hidden-2");
// if (garden) {
//   document.getElementById("hidden-2").onmouseover = () => {
//     document.getElementById("hidden-2").classList.add("unhidden-title");
//   };

//   document.getElementById("hidden-2").onmouseleave = () => {
//     document.getElementById("hidden-2").classList.remove("unhidden-title");
//   };
// }

// /https://evawilson67.github.io/csce242/projects/part6/json/garden.json

const getPlants = async () => {
  const url =
    "https://evawilson67.github.io/csce242/projects/part6/json/garden.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showPlants = async () => {
  const plants = await getPlants();
  const vegetablesSection = document.getElementById("vegetables");
  const fruitsSection = document.getElementById("fruits");
  const herbsSection = document.getElementById("herbs");
  const flowersSection = document.getElementById("flowers");

  plants.forEach((plant) => {
    const a = document.createElement("a");
    a.href = plant.link;
    a.classList = "links";

    const section = document.createElement("section");
    section.classList = "node";
    a.append(section);

    const img = document.createElement("img");
    img.src = `images/garden_images/${plant.image}`;
    section.append(img);

    const div = document.createElement("div");
    div.classList="hidden-title title-container";
    section.append(div);

    const name = document.createElement("h4");
    name.innerHTML = plant.name;
    div.append(name);

    if(plant.type.toLowerCase()=="vegetable"){
      vegetablesSection.append(a);

    }
    else if(plant.type.toLowerCase()=="fruit"){
      fruitsSection.append(a);
    }
    else if(plant.type.toLowerCase()=="herb"){
      herbsSection.append(a);
    }
    else if(plant.type.toLowerCase()=="flower"){
      flowersSection.append(a);

    }

    a.addEventListener('mouseover', () => {
      //document.getElementById("hidden-2").classList.add("unhidden-title");
      div.classList.add("unhidden-title");
      div.classList.remove("hidden-title");

    });
  
    a.addEventListener('mouseout', () => {
      // element.classList.remove('hover-effect-js');
      div.classList.remove("unhidden-title");
      div.classList.add("hidden-title");

      

    });
  });
};

showPlants();