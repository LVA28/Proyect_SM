import * as D_RO from "classes.js"
import * as aux_D_P from "data_products.js"
import * as aux_D_U from "data_users.js"

'use strict'

document.addEventListener('DOMContentLoader', () =>{

})

// Using the getRandomId function from your provided code
function getRandomId() {
    return Math.random().toString(36).substr(2, 9);
}

// Product names from previous context extended with potential problems
const productNames = [
    "iPhone 13 Pro - Cracked screen and unresponsive touch",
    "Samsung Galaxy S22 - Battery draining rapidly and overheating",
    "MacBook Pro 2021 - Keyboard keys sticking and backlight flickering",
    "Sony WH-1000XM4 - Right earphone crackling and noise cancellation failing",
    "Canon EOS R5 - Lens error and autofocus malfunctioning",
    "iPad Pro 12.9 - Display ghosting and charging port loose",
    "Nintendo Switch - Joy-Con drift and connectivity issues",
    "PlayStation 5 - Overheating and disc reading errors",
    "Dyson V11 - Suction loss and battery not holding charge",
    "Instant Pot - Pressure valve stuck and display not working",
    "Roomba i7 - Navigation system errors and not returning to dock"
];

// Generate 8 repair applications
function generateRepairApplications() {
    const repairApps = [];
    
    for (let i = 0; i < 8; i++) {
        const productIndex = i % productNames.length;
        const name = productNames[productIndex];
        
        // Generate tags relevant to the repair
        const tags = generateRepairTags(name);
        
        // Generate interested persons (0-8 random usernames)
        const interestedCount = Math.floor(Math.random() * 9);
        const interestedPersons = [];
        for (let j = 0; j < interestedCount; j++) {
            interestedPersons.push(getRandomUsername());
        }
        
        // Generate other attributes based on Product class context
        const repairApp = new RepairApplication(
            getRandomId(), // id
            getRandomId(), // userId (using same function)
            name,
            generateRealisticPrice(name), // price
            generateImageUrl(name), // imageUrl
            generateLocation(), // location
            generateDescription(name), // description
            tags,
            interestedPersons
        );
        
        repairApps.push(repairApp);
    }
    
    return repairApps;
}

// Helper functions based on Product class context
function generateRepairTags(productName) {
    const baseTags = {
        "iPhone": ["screen repair", "touch digitizer", "LCD replacement", "glass repair", "water damage", "display", "mobile repair"],
        "Samsung": ["battery replacement", "thermal issues", "fast charging", "android repair", "power management", "overheating fix"],
        "MacBook": ["keyboard mechanism", "backlight repair", "key replacement", "laptop repair", "apple certified", "hardware fix"],
        "Sony": ["audio repair", "headphone drivers", "bluetooth fix", "ANC repair", "speaker replacement", "sound quality"],
        "Canon": ["lens calibration", "autofocus repair", "camera hardware", "optical repair", "sensor cleaning", "professional gear"],
        "iPad": ["display issues", "charging port", "tablet repair", "touch screen", "connector repair", "apple tablet"],
        "Nintendo": ["controller repair", "joystick replacement", "drift fix", "wireless connectivity", "gaming console", "hardware calibration"],
        "PlayStation": ["thermal paste", "fan replacement", "disc drive", "console repair", "cooling system", "gaming hardware"],
        "Dyson": ["motor repair", "battery replacement", "suction system", "vacuum repair", "filter cleaning", "cordless appliance"],
        "Instant Pot": ["pressure system", "seal replacement", "electronic display", "kitchen appliance", "safety valve", "cooking gadget"],
        "Roomba": ["navigation sensors", "battery issues", "wheel mechanism", "robot vacuum", "smart home", "mapping system"]
    };
    
    let tags = [];
    const tagCount = 5 + Math.floor(Math.random() * 4); // 5-8 tags
    
    // Find matching category
    for (const [category, categoryTags] of Object.entries(baseTags)) {
        if (productName.toLowerCase().includes(category.toLowerCase())) {
            tags = [...categoryTags];
            break;
        }
    }
    
    // Shuffle and select required number of tags
    return tags.sort(() => 0.5 - Math.random()).slice(0, tagCount);
}

