import * as D_T from "classes.js"
'use strict'

document.addEventListener('DOMContentLoader', () =>{

})

// Helper function to generate random IDs
function getRandomId() {
    return Math.floor(Math.random() * 1000000);
}

// Function to generate 75 coherent random tutorials about home machinery and gadgets
function generateRandomTutorials() {
    const tutorialCategories = {
        kitchen: [
            "Coffee Maker", "Blender", "Food Processor", "Stand Mixer", "Air Fryer",
            "Instant Pot", "Toaster Oven", "Microwave", "Dishwasher", "Refrigerator",
            "Ice Maker", "Electric Kettle", "Rice Cooker", "Slow Cooker", "Juicer"
        ],
        cleaning: [
            "Robot Vacuum", "Upright Vacuum", "Steam Mop", "Carpet Cleaner", "Pressure Washer",
            "Window Cleaner", "Air Purifier", "Dehumidifier", "Washing Machine", "Dryer",
            "Iron", "Garment Steamer", "Handheld Vacuum", "Floor Polisher", "UV Sanitizer"
        ],
        homeOffice: [
            "3D Printer", "Paper Shredder", "Laminator", "Label Maker", "Document Scanner",
            "Wireless Router", "NAS Device", "Smart Board", "Conference Speaker", "Webcam",
            "Monitor Arm", "Standing Desk", "Ergonomic Chair", "CPU Maintenance", "Printer"
        ],
        outdoor: [
            "Lawn Mower", "Leaf Blower", "Hedge Trimmer", "Chainsaw", "Snow Blower",
            "String Trimmer", "Power Washer", "Electric Grill", "Pool Cleaner", "Sprinkler System",
            "Generator", "Drill Press", "Table Saw", "Circular Saw", "Air Compressor"
        ],
        entertainment: [
            "Smart TV", "Gaming Console", "Soundbar", "Projector", "Streaming Device",
            "Home Theater System", "VR Headset", "Drone", "Action Camera", "Smart Speaker",
            "Turntable", "Amplifier", "Subwoofer", "Media Player", "Satellite Receiver"
        ],
        smartHome: [
            "Smart Thermostat", "Security Camera", "Doorbell Camera", "Smart Lock", "Smart Lights",
            "Voice Assistant", "Smart Plug", "Robot Mop", "Smart Blinds", "Water Leak Detector",
            "Smart Smoke Detector", "Garage Door Opener", "Smart Irrigation", "Pet Feeder", "Robot Lawn Mower"
        ]
    };

    const brands = {
        kitchen: ["KitchenAid", "Cuisinart", "Ninja", "Instant", "Breville", "Hamilton Beach", "Black+Decker", "Oster", "Keurig", "Mr. Coffee"],
        cleaning: ["Dyson", "Shark", "Bissell", "Hoover", "iRobot", "Eureka", "LG", "Samsung", "Philips", "Black+Decker"],
        homeOffice: ["Brother", "HP", "Canon", "Epson", "Netgear", "TP-Link", "Logitech", "Dell", "Microsoft", "Apple"],
        outdoor: ["Husqvarna", "John Deere", "Stihl", "Makita", "DEWALT", "Milwaukee", "Ryobi", "Black+Decker", "Greenworks", "Ego"],
        entertainment: ["Sony", "Samsung", "LG", "Bose", "JBL", "Roku", "Apple", "NVIDIA", "PlayStation", "Xbox"],
        smartHome: ["Nest", "Ring", "Arlo", "Ecobee", "Philips Hue", "August", "Wyze", "TP-Link", "iRobot", "Roomba"]
    };

    const tutorialVerbs = [
        "How to Use", "Beginner's Guide to", "Mastering Your", "Tips and Tricks for",
        "Complete Setup of", "Troubleshooting Your", "Maintenance Guide for",
        "Advanced Features of", "Getting Started with", "DIY Repair for",
        "Optimizing Your", "Cleaning and Care for", "Installation Guide for",
        "Programming Your", "Energy Saving Tips for"
    ];

    const descriptions = {
        setup: "Step-by-step guide to set up and configure your device for optimal performance",
        maintenance: "Learn proper cleaning, maintenance, and care techniques to extend your device's lifespan",
        troubleshooting: "Common issues and solutions to keep your equipment running smoothly",
        advanced: "Discover hidden features and advanced functions you didn't know about",
        beginner: "Perfect for new owners - covers all the basics and essential functions",
        repair: "DIY fixes and repairs you can do at home without professional help"
    };

    const locations = [
        "kitchen", "living room", "garage", "home office", "bedroom", "bathroom",
        "backyard", "basement", "laundry room", "patio", "workshop", "entertainment center"
    ];

    const allTags = [
        "how-to", "tutorial", "diy", "maintenance", "setup", "installation",
        "cleaning", "repair", "troubleshooting", "beginners", "advanced",
        "tips", "guide", "home-improvement", "electronics", "appliances",
        "smart-home", "gadgets", "kitchen", "cleaning", "office", "outdoor",
        "entertainment", "energy-saving", "safety", "warranty", "accessories"
    ];

    const tutorials = [];
    let tutorialCount = 0;

    // Generate tutorials for each category
    for (const [category, devices] of Object.entries(tutorialCategories)) {
        for (const device of devices) {
            if (tutorialCount >= 75) break;

            const brand = brands[category][Math.floor(Math.random() * brands[category].length)];
            const verb = tutorialVerbs[Math.floor(Math.random() * tutorialVerbs.length)];
            const name = `${verb} ${brand} ${device}`;
            
            // Generate coherent description
            const descriptionTypes = Object.keys(descriptions);
            const descriptionType = descriptionTypes[Math.floor(Math.random() * descriptionTypes.length)];
            const location = locations[Math.floor(Math.random() * locations.length)];
            const description = `${descriptions[descriptionType]}. This tutorial covers everything you need to know about using your ${brand} ${device} in the ${location}.`;

            // Generate coherent tags
            const numTags = Math.floor(Math.random() * 5) + 3;
            const tutorialTags = [];
            const availableTags = [...allTags];
            
            // Add category-specific tags
            tutorialTags.push(category.replace(/([A-Z])/g, '-$1').toLowerCase());
            tutorialTags.push(device.toLowerCase().replace(/\s+/g, '-'));
            tutorialTags.push(brand.toLowerCase());
            
            for (let j = 0; j < numTags; j++) {
                if (availableTags.length === 0) break;
                const randomIndex = Math.floor(Math.random() * availableTags.length);
                const tag = availableTags.splice(randomIndex, 1)[0];
                if (!tutorialTags.includes(tag)) {
                    tutorialTags.push(tag);
                }
            }

            // Generate video and banner URLs (using placeholder services)
            const videoUrl = `https://example.com/videos/tutorial-${tutorialCount + 1}.mp4`;
            const bannerUrl = `https://picsum.photos/800/400?random=${tutorialCount}&category=technology`;
            
            // Random user ID (content creator)
            const userId = Math.floor(Math.random() * 50) + 1;
            
            // Generate realistic view counts (higher for popular categories)
            let baseViews;
            switch(category) {
                case "kitchen":
                case "entertainment":
                    baseViews = Math.floor(Math.random() * 50000) + 10000;
                    break;
                case "smartHome":
                case "cleaning":
                    baseViews = Math.floor(Math.random() * 30000) + 5000;
                    break;
                default:
                    baseViews = Math.floor(Math.random() * 20000) + 1000;
            }
            const viewsCounter = baseViews;

            const tutorial = new Tutorial(
                getRandomId(),
                userId,
                name,
                videoUrl,
                bannerUrl,
                description,
                tutorialTags,
                viewsCounter
            );

            tutorials.push(tutorial);
            tutorialCount++;
        }
    }

    return tutorials;
}

// Usage example:
const randomTutorials = generateRandomTutorials();
console.log(randomTutorials);
console.log(`Generated ${randomTutorials.length} tutorials`);

// Optional: Display sample of generated tutorials
console.log("\nSample Tutorials:");
randomTutorials.slice(0, 5).forEach(tutorial => {
    console.log(`- ${tutorial.name}`);
    console.log(`  Views: ${tutorial.viewsCounter}`);
    console.log(`  Tags: ${tutorial.tags.slice(0, 3).join(', ')}...`);
});