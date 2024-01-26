var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Conduit_2 = new ol.format.GeoJSON();
var features_Conduit_2 = format_Conduit_2.readFeatures(json_Conduit_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conduit_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conduit_2.addFeatures(features_Conduit_2);
var lyr_Conduit_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conduit_2, 
                style: style_Conduit_2,
                interactive: false,
                title: '<img src="styles/legend/Conduit_2.png" /> Conduit'
            });
var format_FiberEquipment_3 = new ol.format.GeoJSON();
var features_FiberEquipment_3 = format_FiberEquipment_3.readFeatures(json_FiberEquipment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiberEquipment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiberEquipment_3.addFeatures(features_FiberEquipment_3);
var lyr_FiberEquipment_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiberEquipment_3, 
                style: style_FiberEquipment_3,
                interactive: false,
                title: '<img src="styles/legend/FiberEquipment_3.png" /> Fiber Equipment'
            });
var format_Vault_4 = new ol.format.GeoJSON();
var features_Vault_4 = format_Vault_4.readFeatures(json_Vault_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vault_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vault_4.addFeatures(features_Vault_4);
var lyr_Vault_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vault_4, 
                style: style_Vault_4,
                interactive: false,
                title: '<img src="styles/legend/Vault_4.png" /> Vault'
            });
var format_FiberCable_5 = new ol.format.GeoJSON();
var features_FiberCable_5 = format_FiberCable_5.readFeatures(json_FiberCable_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FiberCable_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FiberCable_5.addFeatures(features_FiberCable_5);
var lyr_FiberCable_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FiberCable_5, 
                style: style_FiberCable_5,
                interactive: false,
                title: '<img src="styles/legend/FiberCable_5.png" /> Fiber Cable'
            });
var format_Closure_6 = new ol.format.GeoJSON();
var features_Closure_6 = format_Closure_6.readFeatures(json_Closure_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Closure_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Closure_6.addFeatures(features_Closure_6);
var lyr_Closure_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Closure_6, 
                style: style_Closure_6,
                interactive: false,
                title: '<img src="styles/legend/Closure_6.png" /> Closure'
            });
var format_MergedTierFiber_7 = new ol.format.GeoJSON();
var features_MergedTierFiber_7 = format_MergedTierFiber_7.readFeatures(json_MergedTierFiber_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MergedTierFiber_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergedTierFiber_7.addFeatures(features_MergedTierFiber_7);
var lyr_MergedTierFiber_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MergedTierFiber_7, 
                style: style_MergedTierFiber_7,
                interactive: false,
                title: '<img src="styles/legend/MergedTierFiber_7.png" /> Merged Tier Fiber'
            });
var format_Cabinet_8 = new ol.format.GeoJSON();
var features_Cabinet_8 = format_Cabinet_8.readFeatures(json_Cabinet_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabinet_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabinet_8.addFeatures(features_Cabinet_8);
var lyr_Cabinet_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabinet_8, 
                style: style_Cabinet_8,
                interactive: false,
                title: '<img src="styles/legend/Cabinet_8.png" /> Cabinet'
            });
var format_Backhaul_9 = new ol.format.GeoJSON();
var features_Backhaul_9 = format_Backhaul_9.readFeatures(json_Backhaul_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Backhaul_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Backhaul_9.addFeatures(features_Backhaul_9);
var lyr_Backhaul_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Backhaul_9, 
                style: style_Backhaul_9,
                interactive: false,
                title: '<img src="styles/legend/Backhaul_9.png" /> Backhaul'
            });
var format_BackhaulSplice_10 = new ol.format.GeoJSON();
var features_BackhaulSplice_10 = format_BackhaulSplice_10.readFeatures(json_BackhaulSplice_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BackhaulSplice_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BackhaulSplice_10.addFeatures(features_BackhaulSplice_10);
var lyr_BackhaulSplice_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BackhaulSplice_10, 
                style: style_BackhaulSplice_10,
                interactive: false,
                title: '<img src="styles/legend/BackhaulSplice_10.png" /> Backhaul Splice'
            });
var format_T4Fiber_11 = new ol.format.GeoJSON();
var features_T4Fiber_11 = format_T4Fiber_11.readFeatures(json_T4Fiber_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4Fiber_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4Fiber_11.addFeatures(features_T4Fiber_11);
var lyr_T4Fiber_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T4Fiber_11, 
                style: style_T4Fiber_11,
                interactive: false,
                title: '<img src="styles/legend/T4Fiber_11.png" /> T4 Fiber'
            });
