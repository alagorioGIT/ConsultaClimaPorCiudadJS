//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//key: API KEY
const urlBase='https://api.openweathermap.org/data/2.5/weather'
let API_KEY='OPENWEATHERMAP_API_KEY'
//devuelve en grados kelvin
const diffKelvin=273.15
const schBtn=document.getElementById('searchButton')

schBtn.addEventListener('click', ()=>{
    const city=document.getElementById('cityInput').value;
    if(city){
        fetchWeather(city)
    }else{
        alert('Ingrese ciudad valida')
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lag=es`)
    .then(data=>data.json())
    .then(data=>showWeatherData(data))
    .then(data=>console.log(data))

}

function showWeatherData(data){
    const divRes=document.getElementById('res')
    divRes.innerHTML=''
    const cityName=data.name;
    const countryID=data.sys.country;
    const temp=data.main.temp -diffKelvin;
    const humidity=data.main.humidity;
    const description=data.weather[0].description;
    const icon=data.weather[0].icon;

    const cityInfo=document.createElement('h2')
    cityInfo.textContent=`${cityName} - ${countryID}`
   
    const tempInfo=document.createElement('p')
    tempInfo.textContent=`La tempertura es: ${Math.floor(temp)}°C`
    
    const humedadInfo=document.createElement('p')
    humedadInfo.textContent=`La Humedad es del ${humidity}%`
    
    const iconInfo=document.createElement('img')
    iconInfo.src=`https://openweathermap.org/img/wn/${icon}@2x.png`//https://openweathermap.org/img/wn/10d@2x.png

    const descriptionInfo=document.createElement('p')
    descriptionInfo.textContent=`La desccripcion meterologica es ${description}`

    divRes.appendChild(cityInfo)
    divRes.appendChild(tempInfo)
    divRes.appendChild(humedadInfo)
    divRes.appendChild(iconInfo)
    divRes.appendChild(descriptionInfo)

}