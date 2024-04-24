// http://api.weatherapi.com/v1/current.json?key=61c3bbbf914a48afb5994235242104&q=mumbai&aqi=no



const temperature=document.querySelector(".tempchange");
const locationtime=document.querySelector(".time");
const data=document.querySelector(".data");
const weather=document.querySelector(".wheather");
const form=document.querySelector("form");
const searchbar=document.querySelector("#search-area");

var icon=document.querySelector("#icon");

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="sun.png";
    }else{
        icon.src="moon.png";
    }
}


form.addEventListener("submit",function(event){
    event.preventDefault();
    searchforlocation();
});


let target='satna';

const fetchresult = async (targetlocation)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=61c3bbbf914a48afb5994235242104&q=${targetlocation}&aqi=no`;

    const res=await fetch(url);

    const data=await res.json();

    console.log(data);
    let temp=data.current.temp_c;
    let location_name=data.location.name;
    let time=data.location.localtime;
    let condition=data.current.condition.text;

    updatedetails(temp,location_name,time,condition);
}

function updatedetails(temp,location_name,time,condition){

    let splitdate=time.split(" ")[0];
    let splittime=time.split(" ")[1];

    let current_Day=getdayname(new Date(splitdate).getDay());
    
    temperature.innerText=temp;
    locationtime.innerText=`${splitdate} , ${current_Day} , ${splittime}`;
    weather.innerText=condition;
    data.innerText=location_name;
}


function searchforlocation(){
    let target =searchbar.value;
    fetchresult(target);
}

fetchresult(target);

function getdayname(number){
    switch(number){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
            
    }
}
