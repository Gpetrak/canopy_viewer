var wms_root = new Ext.tree.TreeNode({
    text: 'Υπηρεσίες Θέασης',
    expanded: true
});

/*var raeroot = new Ext.tree.AsyncTreeNode({
    text: 'Υπηρεσία Θέασης ΡΑΕ',
    loader: new GeoExt.tree.WMSCapabilitiesLoader({
        url: '/static/geoexplorer/externals/wmscap.xml',
	layerOptions: {buffer: 0, singleTile: true, ratio: 1,projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
	layerParams: {'TRANSPARENT': 'TRUE'},
	// customize the createNode method to add a checkbox to nodes
	createNode: function(attr) {
	    attr.checked = attr.leaf ? false : undefined;
	    return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
	}
    })
}); */

/*var geodataroot = new Ext.tree.AsyncTreeNode({
    text: 'Υπηρεσία Θέασης GeoData.gov.gr',
    loader: new GeoExt.tree.WMSCapabilitiesLoader({
	url: '/map/data/geodata_capabilities.xml',
        //url: '/cgi-bin/proxy.cgi?url=http://geodata5.vm.grnet.gr:8020/cgi-bin/mapserv?map=/var/mapserver/wms.map',
	layerOptions: {buffer: 0, singleTile: true, ratio: 1,projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
	layerParams: {'TRANSPARENT': 'TRUE'},
	// customize the createNode method to add a checkbox to nodes
	createNode: function(attr) {
		attr.checked = attr.leaf ? false : undefined;
		return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
	}
    })
}); */

var pindosroot = new Ext.tree.AsyncTreeNode({
    text: 'Υπηρεσία Θέασης PindosGIS',
    loader: new GeoExt.tree.WMSCapabilitiesLoader({
	url: '/static/geoexplorer/externals/wmscap.xml',
	layerOptions: {buffer: 0, singleTile: true, ratio: 1,projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
	layerParams: {'TRANSPARENT': 'TRUE'},
	// customize the createNode method to add a checkbox to nodes
	createNode: function(attr) {
		attr.checked = attr.leaf ? false : undefined;
		return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
	}
    })
});

wms_root.appendChild(pindosroot);
//wms_root.appendChild(geodataroot);
//wms_root.appendChild(raeroot);

wms_tree = new Ext.tree.TreePanel({
    title: "Προσθήκη/Αφαίρεση Επιπέδων",
    region: 'west',
    width: 200,
    split: true,
    collapsible: true,
    collapseMode: "mini",
    autoScroll: true,
    root: wms_root,
    listeners: {
	// Add layers to the map when ckecked, remove when unchecked.
	// Note that this does not take care of maintaining the layer
	// order on the map.
	'checkchange': function(node, checked) {
		if (checked === true) {
			mapPanel.map.addLayer(node.attributes.layer); 
		} else {
			mapPanel.map.removeLayer(node.attributes.layer);
		}
	}
    }
});