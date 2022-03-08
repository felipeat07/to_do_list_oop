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

    //adiciona evento as tasks
    this.addEvents();

    this.checkTasks('add');

    }

    removeTask(task){
        //selecionando o elemento pai
        let parentEl = task.parentElement;

        //deletando o elemento
        parentEl.remove();

        this.checkTasks('remove');
    }

    completeTask(task){
        //adicionando a classe done
        task.classList.add('done');
    }

    addEvents(){

        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        //adicionando evento de remover
            removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        });

        //adicionando evento de completar tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        });

    }

    checkTasks(command){

        let msg = document.querySelector('#empty-tasks');

        //logica para contar tasks adicionadas
        if(command === 'add'){
            this.totalTasks +=1;
        } else if(command === 'remove'){
            this.totalTasks -=1;
        }

        //verifica o contador de task para remover ou não msg
        if(this.totalTasks == 1){
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }

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



