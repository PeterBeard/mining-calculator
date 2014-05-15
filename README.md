mining-calculator
=================

A spreadsheet calculator for various mining-related calculations in EVE Online.

Mining Yields
-------------
Currently calculates ISK per cubic meter for raw and refined ores. The calculation for raw ores is simply based on the market price and the volume, but calculating refining yield requires this formula:

![img](http://www.sciweavers.org/tex2img.php?eq=y_%7B%5Ctext%7Bore%7D%7D%20%3D%20f%20%2B%20R%5Cleft%281%20%2B%20%5Cfrac%7Bs_%7B%5Ctext%7Bore%7D%7D%7D%7B20%7D%5Cright%29%20%5Ctimes%20%5Cleft%281%20%2B%20%5Cfrac%7Br%7D%7B50%7D%5Cright%29%20%5Ctimes%20%5Cleft%281%20%2B%20%5Cfrac%7Be%7D%7B25%7D%5Cright%29%20-%20t&bc=White&fc=Black&im=jpg&fs=18&ff=modern&edit=0)

Where:
- *f* is the facility efficiency
- *R* is the recycling constant of 0.375
- *s<sub>ore</sub>* is the player's skill level for the given ore (e.g. Scordite Processing)
- *r* is the player's level in the Refining skill
- *e* is the player's level in the Refinery Efficiency skill
- *t* is the tax, given by the formula
  - ![img](http://www.sciweavers.org/tex2img.php?eq=t%20%3D%20%5Cleft%28%5Cfrac%7B1%7D%7B20%7D%20-%20%5Cfrac%7B3s%7D%7B400%7D%5Cright%29&bc=White&fc=Black&im=jpg&fs=18&ff=modern&edit=0)
  - Where *s* is the player's standing with the corporation that owns the refining facility.

Once the yields are calculated, the prices of the various minerals are used to calculate the total value for each batch of ore. This value is then divided by the batch size and the volume of the original ore to get an ISK per cubic meter figure that can be compared to the value of the raw ore.

### Example
For example, let's say a player has a batch of veldspar to process. If the player has these skills,
- Refining level 5
- Refinery Effiency level 3
- Veldspar Processing level 2

and a standing of 3.62 at a facility with 50% efficiency, then we can calculate that the tax will be (1/20 - (3*3.62)/400) = **0.02285** (2.29%), meaning that the overall yield will be 0.5 + 0.375(1 + 2/20)(1 + 5/50)(1 + 3/25) - 0.0229 = **0.9853**, or 98.5%.

Veldspar has a volume of 0.1 m<sup>3</sup>, so if the price of veldspar is ISK 17.61 per unit, then the value per cubic meter of cargo space is **176.10 ISK/m<sup>3</sup>**.

The batch size of veldspar is 333 units which yields 1000 units of tritanium. Since our effiency is only 98.5%, we'll get 985 units of tritanium from each batch. If tritanium's price is ISK 5.73 per unit, then the value of each batch is ISK 5644.05. Dividing by the volume of the required 333 units of veldspar (33.3 m<sup>3</sup>) gives us a refined value of **169.49 ISK/m<sup>3</sup>.**

In this case, the player can earn more money by selling the raw ore than by trying to refine it first (176.10 ISK/m<sup>3</sup> vs. 169.49 ISK/m<sup>3</sup>).
