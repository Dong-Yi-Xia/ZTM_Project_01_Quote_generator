const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')




// Get Quote From API
async function getQuote() {
    const proxyUrl = 'https://proxy-server-aka.herokuapp.com/'
    // API Url/query. Query begins with a ? and using & for more than 1 query
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + apiUrl);  //response will NOT be set unitl fetch is finish
        const data = await response.json()   //data will NOT be set until response is set in json
        //If Author is blank, add 'Unknown' 
        if(data.quoteAuthor === ""){
            authorText.innerText = "Unknown"
        }else{
            authorText.innerText = data.quoteAuthor;
        }
        //Reduce font size for long quotes
        if(data.quoteText.length > 120){
            quoteText.classList.add('long-quote') //classList.add will add a className 
        }else{
            quoteText.classList.remove('long-quote') //classList.remove will remove a className 
        }
        quoteText.innerText = data.quoteText;
    } catch(error) {
        getQuote(); //Get another new quote if error 
    }
}


// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet/?text=${quote} - ${author}`;
    //open a new window tab
    window.open(twitterUrl, '_blank')
}


// Event Listeners
newQuoteBtn.addEventListener('click', getQuote) //getQuote callback
twitterBtn.addEventListener('click', tweetQuote) //tweetQuote callback



// On Page Load
getQuote()




