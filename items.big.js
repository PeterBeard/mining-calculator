// JavaScript Document
"use strict";

// Return an array containing the names of the minerals
function get_mineral_names()
{
	return new Array("tritanium","pyerite","mexallon","isogen","nocxium","zydrine","megacyte","morphite");
}

// Return an array of objects with type IDs and sanitized names
function get_type_ids()
{
	return new Array(
	{id:34,name:"tritanium"},
	{id:35,name:"pyerite"},
	{id:36,name:"mexallon"},
	{id:37,name:"isogen"},
	{id:38,name:"nocxium"},
	{id:39,name:"zydrine"},
	{id:40,name:"megacyte"},
	{id:11399,name:"morphite"},

	{id:1230,name:"veldspar"},
	{id:17470,name:"concentrated-veldspar"},
	{id:17471,name:"dense-veldspar"},
	{id:1228,name:"scordite"},
	{id:17463,name:"condensed-scordite"},
	{id:17464,name:"massive-scordite"},
	{id:1224,name:"pyroxeres"},
	{id:17459,name:"solid-pyroxeres"},
	{id:17460,name:"viscous-pyroxeres"},
	{id:18,name:"plagioclase"},
	{id:17455,name:"azure-plagioclase"},
	{id:17456,name:"rich-plagioclase"},
	{id:1227,name:"omber"},
	{id:17867,name:"silvery-omber"},
	{id:17868,name:"golden-omber"},
	{id:20,name:"kernite"},
	{id:17452,name:"luminous-kernite"},
	{id:17453,name:"fiery-kernite"},
	{id:1226,name:"jaspet"},
	{id:17448,name:"pure-jaspet"},
	{id:17449,name:"pristine-jaspet"},
	{id:1231,name:"hemorphite"},
	{id:17444,name:"vivid-hemorphite"},
	{id:17445,name:"radiant-hemorphite"},
	{id:21,name:"hedbergite"},
	{id:17440,name:"vitric-hedbergite"},
	{id:17441,name:"glazed-hedbergite"},
	{id:1229,name:"gneiss"},
	{id:17865,name:"iridescent-gneiss"},
	{id:17866,name:"prismatic-gneiss"},
	{id:1232,name:"dark-ochre"},
	{id:17436,name:"onyx-ochre"},
	{id:17437,name:"obsidian-ochre"},
	{id:1225,name:"crokite"},
	{id:17432,name:"sharp-crokite"},
	{id:17433,name:"crystalline-crokite"},
	{id:19,name:"spodumain"},
	{id:17466,name:"bright-spodumain"},
	{id:17467,name:"gleaming-spodumain"},
	{id:1223,name:"bistot"},
	{id:17428,name:"triclinic-bistot"},
	{id:17429,name:"monoclinic-bistot"},
	{id:22,name:"arkonor"},
	{id:17425,name:"crimson-arkonor"},
	{id:17426,name:"prime-arkonor"},
	{id:11396,name:"mercoxit"},
	{id:17869,name:"magma-mercoxit"},
	{id:17870,name:"vitreous-mercoxit"}
	);
}

