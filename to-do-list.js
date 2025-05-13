const inputBox =document.getElementById('inputBox')

const listTask = document.getElementById('list-task')

function addTask(){
    if(inputBox.value === ''){
        alert("Please Enter Your Task")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listTask.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = " "
    saveData()
}
listTask.addEventListener("click" , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(
        e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()
            saveData()
        }
    
},false)
function saveData(){
    localStorage.setItem("data" ,listTask.innerHTML)
}
function showTask(){
    listTask.innerHTML = localStorage.getItem("data")
}
showTask()