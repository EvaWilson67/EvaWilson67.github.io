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

    if(plant.type.tolowercase()=="vegetable"){
      vegetablesSection.append(a);
    }
    else if(plant.type.tolowercase()=="fruit"){
      fruitsSection.append(a);
    }
    else if(plant.type.tolowercase()=="herb"){
      herbsSection.append(a);
    }
  });
};
