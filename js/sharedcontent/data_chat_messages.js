// import * as D_CM from "classes.js"

'use strict'

document.addEventListener('DOMContentLoader', () =>{

})

// Helper function to generate random IDs
function getRandomId() {
    return Math.floor(Math.random() * 1000000);
}

// Function to generate 10 different repair conversations
function generateRepairConversations() {
    const brokenGadgets = [
        { name: "Samsung Galaxy S22", issue: "cracked screen", basePrice: 120 },
        { name: "MacBook Pro 2021", issue: "keyboard not working", basePrice: 250 },
        { name: "Sony WH-1000XM4", issue: "right earphone not working", basePrice: 80 },
        { name: "Canon EOS R5", issue: "lens error", basePrice: 180 },
        { name: "iPad Pro 12.9", issue: "battery draining fast", basePrice: 90 },
        { name: "Nintendo Switch", issue: "joy-con drift", basePrice: 40 },
        { name: "PlayStation 5", issue: "overheating", basePrice: 110 },
        { name: "Dyson V11", issue: "suction power loss", basePrice: 70 },
        { name: "Instant Pot", issue: "pressure valve stuck", basePrice: 55 },
        { name: "Roomba i7", issue: "not charging properly", basePrice: 95 }
    ];

    const technicianPhrases = {
        greeting: [
            "Hi! I saw your request about the broken gadget. How can I help?",
            "Hello! I specialize in repairing these types of devices.",
            "Good day! I'm available to repair your device.",
            "Hi there! I have experience fixing this specific issue."
        ],
        diagnosis: [
            "Based on your description, it sounds like a %ISSUE%.",
            "This is a common problem with %GADGET% - usually it's the %ISSUE%.",
            "I've repaired many %GADGET% models with similar %ISSUE% issues.",
            "The %ISSUE% is something I can fix quite easily."
        ],
        priceQuote: [
            "I can repair it for $%PRICE% including parts and labor.",
            "My repair service would be $%PRICE% with a 90-day warranty.",
            "For this repair, I charge $%PRICE% which includes all necessary components.",
            "The total cost would be $%PRICE% - that's parts, labor, and testing."
        ],
        availability: [
            "I'm available this weekend if that works for you.",
            "I can come by tomorrow afternoon if you're free.",
            "I have openings on Wednesday and Thursday.",
            "I'm flexible this week - what day works best for you?"
        ]
    };

    const customerPhrases = {
        problem: [
            "My %GADGET% has a %ISSUE% and I need it fixed.",
            "The %GADGET% stopped working properly - %ISSUE%.",
            "I have a %GADGET% that needs repair for %ISSUE%.",
            "Can you fix a %GADGET% with %ISSUE%?"
        ],
        priceResponse: [
            "$%PRICE% seems reasonable for this repair.",
            "That price works for me. When can you start?",
            "Okay, $%PRICE% is fair. What's your availability?",
            "I can do $%PRICE%. How soon can you repair it?",
            "$%PRICE% is a bit high - could you do $%DISCOUNT%?",
            "Is there any warranty included for that price?",
            "Could you explain what the $%PRICE% includes?"
        ],
        scheduling: [
            "Weekend works perfect for me.",
            "Tomorrow afternoon is great.",
            "Wednesday would be ideal.",
            "I'm available any day after 5 PM."
        ]
    };

    const conversations = [];

    for (let i = 0; i < 10; i++) {
        const gadget = brokenGadgets[i];
        const conversation = [];
        let currentDate = new Date();
        let messageId = 1;
        
        // Technician is user 1, Customer is user 2
        const technicianId = 2;
        const customerId = 1;
        
        // Adjust price slightly for variety (±20%)
        const priceVariation = gadget.basePrice * (0.8 + Math.random() * 0.4);
        const finalPrice = Math.round(priceVariation / 5) * 5; // Round to nearest $5
        
        // Customer initiates (message 1)
        currentDate.setMinutes(currentDate.getMinutes() - 30);
        const customerProblem = customerPhrases.problem[Math.floor(Math.random() * customerPhrases.problem.length)]
            .replace('%GADGET%', gadget.name)
            .replace('%ISSUE%', gadget.issue);
        
        conversation.push(new ChatMessage(
            getRandomId(),
            customerId,
            new Date(currentDate),
            customerProblem
        ));
        
        // Technician responds (message 2)
        currentDate.setMinutes(currentDate.getMinutes() + 2);
        const techGreeting = technicianPhrases.greeting[Math.floor(Math.random() * technicianPhrases.greeting.length)];
        conversation.push(new ChatMessage(
            getRandomId(),
            technicianId,
            new Date(currentDate),
            techGreeting
        ));
        
        // Technician diagnosis (message 3)
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const diagnosis = technicianPhrases.diagnosis[Math.floor(Math.random() * technicianPhrases.diagnosis.length)]
            .replace('%GADGET%', gadget.name)
            .replace('%ISSUE%', gadget.issue);
        conversation.push(new ChatMessage(
            getRandomId(),
            technicianId,
            new Date(currentDate),
            diagnosis
        ));
        
        // Technician price quote (message 4)
        currentDate.setMinutes(currentDate.getMinutes() + 1);
        const priceQuote = technicianPhrases.priceQuote[Math.floor(Math.random() * technicianPhrases.priceQuote.length)]
            .replace('%PRICE%', finalPrice);
        conversation.push(new ChatMessage(
            getRandomId(),
            technicianId,
            new Date(currentDate),
            priceQuote
        ));
        
        // Customer responds to price (message 5)
        currentDate.setMinutes(currentDate.getMinutes() + 3);
        let priceResponse;
        if (Math.random() > 0.3) { // 70% accept immediately
            priceResponse = customerPhrases.priceResponse[Math.floor(Math.random() * 3)]
                .replace('%PRICE%', finalPrice);
        } else { // 30% negotiate or ask questions
            const discountPrice = Math.round(finalPrice * 0.9);
            priceResponse = customerPhrases.priceResponse[3 + Math.floor(Math.random() * 4)]
                .replace('%PRICE%', finalPrice)
                .replace('%DISCOUNT%', discountPrice);
        }
        conversation.push(new ChatMessage(
            getRandomId(),
            customerId,
            new Date(currentDate),
            priceResponse
        ));
        
        // Additional messages for negotiation or scheduling
        let additionalMessages = Math.floor(Math.random() * 3); // 0-2 additional messages
        
        if (additionalMessages > 0 && priceResponse.includes('?')) {
            // Technician clarifies or negotiates
            currentDate.setMinutes(currentDate.getMinutes() + 2);
            conversation.push(new ChatMessage(
                getRandomId(),
                technicianId,
                new Date(currentDate),
                "Yes, the price includes parts, labor, and a 90-day warranty on the repair."
            ));
            additionalMessages--;
        }
        
        if (additionalMessages > 0) {
            // Technician suggests schedule
            currentDate.setMinutes(currentDate.getMinutes() + 1);
            const availability = technicianPhrases.availability[Math.floor(Math.random() * technicianPhrases.availability.length)];
            conversation.push(new ChatMessage(
                getRandomId(),
                technicianId,
                new Date(currentDate),
                availability
            ));
            additionalMessages--;
        }
        
        if (additionalMessages > 0) {
            // Customer confirms schedule
            currentDate.setMinutes(currentDate.getMinutes() + 2);
            const scheduling = customerPhrases.scheduling[Math.floor(Math.random() * customerPhrases.scheduling.length)];
            conversation.push(new ChatMessage(
                getRandomId(),
                customerId,
                new Date(currentDate),
                scheduling + " Thank you!"
            ));
        }
        
        conversations.push({
            gadget: gadget.name,
            issue: gadget.issue,
            quotedPrice: finalPrice,
            messages: conversation
        });
    }
    
    return conversations;
}

// Generate and display the conversations
const repairConversations = generateRepairConversations();

// Display sample conversations
console.log("Generated 10 Repair Conversations:\n");

repairConversations.forEach((convo, index) => {
    console.log(`=== Conversation ${index + 1}: ${convo.gadget} - ${convo.issue} ===`);
    console.log(`Quoted Price: $${convo.quotedPrice}`);
    console.log(`Messages: ${convo.messages.length}\n`);
    
    convo.messages.forEach(message => {
        const userType = message.userId < 200 ? "Technician" : "Customer";
        const time = message.date.toLocaleTimeString();
        console.log(`[${time}] ${userType}: ${message.content}`);
    });
    console.log("\n" + "=".repeat(50) + "\n");
});