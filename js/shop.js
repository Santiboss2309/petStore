var itemsInCart=0;

var itemOne=parseInt(document.getElementById("one").value);
var itemTwo=parseInt(document.getElementById("two").value);
var itemThree=parseInt(document.getElementById("three").value);

var itemOneQuantity = 0;
var itemTwoQuantity = 0;
var itemThreeQuantity = 0;

var itemOnePrice = 0;
var itemTwoPrice = 0;
var itemThreePrice = 0;

var dispTotal = 0;

function buttonOne(){
itemOneQuantity=itemOneQuantity+1;
itemOnePrice = (itemOneQuantity * itemOne);
logPrice = itemOnePrice;
document.getElementById("productOneTotal").innerHTML = itemOneQuantity + ' Dog Toy(s) - Price: $' + itemOnePrice;
};

function buttonTwo(){
itemTwoQuantity=itemTwoQuantity+1;
itemTwoPrice = (itemTwoQuantity * itemTwo);
document.getElementById("productTwoTotal").innerHTML = itemTwoQuantity + ' Cat Tower(s) - Price: $' + itemTwoPrice;
};

function buttonThree(){
itemThreeQuantity=itemThreeQuantity+1;
itemThreePrice = (itemThreeQuantity * itemThree);
document.getElementById("productThreeTotal").innerHTML = itemThreeQuantity + ' Pet Bed(s) - Price: $' + itemThreePrice;
};



function displayItems() {
itemsInCart=itemsInCart+1;  
document.getElementById("cart").innerHTML = 'You have ' + itemsInCart + ' items in your cart <hr>'
document.getElementById("numItems").innerHTML = itemsInCart; 
  

};

function clearCart() {
itemsInCart= itemsInCart-itemsInCart;
document.getElementById("cart").innerHTML = 'You have no items in your cart <hr>';
itemOneQuantity = itemOneQuantity-itemOneQuantity;
itemTwoQuantity = itemTwoQuantity-itemTwoQuantity;
itemThreeQuantity = itemThreeQuantity-itemThreeQuantity;
itemOnePrice = itemOnePrice-itemOnePrice;
itemTwoPrice = itemTwoPrice - itemTwoPrice;
itemThreePrice = itemThreePrice -itemThreePrice;
dispTotal = dispTotal-dispTotal;
document.getElementById("productOneTotal").innerHTML = "";
document.getElementById("productTwoTotal").innerHTML = "";
document.getElementById("productThreeTotal").innerHTML = "";
document.getElementById("numItems").innerHTML = itemsInCart; 
document.getElementById("yourTotal").innerHTML = "Total: $" + dispTotal;

};

var yourTotalDisplay = document.querySelectorAll('.shop');
for (i = 0; i < yourTotalDisplay.length; ++i) {

function yTotal() {
var dispTotal = itemOnePrice + itemTwoPrice + itemThreePrice;
console.log(dispTotal) 
document.getElementById("yourTotal").innerHTML = "Total: $" + dispTotal;
};

}

function loadyBoy(){
 products = [
   {
     name: "Chew Toy",
     image: 'dogtoy.jpg',
     price: 5,
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
     button: '<button onClick="displayItems(), buttonOne(), yTotal()" id="one" class="shop btn btn-warning" value="5"> Add To Cart </button>'
   },
   {
     name: "Cat Tower",
     image: 'tower.jpg',
     price: 20,
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
     button: '<button onClick="displayItems(), buttonTwo(), yTotal()" id="two" class="shop btn btn-warning" value="20"> Add to Cart </button>'
   },
   {
     name: "Pet Bed",
     image: 'bed.jpg',
     price: 10,
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
     button: '<button onClick="displayItems(), buttonThree(), yTotal()" id="three" class="shop btn btn-warning" value="20"> Add to Cart </button>'
   }
 ];

for (var k = 0; k < products.length; k++){
document.getElementById("putHere").innerHTML = products.map(products => `
<div class = "styleIt">
<p><img src= "./assets/${products.image}" height="200%" class="thePhoto"></p>
<h2><p> ${products.name} </p></h2>
<p>Price: $${products.price}</p>
<p>${products.description}</p>
<p>${products.button}</p>
<br> <hr>
</div>
`);
}
  
};
