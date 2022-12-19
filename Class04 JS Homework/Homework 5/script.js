let array = [3,5,6,8,11];
function structures(){ 
    let max = Math.max(...array);
    console.log(max);
    let min = Math.min(...array);
    console.log(min);
    return{
     Max: max,
     Min: min,
     Sum: max + min
    };
 }
  
 let a = structures()
 console.log(a);