

class Dog{
  constructor(title, breed, color, age, size, pic){
    this.title=title;
    this.breed=breed;
    this.color=color;
    this.age=age;
    this.size=size;
    this.pic=pic;
  }


  get item(){
    const dogSection = document.createElement("section");
    dogSection.classList.add("dog");

    const heading = document.createElement("h3");
    heading.innerText = this.title;
    dogSection.appendChild(heading);
    
    const infoList = document.createElement("ul");
    dogSection.appendChild(infoList);
    infoList.appendChild(this.listItem(this.breed));
    infoList.appendChild(this.listItem(this.color));
    infoList.appendChild(this.listItem(`Age : ${this.age}`));
    infoList.appendChild(this.listItem(this.size));

    dogSection.appendChild(this.picture(this.pic));
    return dogSection;
  }


  listItem(info){
    const liItem = document.createElement("li");
    liItem.innerText = info;
    return liItem;
  }

  picture(pic){
    const picItem = document.createElement("img");
    picItem.src="images/" + pic;
    return picItem;
  }
}


window.onload = () => {
  let dogs = [];
  let dogList = document.getElementById("dog-list");
  dogs.push(new Dog("Pippin", "Asshole", "Brown", 2, "Small", "Chichuahua.png"));
  dogs.push(new Dog("Samsung", "IDK", "blonde", 8, "large", "Mutt.png"));

  dogs.push(new Dog("My.Fluffy Pants", "Cat", "Orange and White", 1, "Medium", "Cat.png"));

  for(let i in dogs){
    // console.log(`Dog:${dogs[i].title}, ${dogs[i].breed}`);
    dogList.append(dogs[i].item)
  };
}