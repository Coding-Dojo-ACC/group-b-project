// Loop predict explication


//  #2
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    } // else { understood return to it moves to the next part of the for loop}
    // console.log(i) // will print every time through the loop since it is outside of the {}
}

// if i = 1 is divisible by 3 console.log , but it's not so add 2
// i = 3 /3 is 0 print console.log then increase by 3
// i = 5/3 not 0 +2 and move on
// i = 7/3 not 0 +2 move on
// i = 9/3 console.log 9 +2 move on
// i > 10 so stop

// this will print the numbers 3 and 9


//  #3
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    } // exits to console.log only if true if false skips and moves to next if statement
    else if(j % 3 == 0){
        j++;
    } // exits to console.log if true if false skips and moves to next statement (happens to be a console.log so just prints current j)
    // else {return i}
    console.log(j);
}  

// j=1 ---- j/2 = 0 is false ---- j/3 = 0 is false ----  console.log(j) then increase j+1
// j= 2 ---- j/2 = 0 is true j+2=4 exit to console.log(j) then j+1
// j= 5 ---- j/2 = 0 is false ---- j/3 = 0 is false ---- console.log(j) then increase j+1
// j= 6 ---- j/2 = 0 is true j+2=8 exit to console.log(j) then j+1
// j= 9 ---- j/2 = 0 is false ---- j/3 is true j+1=10 exit to console.log(j) then j+1
// j= 11 ---- j/2 = 0 is false ---- j/3 = 0 is false ---- console.log(j) then increase j+1
// j= 12 ---- j/2 = 0 is true j+2=14 exit to console.log(j) then j+1
// j= 15 ---- j/2 = 0 is false ---- j/3 is true j+1=16 exit to console.log(j) then increase j+1
// j= 17 no longer less than 15 from for loop do nothing


// Array Predict

// #3
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){ //i starts a 0  increase by 1 until the length array
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }   // if i less than 0 push to newArr and change arr [i] to i*-1 / if false move to else if
    else if(arr[i] == 0){
        arr[i] = "Zero";
    } // if i  = 0 change arr [i]  to zero / if false move to else
    else{
        arr[i] = arr[i] * -1;
    } // final statement or all other cases change arr[i] to i*-1
}
console.log(arr);
console.log(newArr);

// arr.length = 8
// i[0]= 1 ---- i<0 is false ---- i=0 is false ---- so i*-1 change i[0] to -1
// The arrays currently look like this ---- arr [-1] & newArr []

// i[1] = 3 ---- i<0 is false ---- i=0 is false ---- so i*-1 change i[1] to -3
// The arrays currently look like this ---- arr [-1,-3] & newArr []

// i[2] = 8 ---- i<0 is false ---- i=0 is false ---- so i*-1 change i[2] to -8
// The arrays currently look like this ---- arr [-1,-3,-8] & newArr []

// i[3] = -5 ---- i<0 is true so push i into newArr & i*-1=5
// The arrays currently look like this ---- arr [-1,-3,-8,5] && newArr [-5]

// i[4] = 0 ---- i<0 is false ---- i=0 is true i[4]="zero"
// The arrays currently look like this ---- arr [-1,-3,-8,5,"zero"] && newArr [-5]

// i[5] = -2 ---- i<0 is true so push i into newArr & i*-1=2
// The arrays currently look like this ---- arr [-1,-3,-8,5,"zero",2] && newArr [-5,-2]

// i[6] = 4 ---- i<0 is false ---- i=0 is false ---- so i*-1 change i[6] to -4
// The arrays currently look like this ---- arr [-1,-3,-8,5,"zero",2,-4] && newArr [-5,-2]

// i[7] = -1 ---- i<0 is true so push i into newArr & i*-1=1
//The arrays currently look like this ----  arr [-1,-3,-8,5,"zero",2,-4,1] && newArr [-5,-2]

// i[8] loop has ended as index 8 is equal to the length not less than.