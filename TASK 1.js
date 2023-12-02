const data ={
    "quotes": [
		{
            "g3":"Champ"
        },
        {
            "g3":"Best"
        },
        {
            "g3":"Greatest"
        }
    ]   
}
const qoutes = data.quotes;
function getRandomQuote() {
	arraysize = qoutes.length;
	random = Math.random() * arraysize;
	randomnumber = Math.floor(random);
	console.log(arraysize);
	console.log(random);
	console.log(randomnumber);
	return qoutes[randomnumber];

}
function printOutput() {
	var Quote = getRandomQuote();
	let quoteContainer = document.getElementById("new");
    var quoteString = `<h1 class="g2">Alexa Babe</h1>
    <h1 class="g1">I'm the </h1>`;
	quoteString += `<p class="g3">${Quote.g3}</p>`;
	quoteContainer.innerHTML = quoteString;
	console.log(quoteString);
	
}

window.setInterval(printOutput, 1200);