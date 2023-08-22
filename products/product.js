// import navbar from "../componenets/navbar"

var productlistval = [{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Beige_large.png?v=1660370349",
    Name: "Wave Select Smartwatch",
    Price: 2099,
    MRP: 6900,
    Discount: "80% off",
    Qty: 1,
    Rating: 4.6,
    Discription: " 1.69(4.29 cm) Colour HD Display, 20+ Active Sport Modes, Heart Rate & SpO2 Monitor, 10 Day Battery Life",
    Category: "Smart Watch",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black_bdca4987-8550-461d-bb37-b1bae02009b4_600x.png?v=1678969539",
    Name: "Wave Lite",
    Price: 1499,
    MRP: 6900,
    Discount: "79% off",
    Qty: 1,
    Rating: 4.6,
    Discription: " 1.69(4.29 cm) Colour HD Display, 20+ Active Sport Modes, Heart Rate & SpO2 Monitor, 10 Day Battery Life",
    Category: "Smart Watch",
    Status: "Out-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/wave-call-3_300x.png?v=1658295343",
    Name: "Wave Call",
    Price: 1499,
    MRP: 7990,
    Discount: "80% off",
    Qty: 1,
    Rating: 4.9,
    Discription: "Bluetooth Calling Smartwatch with 1.69 (4.29 cm) HD Curved Display, 150+ Watch Faces, Heart Rate & SPO2 Monitoring",
    Category: "Smart Watch",
    Status: "In-Stock",
},
// Airpods
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
    Name: "Airdopes 131",
    Price: 999,
    MRP: 2990,
    Discount: "67% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers and IWP Technology, 650mah C type Charging Case",
    Category: "Wireless-Earbuds",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141_d277995b-31ae-420d-b5b4-1161515335ed.jpg?v=1687428689",
    Name: "Airdopes 141",
    Price: 1299,
    MRP: 4490,
    Discount: "79% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Equipped with 8mm drivers, Upto 42 Hours Total Playback, ENx™ Technology, ASAPTM Charge",
    Category: "Wireless-Earbuds",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-163.jpg?v=1682408982",
    Name: "Airdopes 163",
    Price: 1399,
    MRP: 2490,
    Discount: "44% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Wireless Earbuds with Massive Playback of upto 17 Hour, IPX5 Water & Sweat Resistance, IWP Technology, Type C Interface",
    Category: "Wireless-Earbuds",
    Status: "In-Stock",
},
//NeckBands
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-red_de759211-e939-4ce9-9a77-c68705104ea7_600x.png?v=1667648184",
    Name: "TRebel Rockerz 235 V2",
    Price: 1199,
    MRP: 2990,
    Discount: "60% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Wireless Earphone with 10mm Drivers, 8 Hours Non-Stop Music, Single Command Assist, Fast Charging",
    Category: "NeckBands",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untblueitled-1_600x.png?v=1661509030",
    Name: "Rockerz 103 Pro",
    Price: 899,
    MRP: 2490,
    Discount: "64% off",
    Qty: 1,
    Rating: 4.9,
    Discription: "Wireless Earphones with 10 mm Drivers, Single Press Voice Assistant, Up To 20 hrs Uninterrupted, ENx™ Technology",
    Category: "NeckBands",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_800x.png?v=1673005509",
    Name: "Rockerz 255 Pro+",
    Price: 1299,
    MRP: 3990,
    Discount: "67% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Bluetooth Earphone with 10mm drivers, Up to 40H Nonstop Playback, Type-C charging, ASAP Charge",
    Category: "NeckBands",
    Status: "In-Stock",
},
//Wireless Headphones
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
    Name: "Rockerz 518",
    Price: 1299,
    MRP: 3990,
    Discount: "67% off",
    Qty: 1,
    Rating: 4.9,
    Discription: "Wireless Headphone with Dynamic 50mm Driver, Up To 20 Hours Of Playtime, Easy Control and Lightweight",
    Category: "Wireless-HeadPhones",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c9b304e6-1451-4ac7-95a1-5aa1cf51df05_45954dbd-6b69-4ae5-bed5-27cb1780d391_300x.png?v=1629538797",
    Name: "Rockerz 558",
    Price: 1999,
    MRP: 2999,
    Discount: "60% off",
    Qty: 1,
    Rating: 5.0,
    Discription: "boAt Rockerz 558",
    Category: "Wireless-HeadPhones",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/06bd8915-8db7-4575-9558-c97bf050d8d7_600x.png?v=1625044994",
    Name: "Rockerz 400",
    Price: 1499,
    MRP: 2990,
    Discount: "50% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Wireless Bluetooth Headphone with 40mm Dyanmic Drivers, 8 Hours Non-Stop Playback, Lightweight & Portable",
    Category: "Wireless-HeadPhones",
    Status: "In-Stock",
},
//Wireless Speakers
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_250_black_600x.png?v=1673001721",
    Name: "Stone 250",
    Price: 1499,
    MRP: 3990,
    Discount: "62% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "5W Portable Wireless Speaker with RGB LED, 9 Hours of Playtime, IPX7 Water Resistant",
    Category: "Wireless-Speakers",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_6f20b409-43b2-43d5-96ac-e9f8a26d79a8_600x.png?v=1658436783",
    Name: "Stone 1000v2",
    Price: 3499,
    MRP: 6990,
    Discount: "50% off",
    Qty: 1,
    Rating: 5.0,
    Discription: "14W Powerful Stereo Sound, Up to 8hrs Nonstop Playback, Travel & Party Booster, 3000mah Battery",
    Category: "Wireless-Speakers",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/74a6b20d-9842-49da-b279-022812b81e1f_600x.png?v=1673001663",
    Name: "Stone 350",
    Price: 1699,
    MRP: 3490,
    Discount: "51% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Wireless Speaker with 10W Stereo Sound, 12H Nonstop Playtime, Lightweight Design, BT, TF Card & AUX Compatible",
    Category: "Wireless-Speakers",
    Status: "In-Stock",
},
//Smart Watch-2
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WaveCall.197_d6cce9fa-8242-443a-b1e1-0fefdd1751c8_300x.png?v=1678190676",
    Name: "TRebel Wave Call",
    Price: 1799,
    MRP: 7990,
    Discount: "77% off",
    Qty: 1,
    Rating: 4.6,
    Discription: "TRebel Wave Call",
    Category: "Smart Watch",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f30681d9-fddb-4997-bfcb-503fcc258a5c_600x.png?v=1646392933",
    Name: "Matrix",
    Price: 1799,
    MRP: 11990,
    Discount: "85% off",
    Qty: 1,
    Rating: 4.6,
    Discription: "1.65 (4.18 cm) colour AMOLED Display, Fitness Tracking, 100+ Cloud Watch Faces",
    Category: "Smart Watch",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Wavebeatcall1.2_700x.png?v=1674561165",
    Name: "Wave Beat Call",
    Price: 1799,
    MRP: 7990,
    Discount: "79% off",
    Qty: 1,
    Rating: 4.9,
    Discription: "Bluetooth Calling Smart Watch with 1.69 (4.29 cm) HD Display, 600+ Cloud Watch faces, Live",
    Category: "Smart Watch",
    Status: "Out-Stock",
},
//Airpods-2
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_8202f335-95e8-4bc4-9889-ea9beb8292e4_300x.png?v=1664103052",
    Name: "Airdopes 183 ",
    Price: 1599,
    MRP: 2990,
    Discount: "47% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Wireless Bluetooth Earbuds with 10mm Driver, Upto 90 min Playback in 10 min Charge, ASAP Charge Technology, BEAST™ mode",
    Category: "Wireless-Earbuds",
    Status: "Out-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-pink_600x.png?v=1678773275",
    Name: "Airdopes 121 v2",
    Price: 1199,
    MRP: 2999,
    Discount: "60% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "In-Ear Earbuds v2 with 8mm driver, LED Case Battery Indicator, 380mAh Pocket Friendly Charging",
    Category: "Wireless-Earbuds",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c5f9fe7c-c012-4d93-ba0c-b25267c0560d_300x.png?v=1647426797",
    Name: "Airdopes 411 ANC",
    Price: 1999,
    MRP: 4990,
    Discount: "60% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Noise-Cancelling Earbuds with 10mm Drivers, ASAPTM Charge Technology, Up to 25dB ANC, ENx™ Technology, 17.5 Hours Playback",
    Category: "Wireless-Earbuds",
    Status: "In-Stock",
},
//Neckbands-2
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e0d541c5-72de-4f54-a19b-1c324082742a_600x.png?v=1654195093",
    Name: "Rockerz 260",
    Price: 1299,
    MRP: 2499,
    Discount: "48% off",
    Qty: 1,
    Rating: 4.9,
    Discription: "Wireless Bluetooth Earphone with Insta Wake & Pair, Quad Mics with ENx Technology & Asap Charge",
    Category: "NeckBands",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Packaging1.3682_700x.png?v=1675751805",
    Name: "Rockerz 103 Pro",
    Price: 899,
    MRP: 2490,
    Discount: "64% off",
    Qty: 1,
    Rating: 4.9,
    Discription: "Wireless Earphones with 10 mm Drivers, Single Press Voice Assistant, Up To 20 hrs Uninterrupted, ENx™ Technology",
    Category: "NeckBands",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255r-red_600x.png?v=1613731612",
    Name: "Rockerz 255R",
    Price: 1299,
    MRP: 2990,
    Discount: "57% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "boAt Rockerz 255R",
    Category: "NeckBands",
    Status: "Out-Stock",
},
//Wireless Headphones2
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e5881832-36f8-4c1c-a767-10f2c2a55a02_600x.png?v=1625046573",
    Name: "Rockerz 370",
    Price: 749,
    MRP: 2499,
    Discount: "70% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Wireless Headphone with 40mm Dynamic Driver,Bluetooth & AUX Connectivity, Upto 8 hrs Music",
    Category: "Wireless-HeadPhones",
    Status: "Out-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/013a08f8-85c4-49cf-914a-aa6586249b09_600x.png?v=1624882639",
    Name: "TRebel Rockerz 450",
    Price: 1499,
    MRP: 3990,
    Discount: "62% off",
    Qty: 1,
    Rating: 5.0,
    Discription: "Bluetooth Headphone with 40mm Driver, 08 Hours Non-Stop Playback, Bluetooth V5.0",
    Category: "Wireless-HeadPhones",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-410-black_600x.png?v=1613457276",
    Name: "Rockerz 410",
    Price: 999,
    MRP: 2990,
    Discount: "67% off",
    Qty: 1,
    Rating: 5.0,
    Discription: "boAt Rockerz 410",
    Category: "Wireless-HeadPhones",
    Status: "In-Stock",
},
//Wireless Speakers
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize-2_600x.png?v=1655187482",
    Name: "Stone 135",
    Price: 899,
    MRP: 1990,
    Discount: "55% off",
    Qty: 1,
    Rating: 4.8,
    Discription: "Portable Bluetooth Speaker with up to 11 HRS Playback & 5W RMS Immersive Sound, IPX 4 Water Resistant",
    Category: "Wireless-Speakers",
    Status: "Out-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_8549ad38-acec-45d6-bba4-8b202a9bfdc1_600x.png?v=1673001484",
    Name: "Stone 500",
    Price: 1999,
    MRP: 299,
    Discount: "33% off",
    Qty: 1,
    Rating: 5.0,
    Discription: "Portable Bluetooth Speaker with 10W RMS Stereo Sound, RGB Lights, Bluetooth v5.0, AUX, USB & FM mode",
    Category: "Wireless-Speakers",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/stone-1010-black_600x.png?v=1673002262",
    Name: "Stone 1010",
    Price: 3199,
    MRP: 6990,
    Discount: "54% off",
    Qty: 1,
    Rating: 5.0,
    Discription: "Party Speaker with 14W Output, 10 Hours of Playtime, IPX5 Water Resistant, 3000mah Battery",
    Category: "Wireless-Speakers",
    Status: "In-Stock",
},
//Smart Watch-3
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WaveCall.197_d6cce9fa-8242-443a-b1e1-0fefdd1751c8_300x.png?v=1678190676",
    Name: "TRebel Wave Call",
    Price: 1799,
    MRP: 7990,
    Discount: "77% off",
    Qty: 1,
    Rating: 4.6,
    Discription: "TRebel Wave Call",
    Category: "Smart Watch",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f30681d9-fddb-4997-bfcb-503fcc258a5c_600x.png?v=1646392933",
    Name: "Matrix",
    Price: 1799,
    MRP: 11990,
    Discount: "85% off",
    Qty: 1,
    Rating: 4.6,
    Discription: "1.65 (4.18 cm) colour AMOLED Display, Fitness Tracking, 100+ Cloud Watch Faces",
    Category: "Smart Watch",
    Status: "In-Stock",
},
{
    Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Wavebeatcall1.2_700x.png?v=1674561165",
    Name: "Wave Beat Call",
    Price: 1799,
    MRP: 7990,
    Discount: "79% off",
    Qty: 1,
    Rating: 4.9,
    Discription: "Bluetooth Calling Smart Watch with 1.69 (4.29 cm) HD Display, 600+ Cloud Watch faces, Live",
    Category: "Smart Watch",
    Status: "Out-Stock",
},
]
let cartArray = JSON.parse(localStorage.getItem('cart_list')) || []


