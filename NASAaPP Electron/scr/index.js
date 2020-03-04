const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const pos = document.getElementById('pos')

pos.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, 'Nasa.html')
  let win = new BrowserWindow({
    icon: "drawable/nasa.jpg",
    title: "NasaApp",
    hasShadow: true,
    center: true,
    maximizable: true,
    resizable: true,
    height: 700,
    width: 1100,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: "#000"
   })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})


  $(".boton").click(function(){
      var sol = $('input[name="sol"]').val();
      var cam = $('input[name="Cam"]').val();
      var tabla = $('.tabla');

      function FotoRover() {

          return $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {
              api_key: "ksjse8tuo0X6x2qgkkMgGDMZ4oB5TcRkY8eUZfXA",
              page: 1,
              camera: cam,
              sol: sol,
            },
            success: function(respuesta){
              tabla.src = respuesta.photos.img_src;
            }
            });
            }

      });


        function WeatherMars (){
          return  $.ajax({
              method: "GET",
              url: "https: //api.nasa.gov/insight_weather",
              data: {
                api_key: "ksjse8tuo0X6x2qgkkMgGDMZ4oB5TcRkY8eUZfXA",
                feedtype: "json",
                version: 1.0
              },
              success: function(respuesta){
                console.log(respuesta);
              },
              })
              }
