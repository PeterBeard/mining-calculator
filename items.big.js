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
		batchsize:100,
		tritanium:415,
		volume:0.1
	},
	{
		name: "Concentrated Veldspar",
		group: "Veldspar",
		batchsize:100,
		tritanium:436,
		volume:0.1
	},
	{
		name: "Dense Veldspar",
		group: "Veldspar",
		batchsize:100,
		tritanium:457,
		volume: 0.1
	},
	{
		name:"Scordite",
		group:"Scordite",
		batchsize:100,
		tritanium:346,
		pyerite:173,
		volume:0.15
	},
	{
		name:"Condensed Scordite",
		group:"Scordite",
		batchsize:100,
		tritanium:363,
		pyerite:182,
		volume:0.15
	},
	{
		name:"Massive Scordite",
		group:"Scordite",
		batchsize:100,
		tritanium:380,
		pyerite:190,
		volume:0.15
	},
	{
		name:"Pyroxeres",
		group:"Pyroxeres",
		batchsize:100,
		tritanium:351,
		pyerite:25,
		mexallon:50,
		nocxium:5,
		volume:0.3
	},
	{
		name:"Solid Pyroxeres",
		group:"Pyroxeres",
		batchsize:100,
		tritanium:368,
		pyerite:26,
		mexallon:53,
		nocxium:5,
		volume:0.3
	},
	{
		name:"Viscous Pyroxeres",
		group:"Pyroxeres",
		batchsize:100,
		tritanium:385,
		pyerite:27,
		mexallon:55,
		nocxium:5,
		volume:0.3
	},
	{
		name:"Plagioclase",
		group:"Plagioclase",
		batchsize:100,
		tritanium:107,
		pyerite:213,
		mexallon:107,
		volume:0.35
	},
	{
		name:"Azure Plagioclase",
		group:"Plagioclase",
		batchsize:100,
		tritanium:112,
		pyerite:224,
		mexallon:112,
		volume:0.35
	},
	{
		name:"Rich Plagioclase",
		group:"Plagioclase",
		batchsize:100,
		tritanium:117,
		pyerite:234,
		mexallon:117,
		volume:0.35
	},
	{
		name:"Omber",
		group:"Omber",
		batchsize:100,
		tritanium:85,
		pyerite:34,
		isogen:85,
		volume:0.6
	},
	{
		name:"Silvery Omber",
		group:"Omber",
		batchsize:100,
		tritanium:89,
		pyerite:36,
		isogen:89,
		volume:0.6
	},
	{
		name:"Golden Omber",
		group:"Omber",
		batchsize:100,
		tritanium:94,
		pyerite:38,
		isogen:94,
		volume:0.6
	},
	{
		name:"Kernite",
		group:"Kernite",
		batchsize:100,
		tritanium:134,
		mexallon:267,
		isogen:134,
		volume:1.2
	},
	{
		name:"Luminous Kernite",
		group:"Kernite",
		batchsize:100,
		tritanium:140,
		mexallon:281,
		isogen:140,
		volume:1.2
	},
	{
		name:"Fiery Kernite",
		group:"Kernite",
		batchsize:100,
		tritanium:147,
		mexallon:294,
		isogen:147,
		volume:1.2
	},
	{
		name:"Jaspet",
		group:"Jaspet",
		batchsize:100,
		tritanium:72,
		pyerite:121,
		mexallon:144,
		nocxium:72,
		zydrine:3,
		volume:2
	},
	{
		name:"Pure Jaspet",
		group:"Jaspet",
		batchsize:100,
		tritanium:76,
		pyerite:127,
		mexallon:151,
		nocxium:76,
		zydrine:3,
		volume:2
	},
	{
		name:"Pristine Jaspet",
		group:"Jaspet",
		batchsize:100,
		tritanium:79,
		pyerite:133,
		mexallon:158,
		nocxium:79,
		zydrine:3,
		volume:2
	},
	{
		name:"Hemorphite",
		group:"Hemorphite",
		batchsize:100,
		tritanium:180,
		pyerite:72,
		mexallon:17,
		isogen:59,
		nocxium:118,
		zydrine:8,
		volume:3
	},
	{
		name:"Vivid Hemorphite",
		group:"Hemorphite",
		batchsize:100,
		tritanium:189,
		pyerite:76,
		mexallon:18,
		isogen:62,
		nocxium:123,
		zydrine:9,
		volume:3
	},
	{
		name:"Radiant Hemorphite",
		group:"Hemorphite",
		batchsize:100,
		tritanium:198,
		pyerite:79,
		mexallon:19,
		isogen:65,
		nocxium:129,
		zydrine:9,
		volume:3
	},
	{
		name:"Hedbergite",
		group:"Hedbergite",
		batchsize:100,
		pyerite:81,
		isogen:196,
		nocxium:98,
		zydrine:9,
		volume:3
	},
	{
		name:"Vitric Hedbergite",
		group:"Hedbergite",
		batchsize:100,
		pyerite:85,
		isogen:206,
		nocxium:103,
		zydrine:10,
		volume:3,
	},
	{
		name:"Glazed Hedbergite",
		group:"Hedbergite",
		batchsize:100,
		pyerite:89,
		isogen:216,
		nocxium:108,
		zydrine:10,
		volume:3,
	},
	{
		name:"Gneiss",
		group:"Gneiss",
		batchsize:100,
		tritanium:1278,
		mexallon:1278,
		isogen:242,
		zydrine:60,
		volume:5
	},
	{
		name:"Irridescent Gneiss",
		group:"Gneiss",
		batchsize:100,
		tritanium:1342,
		mexallon:1342,
		isogen:254,
		zydrine:63,
		volume:5
	},
	{
		name:"Prismatic Gneiss",
		group:"Gneiss",
		batchsize:100,
		tritanium:1406,
		mexallon:1406,
		isogen:266,
		zydrine:65,
		volume:5
	},
	{
		name:"Dark Ochre",
		group:"Ochre",
		batchsize:100,
		tritanium:8804,
		nocxium:173,
		zydrine:87,
		volume:8
	},
	{
		name:"Onyx Ochre",
		group:"Ochre",
		batchsize:100,
		tritanium:9245,
		nocxium:182,
		zydrine:87,
		volume:8
	},
	{
		name:"Obsidian Ochre",
		group:"Ochre",
		batchsize:100,
		tritanium:9685,
		nocxium:190,
		zydrine:95,
		volume:8
	},
	{
		name:"Crokite",
		group:"Crokite",
		batchsize:100,
		tritanium:20992,
		nocxium:290,
		zydrine:385,
		volume:16
	},
	{
		name:"Sharp Crokite",
		group:"Crokite",
		batchsize:100,
		tritanium:22041,
		nocxium:290,
		zydrine:385,
		volume:16
	},
	{
		name:"Crystalline Crokite",
		group:"Crokite",
		batchsize:100,
		tritanium:23091,
		nocxium:290,
		zydrine:385,
		volume:16
	},
	{
		name:"Spodumain",
		group:"Spodumain",
		batchsize:100,
		tritanium:39221,
		pyerite:4972,
		megacyte:78,
		volume:16
	},
	{
		name:"Bright Spodumain",
		group:"Spodumain",
		batchsize:100,
		tritanium:41182,
		pyerite:5221,
		megacyte:82,
		volume:16
	},
	{
		name:"Gleaming Spodumain",
		group:"Spodumain",
		batchsize:100,
		tritanium:43143,
		pyerite:5469,
		megacyte:86,
		volume:16
	},
	{
		name:"Bistot",
		group:"Bistot",
		batchsize:100,
		pyerite:16572,
		zydrine:236,
		megacyte:118,
		volume:16
	},
	{
		name:"Triclinic Bistot",
		group:"Bistot",
		batchsize:100,
		pyerite:17402,
		zydrine:248,
		megacyte:124,
		volume:16
	},
	{
		name:"Monoclinic Bistot",
		group:"Bistot",
		batchsize:100,
		pyerite:18230,
		zydrine:248,
		megacyte:130,
		volume:16
	},
	{
		name:"Arkonor",
		group:"Arkonor",
		batchsize:100,
		tritanium:6905,
		zydrine:115,
		megacyte:230,
		mexallon:1278,
		volume:16
	},
	{
		name:"Crimson Arkonor",
		group:"Arkonor",
		batchsize:100,
		tritanium:7251,
		zydrine:121,
		megacyte:242,
		mexallon:1342,
		volume:16
	},
	{
		name:"Prime Arkonor",
		group:"Arkonor",
		batchsize:100,
		tritanium:7596,
		zydrine:127,
		megacyte:253,
		mexallon:1406,
		volume:16
	},
	{
		name:"Mercoxit",
		group:"Mercoxit",
		batchsize:100,
		morphite:293,
		volume:40
	},
	{
		name:"Magma Mercoxit",
		group:"Mercoxit",
		batchsize:100,
		morphite:308,
		volume:40
	},
	{
		name:"Vitreous Mercoxit",
		group:"Mercoxit",
		batchsize:100,
		morphite:323,
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
		batchsize:100,
		tritanium:88,
		pyerite:44,
		mexallon:11,
		volume:1
	},
	{
		name:"Crystal Compound",
		batchsize:100,
		mexallon:11,
		isogen:2,
		volume:1
	},
	{
		name:"Precious Alloy",
		batchsize:100,
		pyerite:7,
		isogen:18,
		volume:1
	},
	{
		name:"Sheen Compound",
		batchsize:100,
		tritanium:124,
		pyerite:44,
		isogen:23,
		nocxium:1,
		volume:1
	},
	{
		name:"Gleaming Alloy",
		batchsize:100,
		tritanium:299,
		nocxium:5,
		volume:1
	},
	{
		name:"Lucent Compound",
		batchsize:100,
		pyerite:174,
		mexallon:2,
		isogen:11,
		nocxium:5,
		volume:1
	},
	{
		name:"Dark Compound",
		batchsize:100,
		isogen:23,
		nocxium:10,
		volume:1
	},
	{
		name:"Motley Compound",
		batchsize:100,
		isogen:28,
		nocxium:13,
		volume:1
	},
	{
		name:"Lustering Alloy",
		batchsize:100,
		mexallon:88,
		isogen:32,
		nocxium:35,
		zydrine:1,
		volume:1
	},
	{
		name:"Glossy Compound",
		batchsize:100,
		mexallon:210,
		nocxium:4,
		megacyte:3,
		volume:1
	},
	{
		name:"Plush Compound",
		batchsize:100,
		tritanium:3200,
		pyerite:800,
		isogen:20,
		zydrine:9,
		volume:1
	},
	{
		name:"Opulent Compound",
		batchsize:100,
		morphite:2,
		volume:1
	}
	);
}

