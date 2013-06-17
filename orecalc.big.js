// JavaScript Document
"use strict";

// Calculate the ISK per cubic meter for a given ore using the market prices provided by the user
function calculateISKperm3(market, ore)
{
	// Add the contributions from each mineral
	var value = market.tritanium * ore.tritanium;
	value += market.pyerite * ore.pyerite;
	value += market.mexallon * ore.mexallon;
	value += market.isogen * ore.isogen;
	value += market.nocxium * ore.nocxium;
	value += market.zydrine * ore.zydrine;
	value += market.megacyte * ore.megacyte;
	value += market.morphite * ore.morphite;
	// Divide by the volume
	value /= ore.volume;
	value /= ore.batchsize;

	return value;
}

// Make sure the value returned from a form is a numeric type
function getNiceNumber(element_id)
{
	// Collapse spaces in the element id
	element_id = element_id.replace(" ","");
	// Make sure the element exists
	var element = document.getElementById(element_id);
	if(!element)
	{
		return 0;
	}
	// Get the value of the element
	var str_value = element.value;
	// Check for percentages
	var p = str_value.indexOf("%");
	if(p != -1)
	{
		str_value = str_value.substr(0,p) / 100;
	}
	// Convert to a number
	var value = str_value * 1;
	// Check for NaN and return the value
	if(!isNaN(value))
	{
		return value;
	} else { // If the value was NaN, return 0 and set the element's value to NaN
		document.getElementById(element_id).value = "NaN";
		return 0;
	}
}

// Update the page status (for use with AJAX requests)
function updateStatus(status_string, status_class)
{
	document.getElementById("page-status").innerHTML = status_string;
	document.getElementById("page-status").className = status_class;
}

// Round to the neareast 0.01
function moneyFormat(value)
{
	var currency = Math.floor(value);
	var fraction = Math.round((value-currency)*100);
	// Add a leading zero if required
	if(fraction < 10)
	{
		fraction = "0" + fraction;
	}

	return currency + "." + fraction;
}

// Get the market prices from the form
function getPrices()
{
	var tritanium = getNiceNumber("tritanium-price");
	var pyerite = getNiceNumber("pyerite-price");
	var mexallon = getNiceNumber("mexallon-price");
	var isogen = getNiceNumber("isogen-price");
	var nocxium = getNiceNumber("nocxium-price");
	var zydrine = getNiceNumber("zydrine-price");
	var megacyte = getNiceNumber("megacyte-price");
	var morphite = getNiceNumber("morphite-price");
	// Return a structure containing all the prices
	return {
		tritanium: tritanium,
		pyerite: pyerite,
		mexallon: mexallon,
		isogen: isogen,
		nocxium: nocxium,
		zydrine: zydrine,
		megacyte: megacyte,
		morphite: morphite
	};
}

// Find an XML element by ID -- identical to .getElementById except working
function findElement(elements, id)
{
	for(var i = 0; i < elements.length; i++)
	{
		if(elements[i].id == id)
		{
			return elements[i];
		}
	}
	return null;
}

