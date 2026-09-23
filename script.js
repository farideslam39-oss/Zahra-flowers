// ===============================
// ZAHRA WEBSITE
// SCRIPT.JS
// PART 1
// PRODUCTS + FILTER
// ===============================


// ===============================
// PRODUCTS
// ===============================

const products = [

{
id:1,
category:"bouquets",
subCategory:"wedding",
name:"Classic Rose Bouquet",
price:1000,
oldPrice:1200,
badge:"Best Seller",
images:[
"images/wedding-babyloza40roses.jpg",
],
description:"Luxury artificial roses bouquet."
},


{
id:2,
category:"bouquets",
subCategory:"wedding",
name:"White Elegance",
price:900,
oldPrice:1200,
position:"50% 10%",
badge:"New",
images:[
"images/wedding-babypeony30roses.jpg",
"3.jpg"
],
description:"Premium artificial white bouquet."
},


{
id:3,
category:"bouquets",
subCategory:"wedding",
name:"Pink Dream",
price:1250,
position:"50% 40%",
oldPrice:1500,
badge:"Sale",
images:[
"images/wedding-tulip50roses.jpg",
"2.jpg",
"3.jpg"
],
description:"Fresh natural flower bouquet."
},


{
id:4,
category:"bouquets",
subCategory:"wedding",
name:"Luxury Mirror",
price:0,
oldPrice:0,
badge:"New",
images:[
"images/wedding-butterfly2roses.jpg",
"mirror2.jpg",
"mirror3.jpg"
],
description:"Elegant handmade mirror."
},


{
id:5,
category:"bouquets",
subCategory:"wedding",
name:"Memory Frame",
price:450,
oldPrice:600,
badge:"Luxury",
images:[
"images/wedding-peony15roses.jpg"
],
description:"Beautiful custom frame."
},


{
id:6,
category:"mirrors",
subCategory:"mirrors",
name:"Special Gift",
price:300,
oldPrice:400,
badge:"New",
images:[
"images/mirrors1.jpg"
],
description:"Special Zahra gift."
},

{
id:7,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors2.jpg",

],
description:"Luxury artificial roses bouquet."
},
  
{
id:8,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors3.jpg",

],
description:"Luxury artificial roses bouquet."
},

  
{
id:9,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors4.jpg",
],
description:"Luxury artificial roses bouquet."
},

  
{
id:10,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors5.jpg",
],
description:"Luxury artificial roses bouquet."
},
  
{
id:11,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors6.jpg",
],
description:"Luxury artificial roses bouquet."
},

  
{
id:12,
category:"bouquets",
subCategory:"natural",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/natural-whitejuri15.jpg",
],
description:"Luxury artificial roses bouquet."
},
  
{
id:13,
category:"bouquets",
subCategory:"natural",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/natural.jpg",
],
description:"Luxury artificial roses bouquet."
},
  
{
id:14,
category:"bouquets",
subCategory:"natural",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/natural5.jpg",
],
description:"Luxury artificial roses bouquet."
},
  
{
id:15,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors6.jpg",
],
description:"Luxury artificial roses bouquet."
},
  
{
id:16,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors6.jpg",
],
description:"Luxury artificial roses bouquet."
},
  
{
id:17,
category:"mirrors",
subCategory:"mirrors",
name:"Classic Rose Bouquet",
price:850,
oldPrice:950,
badge:"Best Seller",
images:[
"images/mirrors6.jpg",
],
description:"Luxury artificial roses bouquet."
},

];




// ===============================
// VARIABLES
// ===============================


const productGrid =
document.getElementById("product-grid");


let currentCategory = "all";

let currentSubCategory = "all";





// ===============================
// DISPLAY PRODUCTS
// ===============================


