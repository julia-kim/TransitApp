var map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
    zoom: 15,
    scrollwheel: false,
  })

  var bus = { url: "/bus-marker.png", scaledSize: new google.maps.Size(50, 50) }
  var person = { url: "/person-marker.png", scaledSize: new google.maps.Size(50, 50) }

  for (i = 0; i < busLocations.length; i++) {
    let marker = new google.maps.Marker({
      position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
      map: map,
      icon: bus,
    })

    let busNumberContentString = "<h2>Bus No. " + busLocations[i].VEHICLE + "</h2>"

    let infowindow = new google.maps.InfoWindow({
      content: busNumberContentString,
    })

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker)
    })
  }
  /*	let personMarker = new google.maps.Marker({
		position: centerCoords,
		map: map,
		icon: person,
		animation: google.maps.Animation.BOUNCE
		});*/
}
