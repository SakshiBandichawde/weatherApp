const apikey="a81356b3488f91d87f7ecf33414e44cc";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar=document.querySelector(".searchBar input");
const searchBtn=document.querySelector(".searchBar button");
const wImage=document.querySelector(".wImg");
async function checkWeather(cityName){
    const response=await fetch(apiurl+cityName+`&appid=${apikey}`);

    if(response.status==404){
       document.querySelector(".error").style.display="block";
       document.querySelector(".weather").style.display="none";
    }
    else{

        var data=await response.json();

    document.querySelector(".cityName").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";


    if(data.weather[0].main=="Clouds"){
        wImage.src="assets/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        wImage.src="assets/sunny.png"
    }
    else if(data.weather[0].main=="Rain"){
        wImage.src="assets/rain.jpg"
    }
    else if(data.weather[0].main=="Drizzle"){
        wImage.src="assets/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        wImage.src="assets/mist.png"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";


    }


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBar.value);

})