function displayProducts(){


if(!productGrid) return;



productGrid.innerHTML = "";



const filteredProducts = products.filter(product=>{


const categoryCheck =
currentCategory === "all" ||
product.category === currentCategory;



const subCategoryCheck =
currentSubCategory === "all" ||
product.subCategory === currentSubCategory;



return categoryCheck && subCategoryCheck;



});




filteredProducts.forEach(product=>{


productGrid.innerHTML += `


<div class="product">


<div class="product-image">


<img
src="${product.images[0]}"
alt="${product.name}"
style="object-position:${product.position || 'center'};"
>


<div class="badge">

${product.badge}

</div>


</div>




<div class="product-content">


<h3 class="product-title">

${product.name}

</h3>



<div class="rating">

★★★★★

</div>



<p class="product-desc">

${product.description}

</p>



<div class="price">

${product.price} EGP

</div>



<div class="old-price">

${product.oldPrice} EGP

</div>




<div class="product-buttons">


<button class="add-cart" onclick="addToCart(${product.id})">

Add To Cart

</button>



<button class="details" onclick="openProduct(${product.id})">

<i class="fa-solid fa-eye"></i>

</button>


</div>


</div>


</div>


`;



});


}




displayProducts();




// ===============================
// MAIN CATEGORIES
// ===============================


const categoryButtons =
document.querySelectorAll(".category-btn");


const bouquetSubCategories =
document.getElementById("bouquetSubCategories");




categoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


categoryButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");



currentCategory =
button.dataset.category;



currentSubCategory = "all";




// Show / Hide bouquet categories

if(bouquetSubCategories){


if(currentCategory === "bouquets"){


bouquetSubCategories.style.display = "flex";


}else{


bouquetSubCategories.style.display = "none";


}


}



displayProducts();



});


});




// ===============================
// SUB CATEGORIES
// ===============================


const subCategoryButtons =
document.querySelectorAll(".sub-category-btn");



subCategoryButtons.forEach(button=>{


button.addEventListener("click",()=>{


subCategoryButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");



currentSubCategory =
button.dataset.subcategory;



displayProducts();



});


});
  // ===============================
// PART 2
// CART + WHATSAPP CHECKOUT
// ===============================



const cartItems =
document.getElementById("cart-items");


const totalPrice =
document.getElementById("total-price");


const cartCount =
document.getElementById("cart-count");



let cart = [];





// ===============================
// ADD TO CART
// ===============================


function addToCart(id){


const product =
products.find(item=>item.id === id);



if(product){


cart.push(product);


updateCart();


}


}






// ===============================
// UPDATE CART
// ===============================


function updateCart(){


if(!cartItems) return;



cartItems.innerHTML = "";



let total = 0;




cart.forEach((item,index)=>{


total += item.price;



cartItems.innerHTML += `


<div class="cart-item">


<img src="${item.images[0]}">



<div>


<h4>
${item.name}
</h4>



<p>
${item.price} EGP
</p>



${item.notes ? 
`<small>Notes: ${item.notes}</small>` 
: ""}



<button onclick="removeItem(${index})">

Remove

</button>



</div>


</div>


`;



});




if(totalPrice){

totalPrice.innerHTML =
`${total} EGP`;

}



if(cartCount){

cartCount.innerHTML =
cart.length;

}



}





// ===============================
// REMOVE ITEM
// ===============================


function removeItem(index){


cart.splice(index,1);


updateCart();


}





// ===============================
// CART OPEN / CLOSE
// ===============================


const cartSidebar =
document.getElementById("cart");


const cartIcon =
document.querySelector(".cart-icon");


const closeCart =
document.getElementById("close-cart");




if(cartIcon && cartSidebar){


cartIcon.addEventListener("click",()=>{


cartSidebar.classList.add("active");


});


}




if(closeCart && cartSidebar){


closeCart.addEventListener("click",()=>{


cartSidebar.classList.remove("active");


});


}






// ===============================
// WHATSAPP CHECKOUT
// ===============================


const checkoutBtn =
document.querySelector(".checkout-btn");



if(checkoutBtn){


checkoutBtn.addEventListener("click",()=>{


if(cart.length === 0){


alert("Your cart is empty");


return;


}




let message =
"Hello Zahra 🌸%0A%0AI want to order:%0A";




cart.forEach(item=>{


message +=
`- ${item.name} (${item.price} EGP)%0A`;



if(item.notes){


message +=
`Notes: ${item.notes}%0A`;

}


});




const total =
cart.reduce(
(sum,item)=>sum + item.price,
0
);



message +=
`%0ATotal: ${total} EGP`;




window.open(

"https://wa.me/201000000000?text=" + message,

"_blank"

);



});


}
// ===============================
// PART 3
// SEARCH + MOBILE MENU + BACK TOP
// ===============================



