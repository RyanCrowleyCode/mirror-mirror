// Create an input field in your DOM. Give it an id of message.
// Targeting an element on the DOM
const container = document.getElementById("container")

// Creating the text for "Enter some text:"
const textDiv = document.createElement("div")
textDiv.id = "text-div"
textDiv.textContent = "Enter some text:"
container.appendChild(textDiv)

// Creating the input field, then appending to the DOM
const inputField = document.createElement("input")
inputField.id = "message"
inputField.type = "text"
container.appendChild(inputField)

// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Creating a container for the articles, so that I can use flexbox
const articleContainer = document.createElement("div")
articleContainer.id = "article-container"


// Creating the first article element
const leftArticle = document.createElement("article")
leftArticle.id = "left-article"
leftArticle.textContent = "One"


// Creating the second article element
const rightArticle = document.createElement("article")
rightArticle.id = "right-article"
rightArticle.textContent = "Two"


// Adding both article elements to the articleContainer
articleContainer.appendChild(leftArticle)
articleContainer.appendChild(rightArticle)

// Adding the articleContainer to the DOM
container.appendChild(articleContainer)


// Give each article a different border color.

// Write an event listener that listens for the keyup event on the input field.The event handler function should update the textContent property of both sections.
inputField.addEventListener("keyup", function (){
    leftArticle.textContent = event.target.value
    if (!event.target.value) {
        leftArticle.textContent = "One"
    }
    rightArticle.textContent = event.target.value
    if (!event.target.value) {
        rightArticle.textContent = "Two"
    }
})

