'use strict'

function getInterestedUsers(element, users)
{
    let interestedUsers = []

    element.interestedPersons.forEach(n => {
        let u = getUserById(n, users)
        if (u != null)
        {
            interestedUsers.push(u)
        }
    })

    return interestedUsers
}

function getUsers(element, users) 
{
    return getUserById(element.userId, users)
}

function getUserById(id, users)
{
    for(let i = 0; i < users.length; i++)
    {
        if (users[i].id == id) return users[i]
    }

    return null
}


function getRandomId(elements)
{
    return !elements || elements.length === 0 ? Math.floor(Math.random() * 1000) : Math.max(...elements) + 1
}

class User
{
    constructor(id, username, email, password, profilePicture)
    {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
        this.profilePicture = profilePicture
    }

    static defaultUser()
    {
        return new User(getRandomId(), "", "", "", "")
    }

}

class Product
{
    constructor(id, name, description, imageUrl, location, tags, price, userId, interestedPersons, interestedPersonsChats)
    {
        this.id = id
        this.name = name
        this.description = description
        this.imageUrl = imageUrl
        this.location = location
        this.tags = tags
        this.price = price
        this.userId = userId
        this.interestedPersons = interestedPersons
        this.interestedPersonsChats = interestedPersonsChats
    }

    // static defaultProduct()
    // {
    //     return Product(getRandomId(), "", "", "", "", [], 0, -1, [])
    // }
}

class Tutorial
{
    constructor(id, userId, name, videoUrl, bannerUrl, description, tags, viewsCounter, date)
    {
        this.id = id
        this.userId = userId
        this.name = name
        this.videoUrl = videoUrl
        this.bannerUrl = bannerUrl
        this.description = description
        this.tags = tags
        this.viewsCounter = viewsCounter
        this.date = date
    }

    static defaultTutorial()
    {
        return new Tutorial(getRandomId(), -1, "", "", "", "", [], 0, new Date())
    }
}

class ChatMessage
{
    constructor(id, userId, repairId, chatId, date, content)
    {
        this.id = id
        this.userId = userId
        this.repairId = repairId
        this.chatId = chatId
        this.date = date
        this.content = content
    }

    // static defaultChatMessage()
    // {
    //     return new ChatMessage(getRandomId(), -1, new Date(), "")
    // }
}

class RepairApplication
{
    constructor(id, userId, name, price, imageUrl, location, description, tags, interestedPersons, interestedPersonsChats = [])
    {
        this.id = id
        this.userId = userId
        this.name = name
        this.price = price
        this.imageUrl = imageUrl
        this.location = location
        this.description = description
        this.tags = tags
        this.interestedPersons = interestedPersons
        this.interestedPersonsChats = interestedPersonsChats
    }

    static defaultRepairApplication()
    {
        return new RepairApplication(getRandomId(), -1, "", 0, "", "", "", [], [])
    }
}