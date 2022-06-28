import { bannerData } from './server/banners/index.get.js';
import { productData } from './server/products/index.get.js';
import { categoryDATA } from './server/categories/index.get.js';




const banner = document.getElementById("banners")
const category = document.getElementById("category")


function renderBanners() {

  return banner.innerHTML = `
  <div class="offers">
      <img src="./static/images/offers/offer1.jpg" alt="independence_day_offers" width="900px">
  </div>`
}

renderBanners();

function renderProduct() {
  document.getElementById("cartObjects").style.display = "none"; 
  document.getElementById("cartTotal").style.display = "none";
  document.getElementById("copyRightInfo").style.display = "block";
  document.getElementById("content").style.display = "block";
const product = document.getElementById("content");

  
  return (
   
    content.innerHTML = ` <div class="functions" id="functions">
    <div class="function-buttons">
      <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onclick="renderFruit()">Fruits & Vegetables</button>
      <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onclick="renderBakery()">Bakery Cakes and Dairy</button>
      <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" onclick="renderBeverages()">Beverages</button>
      <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onclick="renderBeauty()">Beauty and Hygiene</button>
      <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onclick="renderBaby()">Baby Care</button>
  </div>` + productData.map((x) => {
    let { id, name, imageURL, description, price } = x;
    return `
          <div class="product" id="product">
            <div class="item">
                <h2>${name}</h2>
                <img src=".${imageURL}" alt="product" width="220">
                <p>${description}</p>
                <div class="price">
                    <p>MRP Rs.${price}</p>
                    <button onclick="addcart('${id}')" class="buy">Buy Now</button>
                </div>
            </div>
          </div>
        `

  })
    .join("")
    )
} + '</div>'
window.renderProduct = renderProduct;


function renderFruit(){
  const fruit = document.getElementById("functions");

  const array = productData.filter(item => item.category == "5b6899953d1a866534f516e2");
return(
  content.innerHTML =  `<div class="functions" id="functions">
  <div class="function-buttons">
  <button class="nav-link" style = "background-color:firebrick" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onclick="renderFruit()">Fruits & Vegetables</button>
  <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onclick="renderBakery()">Bakery Cakes and Dairy</button>
  <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" onclick="renderBeverages()">Beverages</button>
  <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onclick="renderBeauty()">Beauty and Hygiene</button>
  <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onclick="renderBaby()">Baby Care</button>
</div>` + array.map((x) => {
    let { id, name, imageURL, description, price } = x;
    return `
          <div class="product" id="product">
            <div class="item">
                <h2>${name}</h2>
                <img src=".${imageURL}" alt="product" width="220">
                <p>${description}</p>
                <div class="price">
                    <p>MRP Rs.${price}</p>
                    <button onclick="addcart('${id}')"class="buy">Buy Now</button>
                </div>
            </div>
          </div>
        `

  })
    .join("")
  )
} + '</div'

window.renderFruit = renderFruit;


function renderBakery(){
  const bakery = document.getElementById("functions");

  const array = productData.filter(item => item.category == "5b6899123d1a866534f516de");
return(
  content.innerHTML =  `<div class="functions" id="functions">
  <div class="function-buttons">
  <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onclick="renderFruit()">Fruits & Vegetables</button>
  <button class="nav-link" style = "background-color:firebrick" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onclick="renderBakery()">Bakery Cakes and Dairy</button>
  <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" onclick="renderBeverages()">Beverages</button>
  <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onclick="renderBeauty()">Beauty and Hygiene</button>
  <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onclick="renderBaby()">Baby Care</button>
</div>` + array.map((x) => {
    let { id, name, imageURL, description, price } = x;
    return `
          <div class="product" id="product">
            <div class="item">
                <h2>${name}</h2>
                <img src=".${imageURL}" alt="product" width="220">
                <p>${description}</p>
                <div class="price">
                    <p>MRP Rs.${price}</p>
                    <button onclick="addcart('${id}')"class="buy">Buy Now</button>
                </div>
            </div>
          </div>
        `

  })
    .join("")
  )
} + '</div'

window.renderBakery = renderBakery;


function renderBeverages(){
  const beverages = document.getElementById("functions");

  const array = productData.filter(item => item.category == "5b675e5e5936635728f9fc30");
return(
  content.innerHTML =  `<div class="functions" id="functions">
  <div class="function-buttons">
  <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onclick="renderFruit()">Fruits & Vegetables</button>
  <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onclick="renderBakery()">Bakery Cakes and Dairy</button>
  <button class="nav-link" style = "background-color:firebrick" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" onclick="renderBeverages()">Beverages</button>
  <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onclick="renderBeauty()">Beauty and Hygiene</button>
  <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onclick="renderBaby()">Baby Care</button>
</div>` + array.map((x) => {
    let { id, name, imageURL, description, price } = x;
    return `
          <div class="product" id="product">
            <div class="item">
                <h2>${name}</h2>
                <img src=".${imageURL}" alt="product" width="220">
                <p>${description}</p>
                <div class="price">
                    <p>MRP Rs.${price}</p>
                    <button onclick="addcart('${id}')"class="buy">Buy Now</button>
                </div>
            </div>
          </div>
        `

  })
    .join("")
  )
} + '</div'

