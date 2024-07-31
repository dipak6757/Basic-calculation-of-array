function findSort(value)
{
   return value.sort((a,b)=>a.age - b.age)
}
let employee = [
    { name : "karan", 
        age : 30
    },
    { 
        name : "lacky", 
        age : 25
    },
    { name : "abhi",
         age : 40

    },

]
console.log(findSort(employee));