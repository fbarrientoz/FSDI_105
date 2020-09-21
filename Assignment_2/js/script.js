//Create an Object literal for the pet salon(Name, adress, Hours)

var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Km2 Carretera Tijuana Colonia Zaragoza, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8 am",
        close: "4 pm"
    },
    pets:[
        {   //Object 1
            namepet:"Napo",
            Age:6,
            breed:"Callejero",
            gender: "Male",
            type:"Dog"
        },
        {   //Object 2
            namepet:"Rafael",
            Age:2,
            breed:"Canalera",
            gender: "Male",
            type:"Turtle"
        },
        {   //Object 3
            namepet:"Mistica",
            Age:7,
            breed:"Callejero",
            gender: "Femela",
            type:"Dog"
        },
        {   //Object 4
            namepet:"La Pocha",
            Age:4,
            breed:"PitBull",
            gender: "Femela",
            type:"Dog"
        },
        {   //Object 5
            namepet:"Godzilla",
            Age:22,
            breed:"Desert lizard",
            gender: "Male",
            type:"Lizard"
        },
        {   //Object 6
            namepet:"Porfirio",
            Age:7,
            breed:"Callejero",
            gender: "Male",
            type:"Dog"
        },
    ]
}


//EXTRA HOMEWORK
//CSS
//DISPLAY DE OLDES AND YOUNGEST PET (CREATE A FUNCTION)

//Object structuring
//console.log(ObjSalon.address.street);

//var {name,address:{street,number},hours:{open,close}} = ObjSalon;

//console.log(name +"|"+ street +"|"+open);
//console.log(ObjSalon.pets);

//create and Array with pets(Obj literal) (name, breed, gender, type, services)
/*var ObjPets = {
    name:"Napo",
    breed:"Callejero",
    gender: "Male",
    type:"Dog",
    services:{
        hour: "11 am",
        descrition: "Washing Dog"
    }
}*/

//Function to display on the console the names of the pets
function DisplayNumberPets(Array)
{
    console.log("Number of records: "+Array.pets.length);
}

function DisplayName(Array)
{
    for(var x=0; x<Array.pets.length; x++){
        console.log(Array.pets[x].namepet);
    }
}

function bubbleMetothod(ArrayTMP){
		for(var i=1;i<ArrayTMP.length;i++)
		{
			for(var j=0;j<(ArrayTMP.length-i);j++)
			{
				if(ArrayTMP[j].Age>ArrayTMP[j+1].Age)
				{
					k=ArrayTMP[j+1].Age;
					ArrayTMP[j+1].Age=ArrayTMP[j].Age;
					ArrayTMP[j].Age=k;
				}
			}
        }
 
		return ArrayTMP;
}

function GetMax(Array){
    Array = bubbleMetothod(Array);
    /*var max = Math.max.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));*/
    console.log("Oldest pet: "+Array[Array.length-1].Age);
}

function GetMin(Array){
    Array = bubbleMetothod(Array);
    /*var min = Math.min.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));*/
    console.log("Youngest pet: "+Array[0].Age);
}


console.log("------Display Name--------");
DisplayName(ObjSalon);

console.log("------Display Number of Pets--------");
DisplayNumberPets(ObjSalon);

console.log("------Display Oldest and Youngest Pet-------");
GetMin(ObjSalon.pets);
GetMax(ObjSalon.pets);

//function to display on console the number of registered pets



var lion = {
    name:"Simba",
    foodType:"Carnivore",
    kinfofTheJungle:true

}

console.log(lion);


var monkey = {
    name:"Rafiky",
    foodType:"Carnivore",
    kinfofTheJungle:false

}

console.log(monkey);

class Animal{
    constructor(name,foodType,kinfofTheJungle){
        this.name=name;
        this.foodType=foodType;
        this.kinfofTheJungle=kinfofTheJungle;
    }
}


var lionC = new Animal("Simba", "Carnivore", true);
var MonkeyC = new Animal("Rafiky", "Carnivore", false);


console.log(lionC);
console.log(MonkeyC);