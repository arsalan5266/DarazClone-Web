// FlashSale dynamic
let data = [
  {
    "id": 6,
    "image": "https://static-01.daraz.pk/p/a77b8e82a6024336432ec3cba57af459.jpg",
    "description": "product1: Blue color baby dinosaur cloth organizer",
    "price": 300
  },
  {
    "id":7,
    "image": "https://static-01.daraz.pk/p/656f50d69333b0c6922bd4f6ba8a6511.jpg",
    "description": "product2: Tws Air pods_pro Earbuds / Environmental Noise",
    "price": 1222
  },
  {
    "id":8,
    "image": "https://static-01.daraz.pk/p/3bfaa8be240de0fa89760bc5d30e431a.jpg",
    "description": "product3: Slim Card Holder Wallet Forr men's And boys",
    "price": 1099
  },
  {
    "id":9,
    "image":"https://static-01.daraz.pk/p/d6948194f4c13f9b25355d1820ae98e0.jpg",
    "description": "product4: Roshni BINBOND Luxuary Men's Fashion Watch",
    "price": 690
  },
  {
    "id":10,
    "image":"https://static-01.daraz.pk/p/b49f35fa6e771d5ae4e0694dea38db7e.jpg",
    "description":"product5: Engrave On A Coustem Ring Make A Ring With Your Nam",
    "price":3000
  }
]

const container1 = document.getElementById('data');

        data.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('flashCard');

            const link = document.createElement('a');
            link.href = `singleProduct.html?id=${item.id}`;
            productDiv.appendChild(link);

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = "Product Image";
            img.addEventListener('click', () => {
              sessionStorage.setItem('clickedItemId', item.id);
              window.location.href = link.href;
            });

            productDiv.appendChild(img);
            const description = document.createElement('p');
            description.classList.add('flashTitle');
            description.textContent = item.description;
            productDiv.appendChild(description);

            const price = document.createElement('p');
            price.classList.add('flashPrice');
            price.textContent = 'Rs. ' + item.price;
            productDiv.appendChild(price);

            container1.appendChild(productDiv);
        });




 
// Categories dynamic.

const catCard = [
  {
    "image": "https://static-01.daraz.pk/p/7f334bb352046900528b7f261ace61d7.jpg",
    "title": "Early Learning"
  },
  {
    "image": "https://static-01.daraz.pk/p/2276de6eed6e5d6180aebcefb829483d.jpg",
    "title": "Space Savers"
  },
  {
    "image": "https://static-01.daraz.pk/p/d572968d84006489031b88f08352d49e.jpg",
    "title": "Fairy Lights"
  },
  {
    "image": "https://static-01.daraz.pk/p/c53924104d5da025372038f0e34559ea.jpg",
    "title": "Casual"     
  },
  {
    "image": "https://static-01.daraz.pk/p/fbbbfdc5fde4aa8ea24a396ea8818410.jpg",
    "title": "Bathroom Scale"        
  },
  {
    "image": "https://pk-live-21.slatic.net/kf/S272e0a86ebf0483f9dc57c5782501819k.jpg",
    "title": "Studio Headphones"        
  },
  {
    "image": "https://static-01.daraz.pk/p/mdc/a1be1d5d1f34e1f95479e0696f477bf1.jpg",
    "title": "Shampoo"       
  },
  {
    "image": "https://static-01.daraz.pk/p/mdc/c84d6954e764c1e95ff4286ef55583c4.jpg",
    "title": "Serum & Essence"       
  },
  {
    "image": "https://static-01.daraz.pk/p/faf7db0731e13b59996225be5911e4b4.jpg",
    "title": "Wirless Earbudds"    
  },
  {
    "image": "https://static-01.daraz.pk/p/9dbe184e2d1d38a3f5b21c41f3b86a17.jpg",
    "title": "Hair Accessories"        
  },
  {
    "image": "https://static-01.daraz.pk/p/5408e3817c65c83266f045df46abc0a4.jpg",
    "title": "Oil"      
  },
  {
    "image": "https://static-01.daraz.pk/p/fd76b8242e0a438fb7c74db255153252.jpg",
    "title": "Black Tea"        
  },
  {
    "image": "https://static-01.daraz.pk/p/e17b3a319ac6f157bec6582e7a65bb61.jpg",
    "title": "Dresses"       
  },
  {
    "image": "https://static-01.daraz.pk/p/d97cc1a04a3a8168ad968536824a31d6.jpg",
    "title": "Flavoring Syrups"       
  }
];

