mining-calculator
=================

A spreadsheet calculator for various mining-related calculations in EVE Online.

Installation
------------

No installation is required. Just download all the files (or throw them on a server somewhere) and open `orecalc.html` in your favorite browser.

The JavaScript works fine in all modern browsers, but if you're using something old or weird and things aren't working correctly please file a bug report so I can at least try to fix it.

Mining Yields
-------------
Currently calculates ISK per cubic meter for raw and refined ores. The calculation for raw ores is simply based on the market price and the volume, but calculating refining yield requires this formula:

![img](https://chart.googleapis.com/chart?chf=bg,s,fffff0&cht=tx&chl=y_{\\text{ore}}%20%3D%20f%20\\times%20%281%20%2B%200.02%20\\times%20s_{\\text{ore}}%29%20\\times%20%281%20%2B%200.03%20\\times%20r%29%20\\times%20%281%20%2B%200.02%20\\times%20e%29\\times%20t)

Where:
- *f* is the facility efficiency
- *R* is the recycling constant of 0.375
- *s<sub>ore</sub>* is the player's skill level for the given ore (e.g. Scordite Processing)
- *r* is the player's level in the Refining skill
- *e* is the player's level in the Refinery Efficiency skill
- *t* is the tax multiplier, given by the formula
  - ![img](https://chart.googleapis.com/chart?chf=bg,s,fffff0&cht=tx&chl=t%20%3D%201%20-%20\\frac{5%20-%200.75\\times%20s}{100})
  - Where *s* is the player's standing with the corporation that owns the refining facility.

Once the yields are calculated, the prices of the various minerals are used to calculate the total value for each batch of ore. This value is then divided by the batch size and the volume of the original ore to get an ISK per cubic meter figure that can be compared to the value of the raw ore.

### Example
For example, let's say a player has a batch of veldspar to process. If the player has these skills,
- Refining level 5
- Refinery Effiency level 3
- Veldspar Processing level 2

and a standing of 3.62 at a facility with 50% efficiency, then we can calculate that the tax multiplier will be (1 - (5 - 0.75 * 3.63)/100 = **0.97715x**, meaning that the overall yield will be 0.5 * (1 + 0.03*5)(1 + 0.02*3)(1 + 0.02*2) * 0.97715 = **0.619395842**, or 62%.

Veldspar has a volume of 0.1 m<sup>3</sup>, so if the price of veldspar is ISK 17.61 per unit, then the value per cubic meter of cargo space is **176.10 ISK/m<sup>3</sup>**.

A batch of 100 units of Veldspar yields 415 units of tritanium. Since our effiency is only 62%, we'll get 257 units of tritanium from each batch. If tritanium's price is ISK 5.73 per unit, then the value of each batch is ISK 1472.61. Dividing by the volume of the required 100 units of veldspar (10 m<sup>3</sup>) gives us a refined value of **147.26 ISK/m<sup>3</sup>.**

In this case, the player can earn more money by selling the raw ore than by trying to refine it first (176.10 ISK/m<sup>3</sup> vs. 147.26 ISK/m<sup>3</sup>).
