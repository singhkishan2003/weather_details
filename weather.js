// http://api.weatherapi.com/v1/current.json?key=61c3bbbf914a48afb5994235242104&q=mumbai&aqi=no



const temperature=document.querySelector(".tempchange");
const locationtime=document.querySelector(".time");
const data=document.querySelector(".data");
const weather=document.querySelector(".wheather");
const form=document.querySelector("form");
const searchbar=document.querySelector("#search-area");


form.addEventListener("submit",function(event){
    event.preventDefault();
    searchforlocation();
});


let target='satna';

const fetchresult = async (targetlocation)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=61c3bbbf914a48afb5994235242104&q=${targetlocation}&aqi=no`;

    const res=await fetch(url);

    const data=await res.json();

    let temp=data.current.temp_c;
    let location_name=data.location.name;
    let time=data.location.localtime;
    let condition=data.current.condition.text;

    updatedetails(temp,location_name,time,condition);
}

function updatedetails(temp,location_name,time,condition){
    temperature.innertext=temp;
    locationtime.innertext=time;
    weather.innertext=condition;
    data.innertext=location_name;
}


function searchforlocation(){
    let target =searchbar.value;
    fetchresult(target);
}
fetchresult(target);