var selectedcategory2 = localStorage.getItem("selected_category");

if (selectedcategory2 === "Smart Watch") {
    homepagecategory(selectedcategory2);
}
else if (selectedcategory2 === "Wireless-Earbuds") {
    homepagecategory(selectedcategory2);
}
else if (selectedcategory2 === "NeckBands") {
 
    homepagecategory(selectedcategory2);
}
else if (selectedcategory2 === "Wireless-HeadPhones") {
    homepagecategory(selectedcategory2);
}
else if (selectedcategory2 === "Wireless-Speakers") {
    homepagecategory(selectedcategory2);
}
else {
    displayproducts(productlistval);
}



function displayproducts(list) {
    document.querySelector("#parent").textContent = "";
    list.map(function (elem, index) {
        var div = document.createElement("div");
        div.setAttribute("class", "child");

        var div1 = document.createElement("div");
        div1.setAttribute("class", "image");

        let image_anchor = document.createElement("a");
        image_anchor.setAttribute('href', './description.html')
        var image = document.createElement("img");
        image.setAttribute("src", elem.Image);
        image.setAttribute("alt", elem.Name);
        image.addEventListener('click', () => {
            localStorage.setItem('details', JSON.stringify(elem))
        })
        image_anchor.append(image)

        div1.append(image_anchor);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "details");

        var anch1 = document.createElement("a");
        anch1.setAttribute("href", "product2.html");
        anch1.setAttribute("class", "product_name");
        anch1.textContent = elem.Name;
        anch1.addEventListener("click", function () {
            details(elem);
        });

        var div3 = document.createElement("div");
        div3.setAttribute("class", "price_details")

        var h42 = document.createElement("h4");
        h42.setAttribute("class", "price");
        h42.textContent = "₹" + elem.Price;

        var h43 = document.createElement("h4");
        h43.setAttribute("class", "percentoff");
        h43.textContent = elem.Discount;

        var h44 = document.createElement("h4");
        h44.textContent = "₹" + elem.MRP;

        div3.append(h42, h43, h44);

        var div4 = document.createElement("div");
        div4.setAttribute("class", "reviews");

        var p1 = document.createElement("p");
        p1.setAttribute("class", "product_rating");
        p1.textContent = elem.Rating;

        div4.append(p1);

        var p2 = document.createElement("p");
        p2.textContent = "Offer Extra 10% discount";

        var btn;

        if (elem.Status === "In-Stock") {
            btn = document.createElement("button");
            btn.setAttribute("class", "acbtn");
            btn.textContent = "ADD TO CART";
            btn.addEventListener("click", function () {
                addtocart(elem);
            })
        }
        else {
            btn = document.createElement("div");
            btn.setAttribute("class", "nmdiv");
            var nmbtn = document.createElement("a");
            nmbtn.setAttribute("href", "../notify/notify.html");
            nmbtn.setAttribute("class", "nmanchor");
            nmbtn.textContent = "NOTIFY ME";
            nmbtn.addEventListener("click", function () {
                notifyme(elem);
            })
            btn.append(nmbtn);
        }

        div2.append(anch1, div3, div4, p2, btn);
        div.append(div1, div2);
        document.querySelector("#parent").append(div);

    })
}

