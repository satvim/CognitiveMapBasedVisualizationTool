
mapboxgl.accessToken=PUBLIC_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: STYLESHEET
});

map.on('load', function(){
    var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
    var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }

    map.on('mousemove', function(e){
        var areas = map.queryRenderedFeatures(e.point, {
            layers:['disputedareas']
        });
        
        if (areas.length > 0) {
            document.getElementById('pd').innerHTML='<h3><strong>' + areas[0].properties.NAME_SORT +
                '</strong></h3><p><strong>' + areas[0].properties.POP_RANK + '</strong><em></em></p>';
        } else {
            document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
        }
    })

    map.getCanvas().style.curson = 'default';
    //map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);
});