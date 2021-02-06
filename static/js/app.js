//globals
var onSaleData;
var offSaleData;
var neighbourhoods;

// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
    center: MINNEAPOLIS_CENTER_COORDS,
    zoom: STARTING_ZOOM
  });
  

  getData();

  // Create Map

  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  //https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#8.07/44.788/-93.333
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: MAPBOX_API_KEY
  }).addTo(myMap);

  //adding on sale markers

  //adding off sale markers

  //bike station markers
// Loop through the top_50 array and create one marker for each station
// and then add it to the map using the addTo method
var marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);


  

  function getData()
  {
    //get onsale data
    d3.json(BREWERY_ONSALE_QUERY_URL).then(function(data) {
      onSaleData = data;
      
    });

    //get ofsale data
    d3.json(BREWERY_OFSALE_QUERY_URL).then(function(data) {
      offSaleData = data;
    });

    //get neighbourhood layer
    d3.json(NEIGHBOURHOODS_QUERY_URL).then(function(data){
      neighbourhoods = data;
    });
  }

