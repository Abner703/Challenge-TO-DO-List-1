const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask")
const taskList = document.getElementById("taskList")

addTask.addEventListener("click",() =>{
    const task = document.createElement("li")
    task.textContent = taskInput.value 
    taskList.append(task)
    const  removeTask = document.createElement("button")
    removeTask.textContent = "Supprimer"
    task.append(removeTask)

    
    removeTask.addEventListener("click",(event) => {
        event.target.parentElement.remove()
    })

})  