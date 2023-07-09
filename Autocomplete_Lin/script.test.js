//step 4 --> test input & placeholder text
describe(`step 4 -> search bar has placeholder`, function (){
    it (`the placeholder attribute is 'Search fruit 🍎'`, function (){
        expect(input.getAttribute('placeholder').toEqual('Search fruit 🍎'))
    });
}); 

//step 5 --> check if event listener added for key strokes
describe(`check if event listener is attached to form element`, function (){
    expect(typeof document.getElementById('fruit').addEventListener.hasEventListener('keyup')).toEqual('true')
}); 

//step 6 --> test search()
describe('step6 search() tests', function (){
    it (`checking basic search`, function (){
        expect(search('a').toEqual(['Apple', 'Apricot', 'Avocado 🥑']))
        expect(search('apr').toEqual('Apricot')) //can differentiate between apple and apricot
        expect(search('yuz').toEqual('Yuzu'))
    }), 
    it (`SHOULD NOT BE CASE SENSITIVE`, function(){
        expect(search('A').toEqual(['Apple', 'Apricot', 'Avocado 🥑']))//checking uppercase sensitivity ; 
    }), 
    it (`select multiple fruits`, function (){
        expect(search('ap').toEqual(['Apple','Apricot', 'Grape', 'Grapefruit','Papaya', 'Pineapple'])) //multiple fruits should be selected
    }),
    it (`EDGE CASES`, function(){
        expect(search('🥑').toEqual('Avocado 🥑')) //EDGE case: searching by emoji
        expect(search().toBeFalsy()) //EDGE CASE: no input
    })
})

//step 7 --> test produced list from previous step; accurate? does it populate?
describe('step 7 - list test', function(){
    const suggestedResultsList = document.querySelectorAll('#suggestions>ul.suggestion.list>li.suggested.result');
    const fruitSearchBar = document.getElementById(`#fruit`)
    fruitSearchBar.value = 'ap'

    it (`search results test : ap -> apple`, function(){
        if (document.querySelector(`#fruit`).value === 'ap'){
            return expect(Array.from(suggestedResultsList.value())).toEqual(['Apple','Apricot', 'Grape', 'Grapefruit','Papaya', 'Pineapple']) //multiple fruits should be selected
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
