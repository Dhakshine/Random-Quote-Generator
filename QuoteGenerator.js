
const quotes = [{text:"A writer is someone for whom writing is more difficult than it is for other people.", author:"Thomas Mann"},
                  {text:"I write to discover what I know.", author:"lannery O'Connor"},
                  {text:"Words are a lens to focus one's mind.", author:"Ayn Rand"},
                  {text:"Writing is its own reward.", author:"Henry Miller"},
                  {text:"Half my life is an act of revision.", author:"John Irving"},
                  {text:"I can shake off everything as I write; my sorrows disappear, my courage is reborn.", author:"Anne Frank"}];

const colors= ['#008796', '#782d1f', '#d15360', '#bfcdff', '#77767c' , '#757a79' , '#57385c'];

let i=0;
function displayQuote() {

  const box= document.getElementById('quote-box');
  box.style.background = colors[i];
  i= (i+1) % quotes.length;
  const x= Math.floor(Math.random() * quotes.length);
  document.getElementById('text').textContent = `" ${quotes[x].text}`;
  document.getElementById('author').textContent = `- ${quotes[x].author}`;
}

displayQuote();

