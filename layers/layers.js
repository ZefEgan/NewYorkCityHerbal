var wms_layers = [];

var format_Boroughs_0 = new ol.format.GeoJSON();
var features_Boroughs_0 = format_Boroughs_0.readFeatures(json_Boroughs_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boroughs_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boroughs_0.addFeatures(features_Boroughs_0);
var lyr_Boroughs_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boroughs_0, 
                style: style_Boroughs_0,
                popuplayertitle: 'Boroughs',
                interactive: false,
                title: '<img src="styles/legend/Boroughs_0.png" /> Boroughs'
            });
var format_Cemeteries_1 = new ol.format.GeoJSON();
var features_Cemeteries_1 = format_Cemeteries_1.readFeatures(json_Cemeteries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cemeteries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cemeteries_1.addFeatures(features_Cemeteries_1);
var lyr_Cemeteries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cemeteries_1, 
                style: style_Cemeteries_1,
                popuplayertitle: 'Cemeteries',
                interactive: true,
                title: '<img src="styles/legend/Cemeteries_1.png" /> Cemeteries'
            });
var format_ProspectPark_2 = new ol.format.GeoJSON();
var features_ProspectPark_2 = format_ProspectPark_2.readFeatures(json_ProspectPark_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProspectPark_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProspectPark_2.addFeatures(features_ProspectPark_2);
var lyr_ProspectPark_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProspectPark_2, 
                style: style_ProspectPark_2,
                popuplayertitle: 'Prospect Park',
                interactive: false,
                title: '<img src="styles/legend/ProspectPark_2.png" /> Prospect Park'
            });
var format_Parks_3 = new ol.format.GeoJSON();
var features_Parks_3 = format_Parks_3.readFeatures(json_Parks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_3.addFeatures(features_Parks_3);
var lyr_Parks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_3, 
                style: style_Parks_3,
                popuplayertitle: 'Parks',
                interactive: true,
                title: '<img src="styles/legend/Parks_3.png" /> Parks'
            });
var format_MajorRoads_4 = new ol.format.GeoJSON();
var features_MajorRoads_4 = format_MajorRoads_4.readFeatures(json_MajorRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_4.addFeatures(features_MajorRoads_4);
var lyr_MajorRoads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRoads_4, 
                style: style_MajorRoads_4,
                popuplayertitle: 'Major Roads',
                interactive: false,
                title: '<img src="styles/legend/MajorRoads_4.png" /> Major Roads'
            });
var format_WaterFeature_5 = new ol.format.GeoJSON();
var features_WaterFeature_5 = format_WaterFeature_5.readFeatures(json_WaterFeature_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterFeature_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterFeature_5.addFeatures(features_WaterFeature_5);
var lyr_WaterFeature_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterFeature_5, 
                style: style_WaterFeature_5,
                popuplayertitle: 'Water Feature',
                interactive: false,
                title: '<img src="styles/legend/WaterFeature_5.png" /> Water Feature'
            });
var format_IllustratedHerbal_6 = new ol.format.GeoJSON();
var features_IllustratedHerbal_6 = format_IllustratedHerbal_6.readFeatures(json_IllustratedHerbal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IllustratedHerbal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IllustratedHerbal_6.addFeatures(features_IllustratedHerbal_6);
var lyr_IllustratedHerbal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IllustratedHerbal_6, 
                style: style_IllustratedHerbal_6,
                popuplayertitle: 'Illustrated Herbal',
                interactive: true,
                title: '<img src="styles/legend/IllustratedHerbal_6.png" /> Illustrated Herbal'
            });

