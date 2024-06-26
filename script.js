document.getElementById("get-data").addEventListener("click", getData);

async function getData() {
    const response = await fetch("https://api.sunrise-sunset.org/json?lat=47.6062&lng=-122.3321&date=today");
    const data = await response.json();
    console.log(data.results);
    let dataOutput = document.getElementById("data-output");
    dataOutput.innerHTML = data.results.sunset;
    document.getElementById("astronomical_twilight_begin").innerHTML = data.results.astronomical_twilight_begin;
    document.getElementById("astronomical_twilight_end").innerHTML = data.results.astronomical_twilight_end;
    document.getElementById("civil_twilight_begin").innerHTML = data.results.civil_twilight_begin;
    document.getElementById("civil_twilight_end").innerHTML = data.results.civil_twilight_end;
    document.getElementById("day_length").innerHTML = data.results.day_length;
    document.getElementById("nautical_twilight_begin").innerHTML = data.results.nautical_twilight_begin;
    document.getElementById("nautical_twilight_end").innerHTML = data.results.nautical_twilight_end;
    document.getElementById("solar_noon").innerHTML = data.results.solar_noon;
    document.getElementById("sunrise").innerHTML = data.results.sunrise;
    document.getElementById("sunset").innerHTML = data.results.sunset;
}
