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
    constructor(id, username, email, password)
    {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }

    static defaultUser()
    {
        return new User(getRandomId(), "", "", "")
    }

}

class Product
{
    constructor(id, name, description, imageUrl, location, tags, price, userId, interestedPersons)
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
    }

    static defaultProduct()
    {
        return Product(getRandomId(), "", "", "", "", [], 0, -1, [])
    }
}

class Tutorial
{
    constructor(id, userId, name, videoUrl, description, tags, viewsCounter)
    {
        this.id = id
        this.userId = userId
        this.name = name
        this.videoUrl = videoUrl
        this.description = description
        this.tags = tags
        this.viewsCounter = viewsCounter
    }

    static defaultTutorial()
    {
        return new Tutorial(getRandomId(), -1, "", "", "", [], 0)
    }
}

class ChatMessage
{
    constructor(id, userId, date, content)
    {
        this.id = id
        this.userId = userId
        this.date = date
        this.content = content
    }

    static defaultChatMessage()
    {
        return new ChatMessage(getRandomId(), -1, new Date(), "")
    }
}

class RepairApplication
{
    constructor(id, userId, name, imageUrl, location, description, tags, interestedPersons)
    {
        this.id = id
        this.userId = userId
        this.name = name
        this.imageUrl = imageUrl
        this.location = location
        this.description = description
        this.tags = tags
        this.interestedPersons = interestedPersons
    }

    static defaultRepairApplication()
    {
        return new RepairApplication(getRandomId(), -1, "", "", "", "", [], [])
    }
}