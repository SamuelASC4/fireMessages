//Set database object


//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
    var value = {
        NAME: name,
        MESSAGE: message
    }
    database.push(value);
}