var format_Boundary_12 = new ol.format.GeoJSON();
var features_Boundary_12 = format_Boundary_12.readFeatures(json_Boundary_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_12.addFeatures(features_Boundary_12);
var lyr_Boundary_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary_12, 
                style: style_Boundary_12,
                interactive: false,
                title: '<img src="styles/legend/Boundary_12.png" /> Boundary'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_Conduit_2.setVisible(false);lyr_FiberEquipment_3.setVisible(false);lyr_Vault_4.setVisible(false);lyr_FiberCable_5.setVisible(false);lyr_Closure_6.setVisible(false);lyr_MergedTierFiber_7.setVisible(false);lyr_Cabinet_8.setVisible(false);lyr_Backhaul_9.setVisible(false);lyr_BackhaulSplice_10.setVisible(false);lyr_T4Fiber_11.setVisible(false);lyr_Boundary_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Conduit_2,lyr_FiberEquipment_3,lyr_Vault_4,lyr_FiberCable_5,lyr_Closure_6,lyr_MergedTierFiber_7,lyr_Cabinet_8,lyr_Backhaul_9,lyr_BackhaulSplice_10,lyr_T4Fiber_11,lyr_Boundary_12];
lyr_Conduit_2.set('fieldAliases', {'DIAMETER': 'DIAMETER', 'LENGTH': 'LENGTH', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_FiberEquipment_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Size': 'Size', 'Tier': 'Tier', 'Type': 'Type', 'FondID': 'FondID', 'layer': 'layer', 'path': 'path', });
lyr_Vault_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ID2': 'ID2', 'Size': 'Size', 'Type': 'Type', 'Owner': 'Owner', 'FondID': 'FondID', 'Status': 'Status', 'BldReason': 'BldReason', 'Label': 'Label', 'layer': 'layer', 'path': 'path', });
lyr_FiberCable_5.set('fieldAliases', {'fid': 'fid', 'SIZE': 'SIZE', 'COUNT_': 'COUNT_', 'CABLEID': 'CABLEID', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'Id': 'Id', 'layer': 'layer', 'path': 'path', });
lyr_Closure_6.set('fieldAliases', {'fid': 'fid', 'FondID': 'FondID', 'Tier': 'Tier', 'Type': 'Type', 'Size': 'Size', 'Demand': 'Demand', 'Placement': 'Placement', 'Source': 'Source', 'OpticalLen': 'OpticalLen', 'IsReelEnd': 'IsReelEnd', 'id': 'id', 'Label': 'Label', 'layer': 'layer', 'path': 'path', 'GlobalID': 'GlobalID', });
lyr_MergedTierFiber_7.set('fieldAliases', {'fid': 'fid', 'FondID': 'FondID', 'Type': 'Type', 'Placement': 'Placement', 'StartID': 'StartID', 'EndID': 'EndID', 'Length': 'Length', 'Source': 'Source', 'Size': 'Size', 'RawFlow': 'RawFlow', 'OccReel': 'OccReel', 'LenFromSag': 'LenFromSag', 'LenFromSlk': 'LenFromSlk', 'LenFromPth': 'LenFromPth', 'LeadinLen': 'LeadinLen', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Cabinet_8.set('fieldAliases', {'fid': 'fid', 'FondID': 'FondID', 'Tier': 'Tier', 'Type': 'Type', 'Size': 'Size', 'Demand': 'Demand', 'Source': 'Source', 'OpticalLen': 'OpticalLen', 'IsReelEnd': 'IsReelEnd', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin_': 'begin_', 'end_': 'end_', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'GlobalID': 'GlobalID', });
lyr_Backhaul_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_BackhaulSplice_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'OLT\'s': 'OLT\'s', 'BH SPL #': 'BH SPL #', 'Boundaries': 'Boundaries', 'Label': 'Label', 'layer': 'layer', 'path': 'path', });
lyr_T4Fiber_11.set('fieldAliases', {'fid': 'fid', 'FondID': 'FondID', 'Type': 'Type', 'Placement': 'Placement', 'StartID': 'StartID', 'EndID': 'EndID', 'Length': 'Length', 'Source': 'Source', 'Size': 'Size', 'OccReel': 'OccReel', 'LenFromSag': 'LenFromSag', 'LenFromSlk': 'LenFromSlk', 'LenFromPth': 'LenFromPth', 'LeadinLen': 'LeadinLen', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Boundary_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'RN2': 'RN2', 'Color': 'Color', 'layer': 'layer', 'path': 'path', });
lyr_Conduit_2.set('fieldImages', {'DIAMETER': '', 'LENGTH': '', 'GlobalID': '', 'SHAPE_Leng': '', });
lyr_FiberEquipment_3.set('fieldImages', {'fid': '', 'id': '', 'Size': '', 'Tier': '', 'Type': '', 'FondID': '', 'layer': '', 'path': '', });
lyr_Vault_4.set('fieldImages', {'fid': '', 'id': '', 'ID2': '', 'Size': '', 'Type': '', 'Owner': '', 'FondID': '', 'Status': '', 'BldReason': '', 'Label': '', 'layer': '', 'path': '', });
lyr_FiberCable_5.set('fieldImages', {'fid': '', 'SIZE': '', 'COUNT_': '', 'CABLEID': '', 'GlobalID': '', 'SHAPE_Leng': '', 'Id': '', 'layer': '', 'path': '', });
lyr_Closure_6.set('fieldImages', {'fid': '', 'FondID': '', 'Tier': '', 'Type': '', 'Size': '', 'Demand': '', 'Placement': '', 'Source': '', 'OpticalLen': '', 'IsReelEnd': '', 'id': '', 'Label': '', 'layer': '', 'path': '', 'GlobalID': '', });
lyr_MergedTierFiber_7.set('fieldImages', {'fid': '', 'FondID': '', 'Type': '', 'Placement': '', 'StartID': '', 'EndID': '', 'Length': '', 'Source': '', 'Size': '', 'RawFlow': '', 'OccReel': '', 'LenFromSag': '', 'LenFromSlk': '', 'LenFromPth': '', 'LeadinLen': '', 'id': '', 'layer': '', 'path': '', });
lyr_Cabinet_8.set('fieldImages', {'fid': '', 'FondID': '', 'Tier': '', 'Type': '', 'Size': '', 'Demand': '', 'Source': '', 'OpticalLen': '', 'IsReelEnd': '', 'id': '', 'layer': '', 'path': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin_': '', 'end_': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'GlobalID': '', });
lyr_Backhaul_9.set('fieldImages', {'fid': '', 'id': '', 'layer': '', 'path': '', });
lyr_BackhaulSplice_10.set('fieldImages', {'fid': '', 'id': '', 'OLT\'s': '', 'BH SPL #': '', 'Boundaries': '', 'Label': '', 'layer': '', 'path': '', });
lyr_T4Fiber_11.set('fieldImages', {'fid': '', 'FondID': '', 'Type': '', 'Placement': '', 'StartID': '', 'EndID': '', 'Length': '', 'Source': '', 'Size': '', 'OccReel': '', 'LenFromSag': '', 'LenFromSlk': '', 'LenFromPth': '', 'LeadinLen': '', 'id': '', 'layer': '', 'path': '', });
lyr_Boundary_12.set('fieldImages', {'fid': '', 'id': '', 'RN2': '', 'Color': '', 'layer': '', 'path': '', });
lyr_Conduit_2.set('fieldLabels', {'DIAMETER': 'no label', 'LENGTH': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', });
lyr_FiberEquipment_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Size': 'no label', 'Tier': 'no label', 'Type': 'no label', 'FondID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vault_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ID2': 'no label', 'Size': 'no label', 'Type': 'no label', 'Owner': 'no label', 'FondID': 'no label', 'Status': 'no label', 'BldReason': 'no label', 'Label': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_FiberCable_5.set('fieldLabels', {'fid': 'no label', 'SIZE': 'no label', 'COUNT_': 'no label', 'CABLEID': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'Id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Closure_6.set('fieldLabels', {'fid': 'no label', 'FondID': 'no label', 'Tier': 'no label', 'Type': 'no label', 'Size': 'no label', 'Demand': 'no label', 'Placement': 'no label', 'Source': 'no label', 'OpticalLen': 'no label', 'IsReelEnd': 'no label', 'id': 'no label', 'Label': 'no label', 'layer': 'no label', 'path': 'no label', 'GlobalID': 'no label', });
lyr_MergedTierFiber_7.set('fieldLabels', {'fid': 'no label', 'FondID': 'no label', 'Type': 'no label', 'Placement': 'no label', 'StartID': 'no label', 'EndID': 'no label', 'Length': 'no label', 'Source': 'no label', 'Size': 'no label', 'RawFlow': 'no label', 'OccReel': 'no label', 'LenFromSag': 'no label', 'LenFromSlk': 'no label', 'LenFromPth': 'no label', 'LeadinLen': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Cabinet_8.set('fieldLabels', {'fid': 'no label', 'FondID': 'no label', 'Tier': 'no label', 'Type': 'no label', 'Size': 'no label', 'Demand': 'no label', 'Source': 'no label', 'OpticalLen': 'no label', 'IsReelEnd': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin_': 'no label', 'end_': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'GlobalID': 'no label', });
lyr_Backhaul_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_BackhaulSplice_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'OLT\'s': 'no label', 'BH SPL #': 'no label', 'Boundaries': 'no label', 'Label': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_T4Fiber_11.set('fieldLabels', {'fid': 'no label', 'FondID': 'no label', 'Type': 'no label', 'Placement': 'no label', 'StartID': 'no label', 'EndID': 'no label', 'Length': 'no label', 'Source': 'no label', 'Size': 'no label', 'OccReel': 'no label', 'LenFromSag': 'no label', 'LenFromSlk': 'no label', 'LenFromPth': 'no label', 'LeadinLen': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Boundary_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'RN2': 'no label', 'Color': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Boundary_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});