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
    
    let task = new Task(title, desc, dueDate, category, contact, status);
    // save logic
    
    // display logic
    displayTask(task);
}

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

function init(){
    console.log("Task Manager!");

    // loads data

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