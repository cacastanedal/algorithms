function selection(array){

    for(i = 0; i < array.length; i++){
        actualNumber = array[i];
        positionToSwap = i;
        for(j = i + 1; j < array.length; j++){
            nextNumber = array[j];
            if(array[j] < array[positionToSwap]){
                positionToSwap = j;
            }
        }
        array[i] = array[positionToSwap];
        array[positionToSwap] = actualNumber;
    }

}

let numbers = [14, 7, 25, 3, 18, 9, 22, 6, 11, 30, 17, 5, 29, 12, 8, 21, 2, 16, 10, 27];

selection(numbers);
console.log(numbers);