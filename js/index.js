// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let whiteSauce1 = document.querySelector('.sauce')
    if (state.whiteSauce) {
      whiteSauce1.classList.add('sauce-white');
    } else {
      whiteSauce1.classList.remove ('sauce-white');
    }
  }

function renderGlutenFreeCrust() {
 let glutFreeCrust =  document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      glutFreeCrust.classList.add('crust-gluten-free');
    } else {
      glutFreeCrust.classList.remove('crust-gluten-free');
    }
  };


function renderButtons() {
  const btnPepperoni = document.querySelector(".btn-pepperoni");
  if (state.pepperoni) {
    btnPepperoni.classList.add("active");
  } else {
    btnPepperoni.classList.remove("active");
  }

  const btnMushrooms = document.querySelector(".btn-mushrooms");
  if (state.mushrooms) {
    btnMushrooms.classList.add("active");
  } else {
    btnMushrooms.classList.remove("active");
  }

  const btnGreenPeppers = document.querySelector(".btn-green-peppers");
  if (state.greenPeppers) {
    btnGreenPeppers.classList.add("active");
  } else {
    btnGreenPeppers.classList.remove("active");
  }

  const btnSauce = document.querySelector(".btn-sauce");
  if (state.whiteSauce) {
    btnSauce.classList.add("active");
  } else {
    btnSauce.classList.remove("active");
  }

  const btnGlutenFreeCrust = document.querySelector(".btn-crust");
  if (state.glutenFreeCrust) {
    btnGlutenFreeCrust.classList.add("active");
  } else {
    btnGlutenFreeCrust.classList.remove("active");
  }
}

function renderPrice() {
  let ingredientList = document.querySelector('.panel.price > ul');
  let ingredientSum = document.querySelector('.panel.price > strong');
  let price = basePrice;
  let contents = '';
  for (let ingredient in state) {
    if (state[ingredient] === true) {     
      contents += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      price += ingredients[ingredient].price
    }
    ingredientList.innerHTML = contents
    ingredientSum.innerText = '$' + price
 }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
