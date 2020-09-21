function DisplayNumberPets(Array)
{
    return("Number of pets: "+Array.length);
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
    return Array[Array.length-1].age;
}

function GetMin(Array){
    Array = bubbleMetothod(Array);
    /*var min = Math.min.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));*/
    return Array[0].age;
}



function displaytable(pets){

    var text="";
    var theader = document.getElementById("theader");
    var tbody = document.getElementById("tbody");

            typePet = GetTypePet(pets.type, pets.color);

            text=`<tr id="t${pets.id}">
                    <td>${pets.name}</td> 
                    <td>${typePet} | ${pets.type}</td>
                    <td>${pets.age}</td>
                    <td>${pets.breed}</td>                    
                    <td>${pets.price}</td>                    
                    <td>${pets.gender}</td>                    
                    <td>${pets.services}</td>                    
                    <td>${pets.contactPhone}</td>                    
                    <td><button id="deletePetbtn" class="btn btn-danger" onclick="DeletePet(${pets.id})">Delete</button></td>
                </tr>` ;


    $('#petTable').append(text);
    displayInformation(ObjSalon);
}


function  displayInformation(ArrayObj){
    //Create vars
    var pets =  ArrayObj.pets;
    var text="";
    var totalSection = document.getElementById("totalSection");

    var TotalPrice = 0;
    var TotalPriceTax = 0;

    for(var x=0;x<pets.length;x++){
            TotalPrice = TotalPrice + Number(pets[x].price);
    }

    TotalPriceTax = TotalPrice * .16;
    Total = TotalPriceTax+TotalPrice;

    var NumberPets = DisplayNumberPets(pets);
    
    var Max = GetMax(pets);
    var Min = GetMin(pets);

    text = `<hr>Total Price:${TotalPrice} <br>Tax: ${TotalPriceTax} <br>Total: ${Total} <br>Older: ${Max} <br> Youngest: ${Min} <br> ${NumberPets}`;

    totalSection.innerHTML = text;
 
}

//Muestra como componente
function  display(ArrayObj){
    //Create vars
    var pets =  ArrayObj.pets;
    var text="";
    var petSection = document.getElementById("petSection");

    //document.getElementsByTagName
    var typePet = "";

    var TotalPrice = 0;
    var TotalPriceTax = 0;
    var Prices = 0;

    //Travel the pets array
    for(var x=0;x<pets.length;x++){
            //create the HTML text
            //console.log(pets[x]);
            //Prices = GetServicesPrices(pets[x].services);
            TotalPrice = TotalPrice + Number(pets[x].price);

            typePet = GetTypePet(pets[x].type, pets[x].color);

            text+=`<div id="${x+1}" class="pet">
                    <h2>${pets[x].name} | ${typePet}</h2>
                    <p>Age:${pets[x].age}</p>
                    <p>type:${pets[x].type}</p>                    
                    <p>Breed:${pets[x].breed}</p>                    
                    <p>Price:${pets[x].price}</p>                    
                    <p>Gender:${pets[x].gender}</p>                    
                    <p>Services:${pets[x].services}</p>                    
                    <p>Contact Phone:${pets[x].contactPhone}</p>                    

                    <button id="deletePetbtn" class="btn btn-danger" onclick="DeletePet(${pets[x].id})">Delete</button>

                </div>` ;

    }

    TotalPriceTax = TotalPrice * .16;
    Total = TotalPriceTax+TotalPrice;

    var NumberPets = DisplayNumberPets(pets);
    
    var Max = GetMax(pets);
    var Min = GetMin(pets);

    text = `<hr>Total Price:${TotalPrice} <br>Tax: ${TotalPriceTax} <br>Total: ${Total} <br>Older: ${Max} <br> Youngest: ${Min} <br> ${NumberPets} <hr>${text}`;


    petSection.innerHTML = text;
    //console.log(text);

    //display the per on the HTML

}
 

function GetTypePet(TypePet, color){
    const dogImg =`<i class="fas fa-dog" style="color:${color};"></i>`;
    const fishImg = `<i class="fas fa-fish" style="color:${color};"></i>`;
    const spiderImg = `<i class=" fas fa-spider" style="color:${color};"></i>`;
   
    if(TypePet==="Dog"){
        TypePet = dogImg;
    }else if(TypePet==="Fish"){
        TypePet = fishImg;
    }else if(TypePet==="Spider"){
        TypePet = spiderImg;
    }
   
    return TypePet;
}


function DeletePet(id){

    // select the element
    var tr=$("#t"+id);
    var indexDelete;
    console.log('Delete' + tr);
  
    // travel the array (search function) --> petId ===salon.pets[i].id 
    for(var i=0;i<ObjSalon.pets.length;i++){
        var selected=ObjSalon.pets[i];
        if(selected.id===id){
            indexDelete=i;
        }    
    }

   // delete the pet from the array splice()
   ObjSalon.pets.splice(indexDelete,1);
    // delete the pet from the html
   tr.remove();

}


function SearchPet(){

var ss=$('#petSearch').val();

ObjSalon.pets.forEach((PetA) =>{
   
   if(ss.toLowerCase()===PetA.name.toLowerCase() || ss.toLowerCase()===PetA.services.toLowerCase()){           
           $('#t'+PetA.id).addClass('active');
   }else{
       $('#t'+PetA.id).removeClass('active');
   }
});

}



