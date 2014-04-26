Ext.onReady(function() {
		
    new Ext.Viewport({
        layout: "fit",
        hideBorders: true,
        items: {
            layout: "border",
            deferredRender: false,
            items: [mapPanel,
		{
		    xtype: 'panel',
		    border:true,
		    region: 'west',
		    id:'map_panel',
	            itle: 'Επιλογές',
		    width: 200,
		    layout: 'accordion',
		    collapsible: true,
		    collapseMode: "mini",
		    resizable:true,
		    activeItem: 0,
		    layoutConfig: {
			animate: true,
			sequence: true
		    },
		    items:[layers_tree,wms_tree,
		    {
			xtype: 'gx_legendpanel',
			title: 'Υπόμνημα',
			autoScroll: true,
			padding: 5
		    }]
		},
		{
                    contentEl: "desc",
                    region: "east",
                    bodyStyle: {"padding": "5px"},
                    collapsible: true,
                    collapseMode: "mini",
                    split: true,
                    width: 200,
		    collapsed: true,
                    title: "Βασικές Πληροφορίες"
                }]
            }
        });

});