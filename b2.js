// task 2:- calculate average salary.

function avgSalary(value)
{
   let ans = value.reduce((curr,prev)=>{
        return curr+prev
    },0)
    return ans / salary.length;
}
let salary =[9000,2000,3000,4000,5000]

console.log(avgSalary(salary))