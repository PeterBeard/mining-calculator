// JavaScript Document
"use strict";

// Return an array containing the names of the minerals
function get_mineral_names()
{
	return new Array("tritanium","pyerite","mexallon","isogen","nocxium","zydrine","megacyte","morphite");
}

// Return an array of objects containing information about ores
function get_ore_objects()
{
	return new Array(
	{
		name:"Veldspar",
		plus5:"Concentrated",
		plus10:"Dense",
		batchsize:333,
		tritanium:1000,
		volume:0.1
	},
	{
		name:"Scordite",
		plus5:"Condensed",
		plus10:"Massive",
		batchsize:333,
		tritanium:833,
		pyerite:416,
		volume:0.15
	},
	{
		name:"Pyroxeres",
		plus5:"Solid",
		plus10:"Viscous",
		batchsize:333,
		tritanium:844,
		pyerite:59,
		mexallon:120,
		nocxium:11,
		volume:0.3
	},
	{
		name:"Plagioclase",
		plus5:"Azure",
		plus10:"Rich",
		batchsize:333,
		tritanium:256,
		pyerite:512,
		mexallon:256,
		volume:0.35
	},
	{
		name:"Omber",
		plus5:"Silvery",
		plus10:"Golden",
		batchsize:500,
		tritanium:307,
		pyerite:123,
		isogen:307,
		volume:0.6
	},
	{
		name:"Kernite",
		plus5:"Luminous",
		plus10:"Fiery",
		batchsize:400,
		tritanium:386,
		mexallon:773,
		isogen:386,
		volume:1.2
	},
	{
		name:"Jaspet",
		plus5:"Pure",
		plus10:"Pristine",
		batchsize:500,
		tritanium:259,
		pyerite:259,
		mexallon:518,
		nocxium:259,
		zydrine:8,
		volume:2
	},
	{
		name:"Hemorphite",
		plus5:"Vivid",
		plus10:"Radiant",
		batchsize:500,
		tritanium:212,
		isogen:212,
		nocxium:424,
		zydrine:28,
		volume:3
	},
	{
		name:"Hedbergite",
		plus5:"Vitric",
		plus10:"Glazed",
		batchsize:500,
		isogen:708,
		nocxium:354,
		zydrine:32,
		volume:3
	},
	{
		name:"Gneiss",
		plus5:"Iridescent",
		plus10:"Prismatic",
		batchsize:400,
		tritanium:171,
		mexallon:171,
		isogen:343,
		zydrine:171,
		volume:5
	},
	{
		name:"Dark Ochre",
		plus5:"Onyx",
		plus10:"Obsidian",
		batchsize:400,
		tritanium:250,
		nocxium:500,
		zydrine:250,
		volume:8
	},
	{
		name:"Crokite",
		plus5:"Sharp",
		plus10:"Crystalline",
		batchsize:250,
		tritanium:331,
		nocxium:331,
		zydrine:663,
		volume:16
	},
	{
		name:"Spodumain",
		plus5:"Bright",
		plus10:"Gleaming",
		batchsize:250,
		tritanium:700,
		pyerite:140,
		megacyte:140,
		volume:16
	},
	{
		name:"Bistot",
		plus5:"Triclinic",
		plus10:"Monoclinic",
		batchsize:200,
		pyerite:170,
		zydrine:341,
		megacyte:170,
		volume:16
	},
	{
		name:"Arkonor",
		plus5:"Crimson",
		plus10:"Prime",
		batchsize:200,
		tritanium:300,
		zydrine:166,
		megacyte:333,
		volume:16
	},
	{
		name:"Mercoxit",
		plus5:"Magma",
		plus10:"Vitreous",
		batchsize:250,
		morphite:530,
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

