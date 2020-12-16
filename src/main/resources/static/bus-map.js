var map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
    zoom: 15,
    scrollwheel: false,
  })

  var image = { url: "/bus_marker.png", scaledSize: new google.maps.Size(50, 50) }

  for (i = 0; i < busLocations.length; i++) {
    var marker = new google.maps.Marker({
      position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
      map: map,
      icon: image,
    })
  }
}
