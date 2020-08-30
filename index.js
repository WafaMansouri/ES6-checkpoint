let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge= pet => new Date().getFullYear() - pet.bornOn; 

let petsWithAge = pets.map(pet=>{
  pet.age=getAge(pet);
  return pet;
})
console.log(petsWithAge);

let dogs = [];
pets.forEach(pet=>{
  if(pet.type==="dog"){
    dogs.push(pet);
  }
})
console.log(dogs);

const jasper=pets.filter(pet=>pet.name==="Jasper")[0];
console.log(`Jasper is ${jasper.age} years old`);
