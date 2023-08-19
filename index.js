

const categories = [
    {
        name: "Wireless-Earbuds",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_1a9582f0-1870-4ab6-a0b0-5b977a8851a6_300x.png?v=1671193643"
    },
    {
        name: "NeckBands",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_83bb1e1b-8519-4bd9-83b8-92299b0b375d_300x.png?v=1661509030"
    },
    {
        name: "Smart Watch",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_eaf60560-3afb-4dda-b4c0-598078f7ce72_300x.png?v=1647767874"
    },
    {
        name: "Wireless-HeadPhones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627"
    },
    {
        name: "Wireless-Speakers",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_250_black_600x.png?v=1673001721"
    },
    {
        name: "Wireless-HeadPhones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262"
    },
    {
        name: "Wired earphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2176f9c3-7b8b-4c29-b6e9-668e45aa6c97_47337d1c-5c17-44d6-b243-f677d8b7586f_800x.png?v=1678441998"
    },
    {
        name: "Soundbars",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_03786e84-2bf4-4d79-acc7-adaf74b052f0_600x.png?v=1647671737"
    },
    {
        name: "Gaming Headphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159"
    },
    {
        name: "Party Speakers",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize-2_600x.png?v=1655187482"
    },
    {
        name: "Trimmers",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d67adff0-f513-4b4b-abdc-226ee39287a6_600x.png?v=1625045409"
    },
    {
        name: "Chargers",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-ltg-500_600x.png?v=1613736579"
    },
    {
        name: "Power banks",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_250_black_600x.png?v=1673001721"
    },
    {
        name: "Cables",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/car-charger-main-image_1e0addf3-ca17-46c3-94ac-c7b60b752dea_600x.png?v=1663154266"
    },
    {
        name: "Car Accessories",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/77081a14-84ab-4a56-9977-9c902c341e5a_900x.png?v=1625045422"
    },
    {
        name: "TRebel Range",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/141white_600x.png?v=1678862933"
    },
    {
        name: "Limited Editions",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1591_600x.png?v=1640110480"
    },
    {
        name: "View All",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/logo123_171ada23-0c67-477b-84d1-21fe1bad3909_small.png?v=1674022741"
    }
];

