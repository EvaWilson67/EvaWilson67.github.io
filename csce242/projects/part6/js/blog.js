const getBlogs = async () => {
  const url =
    "https://evawilson67.github.io/csce242/projects/part6/json/blog.json";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const showBlogs = async () => {
  const blogs = await getBlogs();
  const blogSection = document.getElementById("blog");
  console.log("hi");
  
  blogs.forEach((blog) => {
    const section = document.createElement("section");
    section.classList = "blog center";
    blogSection.append(section);

    const div = document.createElement("div");
    div.classList = "columns";
    section.append(div);

    const img = document.createElement("img");
    img.src = `images/blog_images/${blog.image}`;
    div.append(img);

    const divDate = document.createElement("div");
    divDate.classList = "height-center";
    div.append(divDate);

    const h3 = document.createElement("h3");
    h3.innerHTML = blog.date;
    divDate.append(h3);

    const p = document.createElement("p");
    p.innerHTML = blog.summary;
    section.append(p);
  })
  ;
};

showBlogs();
