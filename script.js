document.querySelector('form');
const newTodoinput=document.querySelector('#newTodoinput');
const Todolist=document.querySelector('#Todolist');

let todop=[];
function renderTodop(){
    Todolist.innerHTML='';
    todop.forEach((todo,index)=>{
        const li=document.createElement('li');
        li.textcontent=todo.text;
        if(todo.completed){
            li.classList.add('completed');

        }
        const deleteButton=document.createElement('span');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML='&times;';

        deleteButton.addEventListener('click',()=>{
            todop.splice(index,1);
            renderTodop();
        });
        li.appendChild(deleteButton);
        li.addEventListener('click',()=>{
            todop[index].completed;
          renderTodop();
        });
        Todolist.appendChild(li);
    });
}
 form.addEventListener("submit",(event) => {
         event.preventDefault();
         const text = new newTodoinput.value.trim();
         if (text !== '') {
             todop.push({ text, completed: false, });
         }
     });
