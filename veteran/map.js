var bing_key = "dummy";
var map = null;

      function GetMap()
      {  

         map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {credentials: bing_key});

      }
      function SetLoc (lat, long){

        map.setView({center:new Microsoft.Maps.Location(lat, long)});

      }

      function SetLocation()
      {
         // Parse the input string
         var latLongArray = (document.getElementById("txtlatlong").value).split(",");

         // Retrieve the latitude and longitude values- normalize the longitude value
         var latVal = parseInt(latLongArray[0]);
         var longVal = Microsoft.Maps.Location.normalizeLongitude(parseInt(latLongArray[1]));

         // Set the map center
         // 17 = really really close
          Microsoft.Maps.registerModule("SLStreetsideModule", "scripts/SLStreetsideModule.js", { styleURLs: ["styles/SLStreetsideModule.css"] });
            Microsoft.Maps.loadModule("SLStreetsideModule", { callback: function () {
                slMap = new SLStreetsideModule(map);
            } 
            });
         map.setView({center:new Microsoft.Maps.Location(latVal, longVal),zoom: 8 });

      }