function generateRealisticPrice(productName) {
    const basePrices = {
        "iPhone": 120,
        "Samsung": 90,
        "MacBook": 250,
        "Sony": 80,
        "Canon": 180,
        "iPad": 110,
        "Nintendo": 45,
        "PlayStation": 120,
        "Dyson": 75,
        "Instant Pot": 60,
        "Roomba": 95
    };
    
    let basePrice = 100; // default
    for (const [device, price] of Object.entries(basePrices)) {
        if (productName.toLowerCase().includes(device.toLowerCase())) {
            basePrice = price;
            break;
        }
    }
    
    // Add some variation (±20%)
    const variation = basePrice * 0.2;
    return Math.round(basePrice + (Math.random() * variation * 2 - variation));
}

function generateImageUrl(productName) {
    const baseUrls = {
        "iPhone": "https://example.com/images/iphone-repair.jpg",
        "Samsung": "https://example.com/images/samsung-repair.jpg",
        "MacBook": "https://example.com/images/macbook-repair.jpg",
        "Sony": "https://example.com/images/sony-headphones.jpg",
        "Canon": "https://example.com/images/canon-camera.jpg",
        "iPad": "https://example.com/images/ipad-repair.jpg",
        "Nintendo": "https://example.com/images/nintendo-switch.jpg",
        "PlayStation": "https://example.com/images/ps5-repair.jpg",
        "Dyson": "https://example.com/images/dyson-vacuum.jpg",
        "Instant Pot": "https://example.com/images/instant-pot.jpg",
        "Roomba": "https://example.com/images/roomba-repair.jpg"
    };
    
    for (const [device, url] of Object.entries(baseUrls)) {
        if (productName.toLowerCase().includes(device.toLowerCase())) {
            return url;
        }
    }
    
    return "https://example.com/images/default-repair.jpg";
}

function generateLocation() {
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    return cities[Math.floor(Math.random() * cities.length)];
}

function generateDescription(productName) {
    const descriptions = {
        "iPhone": `Professional iPhone screen replacement service. Includes original quality LCD display and new touch digitizer. 30-day warranty on repair work.`,
        "Samsung": `Expert Samsung battery replacement and thermal management repair. Genuine parts used with comprehensive testing.`,
        "MacBook": `MacBook keyboard mechanism repair with individual key replacement and backlight system fix.`,
        "Sony": `Sony headphone audio repair including driver replacement and noise cancellation system restoration.`,
        "Canon": `Professional camera lens repair and autofocus system calibration for optimal performance.`,
        "iPad": `iPad display ghosting fix and charging port replacement using certified components.`,
        "Nintendo": `Nintendo Switch Joy-Con drift repair with joystick replacement and connectivity enhancement.`,
        "PlayStation": `PS5 overheating solution including thermal paste application, fan cleaning, and disc drive maintenance.`,
        "Dyson": `Dyson vacuum motor and suction system repair with battery replacement and filter cleaning.`,
        "Instant Pot": `Instant Pot pressure system repair including safety valve replacement and electronic display fix.`,
        "Roomba": `Roomba navigation sensor calibration and battery system repair for optimal cleaning performance.`
    };
    
    for (const [device, desc] of Object.entries(descriptions)) {
        if (productName.toLowerCase().includes(device.toLowerCase())) {
            return desc;
        }
    }
    
    return `Professional repair service for your device. Quality parts and expert workmanship guaranteed.`;
}

// Generate the repair applications
const repairApplications = generateRepairApplications();

// Display the generated applications
console.log("Generated 8 Repair Applications:\n");
repairApplications.forEach((app, index) => {
    console.log(`=== Repair Application ${index + 1} ===`);
    console.log(`ID: ${app.id}`);
    console.log(`User ID: ${app.userId}`);
    console.log(`Name: ${app.name}`);
    console.log(`Price: $${app.price}`);
    console.log(`Image: ${app.imageUrl}`);
    console.log(`Location: ${app.location}`);
    console.log(`Description: ${app.description}`);
    console.log(`Tags: [${app.tags.join(', ')}]`);
    console.log(`Interested Persons: [${app.interestedPersons.join(', ')}]`);
    console.log("\n");
});