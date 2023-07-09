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
	let results = fruit.reduce((accum, currentFruit) => {
		let matchedLetters = currentFruit.reduce((accum, currentChar)=>{
			return strArr.includes(currentChar) ? accum += currentChar: accum;
		},'')
		return matchedLetters === lowerCaseStr ? accum.push(currentFruit): accum; //return accum array of matched fruits
		},[])
	return results;
}

function searchHandler(e) { //function for keystroke event listenner
	// TODO
}

function showSuggestions(results, inputVal) {
//link with search() -> results (param1)
//param2 = input.value; 
	// TODO
}

function useSuggestion(e) { //function for suggestion click event listener
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);