const container = document.querySelector('.catCard');

catCard.forEach(card => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cat-img');
    
    const link = document.createElement('a');
    link.href = `singleProduct.html?id=${card.id}`;
    cardContainer.appendChild(link);
    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.title;
    img.addEventListener('click', () => {
      console.log(`Clicked image ID: ${card.id}`);
      window.location.href = link.href;
    });

    const title = document.createElement('span');
    title.innerText = card.title;
    title.classList.add('catTitle');

    cardContainer.appendChild(img);
    cardContainer.appendChild(title);
    container.appendChild(cardContainer);
});

// Just For You dynamic
let justForYou = [
  {
    "id" : 1,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 2,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {
    "id" : 3,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 4,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
  {
    "id" : 5,
    "image": "https://static-01.daraz.pk/p/f27b77bd33e0ae78361fae76a7059230.jpg_200x200q80-product.jpg_.webp",
    "description": "Original Flawless Facial Hair Remover Machine",
    "price": 455
  },
  {
    "id" : 6,
    "image": "https://static-01.daraz.pk/p/a3d786a84cb8dae43d821569060a0231.jpg_200x200q80-product.jpg_.webp",
    "description": "Audionic Airbud 425 Quad Mic, ENC Wireless Earbud",
    "price": 3999
  },
  {
    "id" : 7,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "product7: M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 8,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "product8: Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {
    "id" : 9,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "product9: T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 10,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "product10: Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
  {
    "id" : 11,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 12,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {
    "id" : 13,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 14,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
  {
    "id" : 15,
    "image": "https://static-01.daraz.pk/p/f27b77bd33e0ae78361fae76a7059230.jpg_200x200q80-product.jpg_.webp",
    "description": "Original Flawless Facial Hair Remover Machine",
    "price": 455
  },
  {
    "id" : 16,
    "image": "https://static-01.daraz.pk/p/a3d786a84cb8dae43d821569060a0231.jpg_200x200q80-product.jpg_.webp",
    "description": "Audionic Airbud 425 Quad Mic, ENC Wireless Earbud",
    "price": 3999
  },
  {
    "id" : 17,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "product7: M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 18,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "product8: Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {
    "id" : 19,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "product9: T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 20,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "product10: Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
  {
    "id" : 21,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 22,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {
    "id" : 23,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 24,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
  {
    "id" : 25,
    "image": "https://static-01.daraz.pk/p/f27b77bd33e0ae78361fae76a7059230.jpg_200x200q80-product.jpg_.webp",
    "description": "Original Flawless Facial Hair Remover Machine",
    "price": 455
  },
  {
    "id" : 26,
    "image": "https://static-01.daraz.pk/p/a3d786a84cb8dae43d821569060a0231.jpg_200x200q80-product.jpg_.webp",
    "description": "Audionic Airbud 425 Quad Mic, ENC Wireless Earbud",
    "price": 3999
  },
  {
    "id" : 27,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "product7: M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 28,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "product8: Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {
    "id" : 29,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "product9: T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 30,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "product10: Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
  {
    "id" : 31,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 32,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {
    "id" : 33,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 34,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
  {
    "id" : 35,
    "image": "https://static-01.daraz.pk/p/f27b77bd33e0ae78361fae76a7059230.jpg_200x200q80-product.jpg_.webp",
    "description": "Original Flawless Facial Hair Remover Machine",
    "price": 455
  },
  {
    "id" : 36,
    "image": "https://static-01.daraz.pk/p/a3d786a84cb8dae43d821569060a0231.jpg_200x200q80-product.jpg_.webp",
    "description": "Audionic Airbud 425 Quad Mic, ENC Wireless Earbud",
    "price": 3999
  },
  {
    "id" : 37,
    "image": "https://static-01.daraz.pk/p/a5fe0bee2cbe920603ebcf2a0b9d8367.jpg_200x200q80-product.jpg_.webp",
    "description": "product7: M10 Wireless Headphone Earbuds Touch Control",
    "price": 897
  },
  {
    "id" : 38,
    "image": "https://static-01.daraz.pk/p/78a15be7001c4c783ed9dbbad8773030.jpg_200x200q80-product.jpg_.webp",
    "description": "product8: Professional Vintage Dragon Style Trimmer",
    "price": 743
  },
  {"id" : 39,
    "image": "https://static-01.daraz.pk/p/63d0a865a74e7142b5734c96dea3bc74.jpg_200x200q80-product.jpg_.webp",
    "description": "product9: T900 Ultra Smart Watch / T900 Ultra 2 SmartWatch",
    "price": 1799
  },
  {
    "id" : 40,
    "image": "https://static-01.daraz.pk/p/96c8e39603827a931bb31de6e09004dc.jpg_200x200q80-product.jpg_.webp",
    "description": "product10: Glupatone Extreme Strong Whitening Emulsion",
    "price": 365
  },
];

const container2 = document.querySelector('.data');

justForYou.forEach(item => {
  
  const productDiv = document.createElement('div');
  productDiv.classList.add('singleProducts');

  const link = document.createElement('a');
    link.href = `singleProduct.html?id=${item.id}`;
    productDiv.appendChild(link);

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = "Product Image";
  img.addEventListener('click', () => {
    sessionStorage.setItem('clickedItemId', item.id);
    window.location.href = link.href;
  });
  productDiv.appendChild(img);

  const description = document.createElement('p');
  description.classList.add('singleproduct-title');
  description.textContent = item.description;
  productDiv.appendChild(description);

  const price = document.createElement('p');
  price.classList.add('singleproduct-price');
  price.textContent = 'Rs. ' + item.price;
  productDiv.appendChild(price);

  container2.appendChild(productDiv);
});


const products = document.querySelectorAll('.singleProducts');
const loadMoreBtn = document.querySelector(".Load-more");

let initialLoads = 0;
const productsToLoad = 10;

function loadMoreProducts (){


  for(let i=initialLoads; i<initialLoads + productsToLoad; i++){
    products[i].style.display = 'block';
  }

  initialLoads += productsToLoad;

  if(initialLoads >= products.length){
    loadMoreBtn.style.display = 'none'
  } else {
    loadMoreBtn.style.display = 'block'
  }

}

loadMoreProducts();

loadMoreBtn.addEventListener('click', loadMoreProducts)



// carousal
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
let slideTimer = setInterval(function() {
  nextSlide();
}, 3000);




// x axis scroll hidden

document.body.style.overflowX = 'hidden';



// TIMER
const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const targetTime = new Date()
targetTime.setHours(targetTime.getHours()+2)

function updateTime(){
  const currentTime = new Date()
  const timeDifference = targetTime - currentTime

  const hours = Math.floor(timeDifference /(1000 * 60 * 60))
  const minutes = Math.floor((timeDifference %(1000 * 60 * 60))/(1000 * 60));
  const seconds = Math.floor((timeDifference %(1000 * 60))/1000);

  hour.textContent = hours.toString().padStart(2,"0");
  minute.textContent = minutes.toString().padStart(2,"0");
  second.textContent = seconds.toString().padStart(2,"0");
}
updateTime();

setInterval(updateTime,1000);




// for (let i= 1 ; i <=10 ; i++) {
//   let table = 7;
//   console.log(`${table} X ${i} = ${table*i}`)
//   // console.log("2 x 1 = 2");
  
// }


// for (let i = 0; i < 5; i++) {
//    setTimeout(() =>{
//      console.log(i);
//    },3000)
  
// }

// for (let i = 0; i < 5; i++) {
//    setInterval(() =>{
//      console.log(i);
//    },3000)
  
// }
// let a = 2;
// for (let i= 1 ; i <=10 ; i++) {
//   let table = i*a;
//   console.log(table)
  
// }

// setTimeout(() => {
//   function addition() {
//     let num1 = 4;
//     let num2 = 8;
//     let res = num1+num2;
//     console.log(res)    
//   }
//   addition();
// }, 2000);


// function processData(callback) {
//  console.log("processing.."+ callback)
// }

// function callback() {
//   processData("welcome")
// }
// callback();

// javascript is single thread language 
// have callstack for code execution
// have two mode synchronous and asynchronous
// settimeout setinterval .then are some example of asynchronous


//Using set timeout

// function Person1(callback) {
//   console.log("I will call you back");
//   callback(); 
// }

// function callback() {
//   setTimeout(() => {
//     console.log("I am back");
//   }, 3000);
// }

// Person1(callback);


// function Person1(callback) {
//   console.log("I will call you back");
//   // callback(); 
// }

// function callback() {
 
//     console.log("I am back");
// }

// // Person1(callback);
// Person1();












