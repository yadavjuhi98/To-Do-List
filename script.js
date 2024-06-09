const Input = document.getElementById('Input_Task');
const ListContainer = document.getElementById('List_Container');

function AddTaskBtn(){
    if(Input.value === ''){
        alert('Write Your Task')
    }
    else{
        
        let li = document.createElement('li');
        li.innerHTML = Input.value;
        ListContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    Input.value == '';
    saveData();
}

ListContainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('Checked')
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML)
}



