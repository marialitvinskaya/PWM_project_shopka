const data = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        currency: "USD",
        category: "Electronics",
        inStock: true,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-2-202111?wid=728&hei=666&fmt=png-alpha&.v=1664581580690",
        review: 4.5,
        discount: 100,
        description: "A powerful laptop with high-resolution display and fast performance.",
        shipping: {
            cost: 29.99,
            method: "Standard",
            estimatedDelivery: "5-7 business days",
        },
    },
    {
        id: 2,
        name: "T-shirt",
        price: 19.99,
        currency: "USD",
        category: "Clothing",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/81k7gfwxVLL._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.0,
        discount: 5,
        description: "Comfortable and stylish cotton t-shirt for everyday wear.",
        shipping: {
            cost: 5.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 3,
        name: "Smartphone",
        price: 599.99,
        currency: "USD",
        category: "Electronics",
        inStock: false,
        image: "https://www.apple.com/v/iphone/compare/ae/images/overview/compare_iphone15_pro_natural_titanium__bgbrds3u9bxu_large_2x.jpg",
        review: 3.8,
        discount: 50,
        description: "The latest smartphone with a high-resolution camera and advanced features.",
        shipping: {
            cost: 19.99,
            method: "Express",
            estimatedDelivery: "2-3 business days",
        },
    },
    {
        id: 4,
        name: "Shoes",
        price: 49.99,
        currency: "USD",
        category: "Footwear",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/71dFq6UxPhL._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.2,
        discount: 15,
        description: "Comfortable and durable shoes for various outdoor activities.",
        shipping: {
            cost: 9.99,
            method: "Standard",
            estimatedDelivery: "4-6 business days",
        },
    },
    {
        id: 5,
        name: "Headphones",
        price: 79.99,
        currency: "USD",
        category: "Electronics",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/51akApj+r+L._AC_SY879_.jpg",
        review: 4.7,
        discount: 10,
        description: "High-quality headphones with noise-cancellation technology.",
        shipping: {
            cost: 7.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 6,
        name: "Desk Chair",
        price: 149.99,
        currency: "USD",
        category: "Furniture",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/71ZaNO0JqnL._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.2,
        discount: 20,
        description: "Ergonomic desk chair with adjustable features for a comfortable work environment.",
        shipping: {
            cost: 19.99,
            method: "Standard",
            estimatedDelivery: "5-7 business days",
        },
    },
    {
        id: 7,
        name: "Backpack",
        price: 39.99,
        currency: "USD",
        category: "Accessories",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/81XJZU+49tL._AC_UY879_.jpg",
        review: 4.8,
        discount: 0,
        description: "Spacious and stylish backpack for everyday use or travel.",
        shipping: {
            cost: 6.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 8,
        name: "Coffee Maker",
        price: 79.99,
        currency: "USD",
        category: "Kitchen Appliances",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/71Pw3Ac8+VL._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.6,
        discount: 10,
        description: "Drip coffee maker with a programmable timer for brewing your favorite coffee.",
        shipping: {
            cost: 9.99,
            method: "Standard",
            estimatedDelivery: "4-6 business days",
        },
    },
    {
        id: 9,
        name: "Digital Camera",
        price: 399.99,
        currency: "USD",
        category: "Electronics",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/81C9A0E+8TL._AC_UY436_FMwebp_QL65_.jpg",
        review: 4.4,
        discount: 30,
        description: "High-quality digital camera for capturing stunning photos and videos.",
        shipping: {
            cost: 14.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 10,
        name: "Yoga Mat",
        price: 29.99,
        currency: "USD",
        category: "Fitness",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/81k53EsViVL._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.9,
        discount: 0,
        description: "Non-slip yoga mat for comfortable and safe workouts.",
        shipping: {
            cost: 4.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 11,
        name: "Blender",
        price: 59.99,
        currency: "USD",
        category: "Kitchen Appliances",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/61w2Tj7r0BL._AC_UY436_FMwebp_QL65_.jpg",
        review: 4.3,
        discount: 15,
        description: "Powerful blender for making smoothies and a variety of delicious beverages.",
        shipping: {
            cost: 8.99,
            method: "Standard",
            estimatedDelivery: "4-6 business days",
        },
    },
    {
        id: 12,
        name: "Watch",
        price: 129.99,
        currency: "USD",
        category: "Accessories",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/51JHwp+kmiL._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.7,
        discount: 0,
        description: "Stylish and elegant wristwatch for both casual and formal occasions.",
        shipping: {
            cost: 7.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 13,
        name: "Gaming Console",
        price: 299.99,
        currency: "USD",
        category: "Electronics",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/71pIS8f417L._AC_UY436_FMwebp_QL65_.jpg",
        review: 4.6,
        discount: 25,
        description: "Gaming console for an immersive gaming experience with high-quality graphics.",
        shipping: {
            cost: 14.99,
            method: "Standard",
            estimatedDelivery: "5-7 business days",
        },
    },
    {
        id: 14,
        name: "Cookware Set",
        price: 89.99,
        currency: "USD",
        category: "Kitchen",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/71n1FCvtS+L._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.2,
        discount: 10,
        description: "Complete cookware set for preparing a wide range of delicious dishes.",
        shipping: {
            cost: 12.99,
            method: "Standard",
            estimatedDelivery: "4-6 business days",
        },
    },
    {
        id: 15,
        name: "Sunglasses",
        price: 49.99,
        currency: "USD",
        category: "Accessories",
        inStock: true,
        image: "https://moscot.com/cdn/shop/files/lemtosh-color-tortoise-pos-2_3d0284ce-bd3e-4c66-84bb-49bd189f2988.jpg?v=1697426023",
        review: 4.8,
        discount: 0,
        description: "Fashionable sunglasses with UV protection for eye safety and style.",
        shipping: {
            cost: 6.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 16,
        name: "Desk",
        price: 199.99,
        currency: "USD",
        category: "Furniture",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/61iUtX7XcfL._AC_UL640_FMwebp_QL65_.jpg",
        review: 4.4,
        discount: 15,
        description: "Sturdy and spacious desk for working or studying at home.",
        shipping: {
            cost: 19.99,
            method: "Standard",
            estimatedDelivery: "5-7 business days",
        },
    },
    {
        id: 17,
        name: "Handbag",
        price: 69.99,
        currency: "USD",
        category: "Accessories",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/61k8J1mO3JL._AC_SX679._SX._UX._SY._UY_.jpg",
        review: 4.6,
        discount: 0,
        description: "Elegant handbag with multiple compartments for organizing your essentials.",
        shipping: {
            cost: 7.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 18,
        name: "Vacuum Cleaner",
        price: 129.99,
        currency: "USD",
        category: "Home Appliances",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/61Z5uYmp7SL._AC_UY436_QL65_.jpg",
        review: 4.5,
        discount: 20,
        description: "High-performance vacuum cleaner for efficient cleaning of your home.",
        shipping: {
            cost: 9.99,
            method: "Standard",
            estimatedDelivery: "4-6 business days",
        },
    },
    {
        id: 19,
        name: "Guitar",
        price: 299.99,
        currency: "USD",
        category: "Musical Instruments",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/61e1dn7oNoL._AC_UL640_FMwebp_QL65_.jpg",
        review: 2.5,
        discount: 10,
        description: "Acoustic guitar for musicians and music enthusiasts.",
        shipping: {
            cost: 14.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
    {
        id: 20,
        name: "Fitness Tracker",
        price: 79.99,
        currency: "USD",
        category: "Fitness",
        inStock: true,
        image: "https://m.media-amazon.com/images/I/71TfQloFgAL._AC_SX679_.jpg",
        review: 4.4,
        discount: 0,
        description: "Smart fitness tracker with heart rate monitoring and activity tracking.",
        shipping: {
            cost: 6.99,
            method: "Standard",
            estimatedDelivery: "3-5 business days",
        },
    },
];

export default data;