// This is a JavaScript file

window.onload = function(){
    const geoloc = document.querySelector('#geoloc');
    const networking = document.querySelector('#networking');
    const notificacao = document.querySelector('#notificacao');
    const qrcode = document.querySelector('#qrcode');
    geoloc.addEventListener('click', function(){
        window.location.href = 'geolocalizacao.html';
    });

    networking.addEventListener('click', function(){
    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }
        checkConnection();
    });

    qrcode.addEventListener('click',function(){
        cordova.plugins.barcodeScanner.scan(
      function (result) {
          function retorno(){}
          document.querySelector("#resultado").textContent = result.text;

          if(result.cancelled){
            navigator.notification.alert("Scan Cancelado pelo usuário!");
          }else{
            navigator.notification.alert("Resultado: "+result.text,retorno,"Scan Concluído","SIM");
          } 
         
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : false, // iOS and Android
          showTorchButton : false, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Coloque um QrCode na area de scan", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
    });

    notificacao.addEventListener('click', function(){
    function verifica(buttonIndex){
        if(buttonIndex == 1){
            navigator.notification.alert("Escolheu a opção B");
        }else{
            navigator.notification.alert("Escolheu a Opção A");
        }
    }

    navigator.notification.confirm("Escolha A ou B",verifica,"Opções de Escolha",['B','A']);
    });

}   