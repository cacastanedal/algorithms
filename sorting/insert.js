function insert(array){
    sorted = [array[0]];

    for(i = 1; i < array.length; i++){
        
        sorted.push(array[i]);

        for(j = sorted.length - 1; j > 0; --j){
            if(sorted[j] < sorted[j-1]){
                temp = sorted[j];
                sorted[j] = sorted[j-1];
                sorted[j-1] = temp;
            } else {
                break;
            }
        }
    }


    console.log(sorted);
    return sorted;
}

let numbers = [14, 7, 25, 3, 18, 9, 22, 6, 11, 30, 17, 5, 29, 12, 8, 21, 2, 16, 10, 27];
// let numbers = [14, 7, 25, 3]

insert(numbers);
//console.log(numbers);