lyr_Boroughs_0.setVisible(true);lyr_Cemeteries_1.setVisible(true);lyr_ProspectPark_2.setVisible(true);lyr_Parks_3.setVisible(true);lyr_MajorRoads_4.setVisible(true);lyr_WaterFeature_5.setVisible(true);lyr_IllustratedHerbal_6.setVisible(true);
var layersList = [lyr_Boroughs_0,lyr_Cemeteries_1,lyr_ProspectPark_2,lyr_Parks_3,lyr_MajorRoads_4,lyr_WaterFeature_5,lyr_IllustratedHerbal_6];
lyr_Boroughs_0.set('fieldAliases', {'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Cemeteries_1.set('fieldAliases', {'borocode': 'borocode', 'boroname': 'boroname', 'countyfips': 'countyfips', 'nta2020': 'nta2020', 'ntaname': 'ntaname', 'ntaabbrev': 'ntaabbrev', 'ntatype': 'ntatype', 'cdta2020': 'cdta2020', 'cdtaname': 'cdtaname', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_ProspectPark_2.set('fieldAliases', {'date_acqui': 'date_acqui', 'time_acqui': 'time_acqui', 'acres': 'acres', 'address': 'address', 'borough': 'borough', 'class': 'class', 'communityb': 'communityb', 'councildis': 'councildis', 'department': 'department', 'eapply': 'eapply', 'gisobjid': 'gisobjid', 'gispropnum': 'gispropnum', 'globalid': 'globalid', 'jurisdicti': 'jurisdicti', 'location': 'location', 'mapped': 'mapped', 'name311': 'name311', 'nys_assemb': 'nys_assemb', 'nys_senate': 'nys_senate', 'objectid': 'objectid', 'omppropid': 'omppropid', 'parentid': 'parentid', 'permit': 'permit', 'permitdist': 'permitdist', 'permitpare': 'permitpare', 'pip_ratabl': 'pip_ratabl', 'precinct': 'precinct', 'retired': 'retired', 'signname': 'signname', 'subcategor': 'subcategor', 'typecatego': 'typecatego', 'us_congres': 'us_congres', 'waterfront': 'waterfront', 'zipcode': 'zipcode', });
lyr_Parks_3.set('fieldAliases', {'borough': 'borough', 'communityb': 'communityb', 'councildis': 'councildis', 'gispropnum': 'gispropnum', 'parkdistri': 'parkdistri', 'precinct': 'precinct', 'propertyna': 'propertyna', 'zipcode': 'zipcode', });
lyr_MajorRoads_4.set('fieldAliases', {'Borough': 'Borough', 'Boro_Code': 'Boro_Code', 'Route_Name': 'Route_Name', 'Route_Type': 'Route_Type', 'Route_Sub': 'Route_Sub', 'Route_Stat': 'Route_Stat', });
lyr_WaterFeature_5.set('fieldAliases', {'gispropnum': 'gispropnum', 'objectid': 'objectid', 'department': 'department', 'parentid': 'parentid', 'communityb': 'communityb', 'councildis': 'councildis', 'precinct': 'precinct', 'zipcode': 'zipcode', 'borough': 'borough', 'name': 'name', 'wf_type': 'wf_type', 'featuresta': 'featuresta', });
lyr_IllustratedHerbal_6.set('fieldAliases', {'observed_o': 'observed_o', 'url': 'url', 'descriptio': 'descriptio', 'latitude': 'latitude', 'longitude': 'longitude', 'scientific': 'scientific', 'common_nam': 'common_nam', 'BoroName': 'BoroName', 'propertyna': 'propertyna', 'botan_illu': 'botan_illu', 'layer': 'layer', 'iNat': 'iNat', });
lyr_Boroughs_0.set('fieldImages', {'BoroCode': 'Range', 'BoroName': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Cemeteries_1.set('fieldImages', {'borocode': 'TextEdit', 'boroname': 'TextEdit', 'countyfips': 'TextEdit', 'nta2020': 'TextEdit', 'ntaname': 'TextEdit', 'ntaabbrev': 'TextEdit', 'ntatype': 'TextEdit', 'cdta2020': 'TextEdit', 'cdtaname': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_ProspectPark_2.set('fieldImages', {'date_acqui': 'DateTime', 'time_acqui': 'TextEdit', 'acres': 'TextEdit', 'address': 'TextEdit', 'borough': 'TextEdit', 'class': 'TextEdit', 'communityb': 'TextEdit', 'councildis': 'TextEdit', 'department': 'TextEdit', 'eapply': 'TextEdit', 'gisobjid': 'TextEdit', 'gispropnum': 'TextEdit', 'globalid': 'TextEdit', 'jurisdicti': 'TextEdit', 'location': 'TextEdit', 'mapped': 'TextEdit', 'name311': 'TextEdit', 'nys_assemb': 'TextEdit', 'nys_senate': 'TextEdit', 'objectid': 'TextEdit', 'omppropid': 'TextEdit', 'parentid': 'TextEdit', 'permit': 'TextEdit', 'permitdist': 'TextEdit', 'permitpare': 'TextEdit', 'pip_ratabl': 'TextEdit', 'precinct': 'TextEdit', 'retired': 'TextEdit', 'signname': 'TextEdit', 'subcategor': 'TextEdit', 'typecatego': 'TextEdit', 'us_congres': 'TextEdit', 'waterfront': 'TextEdit', 'zipcode': 'TextEdit', });
lyr_Parks_3.set('fieldImages', {'borough': 'TextEdit', 'communityb': 'TextEdit', 'councildis': 'TextEdit', 'gispropnum': 'TextEdit', 'parkdistri': 'TextEdit', 'precinct': 'TextEdit', 'propertyna': 'TextEdit', 'zipcode': 'TextEdit', });
lyr_MajorRoads_4.set('fieldImages', {'Borough': 'TextEdit', 'Boro_Code': 'Range', 'Route_Name': 'TextEdit', 'Route_Type': 'TextEdit', 'Route_Sub': 'TextEdit', 'Route_Stat': 'TextEdit', });
lyr_WaterFeature_5.set('fieldImages', {'gispropnum': 'TextEdit', 'objectid': 'TextEdit', 'department': 'TextEdit', 'parentid': 'TextEdit', 'communityb': 'TextEdit', 'councildis': 'TextEdit', 'precinct': 'TextEdit', 'zipcode': 'TextEdit', 'borough': 'TextEdit', 'name': 'TextEdit', 'wf_type': 'TextEdit', 'featuresta': 'TextEdit', });
lyr_IllustratedHerbal_6.set('fieldImages', {'observed_o': 'DateTime', 'url': 'TextEdit', 'descriptio': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'scientific': 'TextEdit', 'common_nam': 'TextEdit', 'BoroName': 'TextEdit', 'propertyna': 'TextEdit', 'botan_illu': 'TextEdit', 'layer': 'TextEdit', 'iNat': '', });
lyr_Boroughs_0.set('fieldLabels', {'BoroCode': 'no label', 'BoroName': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Cemeteries_1.set('fieldLabels', {'borocode': 'hidden field', 'boroname': 'hidden field', 'countyfips': 'hidden field', 'nta2020': 'hidden field', 'ntaname': 'no label', 'ntaabbrev': 'hidden field', 'ntatype': 'hidden field', 'cdta2020': 'hidden field', 'cdtaname': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_ProspectPark_2.set('fieldLabels', {'date_acqui': 'no label', 'time_acqui': 'no label', 'acres': 'no label', 'address': 'no label', 'borough': 'no label', 'class': 'no label', 'communityb': 'no label', 'councildis': 'no label', 'department': 'no label', 'eapply': 'no label', 'gisobjid': 'no label', 'gispropnum': 'no label', 'globalid': 'no label', 'jurisdicti': 'no label', 'location': 'no label', 'mapped': 'no label', 'name311': 'no label', 'nys_assemb': 'no label', 'nys_senate': 'no label', 'objectid': 'no label', 'omppropid': 'no label', 'parentid': 'no label', 'permit': 'no label', 'permitdist': 'no label', 'permitpare': 'no label', 'pip_ratabl': 'no label', 'precinct': 'no label', 'retired': 'no label', 'signname': 'no label', 'subcategor': 'no label', 'typecatego': 'no label', 'us_congres': 'no label', 'waterfront': 'no label', 'zipcode': 'no label', });
lyr_Parks_3.set('fieldLabels', {'borough': 'hidden field', 'communityb': 'hidden field', 'councildis': 'hidden field', 'gispropnum': 'hidden field', 'parkdistri': 'hidden field', 'precinct': 'hidden field', 'propertyna': 'no label', 'zipcode': 'hidden field', });
lyr_MajorRoads_4.set('fieldLabels', {'Borough': 'no label', 'Boro_Code': 'no label', 'Route_Name': 'no label', 'Route_Type': 'no label', 'Route_Sub': 'no label', 'Route_Stat': 'no label', });
lyr_WaterFeature_5.set('fieldLabels', {'gispropnum': 'no label', 'objectid': 'no label', 'department': 'no label', 'parentid': 'no label', 'communityb': 'no label', 'councildis': 'no label', 'precinct': 'no label', 'zipcode': 'no label', 'borough': 'no label', 'name': 'no label', 'wf_type': 'no label', 'featuresta': 'no label', });
lyr_IllustratedHerbal_6.set('fieldLabels', {'observed_o': 'hidden field', 'url': 'hidden field', 'descriptio': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'scientific': 'hidden field', 'common_nam': 'hidden field', 'BoroName': 'hidden field', 'propertyna': 'hidden field', 'botan_illu': 'no label', 'layer': 'hidden field', 'iNat': 'no label', });
lyr_IllustratedHerbal_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});