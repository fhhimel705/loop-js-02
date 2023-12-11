// you are given a triangle with the sides 9, 8, 9 . write a program to check whether its a triangle or a isosceles or not using if-else.
let width1 = 9;
let width2 = 8;
let width3 = 9;

if(width1+width2 > width3 && width2+width3 > width1 && width3+width1 > width2){
    if(width1 == width2 || width2 == width3 || width3 == width1){
        console.log('its a isosceles triangle');
    }
    else{
        console.log('its a triangle');
    }
}
else{
    console.log('its not a triangle');
}