let btnNOC = document.getElementById('NOC')
let input1 = document.querySelector('#sentence-input')
let output1 = document.querySelector('#sentence-length')

let btnSearch = document.getElementById('search')
let input2 = document.querySelector('#word-input')
let output2 = document.querySelector('#value-position')


btnNOC.addEventListener('click', (e) =>{
    e.preventDefault()
    output1.textContent = input1.value.length;

});

btnSearch = addEventListener('click', (e) =>{
    e.preventDefault()
    output2.textContent = input1.value.search(input2.value) + 1
});

