const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

class Fruit {
	constructor (fruitName){
	this[fruitName];
	this.lowerCaseName = this.name.toLowerCase();
	this.lowerCaseNameArr = lowerCaseName.split('');
	this.idx = fruit.indexOf(this.name);
	this.fruitStrLength = this.name.length;
	this.specialCharacters = 
		{
		uppercases: this.name.split('').some(char => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char)), //true or false 
		spaces: this.name.split('').some(char => char === ' '), //true or false
		numberOfWords: this.name.split(" ").length //number
		}
	}
	
	doesThisContainStrToBeSearched (strToBeSearched){
		return this.lowerCaseNameArr.some(char => strToBeSearched.toLowerCase().includes(char.toLowerCase())) //returns true or false
	}
	getMatchingStr (strToBeMatched) {
		if (doesThisContainStrToBeSearched (strToBeMatched)){
			this.lowerCaseNameArr.forEach((lowerCaseChar,charIdx, array) =>{
				if (lowerCaseChar === strToBeMatched [0]){
				let strLength = strToBeMatched.length;
				let matchedStrSlice = array.slice(charIdx, (charIdx + strLength).join(''));
				return (matchedStrSlice === strToBeMatched.toLowerCase()? matchedStrSlice : matchedStrSlice = undefined);
				}
			return matchedStrSlice; 
			});
		} else {return 'no matches'}
	}
	getMatchingObj (searchStr, matchedStrSlice){ 
		this.lowerCaseNameArr.forEach((matchedChar,matchedIdx) => {
        if (lowerCaseStr.includes(matchedChar)
          && lowerCaseStr === this.lowerCaseName.slice(matchedIdx,(matchedIdx + searchStr.length))){
			StartIdxMatchingStrFoundAt = matchedIdx;
			endIdxMatchingStrFoundAt = matchedIdx + searchStr.length;
			idxArrOfMatchingStrFromResultsArr.push({
				name: this.name, 
				matchedStrSlice, 
				StartIdxMatchingStrFoundAt: matchedStrSlice, 
				endIdxMatchingStrFoundAt: matchedIdx + searchStr.length, 
				searchStr
			})
			
		}
	})		
	return idxArrOfMatchingStrFromResultsArr
	}
}
	
const search = str => {
	let lowerCaseStrToBeMatched = str.toLowerCase();
	const results = fruit.filter(individualFruit => individualFruit.toLowerCase().includes(lowerCaseStrToBeMatched))
	return results;
}


function searchHandler(e) { 
	removeSuggestedResultsLi();
	if (document.querySelector('input#fruit.searchbar').value !== '') {
		removeSuggestedResultsLi();
		let searchBarText = e.target.value;
		let foundFruit = search(searchBarText);
		return showSuggestions(foundFruit, searchBarText)
	}
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
			//TODO: inputVal needs to be highlighted in the suggestions
		}	
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
