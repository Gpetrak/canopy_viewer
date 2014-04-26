/* Copyright (C) 2014 George Petrakis <gkpetrak@gmail.com> 
   
   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var tree, mapPanel;

Ext.onReady(function() {

  ////////
  //Tree//
  ////////

  var root = new Ext.tree.TreeNode({
        text: 'Satellite Data',
        expanded: true
  });

  var year_2013 = new Ext.tree.TreeNode({
        text: '2013',
        expanded: false
  });

  var year_2014 = new Ext.tree.TreeNode({
        text: '2014',
        expanded: false
  });

  var mosaics = new Ext.tree.TreeNode({
        text: 'Greece | Data',
        expanded: false
  });

  var landsat_13 = new Ext.tree.TreeNode({
        text: 'Landsat 8',
        expanded: false
  });

  var landsat_14 = new Ext.tree.TreeNode({
        text: 'Landsat 8',
        expanded: false
  });

  var wv2 = new Ext.tree.TreeNode({
        text: 'WorldView 2',
        expanded: false
  });

   var d_20_08_13 = new Ext.tree.TreeNode({
        text: '20 Aug 13',
        expanded: false
  });

  var d_11_01_14 = new Ext.tree.TreeNode({
        text: '11 Jan 14',
        expanded: false
  });

  var d_23_10_13 = new Ext.tree.TreeNode({
        text: '23 Oct 13',
        expanded: false
  });

  var d_30_04_13 = new Ext.tree.TreeNode({
        text: '30 Apr 13',
        expanded: false
  });

  var all = new Ext.tree.AsyncTreeNode({
        text: 'All',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/wmscap.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

  var mosaic_gre = new Ext.tree.AsyncTreeNode({
        text: 'RGB',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/mosaic_gre.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });
  
  var mosaic_con = new Ext.tree.AsyncTreeNode({
        text: 'Canopy',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/mosaic_canopy.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

  var rgb_20_08 = new Ext.tree.AsyncTreeNode({
        text: 'RGB',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/rgb.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

   var rgb_11_01 = new Ext.tree.AsyncTreeNode({
        text: 'RGB',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/rgb_11_01.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

   var rgb_23_10 = new Ext.tree.AsyncTreeNode({
        text: 'RGB',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/rgb_23_10.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

   var rgb_30_04 = new Ext.tree.AsyncTreeNode({
        text: 'RGB',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/rgb_30_04.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });
    
   var processes_20_08 = new Ext.tree.AsyncTreeNode({
        text: 'Processes',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/processes_20_08.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

  var processes_11_01 = new Ext.tree.AsyncTreeNode({
        text: 'Processes',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/processes_11_01.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

   var processes_23_10 = new Ext.tree.AsyncTreeNode({
        text: 'Processes',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/processes_23_10.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });

  var processes_30_04 = new Ext.tree.AsyncTreeNode({
        text: 'Processes',
        loader: new GeoExt.tree.WMSCapabilitiesLoader({
            url: '/static/geoexplorer/externals/processes_30_04.xml',
            layerOptions: {buffer: 0, singleTile: true, ratio: 1, projection:new OpenLayers.Projection("EPSG:900913"),isBaseLayer: false},
            layerParams: {'TRANSPARENT': 'TRUE'},
            // customize the createNode method to add a checkbox to nodes
            createNode: function(attr) {
                attr.checked = attr.leaf ? false : undefined;
                return GeoExt.tree.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
            }
        })
    });
  
   year_2013.appendChild(landsat_13);
   year_2014.appendChild(landsat_14);
   landsat_13.appendChild([d_20_08_13, d_23_10_13, d_30_04_13]);
   landsat_14.appendChild(d_11_01_14);
   mosaics.appendChild([mosaic_gre, mosaic_con]);

   d_20_08_13.appendChild([rgb_20_08, processes_20_08]);
   d_11_01_14.appendChild([rgb_11_01, processes_11_01]);
   d_23_10_13.appendChild([rgb_23_10, processes_23_10]);
   d_30_04_13.appendChild([rgb_30_04, processes_30_04]);
   
   root.appendChild([year_2013, year_2014, all, mosaics]);
	  
   tree = new Ext.tree.TreePanel({
        root: root,
        region: 'west',
        width: 240,
	collapsible: true,
	split: true,
	autoScroll: true,
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
  
    var vector = new OpenLayers.Layer.Vector("Scratchpad");
    var map = new OpenLayers.Map('map');
    map.addControl(new OpenLayers.Control.LayerSwitcher());
    map.addControl(new OpenLayers.Control.MousePosition());
   
    function clearVector() {
	vector.destroyFeatures();
    }
    
    OpenLayers.ProxyHost = "/proxy/?url=";
   
    //////////////////////
    //WPS Processing code/
    //////////////////////
    
    var wps = "http://localhost:8080/geoserver/wps",
        capabilities, // the capabilities, read by Format.WPSCapabilities::read
        process; // the process description from Format.WPSDescribeProcess::read
        
    // get some capabilities
    getCapabilities();
    
    // add behavior to html elements
    document.getElementById("processes").onchange = describeProcess;
    
    // using OpenLayers.Format.WPSCapabilities to read the capabilities
    function getCapabilities() {
        OpenLayers.Request.GET({
            url: wps,
            params: {
                "SERVICE": "WPS",
                "REQUEST": "GetCapabilities"
            },
            success: function(response){
                capabilities = new OpenLayers.Format.WPSCapabilities().read(
                    response.responseText
                );
                var dropdown = document.getElementById("processes");
                var offerings = capabilities.processOfferings, option;
                // populate the dropdown
                for (var p in offerings) {
                    option = document.createElement("option");
                    option.innerHTML = offerings[p].identifier;
                    option.value = p;
                    dropdown.appendChild(option);
                }
            }
        });
    }
    
    // using OpenLayers.Format.WPSDescribeProcess to get information about a
    // process
    function describeProcess() {
        var selection = this.options[this.selectedIndex].value;
        OpenLayers.Request.GET({
            url: wps,
            params: {
                "SERVICE": "WPS",
                "REQUEST": "DescribeProcess",
                "VERSION": capabilities.version,
                "IDENTIFIER": selection
            },
            success: function(response) {
                process = new OpenLayers.Format.WPSDescribeProcess().read(
                    response.responseText
                ).processDescriptions[selection];
                buildForm();
            }
        });
    }
    
    // dynamically create a form from the process description
    function buildForm() {
        document.getElementById("abstract").innerHTML = process["abstract"];
        document.getElementById("input").innerHTML = "<h3>Input:</h3>";
	document.getElementById("output").innerHTML = "";

        var inputs = process.dataInputs, supported = true,
            sld = "text/xml; subtype=sld/1.0.0",
            input;
        for (var i=0,ii=inputs.length; i<ii; ++i) {
            input = inputs[i];
            if (input.complexData) {
                var formats = input.complexData.supported.formats;
                if (formats["application/wkt"]) {
                    addWKTInput(input);
                } else if (formats["text/xml; subtype=wfs-collection/1.0"]) {
                    addWFSCollectionInput(input);
                } else if (formats["image/tiff"]) {
                    addRasterInput(input);
                } else if (formats[sld]) {
                    addXMLInput(input, sld);
                } else {
                    supported = false;
                }
            } else if (input.boundingBoxData) {
                addBoundingBoxInput(input);
            } else if (input.literalData) {
                addLiteralInput(input);
            } else {
                supported = false;
            }
            if (input.minOccurs > 0) {
                document.getElementById("input").appendChild(document.createTextNode("* "));
            }
         }
    
        if (supported) {
            var executeButton = document.createElement("button");
            executeButton.innerHTML = "Execute";
            document.getElementById("input").appendChild(executeButton);
            executeButton.onclick = execute;
        } else {
            document.getElementById("input").innerHTML = '<span class="notsupported">' +
                "Sorry, the WPS builder does not support the selected process." +
                "</span>";
        }
    }
    
    // helper function to dynamically create a textarea for geometry (WKT) data
    // input
    
    function addWKTInput(input, previousSibling) {
        var name = input.identifier;
        var container = document.getElementById("input");
        var label = document.createElement("label");
        label["for"] = name;
        label.title = input["abstract"];
        label.innerHTML = name + " (select feature, then click field):";
        previousSibling && previousSibling.nextSibling ?
            container.insertBefore(label, previousSibling.nextSibling) :
            container.appendChild(label);
        var field = document.createElement("textarea");
        field.onclick = function () {
            if (vector.selectedFeatures.length) {
                this.innerHTML = new OpenLayers.Format.WKT().write(
                    vector.selectedFeatures[0]
                );
            }
            createCopy(input, this, addWKTInput);
        };
        field.onblur = function() {
            input.data = field.value ? {
                complexData: {
                    mimeType: "application/wkt",
                    value: this.value
                }
            } : undefined;
        };
        field.title = input["abstract"];
        field.id = name;
        previousSibling && previousSibling.nextSibling ?
            container.insertBefore(field, previousSibling.nextSibling.nextSibling) :
            container.appendChild(field);
    }
        
    
    // helper function for xml input
    function addXMLInput(input, type) {
        var name = input.identifier;
        var field = document.createElement("input");
        field.title = input["abstract"];
        field.value = name + " (" + type + ")";
        field.onblur = function() {
            input.data = field.value ? {
                complexData: {
                    mimeType: type,
                    value: this.value
                }
            } : undefined;
        };
        document.getElementById("input").appendChild(field);
    }
    
    // helper function to dynamically create a WFS collection reference input
    function addWFSCollectionInput(input) {
        var name = input.identifier;
        var field = document.createElement("input");
        field.title = input["abstract"];
        field.value = name + " (layer on demo server)";
        addValueHandlers(field, function() {
            input.reference = field.value ? {
                mimeType: "text/xml; subtype=wfs-collection/1.0",
                href: "http://geoserver/wfs",
                method: "POST",
                body: {
                    wfs: {
                        version: "1.0.0",
                        outputFormat: "GML2",
                        featureType: field.value
                    }
                }
            } : undefined;
        });
        document.getElementById("input").appendChild(field);
    }
    
    // helper function to dynamically create a raster (GeoTIFF) url input
    function addRasterInput(input) {
        var name = input.identifier;
        var field = document.createElement("input");
        field.title = input["abstract"];
        var url = window.location.href.split("?")[0];
        field.value = url.substr(0, url.lastIndexOf("/")+1) + "data/tazdem.tiff";
        document.getElementById("input").appendChild(field);
        (field.onblur = function() {
            input.reference = {
                mimeType: "image/tiff",
                href: field.value,
                method: "GET"
                };
            })();
    }
    
   
    // helper function to dynamically create a bounding box input
    function addBoundingBoxInput(input) {
        var name = input.identifier;
        var field = document.createElement("input");
        field.title = input["abstract"];
        field.value = "left,bottom,right,top (EPSG:4326)";
        document.getElementById("input").appendChild(field);
        addValueHandlers(field, function() {
            input.boundingBoxData = {
                projection: "EPSG:4326",
                bounds: OpenLayers.Bounds.fromString(field.value)
            };
        });
    }
    
    // helper function to create a literal input textfield or dropdown
    function addLiteralInput(input, previousSibling) {
        var name = input.identifier;
        var container = document.getElementById("input");
        var anyValue = input.literalData.anyValue;
        // anyValue means textfield, otherwise we create a dropdown
        var field = document.createElement(anyValue ? "input" : "select");
        field.id = name;
        field.title = input["abstract"];
        previousSibling && previousSibling.nextSibling ?
            container.insertBefore(field, previousSibling.nextSibling) :
            container.appendChild(field);
        if (anyValue) {
            var dataType = input.literalData.dataType;
            field.value = name + (dataType ? " (" + dataType + ")" : "");
            addValueHandlers(field, function() {
                input.data = field.value ? {
                    literalData: {
                        value: field.value
                    }
                } : undefined;
                createCopy(input, field, addLiteralInput);
            });
        } else {
            var option;
            option = document.createElement("option");
            option.innerHTML = name;
            field.appendChild(option);
            for (var v in input.literalData.allowedValues) {
                option = document.createElement("option");
                option.value = v;
                option.innerHTML = v;
                field.appendChild(option);
            }
            field.onchange = function() {
                createCopy(input, field, addLiteralInput);
                input.data = this.selectedIndex ? {
                    literalData: {
                        value: this.options[this.selectedIndex].value
                    }
                } : undefined;
            };
        }
    }
    
    // if maxOccurs is > 1, this will add a copy of the field
    function createCopy(input, field, fn) {
        if (input.maxOccurs && input.maxOccurs > 1 && !field.userSelected) {
            // add another copy of the field - we don't check maxOccurs
            field.userSelected = true;
            var newInput = OpenLayers.Util.extend({}, input);
            // we recognize copies by the occurrence property
            newInput.occurrence = (input.occurrence || 0) + 1;
            process.dataInputs.push(newInput);
            fn(newInput, field);
        }
    }
    
    // helper function for adding events to form fields
    function addValueHandlers(field, onblur) {
        field.onclick = function() {
            if (!this.initialValue) {
                this.initialValue = this.value;
                this.value = "";
            }
        };
        field.onblur = function() {
            if (!this.value) {
                this.value = this.initialValue;
                delete this.initialValue;
            }
            onblur.apply(this, arguments);
        };
    }
    
    // execute the process
    function execute() {
        var output = process.processOutputs[0];
        var input;
        // remove occurrences that the user has not filled out
        for (var i=process.dataInputs.length-1; i>=0; --i) {
            input = process.dataInputs[i];
            if ((input.minOccurs === 0 || input.occurrence) && !input.data && !input.reference) {
                OpenLayers.Util.removeItem(process.dataInputs, input);
            }
        }
        process.responseForm = {
            rawDataOutput: {
                identifier: output.identifier
            }
        };
        if (output.complexOutput && output.complexOutput.supported.formats["application/wkt"]) {
            process.responseForm.rawDataOutput.mimeType = "application/wkt";
        }
        OpenLayers.Request.POST({
            url: wps,
            data: new OpenLayers.Format.WPSExecute().write(process),
            success: showOutput
        });
    }
    
    // add the process's output to the page
    function showOutput(response) {
        var result = document.getElementById("output");
        result.innerHTML = "<h3>Output:</h3>";
        var features;
        var contentType = response.getResponseHeader("Content-Type");
	if (contentType == "image/tif") {
	    features = new OpenLayers.Format.WMS().read(response.responseText);
	}
        if (contentType == "application/wkt") {
            features = new OpenLayers.Format.WKT().read(response.responseText);
        } else if (contentType == "text/xml; subtype=wfs-collection/1.0") {
            features = new OpenLayers.Format.WFST.v1_0_0().read(response.responseText);
        }
        if (features && (features instanceof OpenLayers.Feature.Vector || features.length)) {
            vector.addFeatures(features);
            result.innerHTML += "The result should also be visible on the map.";
        }
        result.innerHTML += "<textarea>" + response.responseText + "</textarea>";
    }
   
   ////////////////
    // Base Layers//
    ////////////////   
  
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

    var glob = new OpenLayers.Layer.WMS("WPS Processing",
        "http://maps.opengeo.org/geowebcache/service/wms", 
        {layers: "openstreetmap", format: "image/png"},
        {buffer: 0}
        );

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
   
    //////////
    // Tools//
    //////////
    
    var action, actions = {};
    var editControl;
    var toolbarItems = [];
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
		    alert("Distance: " + evt.measure + " " + evt.units);
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
		    alert("Area: " + evt.measure + " square " + evt.units);
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
    
    
    // Draw/Edit Feature controls
    
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
    
    // mapPanel
    
    mapPanel = new GeoExt.MapPanel({
        border: true,
        zoom: 3,
        map: map,
	region: 'center',
	tbar: toolbarItems,
	layers: [bluemarble,
	    osm,
	    glob,
	    gsat,
	    gphy,
	    gmap,
	    ghyb,
            vector, 
	    empty_base,
	    ],
        });
    
    new Ext.Viewport({
        layout: "fit",
        hideBorders: true,
        items: {
            layout: "border",
            deferredRender: false,
            items: [mapPanel, tree,{
            region: "north",
            contentEl: "title",
            height: 25
            },{
                contentEl: "desc",
                region: "east",
                bodyStyle: {"padding": "5px"},
                collapsible: true,
                split: true,
                width: 250,
                title: "Description"
            }]
        }
    });

});