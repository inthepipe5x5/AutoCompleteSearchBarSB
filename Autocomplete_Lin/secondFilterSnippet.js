

const fruitArrExampleTest = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lFilteredArrExpectTwentyThreeLength = ['Apple', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Custard apple', 'Elderberry', 'Huckleberry', 'Jambul', 'Melon', 'Cantaloupe', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Olive', 'Clementine', 'Plantain', 'Plum', 'Pineapple', 'Pomelo', 'Salmonberry', 'Salak', 'Tamarillo'];
//tests 
const testArr1 = ['Banana'];
const testStr1 = 'an'
const testStr2 = 'l' 

const strSplitStr = [...testStr2]
const str = strSplitStr.join('')
const unsplitArr = [...testArr1] 
const splitArr = [...unsplitArr]



const searchArrWithStr = (arrWithStr,str)=>{
    //strInArr is unsplit str in an array
    return arrWithStr.filter(item=>{
        let lowerCaseItem = item.toLowerCase()
        // if (lowerCaseItem.includes(" ")){
        //     lowerCaseItem = item.split('').filter(char => char !== " ").join("")
        // }    
        let strSearchIndex = lowerCaseItem.indexOf(str[0]) //use findIndex method
        let strLength = str.length;
        let searchSliceOfArrItem = strSearchIndex < strLength? 
            lowerCaseItem.slice(strSearchIndex, (strSearchIndex + strLength)) 
            :
            lowerCaseItem.slice(strSearchIndex, (strSearchIndex + strLength)); 
        console.log(item, searchSliceOfArrItem, strSearchIndex, strLength)
        if (strSearchIndex >= 0)
            if (searchSliceOfArrItem === str.toLowerCase()) return item;
        // return strSearchIndex >= 0 && searchSliceOfArrItem === lowerCaseItem //this will match
    }
    )
}
console.log(searchArrWithStr(lFilteredArrExpectTwentyThreeLength, testStr2))

//todo 
    //write map function that loops through item str and acquires "slices" starting from each match of str[0], 
    //this function returns searchSliceOfArrItem to be matched in the filter

// const searchArrWithStr = (arrWithStr,str)=>{ //finds 2 letters but is not capital sensitive
//     //strInArr is unsplit str in an array
//     return arrWithStr.filter(item=>{
//         let strSearchIndex = item.indexOf(str[0])
//         let strLength = str.length;
//         let searchSliceOfArrItem = strSearchIndex < strLength? item.toLowerCase().slice(strSearchIndex, (strSearchIndex + strLength)) : item.toLowerCase().slice(strSearchIndex, (strSearchIndex + strLength));
//         //Mulberry -> lbe 2 2 || Tamarillo -> llo 6 2 
//         console.log(item, searchSliceOfArrItem, strSearchIndex, strLength)
//         if (searchSliceOfArrItem === str) return item;
//     }
//     )
// }


//INCOMPLETE
// const mapStrFilter = (strToBeSearched, strToBeMatched) => {
//     let searchArr = strToBeSearched.toLowerCase().split('');
//     let lowerCaseStrToBeMatched = strToBeMatched.toLowerCase()
//     let temp = ''
//     let firstCharToBeMatched = lowerCaseStrToBeMatched[0]
//     searchArr.map((charToBeSearched, index) => {
//         if (charToBeSearched === firstCharToBeMatched )
//             if ((charToBeSearched + searchArr[index + strToBeMatched.length]) === ) 
//         : 
//         ();  
//     })
// }


