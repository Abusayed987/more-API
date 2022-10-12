const loadQuete = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuete(data))
}
loadQuete();
const displayQuete = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}


