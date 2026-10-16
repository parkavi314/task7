function listMission(name){
    let newMission = document.createElement('li')
    document.getElementById('listMission').appendChild(newMission)
    newMission.textContent = name

    let del = document.createElement('button')
    del.textContent ="Delete"
    
    
    
    del.onclick = function remove(){
        newMission.remove()
    }
    newMission.appendChild(del)
}
function task(){
    let name = ""
    let task = document.getElementById('value')
    name = task.value.trim()
    if(name===""){
        alert("Enter your task")
        return;
    }
    listMission(name);  
    task.value = ""
}
let index = 0
function changeColor(){
    let color = ["pink ","purple "]
    document.body.style.backgroundColor = color[index]
    index = (index + 1) % color.length
}
function count(){
    
}

function listMission(name) {
    let newMission = document.createElement('li');
    newMission.textContent = name + " ";

    let done = document.createElement('button');
    done.textContent = "Complete";

    let isCompleted = false;

    done.onclick = function () {
        isCompleted = !isCompleted;

        if (isCompleted) {
            newMission.style.textDecoration = "line-through";
            done.textContent = "Undo";
        } else {
            newMission.style.textDecoration = "none";
            done.textContent = "Complete";
        }

        count();
    };

    newMission.appendChild(done);

    let del = document.createElement('button');
    del.textContent = "Delete";

    del.onclick = function () {
        newMission.remove();
        count();
    };

    newMission.appendChild(del);

    document.getElementById('listMission').appendChild(newMission);

    count();
}

function count() {
    let missions = document.querySelectorAll('#listMission li');
    let completedCount = 0;

    missions.forEach(function (mission) {
        if (mission.querySelector('button').textContent === "Undo") {
            completedCount++;
        }
    });

    document.getElementById('total').textContent = missions.length;
    document.getElementById('completed').textContent = completedCount;
    document.getElementById('pending').textContent =
        missions.length - completedCount;
}