// Return an array of objects containing information about ores
function get_ore_objects()
{
	return new Array(
	{
		name:"Veldspar",
		group: "Veldspar",
		batchsize:333,
		tritanium:1000,
		volume:0.1
	},
	{
		name: "Concentrated Veldspar",
		group: "Veldspar",
		batchsize: 333,
		tritanium: 1050,
		volume:0.1
	},
	{
		name: "Dense Veldspar",
		group: "Veldspar",
		batchsize: 333,
		tritanium: 1100,
		volume: 0.1
	},
	{
		name:"Scordite",
		group:"Scordite",
		batchsize:333,
		tritanium:833,
		pyerite:416,
		volume:0.15
	},
	{
		name:"Condensed Scordite",
		group:"Scordite",
		batchsize:333,
		tritanium:875,
		pyerite:437,
		volume:0.15
	},
	{
		name:"Massive Scordite",
		group:"Scordite",
		batchsize:333,
		tritanium:916,
		pyerite:458,
		volume:0.15
	},
	{
		name:"Pyroxeres",
		group:"Pyroxeres",
		batchsize:333,
		tritanium:844,
		pyerite:59,
		mexallon:120,
		nocxium:11,
		volume:0.3
	},
	{
		name:"Solid Pyroxeres",
		group:"Pyroxeres",
		batchsize:333,
		tritanium:886,
		pyerite:62,
		mexallon:126,
		nocxium:12,
		volume:0.3
	},
	{
		name:"Viscous Pyroxeres",
		group:"Pyroxeres",
		batchsize:333,
		tritanium:928,
		pyerite:65,
		mexallon:132,
		nocxium:12,
		volume:0.3
	},
	{
		name:"Plagioclase",
		group:"Plagioclase",
		batchsize:333,
		tritanium:256,
		pyerite:512,
		mexallon:256,
		volume:0.35
	},
	{
		name:"Azure Plagioclase",
		group:"Plagioclase",
		batchsize:333,
		tritanium:269,
		pyerite:538,
		mexallon:269,
		volume:0.35
	},
	{
		name:"Rich Plagioclase",
		group:"Plagioclase",
		batchsize:333,
		tritanium:282,
		pyerite:563,
		mexallon:282,
		volume:0.35
	},
	{
		name:"Omber",
		group:"Omber",
		batchsize:500,
		tritanium:307,
		pyerite:123,
		isogen:307,
		volume:0.6
	},
	{
		name:"Silvery Omber",
		group:"Omber",
		batchsize:500,
		tritanium:322,
		pyerite:129,
		isogen:322,
		volume:0.6
	},
	{
		name:"Golden Omber",
		group:"Omber",
		batchsize:500,
		tritanium:338,
		pyerite:135,
		isogen:338,
		volume:0.6
	},
	{
		name:"Kernite",
		group:"Kernite",
		batchsize:400,
		tritanium:386,
		mexallon:773,
		isogen:386,
		volume:1.2
	},
	{
		name:"Luminous Kernite",
		group:"Kernite",
		batchsize:400,
		tritanium:405,
		mexallon:812,
		isogen:405,
		volume:1.2
	},
	{
		name:"Fiery Kernite",
		group:"Kernite",
		batchsize:400,
		tritanium: 424,
		mexallon:850,
		isogen:425,
		volume:1.2
	},
	{
		name:"Jaspet",
		group:"Jaspet",
		batchsize:500,
		tritanium:259,
		pyerite:259,
		mexallon:518,
		nocxium:259,
		zydrine:8,
		volume:2
	},
	{
		name:"Pure Jaspet",
		group:"Jaspet",
		batchsize:500,
		tritanium:272,
		pyerite:272,
		mexallon:544,
		nocxium:272,
		zydrine:8,
		volume:2
	},
	{
		name:"Pristine Jaspet",
		group:"Jaspet",
		batchsize:500,
		tritanium:285,
		pyerite:285,
		mexallon:570,
		nocxium:285,
		zydrine:9,
		volume:2
	},
	{
		name:"Hemorphite",
		group:"Hemorphite",
		batchsize:500,
		tritanium:212,
		isogen:212,
		nocxium:424,
		zydrine:28,
		volume:3
	},
	{
		name:"Vivid Hemorphite",
		group:"Hemorphite",
		batchsize:500,
		tritanium:223,
		isogen:223,
		nocxium:445,
		zydrine:29,
		volume:3
	},
	{
		name:"Radiant Hemorphite",
		group:"Hemorphite",
		batchsize:500,
		tritanium:233,
		isogen:233,
		nocxium:466,
		zydrine:31,
		volume:3
	},
	{
		name:"Hedbergite",
		group:"Hedbergite",
		batchsize:500,
		isogen:708,
		nocxium:354,
		zydrine:32,
		volume:3
	},
	{
		name:"Vitric Hedbergite",
		group:"Hedbergite",
		batchsize:500,
		isogen:743,
		nocxium:372,
		zydrine:34,
		volume:3,
	},
	{
		name:"Glazed Hedbergite",
		group:"Hedbergite",
		batchsize:500,
		isogen:779,
		nocxium:389,
		zydrine:35,
		volume:3,
	},
	{
		name:"Gneiss",
		group:"Gneiss",
		batchsize:400,
		tritanium:171,
		mexallon:171,
		isogen:343,
		zydrine:171,
		volume:5
	},
	{
		name:"Irridescent Gneiss",
		group:"Gneiss",
		batchsize:400,
		tritanium:180,
		mexallon:180,
		isogen:360,
		zydrine:180,
		volume:5
	},
	{
		name:"Prismatic Gneiss",
		group:"Gneiss",
		batchsize:400,
		tritanium:188,
		mexallon:188,
		isogen:377,
		zydrine:188,
		volume:5
	},
	{
		name:"Dark Ochre",
		group:"Ochre",
		batchsize:400,
		tritanium:250,
		nocxium:500,
		zydrine:250,
		volume:8
	},
	{
		name:"Onyx Ochre",
		group:"Ochre",
		batchsize:400,
		tritanium:264,
		nocxium:525,
		zydrine:264,
		volume:8
	},
	{
		name:"Obsidian Ochre",
		group:"Ochre",
		batchsize:400,
		tritanium:275,
		nocxium:550,
		zydrine:275,
		volume:8
	},
	{
		name:"Crokite",
		group:"Crokite",
		batchsize:250,
		tritanium:331,
		nocxium:331,
		zydrine:663,
		volume:16
	},
	{
		name:"Sharp Crokite",
		group:"Crokite",
		batchsize:250,
		tritanium:348,
		nocxium:348,
		zydrine:696,
		volume:16
	},
	{
		name:"Crystalline Crokite",
		group:"Crokite",
		batchsize:250,
		tritanium:364,
		nocxium:364,
		zydrine:729,
		volume:16
	},
	{
		name:"Spodumain",
		group:"Spodumain",
		batchsize:250,
		tritanium:700,
		pyerite:140,
		megacyte:140,
		volume:16
	},
	{
		name:"Bright Spodumain",
		group:"Spodumain",
		batchsize:250,
		tritanium:735,
		pyerite:147,
		megacyte:147,
		volume:16
	},
	{
		name:"Gleaming Spodumain",
		group:"Spodumain",
		batchsize:250,
		tritanium:770,
		pyerite:154,
		megacyte:154,
		volume:16
	},
	{
		name:"Bistot",
		group:"Bistot",
		batchsize:200,
		pyerite:170,
		zydrine:341,
		megacyte:170,
		volume:16
	},
	{
		name:"Triclinic Bistot",
		group:"Bistot",
		batchsize:200,
		pyerite:179,
		zydrine:358,
		megacyte:179,
		volume:16
	},
	{
		name:"Monoclinic Bistot",
		group:"Bistot",
		batchsize:200,
		pyerite:187,
		zydrine:375,
		megacyte:187,
		volume:16
	},
	{
		name:"Arkonor",
		group:"Arkonor",
		batchsize:200,
		tritanium:300,
		zydrine:166,
		megacyte:333,
		volume:16
	},
	{
		name:"Crimson Arkonor",
		group:"Arkonor",
		batchsize:200,
		tritanium:315,
		zydrine:174,
		megacyte:350,
		volume:16
	},
	{
		name:"Prime Arkonor",
		group:"Arkonor",
		batchsize:200,
		tritanium:330,
		zydrine:183,
		megacyte:366,
		volume:16
	},
	{
		name:"Mercoxit",
		group:"Mercoxit",
		batchsize:250,
		morphite:530,
		volume:40
	},
	{
		name:"Magma Mercoxit",
		group:"Mercoxit",
		batchsize:250,
		morphite:557,
		volume:40
	},
	{
		name:"Vitreous Mercoxit",
		group:"Mercoxit",
		batchsize:250,
		morphite:583,
		volume:40
	}
	);
}

