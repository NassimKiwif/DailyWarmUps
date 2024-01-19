//Essential
// 1.Fix the syntax & style issues with the three objects below:
let Yanfan={
    firstName: "Yan", 
    lastname: "Fan" 
} 

 let DEF=
 {a:1, 
    b:2, 
    c: 3, 
    d:4} 
 
    let Skol={ 
       animal: "dog" ,
       noise: 'bark',
       age: 3, 
       type :"Golden Retriever", 
       color: 'Yellow', 
 }
//  2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
let Nassim=
{
    firstName:"Nassim",
    lastname:"Kefi",
    Age:"25",
    Hometown:"Ariana",
    FavoriteFood:"Pizza"
}
// 3.Access the favorite food property in the object using dot notation, and reassign it to a different food.
Nassim.FavoriteFood="Rice"
// 4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
Nassim.name=person.firstName+""+person.lastname
// 5.Write a function called emptyObject that takes no parameters and returns an empty object.
function emptyObject(){
    return {}
}
// 6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
function addProperty(object,key){
    object[key]=true
    return object
}