function sortBubble(array){
    isMoving = true;

    while(isMoving){
        isMoving = false;
        for(i = 0; i < (array.length - 1); i++){
            first = array[i];
            second = array[i+1];
    
            if(first > second){
                array[i] = second;
                array[i+1] = first;
                isMoving = true;
            }
        }
    }
}

let numbers = [14, 7, 25, 3, 18, 9, 22, 6, 11, 30, 17, 5, 29, 12, 8, 21, 2, 16, 10, 27];


sortBubble(numbers);
console.log(numbers);


