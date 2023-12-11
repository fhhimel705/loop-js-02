let names = ['jen','pk','shap','podda','jero'];
for(i=0;i<names.length;i++){
    let name = names[i];
    if(name == 'shap'){
        continue;
    }
    console.log(name);
}
console.log("------------ends---------------");
let numbers = [11,123,13,14,15,16,17,18,1,3,5,7];
for(i=0; i<numbers.length; i++){
    let number = numbers[i];
    if(number > 15){
        continue;
    }
    console.log(number);
}