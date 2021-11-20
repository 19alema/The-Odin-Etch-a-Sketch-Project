// CONTAINER
const container = document.querySelector(".container");
const rangeValue = document.getElementById("rangeValue");
const para = document.getElementById("para");
let value = rangeValue.value;
const erase = document.querySelector(".erase_btn");
const colorInput = document.querySelector("#color");


// DIV COLOR SECTION
let colorValue;
colorInput.addEventListener("change", (e) => {
    colorValue = e.target.value;
    gridItems.forEach(function (item) {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = colorValue;
            console.log(colorValue)
        })
    })
})

// FUNCTION TO GENERATE THE DIV'S
function makeRows(value) {
   
    for (c = 0; c < (value * value); c++) {
        container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
        container.style.gridTemplateRows = `repeat(${value}, 1fr)`
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(value)


// GRID ITEMS;
const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(function (item) {
    item.addEventListener("mouseover", () => {
        console.log(item)
        item.style.backgroundColor = colorInput;
    })
})

// ERASE BUTTON ACTION
erase.addEventListener("click", () => {
    gridItems.forEach(function (item) {
        item.addEventListener("mouseover", () => {
            console.log(item)
            item.classList.remove("grid_item_background_color");
            item.style.backgroundColor = "whitesmoke";
        })
    })
})
// CLEAR BUTTON ACTION
const clearBtn = document.querySelector(".clear_btn");

clearBtn.addEventListener("click", () => {
    location.reload()
})

// RANGE / SLIDER 

rangeValue.onchange = (e) => {
    value = e.target.value;
    para.textContent = `SET SIZE: ${value} x ${value}`;
    makeRows(value, value);
}
rangeValue.onmouseover = (e) => {
    value = e.target.value;
    para.textContent = `SET SIZE: ${value} x ${value}`;
}

// RAINBOW BUTTON COLOR GENERATOR
function rainBowColor() {
    const randomBlue = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomRed = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      return rgbColor
}

 
// RAINBOW BUTTON ACTION
const rainbow = document.querySelector(".rainbow");

rainbow.addEventListener("click", () => {
    gridItems.forEach(function (item) {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = rainBowColor();
        })
    })
})