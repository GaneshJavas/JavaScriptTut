class Person{
     name = "Jai";
     constructor(name){
        this.name = name
     }
     selfIntro(){
        console.log(`My name is ${this.name}`);
        
     }
}

// class Something{
//     // OMITTING constuctor
//     gay(){
//         console.log("Me gay hu");      
//     }
// } 

class Professor extends Person{
    teaches;
    constructor(name, teaches){
        super(name);
        this.teaches = teaches;
    }
    selfIntro(){
        console.log(`My name is ${this.name}, and I teach ${this.teaches}`);
    }
    gradeing(paper){
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(`Grades of ${paper} : ${grade}`);
    }
}

class Student extends Person{
    #year;
    constructor(name,year){
        super(name);
        this.#year = year;  
    }
    selfIntro(){
        console.log(`My name is ${this.name}, and I study in ${this.#year} year`);
    }
    eligibleForSports(){
        if (this.#year > 1){
            console.log("Eligilble");
        }else{
            console.log("Not Eligible");
        }
    }
    #age(){
        console.log("Secret"); 
    }
    accessSecret(){
        this.#age()
    }

}
 
const per_1 = new Person("Amit")

console.log(per_1.name);
per_1.selfIntro();

// const some = new Something()
// some.gay()

const prof_1 = new Professor("Vipin", "Sexology")
prof_1.selfIntro();
prof_1.gradeing("Sexology");

const stu_1 = new Student("Gulshan", 2)

// console.log(stu_1.#year); // SyntaxError: Private field '#year' must be declared in an enclosing class

// stu_1.#age() // SyntaxError: Private field '#age' must be declared in an enclosing class

stu_1.accessSecret()