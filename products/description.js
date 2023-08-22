
let obj = JSON.parse(localStorage.getItem("details"));
let cartArray = JSON.parse(localStorage.getItem('cart_list')) || []

showdetails(obj);

function showdetails(obj) {
    let details_main = document.createElement("div");
    details_main.className = "details_main"

    let detail_left = document.createElement("div");
    detail_left.className = "detail-left";
    let path = document.createElement('p');
    path.textContent = "Home >  Wireless  >  EarbudsLarge"
    let image = document.createElement("img");
    image.src = obj.Image;
    detail_left.append(path, image);

    let detail_right = document.createElement('div');

    detail_right.className = "detail-right";
    let rat_review = document.createElement('p');
    rat_review.className = "rat-review";
    rat_review.textContent = "⭐" + obj.Rating + "  |  " + "1270 reviews ✔️";

    let itemName = document.createElement('h2');
    itemName.className = "item-name";
    itemName.textContent = obj.Name;

    let desc = document.createElement('p');
    desc.className = "description";
    desc.textContent = obj.Discription;

    let price_desc = document.createElement('div');
    price_desc.className = "price-description";
    let desc_price = document.createElement('strong');
    desc_price.textContent = "₹" + obj.Price;
    let desc_mrp = document.createElement('s');
    desc_mrp.textContent = "₹" + obj.MRP;
    price_desc.append(desc_price, desc_mrp);

    let desc_discount = document.createElement('p');
    desc_discount.className = "discount";
    desc_discount.textContent = obj.Discount;

    let col_div = document.createElement('div');
    col_div.className = "col-div";
    let col_img = document.createElement('img');
    col_img.src = "../componenets/images/color_pick.png"; // Assuming the image path is correct
    col_div.append(col_img);

    let pay_div = document.createElement('div');
    pay_div.className = "pay-div";
    let pay_left = document.createElement('div');
    pay_left.className = "pay-left";
    let offer_info = document.createElement('p');
    offer_info.className = "offer-info";
    offer_info.textContent = "₹15 off on All UPI Payments";
    pay_left.append(offer_info);

    let pay_right = document.createElement('div');
    pay_right.className = "pay-right";
    let pay_img1 = document.createElement('img');
    pay_img1.src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/paytm_icon_fa75a315-11a2-4c8e-a241-18af809eb683.svg?v=1682575951"
    let pay_img2 = document.createElement('img');
    pay_img2.src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gpay_icon_503ebbda-a3e1-4659-af32-0686aecec227.svg?v=1682575951"
    let pay_img3 = document.createElement('img');
    pay_img3.src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/phone_pe_icon_f9872d32-f8cf-43ca-8fa2-78db125fcdad.svg?v=1682575951"
    pay_right.append(pay_img1, pay_img2, pay_img3);
    pay_div.append(pay_left, pay_right);

    let user_love = document.createElement('div');
    let userText = document.createElement('h4')
    userText.textContent = "User's love"
    user_love.className = "user-love";
    let love_left = document.createElement('div');
    love_left.className = "love-left";
    let love_left_img = document.createElement('img');
    love_left_img.src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536"
    love_left.append(love_left_img);

    let love_right = document.createElement('div');
    love_right.className = "love-right";
    let love_right_sold = document.createElement('p');
    love_right_sold.className = "love-right-sold";
    love_right_sold.textContent = "28 Lacs+ units sold on Flipkart";
    let love_right_review = document.createElement('p');
    love_right_review.className = "love-right-review";
    love_right_review.textContent = "7 Lacs+ 5 ⭐ reviews";
    love_right.append(love_right_sold, love_right_review);
    user_love.append(love_left, love_right);

    let check_delivery = document.createElement("div");
    let checkText = document.createElement('h4')
    checkText.textContent = "check Delivery"
    check_delivery.className = "Check-delivery";
    let check_search_div = document.createElement("div");
    check_search_div.className = "check-search-div";
    let check_inp = document.createElement("input");
    check_inp.setAttribute('placeholder', "Enter Pin Code")
    let checkbtn = document.createElement("button");
    checkbtn.textContent = "Check";
    check_search_div.append(check_inp, checkbtn);
    check_delivery.append(check_search_div);

    let desc_button = document.createElement("button");
    desc_button.className = "desc-button";
    desc_button.textContent = "Add To Cart";
    desc_button.addEventListener('click', () => {
        addtocart(obj)
    })

    detail_right.append(rat_review, itemName, desc, price_desc, desc_discount, col_div, pay_div, userText, user_love, checkText, check_delivery, desc_button);

    details_main.append(detail_left, detail_right);
    document.getElementById('description_main').append(details_main);

}

let cat = localStorage.getItem('selected_category')
console.log(cat)

name_item(obj.Category, obj.Name)
function name_item(cat, name) {
    document.getElementById("item_name").append(cat + " " + name)

}
console.log(obj)
feature_image(obj.Image)
function feature_image(img) {
    console.log(img)
    let image = document.getElementById("feature_img")
    let image2 = document.getElementById("feature_img2")
    let image3 = document.getElementById("feature_img3")
    image3.src = img
    image.src = img
    image2.src = img
}


function addtocart(obj) {
    cartArray.push(obj);
    localStorage.setItem('cart_list', JSON.stringify(cartArray));

    cart_display(cartArray)
}

