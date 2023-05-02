function executeFunction(f){ // higher order function
    f();
}

function printWolrd(){ // first class function
    console.log("First-class function");
}

executeFunction(printWolrd);