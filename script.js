const img = document.querySelector('img');
    fetch('https://api.weatherapi.com/v1/current.json?key=b898549f23684939bed151256231708&q=london', {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
      });

     
