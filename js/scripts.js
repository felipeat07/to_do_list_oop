class ToDo {

constructor(){
    this.totalTasks = document.querySelectorAll('.task').length;
    }

addTask(taskText){
    
    //clonando o template
    let template = document.querySelector('.task').cloneNode(true);

    //removendo a classe hide
    template.classList.remove('hide');

    //manipulando o texto
    let templateText = template.querySelector('.task-title');
    templateText.textContent = taskText;

    let list = document.querySelector('#task-container');

    //inserindo na lista

    list.appendChild(template);

    }

}

let todo = new ToDo();

//Eventos

let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e){

    e.preventDefault(); //evita que envie o formulário

    let taskText = document.querySelector('#task');

    if(taskText.value != ''){
        todo.addTask(taskText.value);
    }
    
    //limpa o campo de texto

    taskText.value = '';

});



