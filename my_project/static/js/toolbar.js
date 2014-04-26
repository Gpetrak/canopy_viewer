ar ctrl, action, actions = {};
var editControl;

// ZoomToMaxExtent control
action = new GeoExt.Action({
	control: new OpenLayers.Control.ZoomToMaxExtent(),
	map: map,
	//text: "max extent",
	iconCls:'controls_map_zoomtomapextent',
	tooltip: "Μέγιστη έκταση χάρτη"
});
actions["max_extent"] = action;
toolbarItems.push(action);

// Navigation control
action = new GeoExt.Action({
	//text: "nav",
	iconCls:'controls_map_navigation',
	control: new OpenLayers.Control.Navigation(),
	map: map,
	// button options
	toggleGroup: "draw",
	allowDepress: false,
	pressed: true,
	tooltip: "Περιήγηση στον χάρτη",
	// check item options
	group: "draw",
	checked: true
});
actions["nav"] = action;
toolbarItems.push(action);

// ZoomBox control
action = new GeoExt.Action({
	control: new OpenLayers.Control.ZoomBox(),
	map: map,
	toggleGroup: "draw",
	iconCls:'controls_map_zoombox',
	tooltip: "Μεγέθυνση σε περιοχή",
	group: "draw"
});
actions["zoombox"] = action;
toolbarItems.push(action);

// ZoomIn control
action = new GeoExt.Action({
	control: new OpenLayers.Control.ZoomIn(),
	map: map,
	iconCls:'controls_map_zoomin',
	tooltip: "Μεγέθυνση"
});
actions["zoomin"] = action;
toolbarItems.push(action);

// ZoomOut control
action = new GeoExt.Action({
	control: new OpenLayers.Control.ZoomOut(),
	map: map,
	iconCls:'controls_map_zoomout',
	tooltip: "Σμίκρυνση"
});
actions["zoomout"] = action;
toolbarItems.push(action);

// Navigation history
ctrl = new OpenLayers.Control.NavigationHistory();
map.addControl(ctrl);

action = new GeoExt.Action({
	//text: "previous",
	iconCls:'controls_map_zoomtoprevious',
	control: ctrl.previous,
	disabled: true,
	tooltip: "Προηγούμενο zoom"
});
actions["previous"] = action;
toolbarItems.push(action);

action = new GeoExt.Action({
	//text: "next",
	iconCls:'controls_map_zoomtonext',
	control: ctrl.next,
	disabled: true,
	tooltip: "Επόμενο zoom"
});
actions["next"] = action;
toolbarItems.push(action);
toolbarItems.push("-");

// Measure distance control
action = new GeoExt.Action({
	iconCls:'controls_map_measureline',
	control: new OpenLayers.Control.Measure(OpenLayers.Handler.Path, {
		eventListeners: {
			measure: function(evt) {
				alert("Απόσταση: " + evt.measure + " " + evt.units);
			}
		}
	}),
	map: map,
	toggleGroup: "draw",
	allowDepress: false,
	tooltip: "Μέτρηση απόστασης",
	group: "draw"
});
actions["measure_distance"] = action;
toolbarItems.push(action);

// Measure area control
action = new GeoExt.Action({
	iconCls:'controls_map_measurearea',
	control: new OpenLayers.Control.Measure(OpenLayers.Handler.Polygon, {
		eventListeners: {
			measure: function(evt) {
				alert("Εμβαδόν: " + evt.measure + " square " + evt.units);
			}
		}
	}),
	map: map,
	toggleGroup: "draw",
	allowDepress: false,
	tooltip: "Μέτρηση εμβαδού",
	group: "draw"
});
actions["measure_distance"] = action;
toolbarItems.push(action);

toolbarItems.push("-");

/////////////////////////////
// Draw/Edit Feature controls
/////////////////////////////
action = new GeoExt.Action({
	//text: "draw poly",
	iconCls:'controls_map_drawpolygon',
	control: new OpenLayers.Control.DrawFeature(
		vector, OpenLayers.Handler.Polygon
	),
	map: map,
	// button options
	toggleGroup: "draw",
	allowDepress: false,
	tooltip: "Σχεδιασμός πολυγώνου",
	// check item options
	group: "draw"
});
actions["draw_poly"] = action;
toolbarItems.push(action);

action = new GeoExt.Action({
	//text: "draw line",
	iconCls:'controls_map_drawline',
	control: new OpenLayers.Control.DrawFeature(
		vector, OpenLayers.Handler.Path
	),
	map: map,
	// button options
	toggleGroup: "draw",
	allowDepress: false,
	tooltip: "Σχεδιασμός γραμμής",
	// check item options
	group: "draw"
});
actions["draw_line"] = action;
toolbarItems.push(action);

action = new GeoExt.Action({
	//text: "draw point",
	iconCls:'controls_map_drawpoint',
	control: new OpenLayers.Control.DrawFeature(
		vector, OpenLayers.Handler.Point
	),
	map: map,
	// button options
	toggleGroup: "draw",
	allowDepress: false,
	tooltip: "Σχεδιασμός σημείου",
	// check item options
	group: "draw"
});
actions["draw_point"] = action;
toolbarItems.push(action);

editControl = new OpenLayers.Control.ModifyFeature(vector);

action = new GeoExt.Action({
	iconCls:'controls_map_editfeature',
	control: editControl,
	map: map,
	// button options
	toggleGroup: "draw",
	allowDepress: false,
	tooltip: "Επεξεργασία γεωμετρίας",
	// check item options
	group: "draw",
	handler: function(){
        // var node = layers_tree.getSelectionModel().getSelectedNode();
		// if (node && node.layer instanceof OpenLayers.Layer.Vector) {
            // //app.mapPanel.map.removeLayer(node.layer);
			// editControl.deactivate();
		    // editControl.layer = node.layer;
			// editControl.activate();
			// Ext.Msg.alert('Click', node.layer.name);
        // }
		// else {
			// editControl.layer = vector;
		// }
		//Ext.Msg.alert('Click', 'You did something.');
    }
});
actions["edit_features"] = action;
toolbarItems.push(action);

action = new Ext.Action({
    tooltip: "Διαγραφή διανυσμάτων",
    handler: function(){
        clearVector();
    },
    iconCls: 'controls_map_vectordelete'
});
actions["delete_vector"] = action;
toolbarItems.push(action);
toolbarItems.push("-");

/////////////////////////////
// GetFeatureInfo controls
/////////////////////////////

action = new GeoExt.Action({
	control: new OpenLayers.Control.WMSGetFeatureInfo({
		//autoActivate: true,
		infoFormat: "application/vnd.ogc.gml",
		maxFeatures: 10,
		eventListeners: {
			"getfeatureinfo": function(e) {
				var items = [];
				Ext.each(e.features, function(feature) {
					items.push({
						xtype: "propertygrid",
						title: feature.fid,
						source: feature.attributes
					});
				});
				new GeoExt.Popup({
					title: "Πληροφορίες επιπέδων",
					width: 300,
					height: 400,
					layout: "accordion",
					map: mapPanel,
					location: e.xy,
					items: items
				}).show();
			}
		}
	}),
	map: map,
	iconCls:'controls_map_getfeatureinfo',
	tooltip: "Πληροφορίες επιπέδων",
	toggleGroup: "draw",
	allowDepress: false,
	group: "draw"
});
actions["getfeatureinfo"] = action;
toolbarItems.push(action);