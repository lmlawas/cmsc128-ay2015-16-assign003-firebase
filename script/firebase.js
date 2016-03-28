/*
    Script for Firebase database insert, update, and view
*/

var myDataRef = new Firebase("https://n13lq7bj4r1.firebaseio-demo.com/"),
    cnt = 99;
    
function saveNewTask() {
/*******************************************************************************
    This function saves a Task Object's data to Firebase.
*******************************************************************************/

    // retrieve values in form
    var n = $("#task-name").val();
    var d = $("#task-description").val();
    var s = $("input[name='task-status']:checked").val();        

    // pass task object to firebase
    myDataRef.push({name: n, description: d, status: s});

    // clear values in form
    $("#task-name").val("");
    $("#task-description").val("");
    $("#task-status").val("");
};// end of saveNewTask()
    
myDataRef.on("child_added", function(snapshot) {
/*******************************************************************************
    This call back function retrieve tasks from firebase
*******************************************************************************/    
    var task = snapshot.val();
    displayAllTasks( task.name, task.description, task.status );
    if(task.status === 'ongoing'){
        displayOngoingTasks( task.name, task.description, task.status );
    }
    if(task.status === 'finished'){
        displayFinishedTasks( task.name, task.description, task.status );
    }     
});// end of myDataRef.on()

function displayAllTasks(name, description, status){
/*******************************************************************************
    This function displays all tasks under div with id=AllTasksDiv
*******************************************************************************/    
    var newId = "id" + cnt;
    cnt++;

    $( "<div/>" )
    .html(
        "<div id='" + newId 
        + "' class='w3-accordion-content w3-border'><div class='w3-container'> Status: <em>" 
        + status + "</em><br/>Description: <em>" 
        + description + "</em></div></div>" 
    )
    .prepend(
        $( "<button onclick=myAccFunc('"
            + newId 
            + "') class='w3-padding-16 w3-hover-dark-grey w3-btn-block w3-left-align'/>" )
        .text( name )
    )
    .appendTo($("#AllTasksDiv"));
};// end of displayAllTasks()

function displayOngoingTasks(name, description, status){
/*******************************************************************************
    This function displays ongoing tasks under div with id=OngoingTasksDiv
*******************************************************************************/
    var newId = "id" + cnt;
    cnt++;

    $( "<div/>" )
    .html(
        "<div id='" + newId 
        + "' class='w3-accordion-content w3-border'><div class='w3-container'> Status: <em>" 
        + status + "</em><br/>Description: <em>" 
        + description + "</em></div></div>" 
    )
    .prepend(
        $( "<button onclick=myAccFunc('"
            + newId 
            + "') class='w3-padding-16 w3-hover-dark-grey w3-btn-block w3-left-align'/>" )
        .text( name )
    )        
    .appendTo($("#OngoingTasksDiv"));        
};// end of displayOngoingTasks()

function displayFinishedTasks(name, description, status){
/*******************************************************************************
    This function displays finished tasks under div with id=FinishedTasksDiv
*******************************************************************************/
    var newId = "id" + cnt;
    cnt++;

    $( "<div/>" )
    .html(
        "<div id='" + newId 
        + "' class='w3-accordion-content w3-border'><div class='w3-container'> Status: <em>" 
        + status + "</em><br/>Description: <em>" 
        + description + "</em></div></div>" 
    )
    .prepend(
        $( "<button onclick=myAccFunc('"
            + newId
            + "') class='w3-padding-16 w3-hover-dark-grey w3-btn-block w3-left-align'/>" )
        .text( name )
    )        
    .appendTo($("#FinishedTasksDiv"));        
};// end of displayFinishedTasks()
