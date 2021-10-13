//Datas
const cars = [
  {
    id: 1,
    title: "BMW 1",
    category: "BMW",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 32000,
    img: "./images/1_bmw.jpg",
  },
  {
    id: 2,
    title: "BMW 2",
    category: "BMW",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 35000,
    img: "./images/2_bmw.jpg",
  },
  {
    id: 3,
    title: "BMW 3",
    category: "BMW",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 45000,
    img: "./images/3_bmw.jpg",
  },
  {
    id: 4,
    title: "BMW 4",
    category: "BMW",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 60000,
    img: "./images/4_bmw.jpg",
  },
  {
    id: 5,
    title: "Mercedes 1",
    category: "Mercedes",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 41000,
    img: "./images/1_merc.jpg",
  },
  {
    id: 6,
    title: "Mercedes 2",
    category: "Mercedes",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 56000,
    img: "./images/2_merc.jpg",
  },

  {
    id: 7,
    title: "Audi 1",
    category: "Audi",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 42000,
    img: "./images/1_audi.jpg",
  },
  {
    id: 8,
    title: "Audi 2",
    category: "Audi",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 66000,
    img: "./images/2_audi.jpg",
  },

  {
    id: 9,
    title: "Audi 3",
    category: "Audi",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 24000,
    img: "./images/3_audi.jpg",
  },

  {
    id: 10,
    title: "Kia 1",
    category: "Kia",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 23000,
    img: "./images/1_kia.jpg",
  },

  {
    id: 11,
    title: "Kia 2",
    category: "Kia",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sequi, cumque suscipit magni explicabo quis autem nostrum. Ratione officiis tenetur perferendis reprehenderit repellendus laborum, dolorem quaerat commodi laudantium beatae! Veniam.",
    price: 14000,
    img: "./images/2_kia.jpg",
  },
];

const buttonWrapper = document.querySelector(".button-container");
const carsList = document.querySelector(".cars-list");

window.addEventListener("DOMContentLoaded", () => {
  displayButtons();
  displayCars(cars);
});

const displayCars = (items) => {
  let carList = items.map((item) => {
    return `        <div class="car-container">
    <div class="img-container"><img src="${item.img}" /></div>
    <div class="content">
      <div class="top">
        <div class="name">${item.title}</div>
        <div class="price">${item.price}$</div>
      </div>
      <div class="text">
        ${item.desc}
      </div>
    </div>
  </div>`;
  });
  carList = carList.join("");
  carsList.innerHTML = carList;
};

const displayButtons = () => {
  let categoriesButtonsArray = ["all"];
  cars.map((car) => {
    if (!categoriesButtonsArray.includes(car.category)) {
      categoriesButtonsArray.push(car.category);
    }
  });

  const categoryBtn = categoriesButtonsArray
    .map((item) => {
      return `<button class="filter-button" data-id=${item} type="button">${item}</button>`;
    })
    .join("");

  buttonWrapper.innerHTML = categoryBtn;

  const activeButton = document.querySelectorAll(".filter-button");

  activeButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const activeValue = e.currentTarget.dataset.id;
      const selectCategory = cars.filter((car) => {
        if (activeValue === "all") {
          return car;
        } else if (activeValue === car.category) {
          return car;
        }
      });

      displayCars(selectCategory);
    });
  });
};
