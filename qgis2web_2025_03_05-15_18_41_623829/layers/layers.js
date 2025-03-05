var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Survey_1 = new ol.format.GeoJSON();
var features_Survey_1 = format_Survey_1.readFeatures(json_Survey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Survey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey_1.addFeatures(features_Survey_1);
var lyr_Survey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Survey_1, 
                style: style_Survey_1,
                popuplayertitle: 'Survey',
                interactive: true,
                title: 'Survey'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Survey_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Survey_1];
lyr_Survey_1.set('fieldAliases', {'fid': 'fid', 'date': 'date', 'notes': 'notes', 'photo': 'photo', 'Bewertung': 'Bewertung', 'Art': 'Art', });
lyr_Survey_1.set('fieldImages', {'fid': 'Hidden', 'date': 'DateTime', 'notes': 'TextEdit', 'photo': 'ExternalResource', 'Bewertung': 'Range', 'Art': 'TextEdit', });
lyr_Survey_1.set('fieldLabels', {'date': 'no label', 'notes': 'no label', 'photo': 'no label', 'Bewertung': 'no label', 'Art': 'no label', });
lyr_Survey_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});