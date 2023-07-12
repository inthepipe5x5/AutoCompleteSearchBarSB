//step 4 --> test input & placeholder text
describe(`step 4 -> search bar has placeholder`, function (){
    it (`the placeholder attribute is 'Search fruit 🍎'`, function (){
        expect(input.getAttribute('placeholder').toEqual('Search fruit 🍎'))
    });
}); 

//step 5 --> check if event listener added for key strokes
// describe(`check if event listener is attached to form element`, function (){
//     const fruitSearchBar = document.getElementById(`#fruit`)
//     fruitSearchBar.value = 'ap'
//     const observer = new MutationObserver( mutationList => {
//         for (const mutation of mutationList) {
//             if (mutation.type === "childList") {
//               console.log("A child node has been added or removed.");
//             } else if (mutation.type === "attributes") {
//               console.log(`The ${mutation.attributeName} attribute was modified.`);
//               expect(mutation.attributeName).toEqual('value');
//               expect(mutation.)
//       });
//       observer.observe(document.body, {attributes: true, childList: true, subtree: true});
// }); 

//step 6 --> test search()
describe('step6 search() tests', function (){
    it (`checking basic search`, function (){
        expect(search('app')).toEqual(['Apple', 'Pineapple', 'Custard Apple'])
        expect(search('l')).toEqual(['Apple', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Custard apple', 'Elderberry', 'Huckleberry', 'Jambul', 'Melon', 'Cantaloupe', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Olive', 'Clementine', 'Plantain', 'Plum', 'Pineapple', 'Pomelo', 'Salmonberry', 'Salak', 'Tamarillo'])
        expect(search('apr')).toEqual(['Apricot']) //can differentiate between apple and apricot
        expect(search('yuz')).toEqual(['Yuzu'])
    }), 
    it (`SHOULD NOT BE CASE SENSITIVE`, function(){
        expect(search('Y')).toEqual(['Bilberry', 'Blackberry', 'Blueberry', 'Boysenberry', 'Cherry', 'Cranberry', 'Elderberry', 'Gooseberry', 'Honeyberry', 'Huckleberry', 'Juniper berry', 'Lychee', 'Marionberry', 'Honeydew', 'Mulberry', 'Papaya', 'Raspberry', 'Salmonberry', 'Strawberry'])//checking uppercase sensitivity ; 
    }), 
    // it (`select multiple fruits`, function (){ //ap test doesn't work yet
    //     expect(search('ap').toEqual(['Apple','Apricot', 'Grape', 'Grapefruit','Papaya', 'Pineapple'])) //multiple fruits should be selected
    // }),
    it (`EDGE CASES`, function(){
        expect(search('🥑')).toEqual(['Avocado 🥑']) //EDGE case: searching by emoji
        expect(search()).toBeFalsy() //EDGE CASE: no input
    })
})

//step 7 --> test produced list from previous step; accurate? does it populate?
describe('step 7 - list test', function(){
    const suggestedResultsList = document.querySelectorAll('#suggestions>ul.suggestion.list>li.suggested.result');
    const fruitSearchBar = document.getElementById(`#fruit`)
    fruitSearchBar.value = 'ap'

    it (`search results test : ap -> apple`, function(){
        if (document.querySelector(`#fruit`).value === 'ap'){
            return expect(Array.from(suggestedResultsList.value())).toEqual(['Apple', 'Apricot', 'Custard apple', 'Grape', 'Grapefruit', 'Papaya', 'Pineapple']) //multiple fruits should be selected
        }
    }); 

    it(`mutation observer called on div`, function (){
    const targetNode = document.querySelector('div.suggestions')
    const observer = new MutationObserver(mutationList => {
        mutationList.forEach(mutation => {
            if (mutation.type === "childList") { 
                console.log("A child node has been added or removed.");
                expect(mutation).toEqual()
                };
        expect(mutationList.length).toEqual(suggestedResultsList.length);    
        })
    })
    observer.observe(targetNode, {attributes: true, childList: true, subtree: true})
    observer.disconnect;
    fruitSearchBar.value = undefined // result searchbar value to undefined
    })

//step 8 --> check if event listener present for mouse over
// expect(typeof document.getElementById('fruit').onclick('keydown')).toEqual('function')

//step 9 --> test useSuggestion() --> make sure added to event listener --> right event listener?
describe(`step 9 -> useSuggestion() tests`, function (){
    it(`click on suggestion -> search bar needs to be filled`,function(){
       const suggestedResultList = document.querySelectorAll(`li.suggested.result`);
       const searchBarText = document.querySelector(`#fruit`).value; 
       let clickedResult = null;
       for (let elem of suggestedResultList){
        elem.addEventListener('click', function (event){
            if (event.target.tagName === 'li' && event.target.className === 'suggested.result') clickedResult = event.target.innerText; 
        })
       }
       return expect(clickedResult).toEqual(searchBarText); 
    });
})})