// Get market data from eve-central.com
function populateMarketData()
{
	// Get an XHR object
	var xmlhttp = new XMLHttpRequest();
	// Parse the XML the server sends back and use the values to populate the prices form
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var data = xmlhttp.responseXML.getElementsByTagName("marketstat")[0];
			var type_data = data.getElementsByTagName("type");
			
			// Determine whether to use min/max/avg price
			var price_type_elements = document.getElementsByName("price-type");
			var price_type = "avg";
			for(var i = 0; i < price_type_elements.length; i++)
			{
				if(price_type_elements[i].checked)
				{
					price_type = price_type_elements[i].value;
				}
			}
			
			// Put prices in their respective form fields
			for(var i = 0; i < types.length; i++)
			{
				var element = findElement(type_data, types[i].id);
				if(element)
				{
					var price = element.getElementsByTagName("buy")[0].getElementsByTagName(price_type)[0].textContent;
				} else {
					var price = 0;
				}
				document.getElementById(types[i].name + "-price").value = price;
			}
			updateStatus("Prices Updated","ok");
		} else if(xmlhttp.readyState == 4) {
			updateStatus("An error occurred while loading price data (status " + xmlhttp.status + " returned)","error");
		}
	};
	// Build our query
	/* Type IDs
		34          Tritanium
		35          Pyerite
		36          Mexallon
		37          Isogen
		38          Nocxium
		39          Zydrine
		40          Megacyte
		11399       Morphite
		...
		1223        Bistot
		1224        Pyroxeres
		1225        Crokite
		1226        Jaspet
		1227        Omber
		1228        Scordite
		1229        Gneiss
		1230        Veldspar
		1231        Hemorphite
		1232        Dark Ochre
		18          Plagioclase
		19          Spodumain
		20          Kernite
		21          Hedbergite
		22          Arkonor
		11396       Mercoxit
	*/
	var types = new Array(
	{
		id:34,
		name:"tritanium"
	},
	{
		id:35,
		name:"pyerite"
	},
	{
		id:36,
		name:"mexallon"
	},
	{
		id:37,
		name:"isogen"
	},
	{
		id:38,
		name:"nocxium"
	},
	{
		id:39,
		name:"zydrine"
	},
	{
		id:40,
		name:"megacyte"
	},
	{
		id:11399,
		name:"morphite"
	},
	{
		id:1223,
		name:"bistot"
	},
	{
		id:1224,
		name:"pyroxeres"
	},
	{
		id:1225,
		name:"crokite"
	},
	{
		id:1226,
		name:"jaspet"
	},
	{
		id:1227,
		name:"omber"
	},
	{
		id:1228,
		name:"scordite"
	},
	{
		id:1229,
		name:"gneiss"
	},
	{
		id:1230,
		name:"veldspar"
	},
	{
		id:1231,
		name:"hemorphite"
	},
	{
		id:1232,
		name:"darkochre"
	},
	{
		id:18,
		name:"plagioclase"
	},
	{
		id:19,
		name:"spodumain"
	},
	{
		id:20,
		name:"kernite"
	},
	{
		id:21,
		name:"hedbergite"
	},
	{
		id:22,
		name:"arkonor"
	},
	{
		id:11396,
		name:"mercoxit"
	});
	// Build POST query
	var post_data = "";
	for(var i = 0; i < types.length; i++)
	{
		post_data += "typeid=" + types[i].id + "&";
	}
	post_data += "regionlimit=" + document.getElementById("eve-central-region").value;
	
	// Connect to the API server and send some headers a POST request
	updateStatus("Loading Price Data...","busy");
	xmlhttp.open("POST","http://api.eve-central.com/api/marketstat",true);
	xmlhttp.setRequestHeader("User-Agent","JavaScript/Ore Calculator 0.1dev");
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(post_data);
}

// Toggle the advanced settings
function toggleAdvanced()
{
	if(document.getElementById("advanced").style.display != "block")
	{
		document.getElementById("advanced").style.display = "block";
	} else {
		document.getElementById("advanced").style.display = "none";
	}
}

