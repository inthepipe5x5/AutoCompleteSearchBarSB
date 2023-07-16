const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const doesThisContainStrToBeSearched = (fruitName, strToBeSearched) => fruitName.toLowerCase().split('').some(char => strToBeSearched.toLowerCase().includes(char.toLowerCase())) //returns true or false
	
const getMatchingFruitObj = (fruitName, strToBeMatched) => {
	const expandedResultsArr = [];
		if (doesThisContainStrToBeSearched (fruitName, strToBeMatched)){
			fruitName.toLowerCase().split('').forEach((lowerCaseChar,charIdx) =>{
				if (lowerCaseChar === strToBeMatched [0]){
					let strLength = strToBeMatched.length;
					let matchedStrSlice = fruitName.slice(charIdx, (charIdx + strLength)).toLowerCase();
					if (matchedStrSlice === strToBeMatched.toLowerCase() ){
						expandedResultsArr.push({
							name: fruitName, 
							matchedStrSlice, 
							StartIdxMatchingStrFoundAt: charIdx, 
							endIdxMatchingStrFoundAt: charIdx + strLength, 
							strToBeMatched 
						}) 
					} 
				}
			})
		return expandedResultsArr
		}
		else {return 'no matches'}
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
		let inputLength = inputVal.length;
		for (let suggested of results){
			let foundIdx = suggested.toLowerCase().indexOf(inputVal.toLowerCase());
			let boldTextSegment = "<b>" + suggested.slice(foundIdx, (foundIdx + inputLength)) + "</b>"

			let fullText = ''
			if (foundIdx === 0) fullText = boldTextSegment + suggested.slice(foundIdx + inputLength); //bold at beginning 
			if (foundIdx !== 0 && foundIdx + inputLength < suggested.length) fullText = suggested.slice(0, foundIdx) + boldTextSegment + suggested.slice(foundIdx + inputLength) //bold in middle
			if (foundIdx + inputLength >= suggested.length) fullText = suggested.slice(0, foundIdx) + boldTextSegment; //bold at end

				let newSuggestionLi = document.createElement('li');
				newSuggestionLi.classList.add('suggestion');
				newSuggestionLi.innerHTML = fullText;
			
				suggestions.append(newSuggestionLi);
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
