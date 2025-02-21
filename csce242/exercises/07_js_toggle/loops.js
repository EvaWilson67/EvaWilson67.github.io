document.getElementById("btn-display").onclick = () => {
  const startNum = parseInt(document.getElementById("txt-start").value);
  const endNum = parseInt(document.getElementById("txt-end").value);
  const displayArea = document.getElementById("start-end-display");
  const errorDisplay = document.getElementById("error-num-order");
  errorDisplay.innerHTML = ""; //clear out any previous errors

  const favMessageP = document.getElementById("fav-message");
  favMessageP.innerHTML = "";

  if (endNum < startNum) {
    errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`;
    return; //don't do anything else if you already have an error
  }

  for (let i = startNum; i < endNum; i++) {
    const li = document.createElement("li");
    li.innerHTML = i;
    displayArea.append(li);

    li.onclick = () => {
      // console.log(i);
      favMessageP.innerHTML = `you clicked on ${i}`;
    };
  }
};

let count = 0;
let updateCount;

document.querySelector("#btn-count").onclick = (event) => {
  if (event.currentTarget.innerHTML.toLowerCase() == "start") {
    event.currentTarget.innerHTML = "Stop";
    updateCount = setInterval(() => {
      // console.log("HI");
      count++;
      document.querySelector("#count-display").innerHTML = count;
    }, 500);
  } else {
    event.currentTarget.innerHTML = "Start";
    clearInterval(updateCount);
  }
};

document.querySelector("#btn-reset").onclick = (event) => {
  count = 0;
  clearInterval(updateCount);
  document.querySelector("#count-display").innerHTML = "";
  document.querySelector("#btn-count").innerHTML = "Start";
};

document.querySelector("#btn-toys").onclick = (event) => {
  //   const toys = [];
  //   toys[0] = "Barbie";
  //   toys[1] = "Ninja Figure";
  //   toys[2] = "Popsicle???";

  const toys = ["ball", "barbie", "mini car", "doll house", "furby"];

  //   document.getElementById("display-toys").innerHTML = toys;
  event.currentTarget.disabled = true;
  //   for (let i = 0; i < toys.length; i++) {
  //     console.log(toys[i]);
  //   }

  //   toys.forEach((toy, i) => {
  //     console.log(`${i+1}. ${toy}`);
  //   });

  const ul = document.createElement("ul");
  document.getElementById("display-toys").append(ul);

  toys.forEach((toy, i) => {
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = `${i + 1}. ${toy}`;
  });
};

//loop through an associative array
document.getElementById("btn-show-toy-desc").onclick = () => {
  const toys = [];
  toys["ball"] = "a ball";
  toys["barbie"] ="a doll";
  toys[ "mini car"] = "a car";

  const section = document.getElementById("display-toy-desc");


  for(let toy in toys){
    const p = document.createElement("p");
    section.append(p);
    p.innerHTML = `${toy}: ${toys[toy]}`;
    p.onclick = () =>{
        document.getElementById("toy-message").innerHTML=`Best ${toy} Ever. ${toys[toy]}`;
    }
  }


};
