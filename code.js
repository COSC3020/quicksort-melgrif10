function quicksort(array) {
    if(array.length<=1){    //If the length of the array is less than 1
    return array;       //The array doesn't have enough elements to be sorted. Stop
    }

    const stack=[];      //Initalize stack
    stack.push(0, array.length-1);    //Push the 1st index and the last index of the array onto the stack in order to sort the entire array

    while(stack.length>0){      //While the length of the stack is greater than 0
        const right=stack.pop();  //Pop the last element of the subarray and let it equal right "boundry"
        const left=stack.pop();    //Pop the first element of the subarray and let it equal left "boundry"

        if(left<right){     //If the value of left is less than the value of right
        const pivot=split(array, left, right);  //Use the split function to select a pivot

            if(pivot-left<right-pivot){     //Are there more elements to the right of the pivot than to the left?
                stack.push(pivot+1, right); //Push the "right side" of the array onto the stack first to be sorted in the while loop
                stack.push(left, pivot-1);  //Push the "left side" of the array onto the stack to be sorted in the while loop
            }
            else{       //If there are more elements to the left of the pivot than the right 
                stack.push(left, pivot-1);  //Push the "left side" of the array onto the stack first to be sorted in the while loop
                stack.push(pivot+1, right); //Push the "right side" of the array onto the stack to be sorted in the while loop
            }
        }   
    }
    return array;   //Return the sorted array
}

function split(array, left, right){     //Function to choose a pivot
    const piv=array[right];     //Choosing the last element of the subarray as the pivot
    let i=left-1;       //Helps keep track of elements smaller than the pivot

    for(let j=left; j<right; j++){      //For elements in the array
        if(array[j]<piv){       //Compare the element you are currently on to the pivot
            i++;        //If the value at array[j] is less than the pivot increment i to indicate where the next smaller element should be placed
            swap(array, i, j);  //Move the smaller element to the index of i
        }
    }

    swap(array, i+1, right);    //Move the pivot value to index i+1 to ensure elements smaller will be on the left and elements greater will be on the right
    return i+1;     //Return the value of the pivot
}

function swap(array, i, j){     //Function to switch the positions of two elements
    const temp = array[i];      //Temporarily store the value of the element at index i
    array[i]=array[j];      //Swap the value at index i with the value at index j  
    array[j]=temp;      //Store the value at index j as temp
}
