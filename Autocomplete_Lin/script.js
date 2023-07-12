const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) { //example is app -> 'Apple', 'Pineapple', 'Custard apple'
	// if (!str) return; 
	let results = []; 
	if (fruit.includes(str) && str === fruit.find(foundFruit => { return (foundFruit === str || foundFruit === str.toLowerCase())})){
		results.push(fruit[fruit.indexOf(str)]);
	} 
	
	let lowerCaseStr = str.toLowerCase();
	let strArr = lowerCaseStr.split('')
	
	if (lowerCaseStr.length < 2) return results = fruit.filter(individualFruit => individualFruit.includes(lowerCaseStr));

	// if (lowerCaseStr.length === 2){
	// 	fruit.forEach(individualFruit => individualFruit.toLowerCase().split('').reduce((accum, next) => {
	// 		let combinator = accum + next; 
	// 		if (lowerCaseStr === combinator) {
	// 			results.push(individualFruit);
	// 			return next; 
	// 		} else {
	// 			return next} 
	// 	}))
	// }

	// if (lowerCaseStr.length > 2){ //eg. 'apr' --> 3 character input 
	// 	fruit.forEach(individualFruit => {
	// 		for (let individualFruitWord of fruit){
	// 			let individualFruitWordLowerCase = individualFruitWord.toLowerCase();
	// 			if (individualFruitWordLowerCase.includes(strArr[0])){
	// 				individualFruitWordLowerCase.split('').reduce((accum, next)=>{
	// 					let combinator = accum + next; //default length is 2 [a0 p1 r2 i3]
	// 					let interatingSearchStr = strArr.slice(0, combinator.length).join(''); //if combinator matches, this grows longer
	// 					if (combinator !== interatingSearchStr){
	// 						return next; //better to return next? 
	// 					} 
	// 					if (combinator === interatingSearchStr){
	// 						if (combinator.length === strArr.length){ //check if interatingSearchStr is done interating
	// 							results.push(individualFruit);
	// 							results = Array.from(new Set (results)) //make sure no duplicate fruits added
	// 							return next; 
	// 						}
	// 						else { //if not done iterating, return accum and continue the reduce function
	// 							return accum; //return accum as accum
	// 						}
	// 					}
						
	// 				})
	// 			}
	// 		}

	// 	})
	// }
	
	// if (lowerCaseStr.length >= 2){
	// 	results = fruit.filter(individualFruit => {
	// 		let fruitArr = individualFruit.toLowerCase().split('');
	// 		let foundFruitIndex = fruitArr.indexOf(lowerCaseStr[0]);
	// 		if (foundFruitIndex >= 0 ){
	// 		let strLength = lowerCaseStr.length
	// 		let fruitSliced = fruitArr.slice(foundFruitIndex, strLength).join('')
			
	// 		console.log(individualFruit,fruitSliced, foundFruitIndex)
	// 		return fruitSliced === lowerCaseStr}
	// 	})
	// return results; //prevent duplicates
	// } //only returns one or two results -> ignores the rest

	if (lowerCaseStr.length >= 2){
		const firstFilter = fruit.filter(individualFruit => {
			let fruitArr = individualFruit.toLowerCase().split('');
			return fruitArr.includes(lowerCaseStr[0])})
		
		results = firstFilter.filter(splitFruit =>{
				let strLength = lowerCaseStr.length
				let foundFruitIndex = splitFruit.indexOf(lowerCaseStr[0]);
				let fruitSliced = splitFruit.slice(foundFruitIndex, strLength).join('')
					
				console.log(individualFruit,fruitSliced, foundFruitIndex)
				return fruitSliced === lowerCaseStr
				})
			}
			return results; //prevent duplicates
			
		}
			
			
// 			)
// 			)
// 	}
// }

console.log(search('gr'))

function searchHandler(e) { //function for keystroke event listenner
	// TODO
	let searchBarText = e.target.value;
	let foundFruit = search(searchBarText);
	return showSuggestions(foundFruit, searchBarText)
}

function showSuggestions(results, inputVal) {
//link with search() -> results (param1)
//ad inputVal to .value prev input? 
//param2 = input.value; 
	// console.log(results, inputVal);
	let suggestionsLiList = document.querySelectorAll('li.suggestion')
	for (let suggested of suggestionsLiList){ //clear suggestion li 
		suggestions.remove(suggested)
	}
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

input.addEventListener('keydown', searchHandler);
suggestions.addEventListener('click', useSuggestion);