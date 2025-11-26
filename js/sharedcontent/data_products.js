import * as D_P from "classes.js"

'use strict'

document.addEventListener('DOMContentLoader', () =>{

})

// Helper function to generate random IDs
function getRandomId() {
    return Math.floor(Math.random() * 1000000);
}

// Function to generate 75 coherent random products
function generateRandomProducts() {
    const productNames = [
        "Smartphone", "Laptop", "Headphones", "Camera", "Tablet", 
        "Smart Watch", "Gaming Console", "Bluetooth Speaker", "Monitor", 
        "Keyboard", "Mouse", "External Hard Drive", "Router", "Printer",
        "Fitness Tracker", "E-reader", "Action Camera", "Drone", "VR Headset",
        "Wireless Earbuds", "Power Bank", "Webcam", "Microphone", "Graphics Tablet"
    ];
    
    const brands = [
        "Apple", "Samsung", "Sony", "Canon", "Nikon", "Dell", "HP", "Lenovo",
        "Bose", "JBL", "Logitech", "Microsoft", "Google", "LG", "Asus", "Acer"
    ];
    
    const locations = [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
        "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
        "San Francisco", "Columbus", "Indianapolis", "Seattle", "Denver", "Boston"
    ];
    
    const allTags = [
        "electronics", "tech", "gadget", "wireless", "portable", "smart", "digital",
        "high-quality", "premium", "budget", "gaming", "professional", "home",
        "office", "travel", "fitness", "audio", "video", "photography", "computing"
    ];
    
    const descriptions = {
        "Smartphone": "Latest model with advanced features and excellent camera quality",
        "Laptop": "Powerful computing device perfect for work and entertainment",
        "Headphones": "High-quality audio with noise cancellation technology",
        "Camera": "Professional-grade photography equipment",
        "Tablet": "Portable device for browsing, reading, and entertainment",
        "Smart Watch": "Track your fitness and stay connected on the go",
        "Gaming Console": "Next-generation gaming experience",
        "Bluetooth Speaker": "Wireless audio for any occasion"
    };
    
    const products = [];
    
    for (let i = 0; i < 75; i++) {
        const productType = productNames[Math.floor(Math.random() * productNames.length)];
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const name = `${brand} ${productType}`;
        
        // Generate coherent description
        const baseDescription = descriptions[productType] || "High-quality product with excellent features";
        const description = `${baseDescription}. ${brand} brand ensures reliability and performance.`;
        
        // Generate coherent price based on product type
        let price;
        switch(productType) {
            case "Smartphone":
                price = Math.floor(Math.random() * 800) + 300;
                break;
            case "Laptop":
                price = Math.floor(Math.random() * 1500) + 500;
                break;
            case "Headphones":
                price = Math.floor(Math.random() * 300) + 50;
                break;
            case "Camera":
                price = Math.floor(Math.random() * 1000) + 200;
                break;
            case "Tablet":
                price = Math.floor(Math.random() * 600) + 150;
                break;
            default:
                price = Math.floor(Math.random() * 500) + 50;
        }
        
        // Generate coherent tags
        const numTags = Math.floor(Math.random() * 4) + 2;
        const productTags = [];
        const availableTags = [...allTags];
        
        for (let j = 0; j < numTags; j++) {
            if (availableTags.length === 0) break;
            const randomIndex = Math.floor(Math.random() * availableTags.length);
            productTags.push(availableTags.splice(randomIndex, 1)[0]);
        }
        
        // Add product-specific tags
        if (productType.toLowerCase().includes("phone")) productTags.push("mobile");
        if (productType.toLowerCase().includes("laptop") || productType.toLowerCase().includes("tablet")) productTags.push("computing");
        if (productType.toLowerCase().includes("audio") || productType.toLowerCase().includes("headphone") || productType.toLowerCase().includes("speaker")) productTags.push("audio");
        
        // Generate image URL (using placeholder service)
        const imageUrl = `https://picsum.photos/400/300?random=${i}`;
        
        // Random location
        const location = locations[Math.floor(Math.random() * locations.length)];
        
        // Random user ID
        const userId = Math.floor(Math.random() * 100) + 1;
        
        // Generate interested persons (0-10 random user IDs)
        const numInterested = Math.floor(Math.random() * 11);
        const interestedPersons = [];
        for (let k = 0; k < numInterested; k++) {
            interestedPersons.push(Math.floor(Math.random() * 100) + 1);
        }
        
        const product = new Product(
            getRandomId(),
            name,
            description,
            imageUrl,
            location,
            productTags,
            price,
            userId,
            interestedPersons
        );
        
        products.push(product);
    }
    
    return products;
}

// Usage example:
const randomProducts = generateRandomProducts();
console.log(randomProducts);