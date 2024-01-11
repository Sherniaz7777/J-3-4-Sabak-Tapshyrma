const input=document.querySelector('input')
const root=document.querySelector('.root')


const url='https://api.openweathermap.org/data/2.5/weather?q='
const apiKey='f631ea87daddf959f8d7a12c30009e4c'
const imgUrl='https://openweathermap.org/img/wn/'

async function getWeather(name) {
    try {
       const res=await fetch(url+name+'&appid='+apiKey)
    const data=await res.json()
    console.log(data);
    ShowWeather(data) 
    } catch (error) {
        root.innerHTML=`City not found`

    }
    
}
// getWeather()

input.onchange=()=>{
    getWeather(input.value)
}

function ShowWeather(obj) {
    root.innerHTML=''
    root.innerHTML=`
    <div class="weather">
          <h1>${obj.name}</h1>
          <h2>${Math.floor(obj.main.temp-273.15)} °C</h2>
          <p>${obj.weather[0].main}</p>
          <img src='${imgUrl+obj.weather[0].icon}@4x.png' />
          <div class="wind-main">
          <h3>Humidity: ${obj.main.humidity}</h3>
          <h4>Wind: ${obj.wind.speed}</h4>
          </div>
    </div>
    
    `
    //weather
    if (obj.weather[0].main === 'Snow') {
        document.body.style.backgroundImage= "url('/img/6c3a0e6a-0b5b-44b6-90bc-1074a7b7644e.webp')";
    } else if (obj.weather[0].main === 'Smoke') {
        document.body.style.backgroundImage= "url(/img/176.webp)";
    }
    else if (obj.weather[0].main === 'Haze') {
        document.body.style.backgroundImage= "url(https://us.images.westend61.de/0000881371pw/scenic-view-of-field-during-foggy-weather-CAVF24249.jpg)";
    }
    else if (obj.weather[0].main === 'Rain') {
        document.body.style.backgroundImage= "url(https://i.tribune.com.pk/media/images/2230116-ndmaissuesadvisoryforupcomingthunderstormsrains-1590651429/2230116-ndmaissuesadvisoryforupcomingthunderstormsrains-1590651429.png)";
    }
    else if (obj.weather[0].main === 'Thunderstorm') {
        document.body.style.backgroundImage= "url(https://grist.org/wp-content/uploads/2016/06/thunder-lightning-storm.jpg)";
    }
    else if (obj.weather[0].main === 'Clear') {
        document.body.style.backgroundImage= "url(https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.9997&x=0&y=0&width=1200&height=675)";
    }
    else if (obj.weather[0].main === 'Clouds') {
        document.body.style.backgroundImage= "url(https://sitn.hms.harvard.edu/wp-content/uploads/2023/08/sky-6966721_1280.jpeg)";
    }
    if (obj.weather[0].main === 'Mist') {
        document.body.style.backgroundImage = "url(https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png)";
    }
    
}




