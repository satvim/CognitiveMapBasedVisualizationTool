//function to Set Pitch and Fly to Map Locations
function mapLocate(location) {
    map.setPitch(MAP_LOCATIONS[location].pitch);
    map.flyTo(MAP_LOCATIONS[location]);
    document.getElementById('pd').innerHTML='<h3><strong>' + MAP_LOCATIONS[location] + '</strong></h3>';
    var areas = map.queryRenderedFeatures(location.point,{
        layers:['disputedareas']
    });
};