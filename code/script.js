//select DOM elements
const template = document.querySelector("#set").content;
const main = document.querySelector("main");

//make shortcuts to API endpoints
const link = "https://spreadsheets.google.com/feeds/list/1RVK5ksJDyymK5QzZwrJ2KYxq5KKuAsBbbH0gmk9czps/1/public/values?alt=json";


//define functions
function loadJSON(link){
	fetch(link).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayLegoData));

}

function displayLegoData(brickArt){
	const section = document.querySelector('#' + brickArt.gsx$category.$t);
	let clone = template.cloneNode(true);
	clone.querySelector("h2").textContent = brickArt.gsx$title.$t;
	
	const img = brickArt.gsx$imagename.$t;
	clone.querySelector("img").setAttribute("src", "photos/"+img+".jpg");
	
	main.appendChild(clone);
	
}
loadJSON(link);