// Calculate market values of various ores
function recalculate()
{
	// Mineral names
	var minerals = new Array("tritanium","pyerite","mexallon","isogen","nocxium","zydrine","megacyte","morphite");
	// Ore properties
	var ores = new Array(
	{
		name:"Veldspar",
		batchsize:333,
		tritanium:1000,
		volume:0.1
	},
	{
		name:"Scordite",
		batchsize:333,
		tritanium:833,
		pyerite:416,
		volume:0.15
	},
	{
		name:"Pyroxeres",
		batchsize:333,
		tritanium:844,
		pyerite:59,
		mexallon:120,
		nocxium:11,
		volume:0.3
	},
	{
		name:"Plagioclase",
		batchsize:333,
		tritanium:256,
		pyerite:512,
		mexallon:256,
		volume:0.35
	},
	{
		name:"Omber",
		batchsize:500,
		tritanium:307,
		pyerite:123,
		isogen:307,
		volume:0.6
	},
	{
		name:"Kernite",
		batchsize:400,
		tritanium:386,
		mexallon:773,
		isogen:386,
		volume:1.2
	},
	{
		name:"Jaspet",
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
		batchsize:500,
		tritanium:212,
		isogen:212,
		nocxium:424,
		zydrine:28,
		volume:3
	},
	{
		name:"Hedbergite",
		batchsize:500,
		isogen:708,
		nocxium:354,
		zydrine:32,
		volume:3
	},
	{
		name:"Gneiss",
		batchsize:400,
		tritanium:171,
		mexallon:171,
		isogen:343,
		zydrine:171,
		volume:5
	},
	{
		name:"Dark Ochre",
		batchsize:400,
		tritanium:250,
		nocxium:500,
		zydrine:250,
		volume:8
	},
	{
		name:"Crokite",
		batchsize:250,
		tritanium:331,
		nocxium:331,
		zydrine:663,
		volume:16
	},
	{
		name:"Spodumain",
		batchsize:250,
		tritanium:700,
		pyerite:140,
		megacyte:140,
		volume:16
	},
	{
		name:"Bistot",
		batchsize:200,
		pyerite:170,
		zydrine:341,
		megacyte:170,
		volume:16
	},
	{
		name:"Arkonor",
		batchsize:200,
		tritanium:300,
		zydrine:166,
		megacyte:333,
		volume:16
	},
	{
		name:"Mercoxit",
		batchsize:250,
		morphite:530,
		volume:40
	}
	);
	// Compound properties
	var compounds = new Array(
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
	// Ice properties
	
	// Normalize the ores, compounds, etc. so that minerals with an undefined yield are defined to have a yield of zero
	for(var j = 0; j < minerals.length; j++)
	{
		var mineral = minerals[j];
		// Ores
		for(var i = 0; i < ores.length; i++)
		{
			if(ores[i][mineral] === undefined)
			{
				ores[i][mineral] = 0;
			}
		}
		// Compounds
		for(var i = 0; i < compounds.length; i++)
		{
			if(compounds[i][mineral] === undefined)
			{
				compounds[i][mineral] = 0;
			}
		}
	}
	// Get the prices from the form
	var market = getPrices();
	
	// Calculate efficiency; default is 100% if the user does not specify any skills
	var base_efficiency = 1;
	var efficiency = {};
	for(var o in ores)
	{
		efficiency[ores[o].name] = 1;
	}
	// Determine whether or not to take player skills into account for yield calculations
	if(document.getElementById("advanced").style.display == "block")
	{
		var refining_skill = getNiceNumber("refining-skill");
		var refining_efficiency = getNiceNumber("efficiency-skill");
		var facility_efficiency = getNiceNumber("facility-efficiency");
		var standing = getNiceNumber("facility-standing");
		
		var tax = Math.max((0.05 * ((20/3) - standing))*(3/20),0);
		// Display the effective facility efficiency to the user
		document.getElementById("facility").getElementsByTagName("h2")[0].innerHTML = "Facility [+" + Math.round((facility_efficiency - tax) * 1000)/10 + "%]";
		
		var player_efficiency = 0.375 * (1 + 0.02 * refining_skill) * (1 + 0.04 * refining_efficiency);
		// Display the effective player efficiency to the user
		document.getElementById("skills").getElementsByTagName("h2")[0].innerHTML = "Skills [+" + Math.round(player_efficiency * 1000)/10 + "%]";
		
		base_efficiency = facility_efficiency + player_efficiency;
		for(var o in ores)
		{
			var name = ores[o].name;
			var ore_skill = getNiceNumber(name.toLowerCase() + "-skill");
			efficiency[name] = Math.min(facility_efficiency + player_efficiency * (1 + 0.05 * ore_skill),1) - tax;
		}
	}
	document.getElementById("estimated-efficiency").innerHTML = "Estimated Base Refining Efficiency: " + Math.round(base_efficiency * 1000)/10 + "%";
	// Write data to table
	var table = document.getElementById("ores");
	// Empty table and rewrite header
	var html = "<thead><tr><th>Ore</th><th>Batch Size</th><th>Tritanium</th><th>Pyerite</th><th>Mexallon</th><th>Isogen</th><th>Nocxium</th><th>Zydrine</th><th>Megacyte</th><th>Morphite</th><th>ISK/m<sup>3</sup> (Raw)</th><th>ISK/m<sup>3</sup> (Refined)</th></tr></thead><tbody>";
	// Iterate over ores and add values to table
	for(var i = 0; i < ores.length; i++)
	{
		var e = efficiency[ores[i].name];
		// Apply efficiency
		for(var j = 0; j < minerals.length; j++)
		{
			var mineral = minerals[j];
			ores[i][mineral] = Math.ceil(ores[i][mineral] * e);
		}
		var rawprice = getNiceNumber(ores[i].name.toLowerCase() + "-price");
		var rawiskperm3 = moneyFormat(rawprice / ores[i].volume);
		var iskperm3 = moneyFormat(calculateISKperm3(market, ores[i]));
		html += "<tr>";
		html += "<td>" + ores[i].name + "</td>";
		html += "<td>" + ores[i].batchsize + "</td>";
		html += "<td>" + ores[i].tritanium + "</td>";
		html += "<td>" + ores[i].pyerite + "</td>";
		html += "<td>" + ores[i].mexallon + "</td>";
		html += "<td>" + ores[i].isogen + "</td>";
		html += "<td>" + ores[i].nocxium + "</td>";
		html += "<td>" + ores[i].zydrine + "</td>";
		html += "<td>" + ores[i].megacyte + "</td>";
		html += "<td>" + ores[i].morphite + "</td>";
		html += "<td>" + rawiskperm3 + "</td>";
		html += "<td>" + iskperm3 + "</td>";
		html += "</tr>";
	}
	html += "</tbody>";
	table.innerHTML = html;
	
	// Rewrite compounds table
	table = document.getElementById("compounds");
	var html = "<thead><tr><th>Compound</th><th>Batch Size</th><th>Tritanium</th><th>Pyerite</th><th>Mexallon</th><th>Isogen</th><th>Nocxium</th><th>Zydrine</th><th>Megacyte</th><th>Morphite</th><th>ISK/m<sup>3</sup> (Raw)</th><th>ISK/m<sup>3</sup> (Refined)</th></tr></thead><tbody>";
	// Iterate over compounds and add values to table
	for(var i = 0; i < compounds.length; i++)
	{
		var iskperm3 = moneyFormat(calculateISKperm3(market, compounds[i]));
		html += "<tr>";
		html += "<td>" + compounds[i].name + "</td>";
		html += "<td>" + compounds[i].batchsize + "</td>";
		html += "<td>" + compounds[i].tritanium + "</td>";
		html += "<td>" + compounds[i].pyerite + "</td>";
		html += "<td>" + compounds[i].mexallon + "</td>";
		html += "<td>" + compounds[i].isogen + "</td>";
		html += "<td>" + compounds[i].nocxium + "</td>";
		html += "<td>" + compounds[i].zydrine + "</td>";
		html += "<td>" + compounds[i].megacyte + "</td>";
		html += "<td>" + compounds[i].morphite + "</td>";
		html += "<td>" + iskperm3 + "</td>";
		html += "<td>" + iskperm3 + "</td>";
		html += "</tr>";
	}
	html += "</tbody>";
	table.innerHTML = html;
	
	// Make tables sortable again
	sortables_init();
}
