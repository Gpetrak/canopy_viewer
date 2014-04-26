mapPanel = new GeoExt.MapPanel({
    border: true,
    region: "center",
    map: map,
    center: center,
    projection: "EPSG:900913",
    zoom: 6,
    //tbar: toolbarItems,
    layers: [empty_base,osm,bluemarble,glob,gsat,gphy,gmap,ghyb, vector]
});