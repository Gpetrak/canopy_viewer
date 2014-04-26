map = new OpenLayers.Map(
{
    allOverlays: false,
    displayProjection: new OpenLayers.Projection("EPSG:2100"),
});
var center = new OpenLayers.LonLat(24.3,38.4).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
var map_mousePosCtr=new OpenLayers.Control.MousePosition();
map.addControl(map_mousePosCtr);
var vector = new OpenLayers.Layer.Vector("Βοηθητικά Διανύσματα");

function clearVector() {
    vector.destroyFeatures();
}