// ===============================
// SEARCH
// ===============================


const searchInput =
document.getElementById("searchInput");



if(searchInput){


searchInput.addEventListener("input",()=>{


const value =
searchInput.value.toLowerCase();



const cards =
document.querySelectorAll(".product");



cards.forEach(card=>{


const title =
card.querySelector(".product-title")
.innerText
.toLowerCase();



const desc =
card.querySelector(".product-desc")
.innerText
.toLowerCase();




if(
title.includes(value) ||
desc.includes(value)
){


card.style.display = "block";


}else{


card.style.display = "none";


}



});



});


}






// ===============================
// MOBILE MENU
// ===============================


const menuBtn =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");



if(menuBtn && navLinks){


menuBtn.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});


}





document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


if(navLinks){


navLinks.classList.remove("active");


}


});


});







// ===============================
// BACK TO TOP
// ===============================


const topBtn =
document.querySelector(".top-btn");



if(topBtn){


window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


topBtn.classList.add("show");


}else{


topBtn.classList.remove("show");


}


});




topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}
// ===============================
// PART 4
// COUNTDOWN + PRODUCT DETAILS PANEL
// ===============================



// ===============================
// OFFER COUNTDOWN
// ===============================


function startOfferTimer(expiryDate){


const countdown =
document.getElementById("countdown");


const days =
document.getElementById("days");


const hours =
document.getElementById("hours");


const minutes =
document.getElementById("minutes");


const seconds =
document.getElementById("seconds");



if(
!countdown ||
!days ||
!hours ||
!minutes ||
!seconds
){

return;

}



const endDate =
new Date(expiryDate).getTime();




function updateTimer(){


const now =
new Date().getTime();



const distance =
endDate - now;




if(distance <= 0){


countdown.innerHTML =
"<h3>🔥 انتهى العرض!</h3>";

return;


}





days.innerHTML =
String(
Math.floor(distance/(1000*60*60*24))
).padStart(2,"0");



hours.innerHTML =
String(
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
)
).padStart(2,"0");



minutes.innerHTML =
String(
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
)
).padStart(2,"0");



seconds.innerHTML =
String(
Math.floor(
(distance%(1000*60))
/
1000
)
).padStart(2,"0");



}




updateTimer();



setInterval(updateTimer,1000);



}





document.addEventListener("DOMContentLoaded",()=>{


startOfferTimer(
"2026-09-30T23:59:59"
);


});








// ===============================
// PRODUCT DETAILS PANEL
// ===============================


let currentProduct = null;

let currentImage = 0;





function openProduct(id){


currentProduct =
products.find(item=>item.id === id);



if(!currentProduct) return;



currentImage = 0;



const panel =
document.getElementById("productPanel");



if(panel){

panel.classList.add("active");

}



showProductImage();



document.getElementById("panelName").innerText =
currentProduct.name;



document.getElementById("panelPrice").innerText =
currentProduct.price + " EGP";



document.getElementById("panelDesc").innerText =
currentProduct.description;



}






function showProductImage(){


const image =
document.getElementById("panelImage");



if(image && currentProduct){


image.src =
currentProduct.images[currentImage];


}



}





const nextImage =
document.getElementById("nextImage");


if(nextImage){


nextImage.onclick = ()=>{


if(
currentProduct &&
currentImage < currentProduct.images.length - 1
){


currentImage++;


showProductImage();


}



};


}






const prevImage =
document.getElementById("prevImage");


if(prevImage){


prevImage.onclick = ()=>{


if(
currentProduct &&
currentImage > 0
){


currentImage--;


showProductImage();


}



};


}








const closePanel =
document.getElementById("closePanel");



if(closePanel){


closePanel.onclick = ()=>{


document
.getElementById("productPanel")
.classList.remove("active");


};


}








// ===============================
// ADD FROM PANEL
// ===============================


const panelAddCart =
document.getElementById("panelAddCart");



if(panelAddCart){


panelAddCart.onclick = ()=>{


if(!currentProduct) return;



const notes =
document.getElementById("productNotes").value;



cart.push({

...currentProduct,

notes:notes

});



updateCart();




document
.getElementById("productPanel")
.classList.remove("active");




document
.getElementById("productNotes")
.value = "";



};


}