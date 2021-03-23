function rastrear(posicao) {
    let msg = 'Eu sei aonde você está!!\n\n';
    msg += 'lat: ' + posicao.coords.latitude + ', ';
    msg += 'long: ' + posicao.coords.longitude;
    window.alert(msg);
  }

  let map;
function showMap(position) {
  const coords = position.coords;
  const mapOptions = {
    zoom: 12,
    center: { lat: coords.latitude, lng: coords.longitude },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  const mapDiv = document.getElementById('gmaps-example');
  map = new google.maps.Map(mapDiv, mapOptions);
}

window.addEventListener('load', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap);
  }
});

function addMarker(map, latlong, title, content) {
    const markerOptions = {
      position: latlong,
      map: map,
      title: title,
      clickable: true
    };
    new google.maps.Marker(markerOptions);
  }
