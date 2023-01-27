var importantIcon = "fa-solid fa-skull-crossbones important";
var nonImportantIcon = "fa-regular fa-face-meh";
var isImportant = false;

function toggleImportant() {
    // console.log("Icon clicked!");

    if (isImportant) {
        //change to non important
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
    }
    else {
        
        $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
        isImportant = true;
    }

}

function toggleForm() {
    console.log("Button click!");

   $(".form-container").toggle();
    
    
}

function saveTask() {
    console.log("#Saving Task");
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let dueDate = $("#txtDueDate").val();
    let category = $("#selCategory").val();
    let contact = $("#txtContact").val();
    let status = $("#selStatus").val();
    
    let task = new Task(title, desc, dueDate, category, contact, status, isImportant);

    
    $.ajax({
        type: "POST",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function(res){
            console.log(res);// res is a Json string

            // display logic
            displayTask(task);
            // clearForm();
        },
        error: function(error) {
            console.log(error);

            alert("Unexpected Error");
        }
    });
    
}
// function clearForm(); {
//     $("#txtTitle").val("");
// }

function displayTask(task) {
    let syntax = `<div class="task">
        <div>
            <h3>${task.title}</h3>
            <p>${task.desc}</p>
        </div>
        <div>
            <label>${task.dueDate}</label>
            <label>${task.category}</label>
        </div>
        <div>
            <label>${task.contact}</label>
            <label>${task.status}</label>
        </div>
    </div>`;

    $(".list-container").append(syntax);
}

function loadTasks() {
    $.ajax({
        type:"GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function(res) {
            let data = JSON.parse(res); // will parse the json string into JS objects
            console.log(data);
            for(let i=0; i < data.length; i++){
                let task = data[i]; // get every obj
                if(task.name == "Edgar"){
                    displayTask(task);
                // if the task name is equal to your name, then display it
                }
                
            }
        },
        error: function (error) {
            console.log(error);
            
        }
    });

}

function testRequest() {
    $.ajax({
        type: "DELETE",
        url: "https://fsdiapi.azurewebsites.net/",
        success: function(res) {
            console.log(res);
        },
        error: function (error) {
            console.log(error);
            
        }
    });
}

function init(){
    console.log("Task Manager!");

    // loads data
    loadTasks();
    
    // assigns events
    $("#iImportant").click(toggleImportant);
    $("#btnformswitch").click(toggleForm);
    $("#btnSave").click(saveTask);
}


window.onload = init;



/**
 * 
 * 1 create the button
 * 2 assign and id
 * 
 * 3 on js
 * 4 catch the click event on that button
 * 5 call a function
 * 6 create the function (toggleForm)
 * 7 console log "button clicked!"
 *
 */

/** HW Investigation------ JS Creating Objects */