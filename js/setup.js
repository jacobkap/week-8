var map = L.map('map', {
  center: [38.553746, -97.009345],
  zoom: 4
});


var custom = L.tileLayer('https://api.mapbox.com/styles/v1/jkkaplan/cizutwown001d2ss1hcixcpj0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamtrYXBsYW4iLCJhIjoiY2lnOXAyaWZyMHNjZ3V5bHg4YTZieDczaSJ9.vSjaF4o2xaDFhNAv9Z2y7A', {

  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var parks_icon = L.icon({
  iconUrl: 'parks.svg',
  iconSize: [30, 40], // size of the icon
  popupAnchor: [0,0]
  });



var customOptions =
{
  'maxWidth': '400',
  'className' : 'custom'
};
