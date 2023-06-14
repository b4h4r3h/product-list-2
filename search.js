const info = 
[
    {
        "id": 1,
        "title": "Lenovo IdeaPad 3 15IGL05-C",
        "shortDescription": "Lenovo IdeaPad 3 15IGL05-C 4GB RAM 1HDD Intel Celeron",
        "price": 8380000,
        "image": "https://dkstatics-public.digikala.com/digikala-products/cf7840133c7b2d42979c3129a96008e5b166ac0d_1677925439.jpg",
        "createdDate": "2023-06-10"
    },
    {
        "id": 2,
        "title": "Asus X515JP-EJ408-i7",
        "shortDescription": "Asus X515JP-EJ408-i7 16GB 1HDD 512SSD MX330 15.6 Inch Laptop",
        "price": 32500000,
        "image": "https://dkstatics-public.digikala.com/digikala-products/7b0a2b184d251ff190cb8f1e2379f002784af3d7_1672216711.jpg",
        "createdDate": "2023-06-07"
    },
    {
        "id": 3,
        "title": "Lenovo Lenovo Notebook V15",
        "shortDescription": "Lenovo Notebook V15 G2 ITL 15.6 inch laptop",
        "price": 15300000,
        "image": "https://dkstatics-public.digikala.com/digikala-products/a9db0ff6aed155fa10141c14ce4efd6b8c129d1c_1666785018.jpg",
        "createdDate": "2023-06-09"
    },
    {
        "id": 4,
        "title": "Lenovo IdeaPad 5 15ITL05",
        "shortDescription": "Lenovo IdeaPad 5 15ITL05-i5 8GB 512GB 2GB 15.6 inch Laptop",
        "price": 24990000,
        "image": "https://dkstatics-public.digikala.com/digikala-products/1a9ee444e9ea094c62ff065da77cdbd78eb70641_1671471393.jpg",
        "createdDate": "2023-06-01"
    },
    {
        "id": 5,
        "title": "Asus VivoBook 15",
        "shortDescription": "Asus VivoBook 15 X513EA-BN3464 15.6 inch laptop",
        "price": 31450000,
        "image": "https://dkstatics-public.digikala.com/digikala-products/f97bbef6f299ddb19b3f83d21a4a3e669d2928cb_1671472241.jpg",
        "createdDate": "2023-06-03"
    },
    {
        "id": 6,
        "title": "Surface Laptop GO",
        "shortDescription": "Microsoft Surface Laptop Go 12.4 inch Laptop",
        "price": 17450000,
        "image": "https://dkstatics-public.digikala.com/digikala-products/a43c534d374b5de0c5d3a6e106d1b9c5de4da877_1671292630.jpg",
        "createdDate": "2023-06-05"
    },
    {
        "id": 7,
        "title": "Asus ROG Strix G513IE-HN060",
        "shortDescription": "Asus ROG Strix G513IE-HN060 15.6 inch Laptop",
        "price": 57900000,
        "image": "https://dkstatics-public.digikala.com/digikala-products/100a7a48d28380073f4613703af80542e58e86c5_1669710900.jpg",
        "createdDate": "2023-06-05"
    }
]

// const cardParents = document.getElementsByClassName("card-parent");
// for (let i = 0; i < cardParents.length; i++) {
//   const cards = cardParents[i].getElementsByClassName("card");
//   // ino taghriban fahmidam, be ezaye har parenti 3 ta card tolid mikone va ta i=2 edame dare

//   for (let j = 0; j < cards.length; j++) {
//     //inja ro nafahmidam
//     const card = cards[j];
//     const image = card.getElementsByClassName("image")[0];
//     const image1 = card.getElementsByClassName("image")[1];
//     const title = card.getElementsByClassName("name")[0];
//     const description = card.getElementsByClassName("description")[0];
//     const price = card.getElementsByClassName("price")[0];
//     const date = card.getElementsByClassName("date")[0];

