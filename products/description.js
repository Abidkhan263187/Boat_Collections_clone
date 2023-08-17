
let obj = JSON.parse(localStorage.getItem("details"));


showdetails(obj);

function showdetails(obj) {
    let details_main = document.createElement("div");
    details_main.className="details_main"

    let detail_left = document.createElement("div");
    detail_left.className = "detail-left"; 
    let path=document.createElement('p');
    path.textContent="Home >  Wireless  >  EarbudsLarge"
    let image = document.createElement("img");
    image.src = obj.image;
    detail_left.append(path,image);
    
    let detail_right = document.createElement('div');
   
    detail_right.className = "detail-right"; 
    let rat_review = document.createElement('p');
    rat_review.className = "rat-review"; 
    rat_review.textContent = "⭐"+ obj.rating + "  |  " + "1270 reviews ✔️";
    
    let itemName = document.createElement('h2');
    itemName.className = "item-name"; 
    itemName.textContent = obj.name;
    
    let desc = document.createElement('p');
    desc.className = "description"; 
    desc.textContent = "hi this is about device and it's just a random description";
    
    let price_desc = document.createElement('div');
    price_desc.className = "price-description"; 
    let desc_price = document.createElement('strong');
    desc_price.textContent = "₹"+obj.price;
    let desc_mrp = document.createElement('s');
    desc_mrp.textContent = "₹"+obj.mrp;
    price_desc.append(desc_price, desc_mrp);
    
    let desc_discount = document.createElement('p');
    desc_discount.className = "discount"; 
    desc_discount.textContent = obj.discount+"% off";
    
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
    pay_img1.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/paytm_icon_fa75a315-11a2-4c8e-a241-18af809eb683.svg?v=1682575951"
    let pay_img2 = document.createElement('img');
    pay_img2.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gpay_icon_503ebbda-a3e1-4659-af32-0686aecec227.svg?v=1682575951"
    let pay_img3 = document.createElement('img');
    pay_img3.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/phone_pe_icon_f9872d32-f8cf-43ca-8fa2-78db125fcdad.svg?v=1682575951"
    pay_right.append(pay_img1, pay_img2, pay_img3);
    pay_div.append(pay_left, pay_right);
    
    let user_love = document.createElement('div');
    let userText=document.createElement('h4')
    userText.textContent="User's love"
    user_love.className = "user-love"; 
    let love_left = document.createElement('div');
    love_left.className = "love-left"; 
    let love_left_img = document.createElement('img');
    love_left_img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536"
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
    let checkText=document.createElement('h4')
    checkText.textContent="check Delivery"
    check_delivery.className = "Check-delivery"; 
    let check_search_div = document.createElement("div");
    check_search_div.className = "check-search-div"; 
    let check_inp = document.createElement("input");
    check_inp.setAttribute('placeholder',"Enter Pin Code")
    let checkbtn = document.createElement("button");
    checkbtn.textContent = "Check";
    check_search_div.append(check_inp, checkbtn);
    check_delivery.append(check_search_div);
    
    let desc_button = document.createElement("button");
    desc_button.className = "desc-button"; 
    desc_button.textContent = "Add To Cart";
    
    detail_right.append(rat_review, itemName, desc, price_desc, desc_discount, col_div, pay_div,userText, user_love, checkText,check_delivery, desc_button);
    
    details_main.append(detail_left, detail_right);
    document.getElementById('description_main').append(details_main);
    
}

let cat=localStorage.getItem('selected_category')
console.log(cat)

name_item(obj.Category,obj.name)
function name_item(cat,name){
    document.getElementById("item_name").append(cat+" "+name)

}
console.log(obj)
feature_image(obj.image)
function feature_image(img){
    console.log(img)
   let image= document.getElementById("feature_img")
   let image2= document.getElementById("feature_img2")
   let image3= document.getElementById("feature_img3")
   image3.src=img
   image.src=img
   image2.src=img
}
