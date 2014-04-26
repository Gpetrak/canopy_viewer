var empty_base = new OpenLayers.Layer("Χωρίς Υπόβαθρο",{isBaseLayer: true, numZoomLevels: 30, projection:new OpenLayers.Projection("EPSG:900913")});

var osm = new OpenLayers.Layer.OSM("OpenStreetMap");

var bluemarble = new OpenLayers.Layer.WMS("Blue Marble",
    "http://maps.opengeo.org/geowebcache/service/wms", {
         layers: "bluemarble"
    }, {
	buffer: 0,
	isBaseLayer: true,
	visibility: false,
	projection:new OpenLayers.Projection("EPSG:900913")
    }
);

var glob = new OpenLayers.Layer.WMS("Global Imagery",
                "http://maps.opengeo.org/geowebcache/service/wms", 
                {layers: "openstreetmap", format: "image/png"},
                {buffer: 0}
            )

var gsat = new OpenLayers.Layer.Google(
    "Google Satellite",
    {type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
);
var gphy = new OpenLayers.Layer.Google(
    "Google Physical",
    {type: google.maps.MapTypeId.TERRAIN, visibility: false}
    );
var gmap = new OpenLayers.Layer.Google(
    "Google Streets", // the default
    {numZoomLevels: 20, visibility: false}
);
var ghyb = new OpenLayers.Layer.Google(
    "Google Hybrid",
    {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 22, visibility: false}
);