/* This file depends on items.js and will not work unless it is loaded first. */

// JavaScript Document
"use strict";

// A $ function inspired by JQuery. Doesn't do anything fancy; just saves space.
function $(descriptor)
{
	// Get by ID
	if(descriptor[0] === "#")
		return document.getElementById(descriptor.substring(1));
	// Get by class name
	if(descriptor[0] === ".")
		return document.getElementsByClassName(descriptor.substring(1));

	return null;
}

// Make the selected tab visible and hide the others
function changeTab(tabid)
{
	var tab = document.getElementById(tabid);
	var tabs = $(".tab");
	// Hide all tabs
	if(tabs)
	{
		for(var t in tabs)
		{
			if(tabs[t].classList)
			{
				tabs[t].classList.remove("visible");
				tabs[t].classList.add("hidden");
			}
		}
	}
	// Show the selected one
	if(tab)
	{
		tab.classList.add("visible");
		tab.classList.remove("hidden");
	}
}

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

// Calculate the prices for an ore and its variants, saving the values to the ore object
function calculateVolumetricPrices(market, ore)
{
	// Calculate the base price
	ore.refinedPricePerm3 = moneyFormat(calculateISKperm3(market, ore));
	// Get the raw prices for the base ore and the variants
	ore.rawPricePerm3 = moneyFormat(getNiceNumber(ore.name.toLowerCase().replace(' ','-') + "-price") / ore.volume);
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
	if(p !== -1)
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
	$("#page-status").innerHTML = status_string;
	$("#page-status").className = status_class;
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
	// Convert id to string
	id = String(id);
	for(var i = 0; i < elements.length; i++)
	{
		if(elements[i].id === id)
		{
			return elements[i];
		}
	}
	return null;
}

// Get market data from eve-central.com
function populateMarketData()
{
	// The URL of the API
	var api_url = "http://api.eve-central.com/api/marketstat";
	// The User Agent string to use
	var user_agent = "JavaScript/Ore Calculator 0.2";

	// Get an XHR object
	var xmlhttp = new XMLHttpRequest();
	// Parse the XML the server sends back and use the values to populate the prices form
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
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
				var price = 0;
				if(element)
				{
					price = element.getElementsByTagName("buy")[0].getElementsByTagName(price_type)[0].textContent;
				}
				document.getElementById(types[i].name + "-price").value = price;
			}
			updateStatus("Prices Updated","ok");
		} else if(xmlhttp.readyState === 4) {
			updateStatus("An error occurred while loading price data (status " + xmlhttp.status + " returned)","error");
		}
	};
	// Get the type IDs and names
	var types = get_type_ids();
	// Build POST query
	var post_data = "";
	for(var i = 0; i < types.length; i++)
	{
		post_data += "typeid=" + types[i].id + "&";
	}
	post_data += "regionlimit=" + $("#eve-central-region").value;
	
	// Connect to the API server and send some headers and a POST request
	updateStatus("Loading Price Data...","busy");
	xmlhttp.open("POST",api_url,true);
	xmlhttp.setRequestHeader("User-Agent",user_agent);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(post_data);
}

// Calculate the player's base efficiency
function calculate_player_efficiency()
{
	var refining_skill = getNiceNumber("refining-skill");
	var refining_efficiency = getNiceNumber("efficiency-skill");

	return (1 + 0.03 * refining_skill) * (1 + 0.02 * refining_efficiency);
}

// Calculate the station tax multiplier based on the player's standing
function calculate_tax()
{
	var standing = getNiceNumber("facility-standing");
	
	return 1 - (5 - (0.75 * standing))/100;
}

// Calculate the refining efficiency for the given ore using the values from the form
function calculate_efficiency(orename)
{
	var facility_efficiency = getNiceNumber("facility-efficiency");
	var standing = getNiceNumber("facility-standing");
	
	var tax = calculate_tax();
	// Display the effective facility efficiency to the user
	$("#facility").getElementsByTagName("h2")[0].innerHTML = "Facility [+" + Math.round((facility_efficiency * tax) * 1000)/10 + "%]";
	
	var player_efficiency = calculate_player_efficiency();
	// Display the effective player efficiency to the user
	$("#skills").getElementsByTagName("h2")[0].innerHTML = "Skills [+" + Math.round(player_efficiency * 100)/100 + "x]";
	
	var ore_skill = getNiceNumber(orename.toLowerCase() + "-skill");
	return Math.min(facility_efficiency * player_efficiency * (1 + 0.02 * ore_skill),1) * tax;
}

