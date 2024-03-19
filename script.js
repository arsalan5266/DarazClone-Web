
let data=[
  {
    "image": "https://static-01.daraz.pk/p/a77b8e82a6024336432ec3cba57af459.jpg",
    "description": "product1: Blue color baby dinosaur cloth organizer",
    "price": 300
  },
  {
    "image": "https://static-01.daraz.pk/p/656f50d69333b0c6922bd4f6ba8a6511.jpg",
    "description": "product2: Tws Air pods_pro Earbuds / Environmental Noise",
    "price": 1222
  },
  {
    "image": "https://static-01.daraz.pk/p/3bfaa8be240de0fa89760bc5d30e431a.jpg",
    "description": "product3: Slim Card Holder Wallet Forr men's And boys",
    "price": 1099
  },
  {
    "image": "https://static-01.daraz.pk/p/d6948194f4c13f9b25355d1820ae98e0.jpg",
    "description": "product4: Roshni BINBOND Luxuary Men's Fashion Watch",
    "price": 690
  },
  {
    "image": "https://static-01.daraz.pk/p/b49f35fa6e771d5ae4e0694dea38db7e.jpg",
    "description": "product5: Engrave On A Coustem Ring Make A Ring With Your Nam",
    "price": 3000
  }
]


const container1 = document.getElementById('data');

data.forEach(item => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('flashCard');

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = "Product Image";
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

    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.title;

    const title = document.createElement('span');
    title.innerText = card.title;
    title.classList.add('cat-imageTitle');

    cardContainer.appendChild(img);
    cardContainer.appendChild(title);
    container.appendChild(cardContainer);
});


























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
