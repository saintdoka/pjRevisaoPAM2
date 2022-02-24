// This is a JavaScript file

// This is a JavaScript file

window.onload = function(){
    const geoloc = document.querySelector('#geoloc');

    geoloc.addEventListener('click', function(){
      window.location.href = 'index.html';
    });

    function mapa(lat,long){
     L.mapquest.key = 'kPA2aDAr7pbsVkkGqVW7iJcAEh1wy2TZ';
        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        L.marker([lat, long], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup('Sua Localização').addTo(map);

        map.addControl(L.mapquest.control());
  }
  
  document.querySelector('#buscar').addEventListener('click',function(){    
    
    var onSuccess = function(position) {
      mapa(position.coords.latitude,position.coords.longitude);
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

  });
}   