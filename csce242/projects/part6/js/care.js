//https://evawilson67.github.io/csce242/projects/part6/json/care.json

const getCare = async () => {
    const url =
      "https://evawilson67.github.io/csce242/projects/part6/json/care.json";
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
};
  
const showCare = async()=>{
    const careInstruction = await getCare();
    const careSection = document.getElementById("care-instructions");
  
    careInstruction.forEach((care) => {
        const section = document.createElement("section");
        section.classList = "columns care-box center";
        careSection.append(section);

        const divImage = document.createElement("div");
        divImage.classList="idea-img";
        section.append(divImage);

        const img = document.createElement("img");
        img.src=`images/care_images/${care.image}`;
        divImage.append(img);

        const divSummary = document.createElement("div");
        divSummary.classList="description";
        section.append(divSummary);
        
        const h3 = document.createElement("h3");
        h3.innerHTML=care.name;
        divSummary.append(h3);

        const p = document.createElement("p");
        p.innerHTML=care.summary;
        divSummary.append(p);


    });
}

showCare();