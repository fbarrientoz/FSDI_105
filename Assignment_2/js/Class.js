var c=1;
class Pet{
    constructor(name,age,type,breed,gender,services,owner,contactPhone, price, color){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.price=price;
        this.color=color;
        this.id=c;
        c++;
    }
}


var ServicesArray = [];

class Services{
    constructor(description,price){
        this.description=description;
        this.price=price;
    }
}

var service_1= new Services("Shower", "25");
var service_2= new Services("Hair cut", "50");
var service_3= new Services("Gold services", "150");
var service_4= new Services("Vaccines", "150");
var service_5= new Services("Full services", "200");


ServicesArray.push(service_1);
ServicesArray.push(service_2);
ServicesArray.push(service_3);
ServicesArray.push(service_4);
ServicesArray.push(service_5);

function GetServicesPrices(Services){
    var Price=0;

    if(Services==="Shower"){
        Price = 25;
    }else 
    if(Services==="Hair cut"){
        Price = 50;
    }else 
    if(Services==="Gold services"){
        Price = 150;    
    }else 
    if(Services==="Vaccines"){
        Price = 20;    
    }else 
    if(Services==="Full services"){
        Price = 200;
    }
    return Number(Price);
}

var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Rio Soto la Marina, 208, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8:00 am",
        close: "4:00 pm"
    },
    pets:[    ]
}

var pet1 = new Pet("Money",7,"Dog","Chiwini", "Male", "Shower", "Faby", "6861547890", GetServicesPrices("Full services"),"#511e46");
var pet2 = new Pet("Shady",7,"Dog","Pug", "Female", "Full services", "Faby", "6861547890",GetServicesPrices("Full services"),"#511e46");
var pet3 = new Pet("Sebastian",2,"Fish","Cangrejo", "Male", "Full services", "Faby", "6861547890",GetServicesPrices("Full services"),"#900707");
var pet4 = new Pet("Nemo",4,"Fish","Payaso", "Male", "Gold services", "Faby", "6861547890",GetServicesPrices("Gold services"),"#c57510");
var pet5 = new Pet("Peter Parker",4,"Spider","Spider Man", "Male", "Full services", "Faby", "6861547890",GetServicesPrices("Full services"),"#b70000");
var pet6 = new Pet("Chitta",6,"Dog","Dog", "Male", "Shower", "Faby", "6861547890",GetServicesPrices("Gold services"),"#511e46");

ObjSalon.pets.push(pet1);
ObjSalon.pets.push(pet2);
ObjSalon.pets.push(pet3);
ObjSalon.pets.push(pet4);
ObjSalon.pets.push(pet5);
ObjSalon.pets.push(pet6);

//console.log(ObjSalon.pets);
//get the inputs and store them in variables
var txtName = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
var txtgender = document.getElementById("gender");
var txtservices = document.getElementById("services");
var txtowner = document.getElementById("owner");
var txtcontactphone = document.getElementById("contactphone");
var txtcolorpet = document.getElementById("colorpet");

function clearInputs(){
    txtName.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservices.value="";
    txtowner.value="";
    txtcontactphone.value="";
    txtcolorpet.value="#000000";
}

function register(){
    //create the Pet

    var NewPet = new Pet(txtName.value,txtage.value,txttype.value,txtbreed.value,txtgender.value, txtservices.value, txtowner.value, txtcontactphone.value, GetServicesPrices(txtservices.value), txtcolorpet.value);

    //Push the new pet
    ObjSalon.pets.push(NewPet);

    clearInputs();
    displaytable(NewPet);
    //console.log(ObjSalon.pets);
    
    // display(ObjSalon);
}


function init(){
    ObjSalon.pets.push(pet1);
    ObjSalon.pets.push(pet2);
    ObjSalon.pets.push(pet3);
    ObjSalon.pets.push(pet4);
    ObjSalon.pets.push(pet5);
    ObjSalon.pets.push(pet6);

    //display(ObjSalon);
    displaytable(pet1);
    displaytable(pet2);
    displaytable(pet3);
    displaytable(pet4);
    displaytable(pet5);
    displaytable(pet6);

    $('#btnregister').on('click', register);
    $('#search-btn').on('click', SearchPet);
    $('#petSearch').on('keyup', SearchPet);

}


window.onload=init;


