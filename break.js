// when at a point of a loop you want to stop you can simply give condition at which point you want the loop to stop.
// there the two methods
/**
 * you can break it after fulfilling the condition (RECOMMENDED)
 */
// for (i = 0; i < 10; i++) {
//   console.log(i);
//   if (i > 4) {
//     break;
//   }
// }
let items = ['glass' , 'indicator' , 'filter' , 'tier' , 'seat'];
for(i=0;i<items.length;i++){
 let item = items[i];
 console.log(item);
 
}
/**
 * you can break it befor fulfilling the condition
 */
// for (i = 0; i < 10; i++) {
//   if (i > 4) {
//     break;
//   }
//   console.log(i);
// }