// navbar functionality

function goToWL() {
 
    localStorage.setItem("selected_category", "Wireless-Earbuds");
}
function goToWH() {
  
    localStorage.setItem("selected_category", "Wireless-HeadPhones");
}
function goToW() {
  
    localStorage.setItem("selected_category", "Smart Watch");
}
function goToBW() {
  
    localStorage.setItem("selected_category", "NeckBands");
}
function goToSS() {
    
    localStorage.setItem("selected_category", "Wireless-Speakers");
}
function goToLE() {
  
    localStorage.setItem("selected_category", "Wireless-HeadPhones");
}

//    cart start 
let cartToggle = document.getElementById('cart');
let side_value = document.getElementById('sidebar')
let close_cart = document.getElementById('close_cart')

close_cart.addEventListener("click", () => {
    side_value.classList.remove('isOpen');
})

cartToggle.addEventListener('click', () => {
    side_value.classList.add('isOpen');

})

// for mobile 
let cartToggle2 = document.getElementById('cart_mob');
let side_value2 = document.getElementById('sidebar')
let close_cart2 = document.getElementById('close_cart')

close_cart2.addEventListener("click", () => {
    side_value2.classList.remove('isOpen');
})

cartToggle2.addEventListener('click', () => {
    side_value2.classList.add('isOpen');

})


cart_display(cartArray)
function cart_display(cartArray) {
    // console.log("yes")
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous content
    // console.log(cartArray)
    if (cartArray.length > 0) {
        cartArray.map((elem, ind) => {
            let cart_item_div = document.createElement('div');
            cart_item_div.className = "cart_item_div";

            let cart_img_div = document.createElement('div');
            cart_img_div.className = "cart_img_div";

            let cart_img = document.createElement('img');
            cart_img.className = "cart_img"
            cart_img.src = elem.Image;
            cart_img_div.appendChild(cart_img); // Append the image to the div

            let cart_detail = document.createElement('div');
            cart_detail.className = 'cart-detail'
            let name_div = document.createElement('div');
            name_div.className = "name_div"

            let cart_name = document.createElement("h4");
            cart_name.textContent = elem.Name; // Use textContent to set text
            let delbtn = document.createElement('button');
            delbtn.textContent = "🗑️"
            delbtn.addEventListener('click', () => {
                remove(elem, ind)
            })

            name_div.append(cart_name, delbtn)

            let cart_price = document.createElement("h4");
            cart_price.textContent = "₹" + elem.Price; // Use textContent to set text

            let quantity_div = document.createElement("div");
            quantity_div.className = "quantity_div"
            let charcol = document.createElement('p');
            charcol.textContent = "CharcoalBlack";

            let quant = document.createElement('div');
            quant.className = "quant_buttons_div"
            let decr = document.createElement('button');
            decr.textContent = "-";
            decr.addEventListener('click', () => {
                decrement(elem, ind)
            })
            let item_quantity = document.createElement('button');
            item_quantity.textContent = elem.Qty;
            let incr = document.createElement('button');
            incr.textContent = "+";
            incr.addEventListener('click', () => {
                increment(elem, ind)
            })
            quant.append(decr, item_quantity, incr);
            quantity_div.append(charcol, quant);

            cart_detail.append(name_div, cart_price, quantity_div);

            cart_item_div.append(cart_img_div, cart_detail); // Append both image div and details div to cart_item_div

            cartItemsContainer.appendChild(cart_item_div);


        });
    } else {
        cartItemsContainer.textContent = "Empty cart ! Do Shopping !"; // Show "Empty cart" message
    } total_cart()
    total_cart2()
}

function remove(elem, ind) {
    cartArray.splice(ind, 1);
    localStorage.setItem('cart_list', JSON.stringify(cartArray));
    cart_display(cartArray);

}


function total_cart() {
    document.getElementById('total_amount').textContent = 0
    let totalAmount = cartArray.reduce((acc, curr) => {
        return acc + curr.Price * curr.Qty
    }, 0)
    document.getElementById('total_amount').textContent = "₹" + totalAmount

}
function total_cart2() {
    document.getElementById('total_amount2').textContent = 0
    let totalAmount = cartArray.reduce((acc, curr) => {
        return acc + curr.MRP * curr.Qty
    }, 0)
    document.getElementById('total_amount2').textContent = "₹" + totalAmount

}

function increment(elem, ind) {
    cartArray.forEach((item, index) => {
        if (index === ind) {
            item.Qty += 1;
        }
    });

    localStorage.setItem('cart_list', JSON.stringify(cartArray));
    cart_display(cartArray);
}

function decrement(elem, ind) {
    cartArray.forEach((item, index) => {
        if (index === ind && item.Qty > 1) {
            item.Qty -= 1;
        }
    });

    localStorage.setItem('cart_list', JSON.stringify(cartArray));
    cart_display(cartArray);
}
// cart end 
// moblie nav bar 

const menuIcon = document.getElementById('bar');
const cate = document.getElementById('categories');

menuIcon.addEventListener('click', () => {
    cate.classList.toggle('active');
});

let order = document.getElementById('order');
order.addEventListener('click', () => {
    window.location.href = "../payment/address.html"
})