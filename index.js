const getQuote = () => {
        return fetch('https://animechan.vercel.app/api/random')
            .then(res => res.json())

    }
    //author,character, quote//
const makeQuoteDiv = (quote) => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    h3.textContent = quote.anime
    p.textContent = quote.quote
    h4.textContent = quote.character
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(h4)
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = ""

    return div
}
const appendElement = (quoteDiv) => {
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.appendChild(quoteDiv)
}


const generateQuote = () => {
    getQuote().then((quote) => {

        const quoteDiv = makeQuoteDiv(quote)
        appendElement(quoteDiv)
    })

}
generateQuote()


document.getElementById('nextquote').addEventListener('click', (e) => {
    e.preventDefault();
    generateQuote();
})