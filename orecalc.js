"use strict";function $(a){if(a[0]==="#"){return document.getElementById(a.substring(1))}if(a[0]==="."){return document.getElementsByClassName(a.substring(1))}return null}function changeTab(a){var d=document.getElementById(a);var c=$(".tab");if(c){for(var b in c){if(c[b].classList){c[b].classList.remove("visible");c[b].classList.add("hidden")}}}if(d){d.classList.add("visible");d.classList.remove("hidden")}}function calculateISKperm3(c,a){var b=c.tritanium*a.tritanium;b+=c.pyerite*a.pyerite;b+=c.mexallon*a.mexallon;b+=c.isogen*a.isogen;b+=c.nocxium*a.nocxium;b+=c.zydrine*a.zydrine;b+=c.megacyte*a.megacyte;b+=c.morphite*a.morphite;b/=a.volume;b/=a.batchsize;return b}function calculateVolumetricPrices(b,a){a.refinedPricePerm3=moneyFormat(calculateISKperm3(b,a));a.rawPricePerm3=moneyFormat(getNiceNumber(a.name.toLowerCase()+"-price")/a.volume);a.rawPlus5PricePerm3=moneyFormat(getNiceNumber(a.plus5.toLowerCase()+"-"+a.name.toLowerCase()+"-price")/a.volume);a.rawPlus10PricePerm3=moneyFormat(getNiceNumber(a.plus10.toLowerCase()+"-"+a.name.toLowerCase()+"-price")/a.volume)}function getNiceNumber(a){a=a.replace(" ","");var c=document.getElementById(a);if(!c){return 0}var b=c.value;var e=b.indexOf("%");if(e!==-1){b=b.substr(0,e)/100}var d=b*1;if(!isNaN(d)){return d}else{document.getElementById(a).value="NaN";return 0}}function updateStatus(a,b){$("#page-status").innerHTML=a;$("#page-status").className=b}function moneyFormat(c){var a=Math.floor(c);var b=Math.round((c-a)*100);if(b<10){b="0"+b}return a+"."+b}function getPrices(){var a=getNiceNumber("tritanium-price");var b=getNiceNumber("pyerite-price");var f=getNiceNumber("mexallon-price");var h=getNiceNumber("isogen-price");var d=getNiceNumber("nocxium-price");var c=getNiceNumber("zydrine-price");var e=getNiceNumber("megacyte-price");var g=getNiceNumber("morphite-price");return{tritanium:a,pyerite:b,mexallon:f,isogen:h,nocxium:d,zydrine:c,megacyte:e,morphite:g}}function findElement(b,c){c=String(c);for(var a=0;a<b.length;a++){if(b[a].id===c){return b[a]}}return null}function populateMarketData(){var e="http://api.eve-central.com/api/marketstat";var a="JavaScript/Ore Calculator 0.2";var d=new XMLHttpRequest();d.onreadystatechange=function(){if(d.readyState===4&&d.status===200){var l=d.responseXML.getElementsByTagName("marketstat")[0];var n=l.getElementsByTagName("type");var m=document.getElementsByName("price-type");var j="avg";for(var h=0;h<m.length;h++){if(m[h].checked){j=m[h].value}}for(var h=0;h<c.length;h++){var g=findElement(n,c[h].id);var k=0;if(g){k=g.getElementsByTagName("buy")[0].getElementsByTagName(j)[0].textContent}document.getElementById(c[h].name+"-price").value=k}updateStatus("Prices Updated","ok")}else{if(d.readyState===4){updateStatus("An error occurred while loading price data (status "+d.status+" returned)","error")}}};var c=get_type_ids();var f="";for(var b=0;b<c.length;b++){f+="typeid="+c[b].id+"&"}f+="regionlimit="+$("#eve-central-region").value;updateStatus("Loading Price Data...","busy");d.open("POST",e,true);d.setRequestHeader("User-Agent",a);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.send(f)}function calculate_player_efficiency(){var b=getNiceNumber("refining-skill");var a=getNiceNumber("efficiency-skill");var c=0.375;return c*(1+0.02*b)*(1+0.04*a)}function calculate_tax(){var a=getNiceNumber("facility-standing");return Math.max((0.05*((20/3)-a))*(3/20),0)}function calculate_efficiency(e){var b=getNiceNumber("facility-efficiency");var a=getNiceNumber("facility-standing");var c=calculate_tax();$("#facility").getElementsByTagName("h2")[0].innerHTML="Facility [+"+Math.round((b-c)*1000)/10+"%]";var d=calculate_player_efficiency();$("#skills").getElementsByTagName("h2")[0].innerHTML="Skills [+"+Math.round(d*1000)/10+"%]";var f=getNiceNumber(e.toLowerCase()+"-skill");return Math.min(b+d*(1+0.05*f),1)-c}function write_ore_prices(a){var d=$("#ores");var c="<thead><tr><th>Ore</th><th>Batch Size</th><th>Tritanium</th><th>Pyerite</th><th>Mexallon</th><th>Isogen</th><th>Nocxium</th><th>Zydrine</th><th>Megacyte</th><th>Morphite</th><th>ISK/m<sup>3</sup><br />(Raw)</th><th>ISK/m<sup>3</sup><br />(Refined)</th></tr></thead><tbody>";for(var b=0;b<a.length;b++){c+="<tbody>";c+="<tr>";c+="<td>"+a[b].name+"</td>";c+="<td>"+a[b].batchsize+"</td>";c+="<td>"+a[b].tritanium+"</td>";c+="<td>"+a[b].pyerite+"</td>";c+="<td>"+a[b].mexallon+"</td>";c+="<td>"+a[b].isogen+"</td>";c+="<td>"+a[b].nocxium+"</td>";c+="<td>"+a[b].zydrine+"</td>";c+="<td>"+a[b].megacyte+"</td>";c+="<td>"+a[b].morphite+"</td>";c+="<td>"+a[b].rawPricePerm3+"</td>";c+="<td>"+a[b].refinedPricePerm3+"</td>";c+="</tr>";c+="<tr>";c+="<td>"+a[b].plus5+" "+a[b].name+"</td>";c+="<td>"+Math.round(a[b].batchsize*1.05)+"</td>";c+="<td>"+Math.round(a[b].tritanium*1.05)+"</td>";c+="<td>"+Math.round(a[b].pyerite*1.05)+"</td>";c+="<td>"+Math.round(a[b].mexallon*1.05)+"</td>";c+="<td>"+Math.round(a[b].isogen*1.05)+"</td>";c+="<td>"+Math.round(a[b].nocxium*1.05)+"</td>";c+="<td>"+Math.round(a[b].zydrine*1.05)+"</td>";c+="<td>"+Math.round(a[b].megacyte*1.05)+"</td>";c+="<td>"+Math.round(a[b].morphite*1.05)+"</td>";c+="<td>"+a[b].rawPlus5PricePerm3+"</td>";c+="<td>"+moneyFormat(a[b].refinedPricePerm3*1.05)+"</td>";c+="</tr>";c+="<tr>";c+="<td>"+a[b].plus10+" "+a[b].name+"</td>";c+="<td>"+Math.round(a[b].batchsize*1.1)+"</td>";c+="<td>"+Math.round(a[b].tritanium*1.1)+"</td>";c+="<td>"+Math.round(a[b].pyerite*1.1)+"</td>";c+="<td>"+Math.round(a[b].mexallon*1.1)+"</td>";c+="<td>"+Math.round(a[b].isogen*1.1)+"</td>";c+="<td>"+Math.round(a[b].nocxium*1.1)+"</td>";c+="<td>"+Math.round(a[b].zydrine*1.1)+"</td>";c+="<td>"+Math.round(a[b].megacyte*1.1)+"</td>";c+="<td>"+Math.round(a[b].morphite*1.1)+"</td>";c+="<td>"+a[b].rawPlus10PricePerm3+"</td>";c+="<td>"+moneyFormat(a[b].refinedPricePerm3*1.1)+"</td>";c+="</tr>";c+="</tbody>"}c+="</tbody>";d.innerHTML=c}function write_compound_prices(c){var d=$("#compounds");var b="<thead><tr><th>Compound</th><th>Batch Size</th><th>Tritanium</th><th>Pyerite</th><th>Mexallon</th><th>Isogen</th><th>Nocxium</th><th>Zydrine</th><th>Megacyte</th><th>Morphite</th><th>ISK/m<sup>3</sup> (Raw)</th><th>ISK/m<sup>3</sup> (Refined)</th></tr></thead><tbody>";for(var a=0;a<c.length;a++){b+="<tr>";b+="<td>"+c[a].name+"</td>";b+="<td>"+c[a].batchsize+"</td>";b+="<td>"+c[a].tritanium+"</td>";b+="<td>"+c[a].pyerite+"</td>";b+="<td>"+c[a].mexallon+"</td>";b+="<td>"+c[a].isogen+"</td>";b+="<td>"+c[a].nocxium+"</td>";b+="<td>"+c[a].zydrine+"</td>";b+="<td>"+c[a].megacyte+"</td>";b+="<td>"+c[a].morphite+"</td>";b+="<td>"+c[a].pricePerm3+"</td>";b+="<td>"+c[a].pricePerm3+"</td>";b+="</tr>"}b+="</tbody>";d.innerHTML=b}function recalculate(){var b=get_mineral_names();var h=get_ore_objects();var e=get_compound_objects();var d=getPrices();var k=calculate_player_efficiency()+getNiceNumber("facility-efficiency");for(var f=0;f<b.length;f++){var i=b[f];for(var a in h){if(h[a][i]===undefined){h[a][i]=0}h[a][i]=Math.ceil(h[a][i]*calculate_efficiency(h[a].name));calculateVolumetricPrices(d,h[a])}for(var g in e){if(e[g][i]===undefined){e[g][i]=0}e[g].pricePerm3=moneyFormat(calculateISKperm3(d,e[g]))}}$("#efficiency").innerHTML="Base/Net Refining Efficiency: "+Math.round(k*1000)/10+"% / "+Math.round((k-calculate_tax())*1000)/10+"%";write_ore_prices(h);write_compound_prices(e);sortables_init();updateStatus("Ready.","ok")};