//     // const dataIndex = i * cards.length + j;
//     //inja ro ham nafahmidam

//     if (j < info.length) {
//       const data = info[j];
//       //inja ro ham nafahmidam

//       image.setAttribute("src", data.image);
//       if (image1) image1.setAttribute("src", data.image);
//       title.innerHTML = data.title;
//       description.innerHTML = data.shortDescription;
//       price.innerHTML = data.price;
//       date.innerHTML = data.createdDate;
//     } else {
//       card.style.display = "none";
//     }
//   }
// }

// const searchInput = document.getElementById("searchInput");
// const cards = document.getElementsByClassName("card");
// const names = document.getElementsByClassName("name");
// const pricess = document.getElementsByClassName("price");
// searchInput.addEventListener("keypress", (event) => {
//   const { value } = event.target;
//   const searchResult = value.toLowerCase();
//   const priceResult = value;
//   for (let i = 0; i < names.length; i++) {
//     const prices = pricess[i].innerHTML;
//     const name = names[i].innerHTML.toLowerCase();
//     const card = cards[i];
//     //inja ro ham nafahmidam

//     //ino fahmidam
//     if (name.includes(searchResult) || prices.includes(priceResult)) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   }
// });


////////////////////////

// IN CODE BARAYE HAMUN TARIKHIE KE GOFTI BEYNESHOON / BIOFTE, ALBATE HANOOZ BA METHODHAYE DATE ASHNA NABOODAM

// const item = info.map(function(item) {
//     const date = item.createdDate;
//     // console.log(date);
//     const slash = date.replace(/-/g,"/");
//     console.log(slash);
//     return date;
// })


const formBtn = document.getElementsByClassName("form-btn")[0];
formBtn.addEventListener("click",(e) => {
    const listEl = document.getElementById("list");
    listEl.innerHTML = "";
    const formEl = document.getElementById("form");
    const formTemplate = document.getElementById("formTemplate");
    const formTemp = formTemplate.content.querySelector("form.formclass")
    const form = document.importNode(formTemp, true);
    formEl.innerHTML = "";
    formEl.appendChild(form);
})

const listBtn = document.getElementsByClassName("list-btn")[0];
listBtn.addEventListener("click",(e) => {
    const listEl = document.getElementById("list");
    listEl.innerHTML = "";
    const formEl = document.getElementById("form");
    formEl.innerHTML = "";
    const generator = function (list) {
        const listEl = document.getElementById("list");
        list.forEach((data, i) => {
          const cardTemplate = document.getElementById("cardTemplate");
          const cardTemp = cardTemplate.content.querySelector("div.card");
          const card = document.importNode(cardTemp, true);
          const image = card.getElementsByClassName("image")[0];
          const name = card.getElementsByClassName("name")[0];
          const description = card.getElementsByClassName("description")[0];
          const price = card.getElementsByClassName("price")[0];
          const date = card.getElementsByClassName("date")[0];
          image.setAttribute("src", data.image);
          name.innerHTML = data.title;
          description.innerHTML = data.shortDescription;
          price.innerHTML = data.price;
          date.innerHTML = dateAli[i].toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric" , year: 'numeric'});
          //INJA AGE 'EN-US' RO BARDARIM, KHOD BE KHOD SLASH MINDAZE
          listEl.appendChild(card);
        });
      };
      
      searchInput.addEventListener("keyup", (e) => {
          const { value } = e.target;
          const searchResult = value.toLowerCase();
          const listEl = document.getElementById("list");
          listEl.innerHTML = "";
          const filteredData = info.filter((item) => {
              const name = item.title.toLowerCase();
              return name.includes(searchResult);
          });
          generator(filteredData);
        });
        generator(info);

})

const dateAli = info.map(function(item){
    const dateInfo = item.createdDate;
    const d = new Date(dateInfo);
    item.createdDate = d;
    return d;
})

