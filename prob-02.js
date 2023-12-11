/*
you and your friends Tom, Jane, Peter, and John receiving your final exam results. Your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56, and John's total score is 40. The grading chart is as follows:
Grade Score
A	80 or above
B	60 or above
C	50 or above
D	40 or above
F	39 or less
write  a program to find you and your frnds grade using if else
*/
let numbers = [50];
for (i=0; i<numbers.length; i++){
    let number = numbers[i];
    if(number>=80){
        console.log('A garde');
    }
    else if(number>=60){
        console.log('B garde');
    }
    else if(number>=50){
        console.log('C garde');
    }
    else if(number>=40){
        console.log('B garde');
    }
    else if(number<=39){
        console.log('D garde or Fail');
    }

}