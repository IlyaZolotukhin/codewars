/*//---------------------------
let car = {
    speed: 100,
    color: "black"
}

let carCopy = { ...car, speed: 20 }

console.log(car.speed)
console.log(carCopy.speed)*/
/*//-----------------------------------------
let numbers = [1, 2, 3];


let numbersFullCopy = [...numbers];
numbersFullCopy[1] = 5;

console.log(numbersFullCopy)*/
//-----------------------------------------
/*let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = {...man1,mother: {...man1.mother, age: man1.mother.age = 65}}

console.log(man1FullCopy)*/
//---------------------------------------------------
/*let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

/!*let man2FullCopy = {...man2, friends: [...man2.friends]};
man2FullCopy.friends[2] = "ILUHA";*!/
let man2FullCopy = {...man2, friends: man2.friends.map((f) =>f==="William"? "ILUHA": f)};

console.log(man2FullCopy)*/
//-------------------------------------------------------------
/*

let family=[{dad:"ILUHA"},{foto: "ghghuhuk",mother:"VERONICA",age: 35},{dother:"ALINA"},{son:"ANTON"}]

let VERONICA = family[1]

console.log(VERONICA)*/
//-------------------------------------------------------------
/*
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];

let peopleFullCopy =  people.map((p) => p.name === "Peter"? {...p, age: 65} : p)

console.log(peopleFullCopy)*/
//---------------------------------------------------------
/*
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy = {...man3, friends: man3.friends.map((f) => f.age === 32 ? {...f,age: 25} : f)}

console.log(man3FullCopy)*/
//------------------------------------------------------------
/*let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work, experience:20}}}

console.log(man4FullCopy)*/
//------------------------------------------------------------

/*let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};*/

//let man5FullCopy = {...man5, mother: {...man5.mother,parents: {...man5.mother.parents.map((p)=>p.age === 80 ? {...p,age: 100}: p)}}}

/*let man5FullCopy = {
    ...man5,
    mother: {
        ...man5.mother,
        parents: man5.mother.parents.map((p) => (p.age === 80 ? { ...p, age: 100 } : p))
    }
};

console.log(man5FullCopy.mother.parents[0])*/
//-------------------------------------------------------
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {...man6, mother: {...man6.mother, parents: man6.mother.parents.map((p) => p.favoriteDish.title === "sushi" ?
            {...p, favoriteDish: {...p.favoriteDish,title: "eggs"}} : p)
    }}

console.log(man6FullCopy.mother.parents[1])