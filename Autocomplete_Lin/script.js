const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) { //example is app -> 'Apple', 'Pineapple', 'Custard apple'
// 	let lowerCaseStrArr = str.toLowerCase().split('');
// 	let results = fruit.filter(item =>{
// 		let itemArr = item.split('');
// 		let matchedCharCount = 0;
// 		let matchedPhrase = ''

// 		for (let searchChar of lowerCaseStrArr){
// 			for (let fruitLetter of itemArr){
// 				if (searchChar === fruitLetter){
// 					matchedPhrase += searchChar;
// 				}
// 			}
// 		}

// 		if(matchedCharCount === lowerCaseStrArr.length && matchedPhrase === str.toLowerCase()){
// 			return item
// 		}
// 	})
// 	results.push(filteredSearch)
// 	return results;
// }

function search(str) { //example is app -> 'Apple', 'Pineapple', 'Custard apple'
	let lowerCaseStr = str.toLowerCase();
	let strArr = lowerCaseStr.split('')
	let results = []; 
	
	if (lowerCaseStr.length < 2) return results = fruit.filter(items => items.includes(lowerCaseStr));

	if (lowerCaseStr.length === 2){
		fruit.forEach(individualFruit => individualFruit.split('').reduce((accum, next) => {
			let combinator = accum + next; 
			if (lowerCaseStr === combinator) results.push(fruit);
			else {return next}
			//how does this deal with search cases where the combinator matches the lowerCaseStr later on in the word? 
		}))
	}

	if (lowerCaseStr.length > 2){
		for (let individualFruit of fruit){
			individualFruit.split('').reduce((accum, next)=>{
				let combinator = accum + next; 
				if (combinator !== strArr.slice(0, combinator.length).join('')){
					return combinator //better to return next? 
				};
				if (combinator.length === strArr.length){
					//need a checker here before the push to results
					results.push(individualFruit);
					return accum; 
				}
			})

		}
	}

	return results;
}

function searchHandler(e) { //function for keystroke event listenner
	// TODO
	let searchBarText = e.target.value;
	let foundFruit = search(searchBarText);
	return showSuggestions(foundFruit, searchBarText)
}

function showSuggestions(results, inputVal) {
//link with search() -> results (param1)
//param2 = input.value; 
	console.log(results, inputVal);
	if (inputVal){
		for (let suggested of results){
			let newSuggestionLi = document.createElement('li');
			newSuggestionLi.classList.add('suggestion');
			newSuggestionLi.innerText = suggested
			suggestions.append(newSuggestionLi);
		}
	}
	else {
		console.log(results, inputVal)
	}
}

function useSuggestion(e) { //function for suggestion click event listener
	// TODO
	let clickedSuggestion = e.target; 
	if (clickedSuggestion.tagName === 'LI' && clickedSuggestion.className === 'suggestion')
	document.querySelector(`#form`).value = clickedSuggestion.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);