// Re-write the price table
function write_ore_prices(ores)
{
	var table = $("#ores");
	// Empty table and rewrite header
	var html = "<thead><tr><th>Ore</th><th>Batch Size</th><th>Tritanium</th><th>Pyerite</th><th>Mexallon</th><th>Isogen</th><th>Nocxium</th><th>Zydrine</th><th>Megacyte</th><th>Morphite</th><th>ISK/m<sup>3</sup><br />(Raw)</th><th>ISK/m<sup>3</sup><br />(Refined)</th></tr></thead><tbody>";
	// Iterate over ores and add values to table
	for(var i = 0; i < ores.length; i++)
	{
		html += "<tr>";
		html += "<td>" + ores[i].name + "</td>";
		// Base ore
		html += "<td>" + ores[i].batchsize + "</td>";
		html += "<td>" + ores[i].tritanium + "</td>";
		html += "<td>" + ores[i].pyerite + "</td>";
		html += "<td>" + ores[i].mexallon + "</td>";
		html += "<td>" + ores[i].isogen + "</td>";
		html += "<td>" + ores[i].nocxium + "</td>";
		html += "<td>" + ores[i].zydrine + "</td>";
		html += "<td>" + ores[i].megacyte + "</td>";
		html += "<td>" + ores[i].morphite + "</td>";
		html += "<td>" + ores[i].rawPricePerm3 + "</td>";
		html += "<td>" + ores[i].refinedPricePerm3 + "</td>";
		html += "</tr>";
	}
	html += "</tbody>";
	table.innerHTML = html;
}

// Rewrite compounds table
function write_compound_prices(compounds)
{
	var table = $("#compounds");
	var html = "<thead><tr><th>Compound</th><th>Batch Size</th><th>Tritanium</th><th>Pyerite</th><th>Mexallon</th><th>Isogen</th><th>Nocxium</th><th>Zydrine</th><th>Megacyte</th><th>Morphite</th><th>ISK/m<sup>3</sup> (Raw)</th><th>ISK/m<sup>3</sup> (Refined)</th></tr></thead><tbody>";
	// Iterate over compounds and add values to table
	for(var i = 0; i < compounds.length; i++)
	{
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
		html += "<td>" + compounds[i].pricePerm3 + "</td>";
		html += "<td>" + compounds[i].pricePerm3 + "</td>";
		html += "</tr>";
	}
	html += "</tbody>";
	table.innerHTML = html;
}

// Calculate market values of various ores
function recalculate()
{
	// Get information about the game items
	var minerals = get_mineral_names();
	var ores = get_ore_objects();
	var compounds = get_compound_objects();
	
	// Get the prices from the form
	var market = getPrices();
	var base_efficiency = calculate_player_efficiency() * getNiceNumber("facility-efficiency");
	// Calculate efficiencies and prices and normalize the ores, compounds, etc. so that minerals with an undefined yield are defined to have a yield of zero
	for(var j = 0; j < minerals.length; j++)
	{
		var mineral = minerals[j];
		// Ores
		for(var o in ores)
		{
			if(ores[o][mineral] === undefined)
			{
				ores[o][mineral] = 0;
			}
			ores[o][mineral] = Math.floor(ores[o][mineral] * calculate_efficiency(ores[o].group));
			// Calculate raw and refined prices
			calculateVolumetricPrices(market, ores[o]);
		}
		// Compounds
		for(var c in compounds)
		{
			if(compounds[c][mineral] === undefined)
			{
				compounds[c][mineral] = 0;
			}
			compounds[c].pricePerm3 = moneyFormat(calculateISKperm3(market, compounds[c]));
		}
	}
	
	$("#efficiency").innerHTML = "Base/Net Refining Efficiency: " + Math.round(base_efficiency * 1000)/10 + "% / " + Math.round((base_efficiency * calculate_tax())*1000)/10 + "%";
	// Write data to table
	write_ore_prices(ores);
	write_compound_prices(compounds);
	// Make tables sortable again
	sortables_init();

	// Update the page status
	updateStatus("Ready.","ok");
}

