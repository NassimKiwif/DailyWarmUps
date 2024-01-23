let formation =( name,age,phase,points)=>{
    return {
        name:name,
        age:age,
        phase:phase,
        points:points
    };
}
let student1=formation('Nassim',25,'Basic',1.5);
let student2=formation('Ahmed',26,'Front Tower',7);
let student3=formation('Sabrine',27,'Back Bridge',-24.5);
let family =[student1,student2,student3]

function displayStudent(student){
    return "the student name is "+ student.name + " he's "+ student.age+"yo"
}
//Or
function displayStudent(student){
    return "the student name is ${student.name}. he's ${student.age}yo"
}

// 1. Think about some different attributes of books – what do all books have? Ideas include
// Example of creating book instances
function createBook(title, author, msrp, genre, numberOfPages, description) {
    return {
        title: title,
        author: author,
        msrp: msrp,
        genre: genre,
        numberOfPages: numberOfPages,
        description: description
    };
}
let book1 = createBook("The Art of War", "Sun Tzu", 15, "Military strategy", 67, "The work is attributed to the ancient Chinese military strategist Sun Tzu.");
let book2 = createBook("The 48 Laws of Power", "Robert Greene", 20, "Self-development/Strategy", 400, "A book by Robert Greene, presenting a guide to gaining power, preserving it, and understanding its dynamics.");
