
let button = document.getElementById(btn)
btn.onclick = function(){
let formvalue = document.getElementById('formfield').Value
console.log(formvalue)
}
 
let key="c41dfdfeded3feae0639e78112062f9c"
let city="tamale"
let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


fetch(api)
    .then((Response)=>Response.json())
    .then((data)=>{
        console.log(data)
        let city=document.getElementById('city-name')
        city.innerHTML = data.name
        let countryName = document.getElementById('co')
        countryName.innerHTML=data.sys.country
        let tem = document.getElementById('tempreture')
        tem.innerHTML = data.main.temp
        let feels_like = document.getElementById('feels')
        feels_like.innerHTML=data.main.feels_like
        let humidity = document.getElementById('humidity')
        humidity.innerHTML=data.main.humidity
        let windspeed = document.getElementById('windspeed')
        windspeed.innerHTML= data.main.windspeed
        let max_temp = document.getElementById('max')
        max_temp.innerHTML = data.main.temp_max
        let = Presure = document.getElementById('presure')
        presure.innerHTML = data.main.presure
    })
    .catch((error)=console.log(error))