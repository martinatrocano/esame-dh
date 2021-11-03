// Basilica di San Giacomo Maggiore
var basilica = {
    lat: 44.49572857712573,                     // latitudine luogo
    long: 11.34921856515586,                    // longitudine luogo
    place: "Basilica di San Giacomo Maggiore",  // nome luogo
    description: "Mezzaratta Fresco"            // html di descrizione
}

// Pinacoteca Nazionale
var pinacoteca = {
    lat: 44.497825462979144, 
    long: 11.353533252183288,
    place: "Pinacoteca Nazionale",
    description: "<a href='photoarchive#saint_george'> Saint George and the Dragon, Vitale da Bologna </a>" 
}

var mapCenter = {
    lat: 44.496619308889464,                // latitudine centro di Bologna
    long: 11.351592316494536,               // longitudine centro di Bologna
}

// codice da https://bootstrapious.com/p/google-maps-and-bootstrap-tutorial
$(function () {

    function initMap() {
        
        var location = new google.maps.LatLng(mapCenter.lat, mapCenter.long);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 17,
            tilt: 45,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'immagini/marker.png';
            
        // marker 1
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(basilica.lat, basilica.long),
            map: map,
            icon: markerImage
        });

        var contentString = 
        `<div class="info-window">
            <h3>${basilica.place}</h3>
            <div class="info-content">
                <p>${basilica.description}</p>
            </div>
        </div>`;

        var infowindow1 = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow1.open(map, marker);
        });

        // marker 2
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(pinacoteca.lat, pinacoteca.long),
            map: map,
            icon: markerImage
        });

        var contentString = 
        `<div class="info-window">
            <h3>${pinacoteca.place}</h3>
            <div class="info-content">
                <p>${pinacoteca.description}</p>
            </div>
        </div>`;

        var infowindow2 = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow2.open(map, marker);
        });


        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];
        map.set('styles', styles);
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});