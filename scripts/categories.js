function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
}

function displayCategories(data) {
  console.log(data);
  const categories = document.getElementById("categories");
  data.forEach((element) => {
    console.log(element.category);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = element.category;
    categories.appendChild(button);
  });
}

loadCategories();
