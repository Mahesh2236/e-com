const productsData = [
    {
        "id": "P1",
        "title": "Essence Mascara Lash Princess",
        "brand": "Essence",
        "price": 799,
        "oldPrice": 887,
        "discount": 10,
        "rating": 2.56,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P1.jpg",
        "category": "Beauty",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Oily",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Citrus"
        },
        "filters": {
            "Brand": "Essence",
            "PriceRange": "Under ₹2,000",
            "Skin Type": "Oily",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Citrus"
        }
    },
    {
        "id": "P2",
        "title": "Eyeshadow Palette with Mirror",
        "brand": "Glamour Beauty",
        "price": 1599,
        "oldPrice": 1949,
        "discount": 18,
        "rating": 2.86,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P2.jpg",
        "category": "Beauty",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Combination",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Unscented"
        },
        "filters": {
            "Brand": "Glamour Beauty",
            "PriceRange": "Under ₹2,000",
            "Skin Type": "Combination",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Unscented"
        }
    },
    {
        "id": "P3",
        "title": "Powder Canister",
        "brand": "Velvet Touch",
        "price": 1199,
        "oldPrice": 1317,
        "discount": 9,
        "rating": 4.64,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P3.jpg",
        "category": "Beauty",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Combination",
            "Ingredients": "Vitamin C",
            "Fragrance": "Unscented"
        },
        "filters": {
            "Brand": "Velvet Touch",
            "PriceRange": "Under ₹2,000",
            "Skin Type": "Combination",
            "Ingredients": "Vitamin C",
            "Fragrance": "Unscented"
        }
    },
    {
        "id": "P4",
        "title": "Red Lipstick",
        "brand": "Chic Cosmetics",
        "price": 1039,
        "oldPrice": 1180,
        "discount": 12,
        "rating": 4.36,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P4.jpg",
        "category": "Beauty",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Oily",
            "Ingredients": "Aloe Vera",
            "Fragrance": "Woody"
        },
        "filters": {
            "Brand": "Chic Cosmetics",
            "PriceRange": "Under ₹2,000",
            "Skin Type": "Oily",
            "Ingredients": "Aloe Vera",
            "Fragrance": "Woody"
        }
    },
    {
        "id": "P5",
        "title": "Red Nail Polish",
        "brand": "Nail Couture",
        "price": 719,
        "oldPrice": 807,
        "discount": 11,
        "rating": 4.32,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P5.jpg",
        "category": "Beauty",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "All Types",
            "Ingredients": "Aloe Vera",
            "Fragrance": "Floral"
        },
        "filters": {
            "Brand": "Nail Couture",
            "PriceRange": "Under ₹2,000",
            "Skin Type": "All Types",
            "Ingredients": "Aloe Vera",
            "Fragrance": "Floral"
        }
    },
    {
        "id": "P6",
        "title": "Calvin Klein CK One",
        "brand": "Calvin Klein",
        "price": 3999,
        "oldPrice": 4039,
        "discount": 1,
        "rating": 4.37,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P6.jpg",
        "category": "Beauty",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Combination",
            "Ingredients": "Vitamin C",
            "Fragrance": "Floral"
        },
        "filters": {
            "Brand": "Calvin Klein",
            "PriceRange": "₹2,000 to ₹5,000",
            "Skin Type": "Combination",
            "Ingredients": "Vitamin C",
            "Fragrance": "Floral"
        }
    },
    {
        "id": "P7",
        "title": "Chanel Coco Noir Eau De",
        "brand": "Chanel",
        "price": 10399,
        "oldPrice": 12379,
        "discount": 16,
        "rating": 4.26,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P7.jpg",
        "category": "Beauty",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Dry",
            "Ingredients": "Aloe Vera",
            "Fragrance": "Citrus"
        },
        "filters": {
            "Brand": "Chanel",
            "PriceRange": "₹10,000 to ₹20,000",
            "Skin Type": "Dry",
            "Ingredients": "Aloe Vera",
            "Fragrance": "Citrus"
        }
    },
    {
        "id": "P8",
        "title": "Dior J'adore",
        "brand": "Dior",
        "price": 7199,
        "oldPrice": 8370,
        "discount": 14,
        "rating": 3.8,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P8.jpg",
        "category": "Beauty",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Oily",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Citrus"
        },
        "filters": {
            "Brand": "Dior",
            "PriceRange": "₹5,000 to ₹10,000",
            "Skin Type": "Oily",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Citrus"
        }
    },
    {
        "id": "P9",
        "title": "Dolce Shine Eau de",
        "brand": "Dolce & Gabbana",
        "price": 5599,
        "oldPrice": null,
        "discount": 0,
        "rating": 3.96,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P9.jpg",
        "category": "Beauty",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Dry",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Unscented"
        },
        "filters": {
            "Brand": "Dolce & Gabbana",
            "PriceRange": "₹5,000 to ₹10,000",
            "Skin Type": "Dry",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Unscented"
        }
    },
    {
        "id": "P10",
        "title": "Gucci Bloom Eau de",
        "brand": "Gucci",
        "price": 6399,
        "oldPrice": 7440,
        "discount": 14,
        "rating": 2.74,
        "reviews": 3,
        "image": "../assets/images/products/beauty/prod_P10.jpg",
        "category": "Beauty",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Skin Type": "Combination",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Woody"
        },
        "filters": {
            "Brand": "Gucci",
            "PriceRange": "₹5,000 to ₹10,000",
            "Skin Type": "Combination",
            "Ingredients": "Hyaluronic Acid",
            "Fragrance": "Woody"
        }
    },
    {
        "id": "P11",
        "title": "Annibale Colombo Bed",
        "brand": "Annibale Colombo",
        "price": 151999,
        "oldPrice": 165216,
        "discount": 8,
        "rating": 4.77,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P11.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Metal",
            "Room Type": "Kitchen",
            "Style": "Modern"
        },
        "filters": {
            "Brand": "Annibale Colombo",
            "PriceRange": "₹20,000 & Above",
            "Material": "Metal",
            "Room Type": "Kitchen",
            "Style": "Modern"
        }
    },
    {
        "id": "P12",
        "title": "Annibale Colombo Sofa",
        "brand": "Annibale Colombo",
        "price": 199999,
        "oldPrice": 232556,
        "discount": 14,
        "rating": 3.92,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P12.jpg",
        "category": "Home Decor",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Wood",
            "Room Type": "Kitchen",
            "Style": "Modern"
        },
        "filters": {
            "Brand": "Annibale Colombo",
            "PriceRange": "₹20,000 & Above",
            "Material": "Wood",
            "Room Type": "Kitchen",
            "Style": "Modern"
        }
    },
    {
        "id": "P13",
        "title": "Bedside Table African Cherry",
        "brand": "Furniture Co.",
        "price": 23999,
        "oldPrice": 29628,
        "discount": 19,
        "rating": 2.87,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P13.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Metal",
            "Room Type": "Living Room",
            "Style": "Industrial"
        },
        "filters": {
            "Brand": "Furniture Co.",
            "PriceRange": "₹20,000 & Above",
            "Material": "Metal",
            "Room Type": "Living Room",
            "Style": "Industrial"
        }
    },
    {
        "id": "P14",
        "title": "Knoll Saarinen Executive Conference Chair",
        "brand": "Knoll",
        "price": 39999,
        "oldPrice": 40815,
        "discount": 2,
        "rating": 4.88,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P14.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Glass",
            "Room Type": "Kitchen",
            "Style": "Minimalist"
        },
        "filters": {
            "Brand": "Knoll",
            "PriceRange": "₹20,000 & Above",
            "Material": "Glass",
            "Room Type": "Kitchen",
            "Style": "Minimalist"
        }
    },
    {
        "id": "P15",
        "title": "Wooden Bathroom Sink With Mirror",
        "brand": "Bath Trends",
        "price": 63999,
        "oldPrice": 69564,
        "discount": 8,
        "rating": 3.59,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P15.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Wood",
            "Room Type": "Living Room",
            "Style": "Industrial"
        },
        "filters": {
            "Brand": "Bath Trends",
            "PriceRange": "₹20,000 & Above",
            "Material": "Wood",
            "Room Type": "Living Room",
            "Style": "Industrial"
        }
    },
    {
        "id": "P16",
        "title": "Decoration Swing",
        "brand": "QuickMart Exclusive",
        "price": 4799,
        "oldPrice": 5332,
        "discount": 10,
        "rating": 3.16,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P16.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Leather",
            "Room Type": "Bedroom",
            "Style": "Minimalist"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "₹2,000 to ₹5,000",
            "Material": "Leather",
            "Room Type": "Bedroom",
            "Style": "Minimalist"
        }
    },
    {
        "id": "P17",
        "title": "Family Tree Photo Frame",
        "brand": "QuickMart Exclusive",
        "price": 2399,
        "oldPrice": 2789,
        "discount": 14,
        "rating": 4.53,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P17.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Ceramic",
            "Room Type": "Kitchen",
            "Style": "Industrial"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "₹2,000 to ₹5,000",
            "Material": "Ceramic",
            "Room Type": "Kitchen",
            "Style": "Industrial"
        }
    },
    {
        "id": "P18",
        "title": "House Showpiece Plant",
        "brand": "QuickMart Exclusive",
        "price": 3199,
        "oldPrice": 3439,
        "discount": 7,
        "rating": 4.67,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P18.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Leather",
            "Room Type": "Kitchen",
            "Style": "Modern"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "₹2,000 to ₹5,000",
            "Material": "Leather",
            "Room Type": "Kitchen",
            "Style": "Modern"
        }
    },
    {
        "id": "P19",
        "title": "Plant Pot",
        "brand": "QuickMart Exclusive",
        "price": 1199,
        "oldPrice": 1275,
        "discount": 6,
        "rating": 3.01,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P19.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Metal",
            "Room Type": "Kitchen",
            "Style": "Modern"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "Under ₹2,000",
            "Material": "Metal",
            "Room Type": "Kitchen",
            "Style": "Modern"
        }
    },
    {
        "id": "P20",
        "title": "Table Lamp",
        "brand": "QuickMart Exclusive",
        "price": 3999,
        "oldPrice": 4300,
        "discount": 7,
        "rating": 3.55,
        "reviews": 3,
        "image": "../assets/images/products/home-decor/prod_P20.jpg",
        "category": "Home Decor",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Metal",
            "Room Type": "Living Room",
            "Style": "Modern"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "₹2,000 to ₹5,000",
            "Material": "Metal",
            "Room Type": "Living Room",
            "Style": "Modern"
        }
    },
    {
        "id": "P21",
        "title": "Apple MacBook Pro 14 Inch Space Grey",
        "brand": "Apple",
        "price": 159999,
        "oldPrice": 166665,
        "discount": 4,
        "rating": 3.65,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P21.jpg",
        "category": "Electronics",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "8GB",
            "Storage": "512GB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "10 Hours"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹20,000 & Above",
            "RAM": "8GB",
            "Storage": "512GB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "10 Hours"
        }
    },
    {
        "id": "P22",
        "title": "Asus Zenbook Pro Dual Screen Laptop",
        "brand": "Asus",
        "price": 143999,
        "oldPrice": 161796,
        "discount": 11,
        "rating": 3.95,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P22.jpg",
        "category": "Electronics",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "8GB",
            "Storage": "1TB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "10 Hours"
        },
        "filters": {
            "Brand": "Asus",
            "PriceRange": "₹20,000 & Above",
            "RAM": "8GB",
            "Storage": "1TB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "10 Hours"
        }
    },
    {
        "id": "P23",
        "title": "Huawei Matebook X Pro",
        "brand": "Huawei",
        "price": 111999,
        "oldPrice": 123075,
        "discount": 9,
        "rating": 4.98,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P23.jpg",
        "category": "Electronics",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "32GB",
            "Storage": "256GB SSD",
            "Connectivity": "5G",
            "Battery": "24 Hours"
        },
        "filters": {
            "Brand": "Huawei",
            "PriceRange": "₹20,000 & Above",
            "RAM": "32GB",
            "Storage": "256GB SSD",
            "Connectivity": "5G",
            "Battery": "24 Hours"
        }
    },
    {
        "id": "P24",
        "title": "Lenovo Yoga 920",
        "brand": "Lenovo",
        "price": 87999,
        "oldPrice": 93615,
        "discount": 6,
        "rating": 2.86,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P24.jpg",
        "category": "Electronics",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "8GB",
            "Storage": "256GB SSD",
            "Connectivity": "5G",
            "Battery": "10 Hours"
        },
        "filters": {
            "Brand": "Lenovo",
            "PriceRange": "₹20,000 & Above",
            "RAM": "8GB",
            "Storage": "256GB SSD",
            "Connectivity": "5G",
            "Battery": "10 Hours"
        }
    },
    {
        "id": "P25",
        "title": "New DELL XPS 13 9300 Laptop",
        "brand": "Dell",
        "price": 119999,
        "oldPrice": 134830,
        "discount": 11,
        "rating": 2.67,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P25.jpg",
        "category": "Electronics",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "16GB",
            "Storage": "1TB SSD",
            "Connectivity": "Wi-Fi 6",
            "Battery": "10 Hours"
        },
        "filters": {
            "Brand": "Dell",
            "PriceRange": "₹20,000 & Above",
            "RAM": "16GB",
            "Storage": "1TB SSD",
            "Connectivity": "Wi-Fi 6",
            "Battery": "10 Hours"
        }
    },
    {
        "id": "P26",
        "title": "Blue & Black Check Shirt",
        "brand": "Fashion Trends",
        "price": 2399,
        "oldPrice": 2822,
        "discount": 15,
        "rating": 3.64,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P26.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "S",
            "Color": "White",
            "Fabric": "Leather",
            "Gender": "Women"
        },
        "filters": {
            "Brand": "Fashion Trends",
            "PriceRange": "₹2,000 to ₹5,000",
            "Size": "S",
            "Color": "White",
            "Fabric": "Leather",
            "Gender": "Women"
        }
    },
    {
        "id": "P27",
        "title": "Gigabyte Aorus Men Tshirt",
        "brand": "Gigabyte",
        "price": 1999,
        "oldPrice": null,
        "discount": 0,
        "rating": 3.18,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P27.jpg",
        "category": "Fashion",
        "isBestSeller": true,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "XL",
            "Color": "White",
            "Fabric": "Denim",
            "Gender": "Women"
        },
        "filters": {
            "Brand": "Gigabyte",
            "PriceRange": "Under ₹2,000",
            "Size": "XL",
            "Color": "White",
            "Fabric": "Denim",
            "Gender": "Women"
        }
    },
    {
        "id": "P28",
        "title": "Man Plaid Shirt",
        "brand": "Classic Wear",
        "price": 2799,
        "oldPrice": 3455,
        "discount": 19,
        "rating": 3.46,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P28.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "XL",
            "Color": "Black",
            "Fabric": "Polyester",
            "Gender": "Women"
        },
        "filters": {
            "Brand": "Classic Wear",
            "PriceRange": "₹2,000 to ₹5,000",
            "Size": "XL",
            "Color": "Black",
            "Fabric": "Polyester",
            "Gender": "Women"
        }
    },
    {
        "id": "P29",
        "title": "Man Short Sleeve Shirt",
        "brand": "Casual Comfort",
        "price": 1599,
        "oldPrice": 1701,
        "discount": 6,
        "rating": 2.9,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P29.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "XL",
            "Color": "Blue",
            "Fabric": "Cotton",
            "Gender": "Unisex"
        },
        "filters": {
            "Brand": "Casual Comfort",
            "PriceRange": "Under ₹2,000",
            "Size": "XL",
            "Color": "Blue",
            "Fabric": "Cotton",
            "Gender": "Unisex"
        }
    },
    {
        "id": "P30",
        "title": "Men Check Shirt",
        "brand": "Urban Chic",
        "price": 2239,
        "oldPrice": 2515,
        "discount": 11,
        "rating": 2.72,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P30.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "XL",
            "Color": "White",
            "Fabric": "Leather",
            "Gender": "Men"
        },
        "filters": {
            "Brand": "Urban Chic",
            "PriceRange": "₹2,000 to ₹5,000",
            "Size": "XL",
            "Color": "White",
            "Fabric": "Leather",
            "Gender": "Men"
        }
    },
    {
        "id": "P31",
        "title": "Nike Air Jordan 1 Red And Black",
        "brand": "Nike",
        "price": 11999,
        "oldPrice": 12498,
        "discount": 4,
        "rating": 4.77,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P31.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 10",
            "Sports Type": "Basketball"
        },
        "filters": {
            "Brand": "Nike",
            "PriceRange": "₹10,000 to ₹20,000",
            "Shoe Size": "UK 10",
            "Sports Type": "Basketball"
        }
    },
    {
        "id": "P32",
        "title": "Nike Baseball Cleats",
        "brand": "Nike",
        "price": 6399,
        "oldPrice": 7803,
        "discount": 18,
        "rating": 3.88,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P32.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 8",
            "Sports Type": "Casual"
        },
        "filters": {
            "Brand": "Nike",
            "PriceRange": "₹5,000 to ₹10,000",
            "Shoe Size": "UK 8",
            "Sports Type": "Casual"
        }
    },
    {
        "id": "P33",
        "title": "Puma Future Rider Trainers",
        "brand": "Puma",
        "price": 7199,
        "oldPrice": 7498,
        "discount": 4,
        "rating": 4.9,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P33.jpg",
        "category": "Sneakers",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 7",
            "Sports Type": "Casual"
        },
        "filters": {
            "Brand": "Puma",
            "PriceRange": "₹5,000 to ₹10,000",
            "Shoe Size": "UK 7",
            "Sports Type": "Casual"
        }
    },
    {
        "id": "P34",
        "title": "Sports Sneakers Off White & Red",
        "brand": "Off White",
        "price": 9599,
        "oldPrice": 9998,
        "discount": 4,
        "rating": 4.77,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P34.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 10",
            "Sports Type": "Basketball"
        },
        "filters": {
            "Brand": "Off White",
            "PriceRange": "₹5,000 to ₹10,000",
            "Shoe Size": "UK 10",
            "Sports Type": "Basketball"
        }
    },
    {
        "id": "P35",
        "title": "Sports Sneakers Off White Red",
        "brand": "Off White",
        "price": 8799,
        "oldPrice": null,
        "discount": 0,
        "rating": 4.69,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P35.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 8",
            "Sports Type": "Running"
        },
        "filters": {
            "Brand": "Off White",
            "PriceRange": "₹5,000 to ₹10,000",
            "Shoe Size": "UK 8",
            "Sports Type": "Running"
        }
    },
    {
        "id": "P36",
        "title": "Brown Leather Belt Watch",
        "brand": "Fashion Timepieces",
        "price": 7199,
        "oldPrice": 7577,
        "discount": 5,
        "rating": 4.19,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P36.jpg",
        "category": "Accessories",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Glass",
            "Type": "Wallet",
            "Color": "Blue"
        },
        "filters": {
            "Brand": "Fashion Timepieces",
            "PriceRange": "₹5,000 to ₹10,000",
            "Material": "Glass",
            "Type": "Wallet",
            "Color": "Blue"
        }
    },
    {
        "id": "P37",
        "title": "Longines Master Collection",
        "brand": "Longines",
        "price": 119999,
        "oldPrice": 144577,
        "discount": 17,
        "rating": 3.87,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P37.jpg",
        "category": "Accessories",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Wood",
            "Type": "Watch",
            "Color": "Black"
        },
        "filters": {
            "Brand": "Longines",
            "PriceRange": "₹20,000 & Above",
            "Material": "Wood",
            "Type": "Watch",
            "Color": "Black"
        }
    },
    {
        "id": "P38",
        "title": "Rolex Cellini Date Black Dial",
        "brand": "Rolex",
        "price": 719999,
        "oldPrice": 782607,
        "discount": 8,
        "rating": 4.97,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P38.jpg",
        "category": "Accessories",
        "isBestSeller": true,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Ceramic",
            "Type": "Watch",
            "Color": "Blue"
        },
        "filters": {
            "Brand": "Rolex",
            "PriceRange": "₹20,000 & Above",
            "Material": "Ceramic",
            "Type": "Watch",
            "Color": "Blue"
        }
    },
    {
        "id": "P39",
        "title": "Rolex Cellini Moonphase",
        "brand": "Rolex",
        "price": 1039999,
        "oldPrice": 1253010,
        "discount": 17,
        "rating": 2.58,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P39.jpg",
        "category": "Accessories",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Wood",
            "Type": "Sunglasses",
            "Color": "Red"
        },
        "filters": {
            "Brand": "Rolex",
            "PriceRange": "₹20,000 & Above",
            "Material": "Wood",
            "Type": "Sunglasses",
            "Color": "Red"
        }
    },
    {
        "id": "P40",
        "title": "Rolex Datejust",
        "brand": "Rolex",
        "price": 879999,
        "oldPrice": 907215,
        "discount": 3,
        "rating": 3.66,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P40.jpg",
        "category": "Accessories",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Glass",
            "Type": "Belt",
            "Color": "White"
        },
        "filters": {
            "Brand": "Rolex",
            "PriceRange": "₹20,000 & Above",
            "Material": "Glass",
            "Type": "Belt",
            "Color": "White"
        }
    },
    {
        "id": "P41",
        "title": "Rolex Submariner Watch",
        "brand": "Rolex",
        "price": 1119999,
        "oldPrice": 1178946,
        "discount": 5,
        "rating": 2.69,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P41.jpg",
        "category": "Accessories",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Ceramic",
            "Type": "Sunglasses",
            "Color": "Black"
        },
        "filters": {
            "Brand": "Rolex",
            "PriceRange": "₹20,000 & Above",
            "Material": "Ceramic",
            "Type": "Sunglasses",
            "Color": "Black"
        }
    },
    {
        "id": "P42",
        "title": "Amazon Echo Plus",
        "brand": "Amazon",
        "price": 7999,
        "oldPrice": 9089,
        "discount": 12,
        "rating": 4.99,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P42.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Plug-in"
        },
        "filters": {
            "Brand": "Amazon",
            "PriceRange": "₹5,000 to ₹10,000",
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Plug-in"
        }
    },
    {
        "id": "P43",
        "title": "Apple Airpods",
        "brand": "Apple",
        "price": 10399,
        "oldPrice": 12234,
        "discount": 15,
        "rating": 4.15,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P43.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Plug-in"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹10,000 to ₹20,000",
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Plug-in"
        }
    },
    {
        "id": "P44",
        "title": "Apple AirPods Max Silver",
        "brand": "Apple",
        "price": 43999,
        "oldPrice": 50573,
        "discount": 13,
        "rating": 3.47,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P44.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Standalone",
            "Voice Assistant": "Google Assistant",
            "Power": "Plug-in"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹20,000 & Above",
            "Smart Home": "Standalone",
            "Voice Assistant": "Google Assistant",
            "Power": "Plug-in"
        }
    },
    {
        "id": "P45",
        "title": "Apple Airpower Wireless Charger",
        "brand": "Apple",
        "price": 6399,
        "oldPrice": 6665,
        "discount": 4,
        "rating": 3.68,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P45.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Standalone",
            "Voice Assistant": "Siri",
            "Power": "Battery"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹5,000 to ₹10,000",
            "Smart Home": "Standalone",
            "Voice Assistant": "Siri",
            "Power": "Battery"
        }
    },
    {
        "id": "P46",
        "title": "Apple HomePod Mini Cosmic Grey",
        "brand": "Apple",
        "price": 7999,
        "oldPrice": 9754,
        "discount": 18,
        "rating": 4.62,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P46.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Standalone",
            "Voice Assistant": "Siri",
            "Power": "Battery"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹5,000 to ₹10,000",
            "Smart Home": "Standalone",
            "Voice Assistant": "Siri",
            "Power": "Battery"
        }
    },
    {
        "id": "P47",
        "title": "Apple iPhone Charger",
        "brand": "Apple",
        "price": 1599,
        "oldPrice": 1949,
        "discount": 18,
        "rating": 4.15,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P47.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Standalone",
            "Voice Assistant": "Alexa",
            "Power": "Battery"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "Under ₹2,000",
            "Smart Home": "Standalone",
            "Voice Assistant": "Alexa",
            "Power": "Battery"
        }
    },
    {
        "id": "P48",
        "title": "Apple MagSafe Battery Pack",
        "brand": "Apple",
        "price": 7999,
        "oldPrice": 9637,
        "discount": 17,
        "rating": 3.62,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P48.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Battery"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹5,000 to ₹10,000",
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Battery"
        }
    },
    {
        "id": "P49",
        "title": "Apple Watch Series 4 Gold",
        "brand": "Apple",
        "price": 27999,
        "oldPrice": 31817,
        "discount": 12,
        "rating": 2.74,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P49.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Battery"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹20,000 & Above",
            "Smart Home": "Compatible",
            "Voice Assistant": "Alexa",
            "Power": "Battery"
        }
    },
    {
        "id": "P50",
        "title": "Beats Flex Wireless Earphones",
        "brand": "Beats",
        "price": 3999,
        "oldPrice": 4209,
        "discount": 5,
        "rating": 4.24,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P50.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Compatible",
            "Voice Assistant": "Siri",
            "Power": "Battery"
        },
        "filters": {
            "Brand": "Beats",
            "PriceRange": "₹2,000 to ₹5,000",
            "Smart Home": "Compatible",
            "Voice Assistant": "Siri",
            "Power": "Battery"
        }
    },
    {
        "id": "P51",
        "title": "iPhone 12 Silicone Case with MagSafe Plum",
        "brand": "Apple",
        "price": 2399,
        "oldPrice": 2757,
        "discount": 13,
        "rating": 3.62,
        "reviews": 3,
        "image": "../assets/images/products/gadgets/prod_P51.jpg",
        "category": "Smart Gadgets",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Smart Home": "Standalone",
            "Voice Assistant": "Google Assistant",
            "Power": "Battery"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹2,000 to ₹5,000",
            "Smart Home": "Standalone",
            "Voice Assistant": "Google Assistant",
            "Power": "Battery"
        }
    },
    {
        "id": "P52",
        "title": "iPhone 5s",
        "brand": "Apple",
        "price": 15999,
        "oldPrice": 18180,
        "discount": 12,
        "rating": 2.83,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P52.jpg",
        "category": "Electronics",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "8GB",
            "Storage": "1TB SSD",
            "Connectivity": "5G",
            "Battery": "48 Hours"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹10,000 to ₹20,000",
            "RAM": "8GB",
            "Storage": "1TB SSD",
            "Connectivity": "5G",
            "Battery": "48 Hours"
        }
    },
    {
        "id": "P53",
        "title": "iPhone 6",
        "brand": "Apple",
        "price": 23999,
        "oldPrice": 25530,
        "discount": 6,
        "rating": 3.41,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P53.jpg",
        "category": "Electronics",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "8GB",
            "Storage": "1TB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "48 Hours"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹20,000 & Above",
            "RAM": "8GB",
            "Storage": "1TB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "48 Hours"
        }
    },
    {
        "id": "P54",
        "title": "iPhone 13 Pro",
        "brand": "Apple",
        "price": 87999,
        "oldPrice": 96702,
        "discount": 9,
        "rating": 4.12,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P54.jpg",
        "category": "Electronics",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "8GB",
            "Storage": "256GB SSD",
            "Connectivity": "Wi-Fi 6",
            "Battery": "24 Hours"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹20,000 & Above",
            "RAM": "8GB",
            "Storage": "256GB SSD",
            "Connectivity": "Wi-Fi 6",
            "Battery": "24 Hours"
        }
    },
    {
        "id": "P55",
        "title": "iPhone X",
        "brand": "Apple",
        "price": 71999,
        "oldPrice": 88887,
        "discount": 19,
        "rating": 2.51,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P55.jpg",
        "category": "Electronics",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "8GB",
            "Storage": "512GB SSD",
            "Connectivity": "Wi-Fi 6",
            "Battery": "10 Hours"
        },
        "filters": {
            "Brand": "Apple",
            "PriceRange": "₹20,000 & Above",
            "RAM": "8GB",
            "Storage": "512GB SSD",
            "Connectivity": "Wi-Fi 6",
            "Battery": "10 Hours"
        }
    },
    {
        "id": "P56",
        "title": "Oppo A57",
        "brand": "Oppo",
        "price": 19999,
        "oldPrice": 20407,
        "discount": 2,
        "rating": 3.94,
        "reviews": 3,
        "image": "../assets/images/products/electronics/prod_P56.jpg",
        "category": "Electronics",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RAM": "32GB",
            "Storage": "1TB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "10 Hours"
        },
        "filters": {
            "Brand": "Oppo",
            "PriceRange": "₹10,000 to ₹20,000",
            "RAM": "32GB",
            "Storage": "1TB SSD",
            "Connectivity": "Bluetooth 5.0",
            "Battery": "10 Hours"
        }
    },
    {
        "id": "P57",
        "title": "Blue Frock",
        "brand": "QuickMart Exclusive",
        "price": 2399,
        "oldPrice": 2726,
        "discount": 12,
        "rating": 4.17,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P57.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "S",
            "Color": "White",
            "Fabric": "Denim",
            "Gender": "Women"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "₹2,000 to ₹5,000",
            "Size": "S",
            "Color": "White",
            "Fabric": "Denim",
            "Gender": "Women"
        }
    },
    {
        "id": "P58",
        "title": "Girl Summer Dress",
        "brand": "QuickMart Exclusive",
        "price": 1599,
        "oldPrice": 1974,
        "discount": 19,
        "rating": 4.77,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P58.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "M",
            "Color": "Red",
            "Fabric": "Denim",
            "Gender": "Men"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "Under ₹2,000",
            "Size": "M",
            "Color": "Red",
            "Fabric": "Denim",
            "Gender": "Men"
        }
    },
    {
        "id": "P59",
        "title": "Gray Dress",
        "brand": "QuickMart Exclusive",
        "price": 2799,
        "oldPrice": 3254,
        "discount": 14,
        "rating": 2.72,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P59.jpg",
        "category": "Fashion",
        "isBestSeller": true,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "L",
            "Color": "Pastel Pink",
            "Fabric": "Denim",
            "Gender": "Men"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "₹2,000 to ₹5,000",
            "Size": "L",
            "Color": "Pastel Pink",
            "Fabric": "Denim",
            "Gender": "Men"
        }
    },
    {
        "id": "P60",
        "title": "Short Frock",
        "brand": "QuickMart Exclusive",
        "price": 1999,
        "oldPrice": 2297,
        "discount": 13,
        "rating": 3.23,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P60.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "L",
            "Color": "Black",
            "Fabric": "Leather",
            "Gender": "Women"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "Under ₹2,000",
            "Size": "L",
            "Color": "Black",
            "Fabric": "Leather",
            "Gender": "Women"
        }
    },
    {
        "id": "P61",
        "title": "Tartan Dress",
        "brand": "QuickMart Exclusive",
        "price": 3199,
        "oldPrice": 3635,
        "discount": 12,
        "rating": 4.05,
        "reviews": 3,
        "image": "../assets/images/products/fashion/prod_P61.jpg",
        "category": "Fashion",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Size": "S",
            "Color": "Red",
            "Fabric": "Denim",
            "Gender": "Men"
        },
        "filters": {
            "Brand": "Exclusive",
            "PriceRange": "₹2,000 to ₹5,000",
            "Size": "S",
            "Color": "Red",
            "Fabric": "Denim",
            "Gender": "Men"
        }
    },
    {
        "id": "P62",
        "title": "Blue Women's Handbag",
        "brand": "Fashionista",
        "price": 3999,
        "oldPrice": 4818,
        "discount": 17,
        "rating": 2.92,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P62.jpg",
        "category": "Accessories",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Leather",
            "Type": "Wallet",
            "Color": "Red"
        },
        "filters": {
            "Brand": "Fashionista",
            "PriceRange": "₹2,000 to ₹5,000",
            "Material": "Leather",
            "Type": "Wallet",
            "Color": "Red"
        }
    },
    {
        "id": "P63",
        "title": "Heshe Women's Leather Bag",
        "brand": "Heshe",
        "price": 10399,
        "oldPrice": 10720,
        "discount": 3,
        "rating": 4.92,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P63.jpg",
        "category": "Accessories",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Wood",
            "Type": "Belt",
            "Color": "Pastel Pink"
        },
        "filters": {
            "Brand": "Heshe",
            "PriceRange": "₹10,000 to ₹20,000",
            "Material": "Wood",
            "Type": "Belt",
            "Color": "Pastel Pink"
        }
    },
    {
        "id": "P64",
        "title": "Prada Women Bag",
        "brand": "Prada",
        "price": 47999,
        "oldPrice": 55812,
        "discount": 14,
        "rating": 2.71,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P64.jpg",
        "category": "Accessories",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Leather",
            "Type": "Belt",
            "Color": "Pastel Pink"
        },
        "filters": {
            "Brand": "Prada",
            "PriceRange": "₹20,000 & Above",
            "Material": "Leather",
            "Type": "Belt",
            "Color": "Pastel Pink"
        }
    },
    {
        "id": "P65",
        "title": "White Faux Leather Backpack",
        "brand": "Urban Chic",
        "price": 3199,
        "oldPrice": 3763,
        "discount": 15,
        "rating": 3.36,
        "reviews": 3,
        "image": "../assets/images/products/accessories/prod_P65.jpg",
        "category": "Accessories",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Material": "Wood",
            "Type": "Belt",
            "Color": "Blue"
        },
        "filters": {
            "Brand": "Urban Chic",
            "PriceRange": "₹2,000 to ₹5,000",
            "Material": "Wood",
            "Type": "Belt",
            "Color": "Blue"
        }
    },
    {
        "id": "P66",
        "title": "Black & Brown Slipper",
        "brand": "Comfort Trends",
        "price": 1599,
        "oldPrice": 1648,
        "discount": 3,
        "rating": 2.53,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P66.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 10",
            "Sports Type": "Training"
        },
        "filters": {
            "Brand": "Comfort Trends",
            "PriceRange": "Under ₹2,000",
            "Shoe Size": "UK 10",
            "Sports Type": "Training"
        }
    },
    {
        "id": "P67",
        "title": "Calvin Klein Heel Shoes",
        "brand": "Calvin Klein",
        "price": 6399,
        "oldPrice": 6596,
        "discount": 3,
        "rating": 4.92,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P67.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 8",
            "Sports Type": "Basketball"
        },
        "filters": {
            "Brand": "Calvin Klein",
            "PriceRange": "₹5,000 to ₹10,000",
            "Shoe Size": "UK 8",
            "Sports Type": "Basketball"
        }
    },
    {
        "id": "P68",
        "title": "Golden Shoes Woman",
        "brand": "Fashion Diva",
        "price": 3999,
        "oldPrice": 4596,
        "discount": 13,
        "rating": 3.26,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P68.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 9",
            "Sports Type": "Running"
        },
        "filters": {
            "Brand": "Fashion Diva",
            "PriceRange": "₹2,000 to ₹5,000",
            "Shoe Size": "UK 9",
            "Sports Type": "Running"
        }
    },
    {
        "id": "P69",
        "title": "Pampi Shoes",
        "brand": "Pampi",
        "price": 2399,
        "oldPrice": 2789,
        "discount": 14,
        "rating": 3.05,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P69.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": true,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 8",
            "Sports Type": "Basketball"
        },
        "filters": {
            "Brand": "Pampi",
            "PriceRange": "₹2,000 to ₹5,000",
            "Shoe Size": "UK 8",
            "Sports Type": "Basketball"
        }
    },
    {
        "id": "P70",
        "title": "Red Shoes",
        "brand": "Fashion Express",
        "price": 2799,
        "oldPrice": 3372,
        "discount": 17,
        "rating": 3.25,
        "reviews": 3,
        "image": "../assets/images/products/sneakers/prod_P70.jpg",
        "category": "Sneakers",
        "isBestSeller": false,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "Shoe Size": "UK 9",
            "Sports Type": "Training"
        },
        "filters": {
            "Brand": "Fashion Express",
            "PriceRange": "₹2,000 to ₹5,000",
            "Shoe Size": "UK 9",
            "Sports Type": "Training"
        }
    },
    {
        "id": "G1",
        "title": "Pro Gaming Gear Model 1",
        "brand": "Logitech",
        "price": 9144,
        "oldPrice": 10644,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_1.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Logitech",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G2",
        "title": "Pro Gaming Gear Model 2",
        "brand": "Corsair",
        "price": 6927,
        "oldPrice": 8427,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_2.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Corsair",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G3",
        "title": "Pro Gaming Gear Model 3",
        "brand": "Razer",
        "price": 11501,
        "oldPrice": 13001,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_3.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Razer",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G4",
        "title": "Pro Gaming Gear Model 4",
        "brand": "Logitech",
        "price": 2813,
        "oldPrice": 4313,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_4.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Logitech",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G5",
        "title": "Pro Gaming Gear Model 5",
        "brand": "Corsair",
        "price": 5667,
        "oldPrice": 7167,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_5.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Corsair",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G6",
        "title": "Pro Gaming Gear Model 6",
        "brand": "Razer",
        "price": 13624,
        "oldPrice": 15124,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_6.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Razer",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G7",
        "title": "Pro Gaming Gear Model 7",
        "brand": "Logitech",
        "price": 7058,
        "oldPrice": 8558,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_7.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Logitech",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G8",
        "title": "Pro Gaming Gear Model 8",
        "brand": "Corsair",
        "price": 5655,
        "oldPrice": 7155,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_8.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Corsair",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G9",
        "title": "Pro Gaming Gear Model 9",
        "brand": "Razer",
        "price": 13933,
        "oldPrice": 15433,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_9.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Razer",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    },
    {
        "id": "G10",
        "title": "Pro Gaming Gear Model 10",
        "brand": "Logitech",
        "price": 8995,
        "oldPrice": 10495,
        "discount": 10,
        "rating": 4.8,
        "reviews": 1200,
        "image": "../assets/images/products/gaming/gaming_10.jpg",
        "category": "Gaming",
        "isBestSeller": true,
        "isNewArrival": false,
        "delivery": "Tomorrow",
        "specs": {
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless"
        },
        "filters": {
            "Brand": "Logitech",
            "RGB": "Yes",
            "Console Compatibility": "Universal",
            "Connection": "Wireless",
            "PriceRange": "₹10,000 to ₹20,000"
        }
    }
];
if (typeof module !== 'undefined') module.exports = productsData;