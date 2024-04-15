import { changeCurrency } from "../scripts/trivial.js";
export const products = [
  
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/breakingBad.webp",
    name: "Breaking Bad TV Series Acrylic Glass Frame",
    rating: {
      stars: 5,
      count: 566
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/phychotic.webp",
    name: "Phychotic Pre Workout",
    rating: {
      stars: 3.5,
      count: 345
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/saw.webp",
    name: "Phychotic Pre Workout (SAW edition)",
    rating: {
      stars: 3,
      count: 509
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },

  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/oneplus.webp",
    name: "OnePlus Node 2T 5G (Gray Shadow)",
    rating: {
      stars: 5,
      count: 2483
    },
    priceCents: 40000,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/ac.webp",
    name: "Daikin 1.5 Ton 3 Star Inverter Split AC",
    rating: {
      stars: 4,
      count: 348
    },
    priceCents: 50000,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/saucony.jpg",
    name: "Saucony Mens Kinvara 14 Running Shoe",
    rating: {
      stars: 4.5,
      count: 372
    },
    priceCents: 9000,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/softtoy.jpg",
    name: "Jam & Honey Penguin, Plush/Soft Toy for Boys, Girls and Kids, Super-Soft, Safe, Great Birthday Gift",
    rating: {
      stars: 4.5,
      count: 678
    },
    priceCents: 700,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/shirts.jpg",
    name: "London Hills Women Printed Round Neck Oversized T-Shirt ",
    rating: {
      stars: 4.5,
      count: 827
    },
    priceCents: 2000,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/cataphile.webp",
    name: "Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml",
    rating: {
      stars: 4.5,
      count: 823
    },
    priceCents: 500,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/jbl.jpg",
    name: "JBL Newly Launched Wave Flex in-Ear Wireless Earbuds TWS with Mic,App for Custom Extra Bass EQ",
    rating: {
      stars: 4,
      count: 829
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/sony.webp",
    name: "Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Bluetooth Over Ear Headphones ",
    rating: {
      stars: 4.5,
      count: 462
    },
    priceCents: 35000,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/poco.webp",
    name: "POCO M6 Pro 5G (Forest Green, 4GB RAM, 128GB Storage)",
    rating: {
      stars: 4.5,
      count: 1032
    },
    priceCents: 30000,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/creatine.webp",
    name: "Optimum Nutrition (ON) Micronized Creatine Powder - 250 Gram, 83 Serves",
    rating: {
      stars: 4.5,
      count: 492
    },
    priceCents: 1300,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/belt.jpg",
    name: "Aurion Sued Leather Powerlifting Gym Belt-Medium",
    rating: {
      stars: 4.5,
      count: 392
    },
    priceCents: 1500,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/oats.webp",
    name: "Quaker Oats 1kg, Rolled Oats Natural Wholegrain",
    rating: {
      stars: 4,
      count: 83
    },
    priceCents: 200,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/syrup.webp",
    name: "HERSHEY'S Chocolate Flavored Syrup | Delicious Chocolate Flavor ",
    rating: {
      stars: 4,
      count: 372
    },
    priceCents: 300,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/whey.webp",
    name: "OPTIMUM NUTRITION Performance Whey Protein Powder Blend with Isolate",
    rating: {
      stars: 4,
      count: 82
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/charger.webp",
    name: "Original Oneplus 65W SUPERVOOC Charger for Oneplus",
    rating: {
      stars: 4,
      count: 284
    },
    priceCents: 2000,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/oven.jpg",
    name: "IFB 20 L Convection Microwave Oven",
    rating: {
      stars: 4.5,
      count: 72
    },
    priceCents: 8000,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/hood.jpg",
    name: "Cotton Lycra Blend Hooded Neck Solid Hoodie ",
    rating: {
      stars: 4.5,
      count: 226
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/idk.jpg",
    name: "GreyBE SAVAGE Women's Cotton Hooded Neck Hoodies",
    rating: {
      stars: 4.5,
      count: 281
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/rc.webp",
    name: "Jack Royal Rechargeable Remote Control Rock Crawler Two Wheel Drive RC ",
    rating: {
      stars: 4,
      count: 367
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/tradmil.jpg",
    name: "FitPro (2.5 HP Peak) Manual Incline Motorized Treadmill",
    rating: {
      stars: 4.5,
      count: 48
    },
    priceCents: 1600,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/ipad.jpg",
    name: "Apple iPad (7th Generation): with A10 Bionic chip, 25.91 cm (10.2″)",
    rating: {
      stars: 4.5,
      count: 3002
    },
    priceCents: 40000,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/tote.jpg",
    name: "The Purple Tree Ocean Theme Tote Bags For Women",
    rating: {
      stars: 4,
      count: 47
    },
    priceCents: 500,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/beach.jpg",
    name: "Leriya Fashion Men's Shirt || Rayon Multi Printed Shirts for Men",
    rating: {
      stars: 5,
      count: 85
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/candle.webp",
    name: "EKAM Driftwood Cookie Jar Scented Candle, 85 Grams ",
    rating: {
      stars: 4.5,
      count: 463
    },
    priceCents: 1000,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/swimming.webp",
    name: "Prime Deals Mirrored Wide-Vision Swim Goggles",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 1500,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/buddha.webp",
    name: "Big Bulk Fiberglass White Kamal Buddha/Lotus Buddha",
    rating: {
      stars: 3.5,
      count: 82
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/fml.webp",
    name: "Art Street Live Love Laugh MDF",
    rating: {
      stars: 4.5,
      count: 38
    },
    priceCents: 1000,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/tv.jpg",
    name: "OnePlus 108 cm (43 inches) Y Series 4K",
    rating: {
      stars: 4.5,
      count: 472
    },
    priceCents: 20000,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/jordans.jpg",
    name: "Nike Mens Jordan 1 Retro HighSneaker",
    rating: {
      stars: 4.5,
      count: 472
    },
    priceCents: 30000,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/jordans2.jpg",
    name: "Nike Mens Jordan Max Aura 4 Running Shoe",
    rating: {
      stars: 4.5,
      count: 282
    },
    priceCents: 24000,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/slayer.jpg",
    name: "Krafty Kustomz Shoe Charms Mixed in Different Shapes ",
    rating: {
      stars: 4,
      count: 138
    },
    priceCents: 200,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/hat.jpg",
    name: "Puma Men's Baseball Cap",
    rating: {
      stars: 4.5,
      count: 282
    },
    priceCents: 400,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/sleep.jpg",
    name: "Boldfit Eye Mask for Sleeping with Adjustable Strap",
    rating: {
      stars: 4.5,
      count: 372
    },
    priceCents: 500,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/light.jpg",
    name: "XERGY Solar Lights Outdoor Waterproof",
    rating: {
      stars: 4.5,
      count: 283
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/light2.webp",
    name: "CBK Firefly Solar Lights | 8 LED",
    rating: {
      stars: 4,
      count: 38
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/duffle.jpg",
    name: "Sfane Polyester 23cms Duffle",
    rating: {
      stars: 4,
      count: 28
    },
    priceCents: 1074,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/rope.jpg",
    name: "Boldfit Plastic Skipping Rope For Men&Women",
    rating: {
      stars: 3.5,
      count: 28
    },
    priceCents: 400,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/helmet.webp",
    name: "Vega Off Road Sketch ISI Certified Matt Finish Helmet",
    rating: {
      stars: 5,
      count: 138
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/ktm.webp",
    name: "KTM Keychain Pack of 2 ",
    rating: {
      stars: 4,
      count: 234
    },
    priceCents: 400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];

changeCurrency(products);