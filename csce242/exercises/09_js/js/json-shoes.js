const getShoes = async () => {
  const url = "https://portiaportia.github.io/json/shoes.json";

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showShoes = async () => {
  const shoes = await getShoes();
  //   console.log(shoes);
    const shoesSection = document.getElementById("shoes-section");

  shoes.forEach((shoe)=>{
    const section = document.createElement("section");
    shoesSection.append(section);
    const h3 = document.createElement("h3");
    h3.innerHTML = shoe.name;
    section.append(h3);

    const p = document.createElement("p");
    section.append(p);
    p.innerHTML=`Brand: ${shoe.brand}`;

    const ul = document.createElement("ul");
    section.append(ul);

    shoe.reviews.forEach((review)=>{
        const li = document.createElement("li");
        li.append(review);
        ul.append(li);
    });

    // section.innerHTML = `<h3>${shoe.name}</h3>`
    // const name =  document.createElement("h3")
    // name.innerHTML = shoe.name;
    // section.append(name);
    
    // const brand =  document.createElement("h5")
    // brand.innerHTML = shoe.name;
    // section.append(brand);

  });
};

showShoes();
