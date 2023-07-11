const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const search = str => {
    const results = [];
    let strArr = str.toLowerCase().split('')
    fruit.forEach(fru =>{
        if (fru.includes(strArr[0])){
            fru.split('').reduce((accum, nextChar) => {
                let currentTwoChar = accum + nextChar
                let currentCharLength = currentTwoChar.length
                let matchStr = strArr[0] + strArr.slice(1,currentCharLength).join('') //starts with first search Char 
                // let matchingStr = ''
                if (currentCharLength === 2){ //if .length = 2, straight match
                    if (currentTwoChar === matchStr){
                        results.push(fru)
                        return currentTwoChar
                    } 
                    else {return nextChar};
                }
                if (currentCharLength > 2){
                     //loop currentTwoChar
                    let tempCheckStr = ''
                    strArr.forEach((searchChar)=>{
                        for (let reduceChar of currentTwoChar.split('')){
                            if (tempCheckStr === strArr.join('') 
                                && tempCheckStr.length === strArr.length){
                                    results.push(fru)
                                    return currentTwoChar
                                }
                                else if (tempCheckStr.length === strArr.length){
                                    results.push(fru)
                                    return currentTwoChar;
                                }
                            if (reduceChar === searchChar 
                                && tempCheckStr.length !== strArr.length){
                                tempCheckStr + searchChar;
                                
                            } 
                            if (reduceChar !== searchChar
                                && !strArr.includes(reduceChar)){
                                return nextChar
                            }
                        } // end of loop
                    })
                }
            })
        }
    })
    return results
}

function searchHandler(e) { //function for keystroke event listenner
	// TODO
	let searchBarText = document.querySelector('#fruit').value;
	let foundFruit = search(searchBarText);
	return showSuggestions(foundFruit, searchBarText)
}

function showSuggestions(results, inputVal) {
//link with search() -> results (param1)
//param2 = input.value; 
	console.log(results, inputVal);
	if (inputVal){
		console.log(inputVal)
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