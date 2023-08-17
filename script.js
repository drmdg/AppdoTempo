const img = document.querySelector('img');
    fetch('https://api.weatherapi.com/v1/current.json?key=b898549f23684939bed151256231708&q=sao+paulo', {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
      });

    let btn = document.getElementById('submit');
    let search = document.getElementById('search');

function atualiza(){
    try{
        fetch(`https://api.weatherapi.com/v1/current.json?key=b898549f23684939bed151256231708&q=${search.value}`, {mode: 'cors'})
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          console.log(response);
          let location = document.getElementById('location');
          location.innerHTML=`${response.location.name}, ${response.location.region}, ${response.location.country}`;
          
          let aux = document.getElementsByClassName('p1');
          aux[0].innerHTML=` <div>Condição: ${response.current.condition.text}</div>

                            <div>temperatura: ${response.current.temp_c}C</div>

                            <div>sensação térmica: ${response.current.feelslike_c}</div>` ;
        
           aux[1].innerHTML=`<div>Umidade: ${response.current.humidity} %</div>
                            <div>UV: ${response.current.uv}</div>
                            <div>Velocidade do vento: ${response.current.wind_kph} KM/H</div>
                            <div>Direção do vento: ${response.current.wind_dir}</div>`;


        })

      }catch(error){
        alert("Houve um erro.");
      }     
}


    btn.addEventListener('click',atualiza);
    