const best_watch = [
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call__1.jpg?v=1689751649",
        Name: "Wave Call",
        Price: 2999,
        MRP: 3999,
        Category: "Smart Watch",
        Discount: "25% off",
        Qty: 1,
        Rating: 4
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Connect_Ace.jpg?v=1687342035",
        Name: "Lunar Connect Ace",
        Price: 4999,
        MRP: 5999,
        Category: "Smart Watch",
        Discount: "16% off",
        Qty: 1,
        Rating: 3
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call_2_268181d9-df99-4732-ab67-a9bba743e01b.jpg?v=1689586538",
        Name: "Wave fury",
        Price: 1999,
        MRP: 2499,
        Category: "Smart Watch",
        Discount: "20% off",
        Qty: 1,
        Rating: 4
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Chronos.jpg?v=1690524280",
        Name: "Ultima Chromos",
        Price: 1999,
        MRP: 2499,
        Category: "Smart Watch",
        Discount: "20% off",
        Qty: 1,
        Rating: 4
    }

]
const neckbands = [
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305.jpg?v=1682573437",
        Name: "Rockerz 255 pro+",
        Price: 1499,
        MRP: 2999,
        Discount: "62% off",
        Category: "NeckBands",
        Qty: 1,
        Rating: 4
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_ea76e8ff-d95c-49da-b6c9-fca4304dce11.jpg?v=1685686978",
        Name: "Rockerz 235 pro+",
        Price: 899,
        MRP: 1999,
        Discount: "70% off",
        Category: "NeckBands",
        Qty: 1,
        Rating: 3
    },
    {
        Image: "https://www.boat-lifestyle.com/cdn/shop/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_32f4ee23-49e0-4671-a25c-d92c8e085785_300x.png?v=1646389952",
        Name: "TRebel Rockerz 255+",
        Price: 1699,
        MRP: 2499,
        Discount: "60% off",
        Category: "NeckBands",
        Qty: 1,
        Rating: 5
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_ea76e8ff-d95c-49da-b6c9-fca4304dce11.jpg?v=1685686978",
        Name: "TRebel Rockerz",
        Price: 1999,
        MRP: 2499,
        Discount: "60% off",
        Category: "NeckBands",
        Qty: 1,
        Rating: 4
    }

]
const headphones = [
    {
        Image: "https://www.boat-lifestyle.com/cdn/shop/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_931c22f0-d145-4334-9c51-e394ed8bb90b_300x.png?v=1678075255",
        Name: "Rockerz 450 Polo",
        Price: 3599,
        MRP: 4999,
        Discount: "20% off",
        Category: "Wireless-HeadPhones",
        Qty: 1,
        Rating: 4
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/immortal_1300.gif?v=1691387451",
        Name: "Immortal 1300",
        Price: 1599,
        MRP: 2999,
        Discount: "50% off",
        Category: "Wireless-HeadPhones",
        Qty: 1,
        Rating: 3
    },
    {
        Image: "https://www.boat-lifestyle.com/cdn/shop/products/rockerz-410-black_300x.png?v=1613457276",
        Name: "Rockerz 410",
        Price: 1499,
        MRP: 2499,
        Discount: "30% off",
        Category: "Wireless-HeadPhones",
        Qty: 1,
        Rating: 5
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-450-Batman-DC-Edition.jpg?v=1682579854",
        Name: "Rockerz 450 Batman",
        Price: 2999,
        MRP: 3499,
        Discount: "40% off",
        Category: "Wireless-HeadPhones",
        Qty: 1,
        Rating: 4
    }

]
const speakers = [
    {
        Image: "https://www.boat-lifestyle.com/cdn/shop/products/main-img_Black_300x.png?v=1617170785",
        Name: "Rugby Plus",
        Price: 999,
        MRP: 4999,
        Discount: "25% off",
        Category: "Wireless-Speakers",
        Qty: 1,
        Rating: 5
    },
    {
        Image: "https://www.boat-lifestyle.com/cdn/shop/products/74a6b20d-9842-49da-b279-022812b81e1f_300x.png?v=1673001663",
        Name: "Stone 350",
        Price: 1599,
        MRP: 3499,
        Discount: "45% off",
        Category: "Wireless-Speakers",
        Qty: 1,
        Rating: 3
    },
    {
        Image: "https://www.boat-lifestyle.com/cdn/shop/products/ab154db8-8ffc-4464-a37a-31f309893bfe_300x.png?v=1625046393",
        Name: "Stone 180",
        Price: 1299,
        MRP: 2499,
        Discount: "30% off",
        Category: "Wireless-Speakers",
        Qty: 1,
        Rating: 5
    },
    {
        Image: "https://www.boat-lifestyle.com/cdn/shop/files/Stone_190_Packaging_3.1-removebg-preview_300x.png?v=1690802554",
        Name: "Stone 190",
        Price: 999,
        MRP: 2999,
        Discount: "40% off",
        Category: "Wireless-Speakers",
        Qty: 1,
        Rating: 3
    }

]
const airbuds = [
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif-1-6381642bb4.gif?v=1685013470",
        Name: "Immortal 171",
        Price: 1999,
        MRP: 4999,
        Discount: "30% off",
        Category: "Wireless-Earbuds",
        Qty: 1,
        Rating: 5,

    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
        Name: "Airpods 161",
        Price: 1099,
        MRP: 1499,
        Discount: "40% off",
        Category: "Wireless-Earbuds",
        Qty: 1,
        Rating: 4
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141_d277995b-31ae-420d-b5b4-1161515335ed.jpg?v=1687428689",
        Name: "Airpods 141 pro",
        Price: 1399,
        MRP: 2199,
        Discount: "30% off",
        Category: "Wireless-Earbuds",
        Qty: 1,
        Rating: 5
    },
    {
        Image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
        Name: "Airpods 131 pro",
        Price: 1499,
        MRP: 2999,
        Discount: "30% off",
        Category: "Wireless-Earbuds",
        Qty: 1,
        Rating: 4
    }

]

let cartArray = JSON.parse(localStorage.getItem('cart_list')) || []


// crousel part 
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
prevButton.addEventListener('click', () => { prevSlide() })
const nextButton = document.querySelector('.carousel-button.next');
nextButton.addEventListener('click', () => { nextSlide() })
let currentIndex = 0;
let slideshowInterval;

function prevSlide() { currentIndex = (currentIndex - 1 + 6) % 6; updateCarousel(); }
function nextSlide() { currentIndex = (currentIndex + 1) % 6; updateCarousel(); }

function updateCarousel() {
    const translateValue = `translateX(-${currentIndex * 100}%)`;
    carousel.style.transform = translateValue;
}

function startSlideshow() {
    slideshowInterval = setInterval(nextSlide, 3000); // Change slide every 2 seconds
}
startSlideshow();
// crousel part end 

