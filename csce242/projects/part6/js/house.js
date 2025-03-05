//csce242/projects/part6/json/house_plant.json

const getPlants = async () => {
  const url =
    "https://evawilson67.github.io/csce242/projects/part6/json/house_plant.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showPlants = async () => {
  const plants = await getPlants();
  const easySection = document.getElementById("easy-section");
  const mediumSection = document.getElementById("medium-section");
  const hardSection = document.getElementById("hard-section");
  

  plants.forEach((plant) => {
    const a = document.createElement("a");
      a.href = plant.link;
      a.classList = "links";

      const section = document.createElement("section");
      section.classList = "segment columns center";
      a.append(section);

      const divImage = document.createElement("div");
      divImage.classList.add("height-center");
      section.append(divImage);

      const img = document.createElement("img");
      img.src = `images/house_images/${plant.image}`;
      divImage.append(img);

      const divInfo = document.createElement("div");
      section.append(divInfo);

      const name = document.createElement("h3");
      name.innerHTML = plant.name;
      divInfo.append(name);

      const summary = document.createElement("p");
      summary.innerHTML = plant.summary;
      divInfo.append(summary);
    
    if (plant.section.toLowerCase() == "easy") {
      easySection.append(a);
    }else if (plant.section.toLowerCase() == "medium") {
      mediumSection.append(a);
    }else if (plant.section.toLowerCase() == "hard") {
      hardSection.append(a);
    }
  });
};

showPlants();