function addtocart(obj) {
    cartArray.push(obj);
    localStorage.setItem('cart_list', JSON.stringify(cartArray));

    cart_display(cartArray)
}

//Filter Function
function filterproducts() {
    var selected = document.getElementById("showfilters").value;
    var h1 = document.querySelector("h1");


    if (selected === "") {
        h1.textContent = "Our Products";
    }
    else {
        h1.textContent = selected;
    }
    if (selected === "Out-Stock") {
        h1.textContent = "Oops! These Products Are Out Of Stock"
    }
    var filtered = productlistval.filter(function (elem) {
        if (selected === "") {
            return true;
        }
        else {
            return elem.Category === selected;

        }
    })
    displayproducts(filtered);
}
//Sort
function sortproducts() {
    var selectedsort = document.getElementById("showsort").value;
    if (selectedsort === "Ascending") {
        productlistval.sort(function (a, b) {
            if (a.Name > b.Name) {
                return 1;
            }
            if (a.Name < b.Name) {
                return -1;
            }
            return 0;
        })
    }
    else if (selectedsort === "Decending") {
        productlistval.sort(function (a, b) {
            if (a.Name > b.Name) {
                return -1;
            }
            if (a.Name < b.Name) {
                return 1;
            }
            return 0;
        })
    }
    else if (selectedsort === "hightolow") {
        productlistval.sort(function (a, b) {
            if (a.Price > b.Price) {
                return -1;
            }
            if (a.Price < b.Price) {
                return 1;
            }
            return 0;
        })
    }
    else {
        productlistval.sort(function (a, b) {
            if (a.Price > b.Price) {
                return 1;
            }
            if (a.Price < b.Price) {
                return -1;
            }
            return 0;
        })
    }
    displayproducts(productlistval);
}

function homepagecategory(str) {
    // console.log(str)
    var filtered2 = productlistval.filter(function (elem) {
        return elem.Category === str;
    })
    var h1 = document.querySelector("h1");
    h1.textContent = selectedcategory2;
    displayproducts(filtered2);
}

//Notify Me
var notifyproduct = JSON.parse(localStorage.getItem("notify_list")); 
function  notifyme(elem){
    // console.log("yes")
    // notifyproduct.push(elem);
    localStorage.setItem("notify_list",JSON.stringify(elem));
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
    if (cartArray.length > 0 && cartArray) {
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


//moblie-nav-bar 

const menuIcon = document.getElementById('bar');
const cat = document.getElementById('categories');
menuIcon.addEventListener('click', () => {
    cat.classList.toggle('active');
});

let order = document.getElementById('order');
order.addEventListener('click', () => {
    window.location.href = "../payment/address.html"
})