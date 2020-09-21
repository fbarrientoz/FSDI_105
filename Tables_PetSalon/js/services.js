
function DisplayGridServices(serv){
    //var serv =  ArrayObj.pets;
    var text = "";
    var textBody = "";
    
    text=`<table class="table table-hover">
            <thead>
                <th>Description</td><td>Price</td>
            </thead>`;

    for(var x=0;x<serv.length;x++){       
        textBody+=`<tr><td>${serv[x].description}</td><td>${serv[x].price}</td></tr>` ;
    }

    text+=`<tbody>
            ${textBody}
           </tbody>
    </table>`;

    document.getElementById("table-services").innerHTML=text;
}


function init(){


    // ServicesArray.push(service_1);
    // ServicesArray.push(service_2);
    // ServicesArray.push(service_3);
    // ServicesArray.push(service_4);
    // ServicesArray.push(service_5);
    DisplayGridServices(ServicesArray);


}

window.onload=init;
