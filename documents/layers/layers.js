ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:26191").setExtent([499728.046573, 550867.076101, 505183.122837, 554023.932023]);
var wms_layers = [];

var format_reference_0 = new ol.format.GeoJSON();
var features_reference_0 = format_reference_0.readFeatures(json_reference_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_reference_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reference_0.addFeatures(features_reference_0);
var lyr_reference_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reference_0, 
                style: style_reference_0,
                popuplayertitle: 'reference',
                interactive: true,
    title: 'reference<br />\
    <img src="styles/legend/reference_0_0.png" /> 1<br />\
    <img src="styles/legend/reference_0_1.png" /> 2<br />\
    <img src="styles/legend/reference_0_2.png" /> 3<br />\
    <img src="styles/legend/reference_0_3.png" /> 4<br />\
    <img src="styles/legend/reference_0_4.png" /> 5<br />\
    <img src="styles/legend/reference_0_5.png" /> 7<br />\
    <img src="styles/legend/reference_0_6.png" /> 8<br />\
    <img src="styles/legend/reference_0_7.png" /> 9<br />\
    <img src="styles/legend/reference_0_8.png" /> 10<br />\
    <img src="styles/legend/reference_0_9.png" /> 11<br />\
    <img src="styles/legend/reference_0_10.png" /> 12<br />\
    <img src="styles/legend/reference_0_11.png" /> 13<br />\
    <img src="styles/legend/reference_0_12.png" /> 14<br />\
    <img src="styles/legend/reference_0_13.png" /> 15<br />\
    <img src="styles/legend/reference_0_14.png" /> 16<br />\
    <img src="styles/legend/reference_0_15.png" /> 17<br />\
    <img src="styles/legend/reference_0_16.png" /> 18<br />\
    <img src="styles/legend/reference_0_17.png" /> 19<br />\
    <img src="styles/legend/reference_0_18.png" /> 20<br />\
    <img src="styles/legend/reference_0_19.png" /> 21<br />\
    <img src="styles/legend/reference_0_20.png" /> 22<br />\
    <img src="styles/legend/reference_0_21.png" /> 23<br />\
    <img src="styles/legend/reference_0_22.png" /> 24<br />\
    <img src="styles/legend/reference_0_23.png" /> 25<br />\
    <img src="styles/legend/reference_0_24.png" /> 26<br />\
    <img src="styles/legend/reference_0_25.png" /> 27<br />\
    <img src="styles/legend/reference_0_26.png" /> <br />'
        });

lyr_reference_0.setVisible(true);
var layersList = [lyr_reference_0];
lyr_reference_0.set('fieldAliases', {'id': 'id', 'reference': 'reference', });
lyr_reference_0.set('fieldImages', {'id': 'TextEdit', 'reference': 'TextEdit', });
lyr_reference_0.set('fieldLabels', {'id': 'no label', 'reference': 'no label', });
lyr_reference_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});