
function withAdition(x, y){ // x = 50, y = 10
    
    console.log("before swapping ->", x, y);
    x = x + y; // 60
    y = x - y; // 60 - 10 = 50, first swap ready
    x = x - y; // 60 - 50 = 10, second swap ready
    console.log("after swapping ->", x, y);
}

withAdition(50, 10);

function withMultiplicatoin(x,y){
    console.log("before swapping ->", x, y);
    x = x * y;
    y = x / y;
    x = x / y;
    console.log("after swapping ->", x, y);
}

withMultiplicatoin(432.23, 0.23);