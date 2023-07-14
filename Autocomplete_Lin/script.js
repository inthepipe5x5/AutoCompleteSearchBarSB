const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const search = str => {
	let lowerCaseStrToBeMatched = str.toLowerCase();
	const results = fruit.filter(individualFruit => individualFruit.toLowerCase().includes(lowerCaseStrToBeMatched))
	return results;
}


function searchHandler(e) { //function for keystroke event listenner
	// TODO\
	// console.log(`this is the key pressed ${KeyboardEvent.key}`)
	if (document.querySelector('input').value.length === 0) {removeSuggestedResultsLi()}
	removeSuggestedResultsLi();
	let searchBarText = e.target.value;
	let foundFruit = search(searchBarText);
	return showSuggestions(foundFruit, searchBarText)
}

const removeSuggestedResultsLi = () => {
	let suggestionsLiList = document.querySelectorAll('li.suggestion')
	for (let suggested of suggestionsLiList){ //clear suggestion li 
		suggested.remove(suggested)
	}
}

function showSuggestions(results, inputVal) {		
		for (let suggested of results){
			let newSuggestionLi = document.createElement('li');
			newSuggestionLi.classList.add('suggestion');
			newSuggestionLi.innerText = suggested
			suggestions.append(newSuggestionLi);
			//inputVal needs to be highlighted in the suggestions
			makeResultsBolderWhenHoveredOver(suggested, inputVal); //I think i should move this
		}
		//create smart highlighter function that takes inputVal and bolds it
		//pets.filter(animal => animal.includes('at')).map(atAnimal => atAnimal.indexOf('at')) --> gives arr with indexs of where input str is located
		
}

const makeResultsBolderWhenHoveredOver = (element, inputVal) => {

}


const hoverBackgroundChange= e => {
	let textToBeBolder = e.target.innerText;
	if (e.target.tagName === 'LI' && e.target.className === 'suggestion'){
		e.target.classList.add('mousefocus');
	}
}

const removeStylingWhenNotFocused = e => {
	if (e.target.tagName === 'LI' && e.target.className === 'suggestion'){
		for (let suggestionNode of document.querySelectorAll('li.suggestion')){
			suggestionNode.style.backgroundColor = 'white'
		}
	}
}

function useSuggestion(e) { //function for suggestion click event listener
	// TODO
	let clickedSuggestion = e.target; 
	if (clickedSuggestion.tagName === 'LI' && clickedSuggestion.className === 'suggestion')
	document.querySelector(`#fruit`).value = clickedSuggestion.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

//do the following in CSS instead
// suggestions.addEventListener('mouseover', hoverBackgroundChange);
// suggestions.addEventListener('mouseleave', removeStylingWhenNotFocused);
