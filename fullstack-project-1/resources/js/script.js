/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


const quoteText = document.getElementById('quote');
const quoteSource = document.getElementById('source');
const quoteCitation = document.getElementById('citation');
const quoteYear = document.getElementById('year');
/*** 
 * `quotes` array 
***/

/*list of spongebob quotes*/
const quotes = [
  {
    quote:'Wake me up when I care.',
    source:'Squidward Tentacles',
    year: 2007,
    citation: 'Nickelodeon'
  },
  {
    quote:'The inner machinations of my mind are an enigma.',
    source:'Patrick Star',
    year: 2007,
    citation: 'Nickelodeon'
  },
  {
    quote:'Two words, SpongeBob. Na. Chos.',
    source:'Patrick Star',
    year: 2007,
    citation: 'Nickelodeon'
  },
  {
    quote:'Dont you DARE take the name of Texas in vain',
    source:'Sandy Cheeks',
    year: 2007,
    citation: 'Nickelodeon'
  },
    {
    quote:'Always follow your heart unless your heart is bad with directions.',
    source:'Squidward Tentacles'
  },
  {
    quote:'Can I have everybodys attention?… I have to use the bathroom.',
    source:'Patrick Star'
  },
  {
    quote:'A five letter word for happiness…money.',
    source:'Mr.Krabs'
  }
];

/***
 * `getRandomQuote` function
 * Creates varible called randomnumber that gives random number from 0-7
***/

function getRandomQuote ()
{
  let randomnumber = Math.floor( (Math.random() * 8) );
  
    return quotes[randomnumber];
}

/***
 * `printQuote` function
 * First, calls getRandomQuote function, then add where quote data will go
 * if randomquote had properties (citation,year,tag), add it to html
***/
function printQuote (){
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
              <p class="source"> ${randomQuote.source}`
if (randomQuote.hasOwnProperty('citation')){
    html += `<span class="citation"> ${randomQuote.citation} </span>`}
                
if (randomQuote.hasOwnProperty(`year`)) {
    html += `<span class="year"> ${randomQuote.year} </span>`
}

if (randomQuote.hasOwnProperty(`tag`)) {
     html += `<span class="tag"> ${randomQuote.tag} </span>`
}
  document.getElementById('quote-box').innerHTML = html;    
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);