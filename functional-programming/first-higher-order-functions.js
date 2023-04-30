function executeFunction(f){
    f();
}

function printWolrd(){
    console.log("First-class function");
}

executeFunction(printWolrd);