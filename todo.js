let todoList=JSON.parse(localStorage.getItem('key')) || [];
 //array of objs
showTask();

function addTask(){
    let inp=document.querySelector('#task-inp');
    
    let date=document.querySelector('#task-date');

    todoList.push({input:inp.value,dueDate:date.value}); // object

    inp.value='';
    showTask();
    localStorage.setItem('key',JSON.stringify(todoList));

}
function showTask(){
    let list=document.querySelector('#list');
    list.innerHTML='';
    for(let i=0;i<todoList.length;i++){
        let input=todoList[i].input;
        let date=todoList[i].dueDate;
        list.innerHTML+=`
            
                <span>${i+1}. ${input}</span>
                <span id='date'> ${date}</span>
                <button id="delete" onclick="
                    todoList.splice(${i},1);
    localStorage.setItem('key',JSON.stringify(todoList));
                    showTask();
                ">Delete</button>
            
        `
    }

}