// categories part start 
display_categories(categories)
function display_categories(categories) {
    categories.map((elem, ind) => {

        let cat_div = document.createElement("div");

        cat_div.setAttribute('class', 'cat_div')

        let name = document.createElement("a")
        name.setAttribute('class', 'cat_name')
        name.setAttribute('href', './products/product.html')
        name.textContent = elem.name;
        name.addEventListener('click', () => {
            localStorage.setItem('selected_category', elem.name)

        })
        let image = document.createElement("img");
        image.setAttribute('class', 'cat_img')
        image.src = elem.image;

        cat_div.append(name, image);
        document.getElementById('cat_main').append(cat_div);


    })

}
// categories part end 

// best watch start
let watches = document.getElementById('watch_main')
let nexkband = document.getElementById('neck_main')
let headphone = document.getElementById('heads_main')
let speak = document.getElementById('speakers_main')
let buds = document.getElementById('buds_main')

display_best_watch(best_watch, watches)
display_best_watch(neckbands, nexkband)
display_best_watch(headphones, headphone)
display_best_watch(speakers, speak)
display_best_watch(airbuds, buds)


function display_best_watch(best_watch, cat_prod) {
    best_watch.map((elem, ind) => {

        let watch_div = document.createElement('div')
        watch_div.setAttribute('class', 'watch_div')


        let img_div = document.createElement('div')
        img_div.setAttribute('class', 'img_div')

        let gotoDetails = document.createElement('a')
        gotoDetails.setAttribute('href', './products/description.html')

        let image = document.createElement('img');
        image.src = elem.Image
        image.addEventListener('click', () => {
            console.log("yes")
            localStorage.setItem('details', JSON.stringify(elem))
        })
        gotoDetails.append(image)

        img_div.append(gotoDetails)

        let hr = document.createElement('hr')

        let watch_details = document.createElement('div');
        watch_details.setAttribute('class', 'watch-details')
        let rating = document.createElement('strong');
        rating.style.color = "gray.700"
        rating.textContent = "⭐" + elem.Rating;
        let name = document.createElement('h4')

        name.textContent = elem.Name;
        watch_details.append(rating, name);

        let price_div = document.createElement('div');
        price_div.setAttribute('class', 'price_part')
        let price = document.createElement('strong')
        price.textContent = "₹" + elem.Price;
        let mrp = document.createElement('s');
        mrp.textContent = "₹" + elem.MRP;
        let discount = document.createElement('p')
        discount.setAttribute('class', "percent")
        discount.textContent = elem.Discount;



        let btn = document.createElement('button')
        btn.setAttribute('class', 'addbtn')
        btn.textContent = "Add To Cart"
        btn.addEventListener('click', () => {
            addtocart(elem)
        })



        price_div.append(price, mrp, discount)

        watch_div.append(img_div, hr, watch_details, price_div, btn)
        cat_prod.append(watch_div)

    })



}
//best watch end

function addtocart(obj) {
    cartArray.push(obj);
    localStorage.setItem('cart_list', JSON.stringify(cartArray));

    cart_display(cartArray)
}

// navbar functionality

function goToWL() {
    var selectedcategory = "Wireless-Earbuds";
    localStorage.setItem("selected_category", "Wireless-Earbuds");
}
function goToWH() {
    var selectedcategory = "NeckBands";
    localStorage.setItem("selected_category", "NeckBands");
}
function goToW() {
    var selectedcategory = "Smart Watch";
    localStorage.setItem("selected_category", "Smart Watch");
}
function goToBW() {
    var selectedcategory = "NeckBands";
    localStorage.setItem("selected_category", "NeckBands");
}
function goToSS() {
    var selectedcategory = "Wireless-Speakers";
    localStorage.setItem("selected_category", "Wireless-Speakers");
}
function goToLE() {
    var selectedcategory = "Wireless-HeadPhones";
    localStorage.setItem("selected_category", "Wireless-HeadPhones");
}

//    cart start 
let cartToggle = document.getElementById('cart');
let side_value = document.getElementById('sidebar')
let close_cart=document.getElementById('close_cart')

close_cart.addEventListener("click",()=>{
        side_value.classList.remove('isOpen');
})

cartToggle.addEventListener('click', () => {
        side_value.classList.add('isOpen');
 
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
        return acc + curr.Price *curr.Qty
    }, 0)
    document.getElementById('total_amount').textContent = "₹"+totalAmount

}
function total_cart2() {
    document.getElementById('total_amount2').textContent = 0
    let totalAmount = cartArray.reduce((acc, curr) => {
        return acc + curr.MRP *curr.Qty
    }, 0)
    document.getElementById('total_amount2').textContent = "₹"+totalAmount

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