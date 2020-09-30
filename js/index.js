const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Add inner text to nav links
// Create a node list of all nav link tags
let navLinks = document.querySelectorAll('a');
// Create an object with nav element content
let navContent = siteContent.nav;
navLinks.forEach((link, index) => {
  link.textContent = navContent[`nav-item-${index + 1}`];
})

// Select h1 tag
let h1HeaderElement = document.querySelector('h1');
// Create innerHTML for h1
let h1Content= siteContent['cta']['h1'].split(' ').join('<br>');
h1HeaderElement.innerHTML = h1Content;

//Select button
let buttonEl = document.getElementsByTagName('button')[0];
//Add text for button from siteContent object
buttonEl.textContent = siteContent.cta.button;

// Select cta section img
let ctaImg = document.getElementById('cta-img');
// Add img src from siteContent object
ctaImg.src = siteContent.cta['img-src'];

//Select all the divs inside main content
let contentText = siteContent['main-content'];
console.log(contentText);

// pull out the h4 and p elements from each content section in main content
let mainText = contentText;
let mainContent = document.querySelectorAll('.main-content div .text-content');
console.log(mainContent);
mainContent.forEach((section, index) => {
  if (index == 0){
    section.children[0].textContent = mainText['features-h4'];
    section.children[1].textContent = mainText['features-content'];
  }else if (index == 1){
    section.children[0].textContent = mainText['about-h4'];
    section.children[1].textContent = mainText['about-content'];
  }else if (index == 2){
    section.children[0].textContent = mainText['services-h4'];
    section.children[1].textContent = mainText['services-content'];
  }else if(index == 3){
    section.children[0].textContent = mainText['product-h4'];
    section.children[1].textContent = mainText['product-content'];
  }else {
    section.children[0].textContent = mainText['vision-h4'];
    section.children[1].textContent = mainText['vision-content'];
  }  
})

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent.contact['contact-h4'];
let contactInfo = document.querySelectorAll('.contact p');
console.log(contactInfo);
contactInfo.forEach( (para, index) => {
  if(index == 0){
    const address = siteContent.contact.address.split('Street').join('Street<br>');
    para.innerHTML = address;
  }else if (index == 1){
    para.textContent = siteContent.contact.phone;
  }else {
    para.textContent = siteContent.contact.email;
  }
});

let footerPara = document.querySelector('footer p');
footerPara.textContent = siteContent.footer.copyright;