//used .slice(0, index + 1) so that the slice of str is growing with the iteration 
//prechatGPT
// const preFilteredArrayReducer = (array, strToBeMatched) => {
//     const finalOutput = [];
//     let lowerCaseItem = strToBeMatched.toLowerCase();
//     const mapperArr = array.map(currentItem => {
//         let itemArray = currentItem.toLowerCase().split('')
//         itemArray.reduce((accum, nextChar, index) => {
//             return accum === " " ? nextChar : //filter out spaces
//                 accum !== lowerCaseItem.slice(0, index + 1) ? nextChar: //current accum doesn't match then accum => nextChar (cycle through)
//                     accum.length !== lowerCaseItem.length ? accum + nextChar: //adds nextChar to accum if accum matches lowerCaseItem.slice(start, nextCharIndex)
//                         accum !== lowerCaseItem ? nextChar : finalOutput.push(currentItem) 
//         })
//     })
//     console.log(mapperArr)
//     return finalOutput
// }

//postChatGPT
//const preFilteredArrayReducer = (array, strToBeMatched) => {
//     const finalOutput = [];
//     const lowerCaseItem = strToBeMatched.toLowerCase();
  
//     array.forEach((currentItem) => {
//       const itemArray = currentItem.toLowerCase().split('');
//       itemArray.reduce((accum, nextChar, index) => {
//         return accum === ' ' ? nextChar :
//           accum !== lowerCaseItem.slice(0, index + 1) ? nextChar :
//             accum.length !== lowerCaseItem.length ? accum + nextChar :
//               accum !== lowerCaseItem ? nextChar : finalOutput.push(currentItem);
//       }, '');
//     });
  
//     console.log(finalOutput);
//     return finalOutput;
//   };

  
  //with if statements:
  const preFilteredArrayReducer = (array, strToBeMatched) => {
    const finalOutput = [];
    const lowerCaseItem = strToBeMatched.toLowerCase();
  
    array.forEach((currentItem) => {
      const itemArray = currentItem.toLowerCase().split('');
      itemArray.reduce((accum, nextChar, index) => {
        const currentStrToMatchSlice = lowerCaseItem.slice(0, index + 1);
        if (accum === ' ' || accum !== currentStrToMatchSlice) {
          return nextChar;
        } else if (accum.length !== lowerCaseItem.length) {
          if (accum === currentStrToMatchSlice) {
            return accum + nextChar;
          } else {
            return nextChar;
          }
        } else if (accum === lowerCaseItem) {
          finalOutput.push(currentItem);
        }
      }, '');
    });
  
    console.log(finalOutput);
    return finalOutput;
  };
  

  const wordSearchResultsBoldener = (searchStr, resultsArr) => {
    //resultsArr is array of search results that match the searchStr
    //resultsArr returned from the results in search () 
    //searchStr => str that was entered into input 
  
  const idxArrOfMatchingStrFromResultsArr = [{searchStr,searchStrLength: searchStr.length}] //array of obj of found objects
  let matchingStrSliceToBeBold = '';
  let StartIdxMatchingStrFoundAt = -Infinity;
  let endIdxMatchingStrFoundAt = +Infinity
  let lowerCaseStr = searchStr.toLowerCase();

  for (let matchedItem of resultsArr ) {
      let lowerCaseMatchedItem = matchedItem.toLowerCase();
      lowerCaseMatchedItem.toLowerCase().split("").forEach((matchedChar,matchedIdx) => {
        if (lowerCaseStr.includes(matchedChar))
          if (lowerCaseStr === matchedItem.slice(matchedIdx,(matchedIdx + searchStr.length)).join("").toLowerCase()){
          StartIdxMatchingStrFoundAt = matchedIdx;
          endIdxMatchingStrFoundAt = matchedIdx + searchStr.length;
          idxArrOfMatchingStrFromResultsArr.push({
            name: matchedItem, 
            matchingStrSliceToBeBold, 
            StartIdxMatchingStrFoundAt, 
            endIdxMatchingStrFoundAt, 
            lowerCaseStr
          })};
  })//end of forEach function
      
  }//end of wordSearchResultsBoldener function

  function createAndPushSubclass(classStr, array, strClass) {
    let newClassInstance = new strClass (classStr) 
 
  
      // Subclass methods
    
  
    array.push(newClassInstance);
  }

  