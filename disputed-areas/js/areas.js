
mapboxgl.accessToken=PUBLIC_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: STYLESHEET
});


map.on('load', function(){
    map.on('mousemove', function(e){
        var areas = map.queryRenderedFeatures(e.point, {
            layers:['disputedareas']
        });
        
        if (areas.length > 0) {
            document.getElementById('pd').innerHTML='<h3><strong>' + areas[0].properties.NAME_SORT +
                '</strong></h3><p><strong>Rank: ' + areas[0].properties.POP_RANK + '</strong></p>';
        } else {
            document.getElementById('pd').innerHTML = '<h2>Hover over a state!</h2>';
        }
    })

    map.getCanvas().style.cursor= 'default';
    //map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);
});
