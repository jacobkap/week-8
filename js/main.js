var markers = [];
makeMap = function(data) {
   _.map(data, function(data) {



    markersTemp = new L.marker([data.latitude, data.longitude], {icon: parks_icon});
    markers.push(markersTemp);

    markersTemp.addTo(map).bindPopup("Name: " + data.Name + "<br>" +
                                     "Yearly Visitors: " + data.popularity + "<br>" +
                                     "<img src= https://" + data.image + " \>" + "<br>" +
                                     "Description: " + data.description, customOptions);

});
};

removeMarkers = function() {
for(i = 0; i < markers.length; i++) {
    map.removeLayer(markers[i]);
    }
};


mapper = function(data, view) {
  removeMarkers();
  makeMap(data);
};

mapper(data);
