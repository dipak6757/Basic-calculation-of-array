// task :-1) filter  out even Number 

let arr = [1,2,3,4,5,6,7,8,9,10];

let newarr = arr .filter ((e)=>{
    return e% 2 == 0;
})
console.log(newarr);