// Return an array of objects containing information about drone compounds
function get_compound_objects()
{
	return new Array(
	{
		name:"Condensed Alloy",
		batchsize:1,
		tritanium:88,
		pyerite:44,
		mexallon:11,
		volume:1
	},
	{
		name:"Crystal Compound",
		batchsize:1,
		mexallon:11,
		isogen:2,
		volume:1
	},
	{
		name:"Precious Alloy",
		batchsize:1,
		pyerite:7,
		isogen:18,
		volume:1
	},
	{
		name:"Sheen Compound",
		batchsize:1,
		tritanium:124,
		pyerite:44,
		isogen:23,
		nocxium:1,
		volume:1
	},
	{
		name:"Gleaming Alloy",
		batchsize:1,
		tritanium:299,
		nocxium:5,
		volume:1
	},
	{
		name:"Lucent Compound",
		batchsize:1,
		pyerite:174,
		mexallon:2,
		isogen:11,
		nocxium:5,
		volume:1
	},
	{
		name:"Dark Compound",
		batchsize:1,
		isogen:23,
		nocxium:10,
		volume:1
	},
	{
		name:"Motley Compound",
		batchsize:1,
		isogen:28,
		nocxium:13,
		volume:1
	},
	{
		name:"Lustering Alloy",
		batchsize:1,
		mexallon:88,
		isogen:32,
		nocxium:35,
		zydrine:1,
		volume:1
	},
	{
		name:"Glossy Compound",
		batchsize:1,
		mexallon:210,
		nocxium:4,
		megacyte:3,
		volume:1
	},
	{
		name:"Plush Compound",
		batchsize:1,
		tritanium:3200,
		pyerite:800,
		isogen:20,
		zydrine:9,
		volume:1
	},
	{
		name:"Opulent Compound",
		batchsize:1,
		morphite:2,
		volume:1
	}
	);
}

