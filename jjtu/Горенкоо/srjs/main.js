function shmod(id){
    document.getElementById(id).classList.add(`show`);
}
function himod(id){
    document.getElementById(id).classList.remove(`show`);
}
function st(){
    let textarea = document.getElementById(textarea).value
    let select = document.getElementById(select).value
    let task = {
        describe: textarea,
        status: select
    }
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem(`tasks`, JSON.stringify(tasks))
}

function getTasks(){
    let tasks = localStorage.getItem(JSON.parse(tasks))
    if(tasks == null){
        tasks = [];
    }
    return tasks;
}
function drawTasks(){
    let tasks = getTasks();
    let tr = ``;
    tr += `<tr>
    <th scope="row">1</th>
    <td></td>
    <td><b class="lime"></b></td>
    <td class="text-center"><button class="btn btn-warning btn-sm">edit</button></td>
    <td class="text-center"><button class="btn btn-danger btn-sm">x</button></td>
  </tr>`
  tasks.array.forEach(function(tasks)){
    
  };
}