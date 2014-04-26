var layer_root = new Ext.tree.TreeNode({
    text: 'Θεματικά Επίπεδα',
    expanded: true
});

var base_root = new GeoExt.tree.BaseLayerContainer({
    text: 'Υπόβαθρα',
    expanded: true,
    layerStore: new GeoExt.data.LayerStore({
        map: map
    })
});



layer_root.appendChild(base_root);


layers_tree = new Ext.tree.TreePanel({
	title: "Δέντρο Επιπέδων",
	region: 'west',
	width: 200,
	split: true,
	collapsible: true,
	collapseMode: "mini",
	autoScroll: true,
	root: layer_root,
});