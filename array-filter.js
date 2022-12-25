let peoples = [
  {
    name:'Kevin',
    age:25
  },
  {
    name:"john",
    age:30
  },
  {
    name:"ray",
    age:25
  }
]


let muda = peoples.filter(people=>{
  return people.age === 25;
})

console.log(muda);
