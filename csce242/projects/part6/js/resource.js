//https://evawilson67.github.io/csce242/projects/part6/json/resource.json

const getResources = async () => {
  const url =
    "https://evawilson67.github.io/csce242/projects/part6/json/resource.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showResources = async () => {
  const resources = await getResources();
  const resouceSection = document.getElementById("resouce-columns");

  console.log("1");
  resources.forEach((resource) => {
    console.log("9");

    const a = document.createElement("a");
    a.href = resource.link;
    a.classList = "unit center links";
    resouceSection.append(a);

    const section = document.createElement("section");
    section.classList = "unit-content";
    a.append(section);

    const name = document.createElement("h4");
    name.innerHTML=resource.name;
    section.append(name);

    const img = document.createElement("img");
    img.src=`images/resource_images/${resource.image}`;
    section.append(img);

    const p = document.createElement("p");
    p.innerHTML=resource.summary;
    section.append(p);
  });
};

showResources();
