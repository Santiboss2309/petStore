function displayProducts() {
    console.log('shop is linked');

    var products = [ 
        {
            name: "<div class='product'><center><h2>Chew Toy</h2></center> <p>",
            price: 10,
            image: '<img src = "./assets/dogtoy.jpg">',
            details: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ad tempora dolorem itaque libero quibusdam officia debitis eius? Voluptas, officia.</p> ",
            button: '<p><button id="ten" type="button" value = "10" class="btn btn-warning" onClick="priceChew()">Add To Cart</button></p></div>'
        }, 
        {
            name: "<div class='product'><center><h2 >Cat Tower</center></h2> <div class='containText'><p>",
            price: 20,
            image: '<img src = "./assets/tower.jpg">',
            details: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ad tempora dolorem itaque libero quibusdam officia debitis eius? Voluptas, officia.</p> ",
            button: '<p><button id="twenty" type="button" class="btn btn-warning" value="20" onClick="tower()">Add To Cart</button></p> </div>'
        }, 
        {
            name: "<div class='product'><center><h2>Bed</h2> </center><p>",
            price: 5,
            image: '<img src = "./assets/bed.jpg" >',
            details: "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ad tempora dolorem itaque libero quibusdam officia debitis eius? Voluptas, officia.</p> ",
            button: '<p><button id="five" type="button" class="btn btn-warning" value="5" onClick="bed()">Add To Cart</button></p></div>'
        }
        ];
        
        for (var i = 0; i < products.length; i++) {
        console.log (products[i]) 
        document.getElementById("containProducts").innerHTML =  products.map(products => 
            `<div class="purchase"> <center>
            <div> ${products.image}</div>
            <div> ${products.name}</div>
            <div> Price: $ ${products.price}</div>
            <div>details: ${products.details}</div>
           
            <div class = "styleButton"> ${products.button}</div>
            </center>
          </div>`
      ).join('')
        }
       
}; 


var click=0;

function priceChew() {

click=click+1;
console.log(click);    
var dogToy = document.getElementById("ten").value;
var dogCart= (parseInt(dogToy) * click);
document.getElementById("yourCart").innerHTML = "<p><h2><center> Your cart: $ " + dogCart + "</p></h2></center>";
document.getElementById("cartItems").innerHTML = click;
};

var click2=0;
function tower() {

click2=click2+1;
console.log(click3);    
var catToy = document.getElementById("twenty").value;
var catCart= (parseInt(catToy) * click2);
document.getElementById("yourCart").innerHTML = "<p><h2><center> Your cart: $ " + catCart + "</p></h2></center>";
};

var click3=0;
function bed() {
    
   click3=click3+1;
   console.log(click3);    
var catBed = document.getElementById("twenty").value;
var bedCart= (parseInt(catBed) * click);
document.getElementById("yourCart").innerHTML = "<p><h2><center> Your cart: $ " + bedCart + "</p></h2></center>";
};



/*var theShop = products[0].image + products[0].name + products[0].price + products[0].details + products[0].button + products[1].name + products[1].price + products[1].image + products[1].details + products[1].button + products[2].name + products[2].price + products[2].image + products[2].details + products[2].button
document.getElementById("containProducts").innerHTML = theShop;*/