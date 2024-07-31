const arr1 =[1,2,3,4,5];

const arr2 =[4,5,6,7,8];

const common =arr1.filter(element => arr2.includes(element));

console.log(common)