window.renderBeverages = renderBeverages;


function renderBeauty(){
  const fruit = document.getElementById("functions");

  const array = productData.filter(item => item.category == "5b68994e3d1a866534f516df");
return(
  content.innerHTML =  `<div class="functions" id="functions">
  <div class="function-buttons">
  <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onclick="renderFruit()">Fruits & Vegetables</button>
  <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onclick="renderBakery()">Bakery Cakes and Dairy</button>
  <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" onclick="renderBeverages()">Beverages</button>
  <button class="nav-link" style = "background-color:firebrick" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onclick="renderBeauty()">Beauty and Hygiene</button>
  <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onclick="renderBaby()">Baby Care</button>
</div>` + array.map((x) => {
    let { id, name, imageURL, description, price } = x;
    return `
          <div class="product" id="product">
            <div class="item">
                <h2>${name}</h2>
                <img src=".${imageURL}" alt="product" width="220">
                <p>${description}</p>
                <div class="price">
                    <p>MRP Rs.${price}</p>
                    <button onclick="addcart('${id}')"class="buy">Buy Now</button>
                </div>
            </div>
          </div>
        `

  })
    .join("")
  )
} + '</div'

window.renderBeauty = renderBeauty;


function renderBaby(){
  const baby = document.getElementById("functions");

  const array = productData.filter(item => item.category == "5b6899683d1a866534f516e0");
return(
  content.innerHTML =  `<div class="functions" id="functions">
  <div class="function-buttons">
  <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onclick="renderFruit()">Fruits & Vegetables</button>
  <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onclick="renderBakery()">Bakery Cakes and Dairy</button>
  <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" onclick="renderBeverages()">Beverages</button>
  <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onclick="renderBeauty()">Beauty and Hygiene</button>
  <button class="nav-link" style = "background-color:firebrick" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onclick="renderBaby()">Baby Care</button>
</div>` + array.map((x) => {
    let { id, name, imageURL, description, price } = x;
    return `
          <div class="product" id="product">
            <div class="item">
                <h2>${name}</h2>
                <img src=".${imageURL}" alt="product" width="220">
                <p>${description}</p>
                <div class="price">
                    <p>MRP Rs.${price}</p>
                    <button onclick="addcart('${id}')" class="buy">Buy Now</button>
                </div>
            </div>
          </div>
        `

  })
    .join("")
  )
} + '</div'

window.renderBaby = renderBaby;

let basket = [];

function addcart(id) {

  const array1 = productData.find((x) => x.id === id);

  if(basket.some((array1) => array1.id === id)) {
     array1.item += 1;
  }
  else {
  
    basket.push(array1);
  }
  sessionStorage.cartItems = JSON.stringify(basket);
  //updateCart(id);
  calculation(id);
}

window.addcart = addcart;

function updateCart() {
  let cart_item = document.getElementById("cartObjects");
  cart_item.style.display = "none";
  cart_item.innerHTML = "";
  return(
    cart_item.innerHTML += basket.map((x) => {
      let { id, name, imageURL, description, price, price1, item } = x;
      return `
        <div class="main-cart1" id="main-cart1">
          <img src=".${imageURL}" alt="product" width="100">
          <div class="cart-name">
              <h2>${name}</h2>
              <div class="buttons">
                <i onclick="changeNumberofItems('minus','${id}')" class="bi bi-dash-lg"></i>
                <div class="quantity" id="quantity">${item}</div>
                <i onclick="changeNumberofItems('plus','${id}')" class="bi bi-plus-lg"></i>
                <i class="bi bi-x-lg"></i>
                <p>MRP Rs.${price}</p>
              </div>
          </div> 
          <h4 id="MRP">MRP Rs.${price1}</h4>
        </div> 
      `
    })
      .join("")
  )
}

window.updateCart = updateCart;

function changeNumberofItems(action, id)  {

   basket = basket.map((array1) => {
    let item = array1.item;

    if(array1.id === id){
      if(action === "minus" && item > 1){
        item--;
      }else if(action === "plus") {
        item++;
      }
    }

    return{
      ...array1,
      item,
    };
    
  });
  updateCart(id);
  calculation(id);
 
};

window.changeNumberofItems = changeNumberofItems;


let calculation = (id) => {
  basket = basket.map((array1) => {
    
    let item = array1.item;
    let price = array1.price;
    let price1 = array1.price1

    if(array1.id === id ) {
  price1 = (item * price);
  }
 
  return {
    ...array1,
    item,
    price1,
  }
})

updateCart(id);

  let cart2 = document.getElementById("main-cart2");
  cart2.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0) + ' Items';

  let total1 = document.getElementById("total1");
  total1.innerHTML = 'Rs.' + basket.map((x) => x.price1).reduce((x,y) => x+y, 0);

}

window.calculation = calculation;









