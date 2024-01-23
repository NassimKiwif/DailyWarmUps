
// - create a data model to represent your classmates
// - think of different attributes of your classmates? what do all of them have ?
// - create a factory function.
// - create an array to hold the classmates that you created.
// - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// - write a function called addFriend that takes a mate as an argument and add it to you classMates array.
// - calculate the number of male friends that your class have by writing a function called nbOfMale.
// - Write a function searchMates that, given a query and an array of Mates,
//   searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function createClassmates(name,family_name,age,phase,points){
    return{
        name:name,
        family_name,
        age,
        phase,
        points
    }
}
let ahmed=createClassmates("ahmed","ghalleb",26,"basic pack",7)
let sabrine=createClassmates("sabrine","zouaoi",27,"fronttower pack",-24)
let nassim=createClassmates("nassim","kefi",25,"baackbridge pack",1.5)
let family=[ahmed,sabrine,nassim]

function displayFriend(classmate){
    return "The classmate name is "+classmate.name+classmate.family_name+" he's "+classmate.age+" Years old "+"he's actually studying the "+classmate.phase+" and he has "+classmate.points+" points"
}
function addFriend(Newclassmate){
    
}