
let total_vehicles=[];
let washed=[];


let total_amount=0;
let id=0;

const bike_price=100;
const car_price=300;

//Add vehicle to array
function addVehicle()
{
    let plate=document.getElementById('plate_field').value;
    // console.log(plate);
    let radio=document.querySelector('input[name="exampleRadios"]:checked').value;
    let cost=0;
    if(radio=='bike')
    {   cost=bike_price;

    }
    else
    cost=car_price;


    let new_vehicle={
        my_id:id,   
        plate_number:plate,
        type:radio,
        cost:cost
    };

    total_vehicles.push(new_vehicle);
    id++;
    getAllVehicles()

}

function getAllVehicles()
{
    let my_table=document.getElementById('my_table');
    let body= document.getElementById('my_table');
    body.innerHTML="";

    for(let i = 0; i<total_vehicles.length;i++)
    {
        const id=document.createElement('td');
        id.innerHTML=total_vehicles[i].my_id;
        const plate=document.createElement('td');
        plate.innerHTML=total_vehicles[i].plate_number;
        const type=document.createElement('td');
        type.innerHTML=total_vehicles[i].type;
        const price=document.createElement('td');
        price.innerHTML=total_vehicles[i].cost;


        let tr= document.createElement("tr");
        tr.appendChild(id);
        tr.appendChild(plate);
        tr.appendChild(type);
        tr.appendChild(price);

        body.appendChild(tr);

    }

    // total_vehicles.forEach(data => {

    //     const id=document.createElement('td');
    //     id.innerHTML=data.my_id;
    //     const plate=document.createElement('td');
    //     plate.innerHTML=data.plate_number;
    //     const type=document.createElement('td');
    //     type.innerHTML=data.type;
    //     const price=document.createElement('td');
    //     price.innerHTML=data.cost;


    //     let tr= document.createElement("tr");
    //     tr.appendChild(id);
    //     tr.appendChild(plate);
    //     tr.appendChild(type);
    //     tr.appendChild(price);

    //     body.appendChild(tr);
        
    // });

    // console.log(total_vehicles);

}

function washedVehicle(){
   total_vehicles.shift(total_vehicles);
   getAllVehicles();
}



