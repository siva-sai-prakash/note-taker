let inputText = document.getElementById('inputField');
let button = document.querySelector('#addNote');

let list = document.querySelector('#listItems');
button.addEventListener('click', clicked);

// Using Enter Key
inputText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        clicked();
    }
});

let backup = [];
function addToBackUp(){
    backup.push(inputText.value);
}
function clicked(){
    if (inputText.value == ''){
        inputText.placeholder = 'Enter Your Note Here';
        inputText.style.outline = '2px solid red';
    }else{
        addToBackUp();
        console.log(backup);
        let items = list.querySelectorAll('li');
        let itemNo = items.length;
        inputText.placeholder = 'Write Your Note Here';
        inputText.style.outline = '' ;
        // List item
        li = document.createElement('li');
        // h3
        h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(`Note ${itemNo + 1}`))
        // para
        para = document.createElement('p');
        let inputTrimmed = inputText.value;
        if (inputText.value.length > 30){
            inputTrimmed = inputText.value.slice(0,30) + '...';
        }
        para.appendChild(document.createTextNode(inputTrimmed));
        // Button
        button = document.createElement('button');
        button.appendChild(document.createTextNode('View Detail'));
        button.className = 'blue-btn show';
        button.id = 'detail';

        // appending all elements to list item
        li.appendChild(h3);
        li.appendChild(para);
        li.appendChild(button);
        li.className = 'listitem';
        list.appendChild(li)
        inputText.value = '';
}
}


// OverLay
// let detailBtn = document.getElementById('detail');
let detailBtn = document.querySelector('#listItems');
console.log(detailBtn)
let overdiv = document.querySelector('#overlay');
let closeBtn = overdiv.querySelector('.close');
let paraHidden = document.querySelector('#noteContent');

detailBtn.addEventListener('click' ,showContent);
closeBtn.addEventListener('click', hideContent);

function showContent(e){
    if (e.target.classList.contains('show')){
        let reqdNumber = parseInt(e.target.parentElement.querySelector('h3').innerHTML[5]);
        paraHidden.innerHTML = backup[reqdNumber-1]
        console.log(paraHidden);
        overdiv.style.height='100vh';
        closeBtn.style.display='block';
    }
}
function hideContent(){
    overdiv.style.height='0vh';
    closeBtn.style.display='none';
}

