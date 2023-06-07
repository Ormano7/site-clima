

const key = "05d1fbe7ddf610e1c517df3e64f34db9"

function showInformation (dados) {
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp") .innerHTML = Math.floor(dados.main.temp) +"ºC"
    document.querySelector(".texto-previsao") .innerHTML = dados.weather[0].description
    document.querySelector(".umidade") .innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function searchCity (city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( answer => answer.json())
    
    showInformation(dados)
}

function buttonclick () {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}