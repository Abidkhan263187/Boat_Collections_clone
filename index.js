import navbar from "./componenets/navbar.js";
const categories = [
    {
        name: "True Wireless Earbuds",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_1a9582f0-1870-4ab6-a0b0-5b977a8851a6_300x.png?v=1671193643"
    },
    {
        name: "Wireless Bluetooth",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_83bb1e1b-8519-4bd9-83b8-92299b0b375d_300x.png?v=1661509030"    },
    {
        name: "Smart Watches",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_eaf60560-3afb-4dda-b4c0-598078f7ce72_300x.png?v=1647767874"    },
    {
        name: "Wired Headphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627"    },
    {
        name: "Wireless Speakers",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_250_black_600x.png?v=1673001721"    },
    {
        name: "Wireless Headphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262"    },
    {
        name: "Wired earphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2176f9c3-7b8b-4c29-b6e9-668e45aa6c97_47337d1c-5c17-44d6-b243-f677d8b7586f_800x.png?v=1678441998"    },
    {
        name: "Soundbars",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_03786e84-2bf4-4d79-acc7-adaf74b052f0_600x.png?v=1647671737"    },
    {
        name: "Gaming Headphones",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159"    },
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


let nav= document.getElementById('nav');
nav.innerHTML= navbar();
console.log("yes")

// crousel part 
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
prevButton.addEventListener('click',()=>{
    prevSlide()
})
const nextButton = document.querySelector('.carousel-button.next');
nextButton.addEventListener('click',()=>{
    nextSlide()
})
let currentIndex = 0;
let slideshowInterval;

function prevSlide() {
  currentIndex = (currentIndex - 1 + 6) % 6;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 6;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = `translateX(-${currentIndex * 100}%)`;
  carousel.style.transform = translateValue;
}

function startSlideshow() {
  slideshowInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
}

startSlideshow(); 
// crousel part end 

// categories part start 
display_categories(categories)

function display_categories(categories){
    categories.map((elem,ind)=>{

        let cat_div=document.createElement("div");
        cat_div.setAttribute('class','cat_div')
        let name=document.createElement("h5")
        name.setAttribute('class','cat_name')
        name.textContent=elem.name;
        let image=document.createElement("img");
        image.setAttribute('class','cat_img')
        image.src=elem.image;

        cat_div.append(name,image);
        document.getElementById('cat_main').append(cat_div);

        
    })

}
// categories part end 