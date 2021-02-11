// Get Quote From API
async function getQuote() {
    const proxyUrl = 'https://mighty-cove-69469.herokuapp.com/'
    // API Url/query. Query begins with a ? and using & for more than 1 query
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + apiUrl);  //response will NOT be set unitl fetch is finish
        const data = await response.json()   //data will NOT be set until response is set in json
        console.log(data)
    } catch(error) {
        getQuote(); //Get another new quote if error 
        console.log('Whoops, no quote', error);
    }
}

// On Load
getQuote()




