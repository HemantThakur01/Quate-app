let button = document.querySelector("button")

async function getJoke(){
    const response =  await fetch("https://api.chucknorris.io/jokes/random")
    const joke = await response.json()
    let heading = document.querySelector("h5")
    heading.innerText = joke.value
}
button.addEventListener("click",getJoke)

let qoute_btn = document.querySelector("#qoute-btn")

async function getQoute(){
    const response = await fetch("https://quotable.io/random")
    const qoutes = await response.json()
    let quote_heading = document.querySelector("#qoute-heading")
    let qoute_author = document.querySelector(".card-text")
    qoute_author.innerText = qoutes.author
    quote_heading.innerText = qoutes.content
}

qoute_btn.addEventListener("click",getQoute)



