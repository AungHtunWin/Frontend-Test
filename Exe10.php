<?php
$hamburguer=4.95;
$shake=1.95;
$soda=0.85;
$tax_rate=0.075;
$tip_rate=0.16;

# computations
$subtotal = ($hamburguer * 2) + $shake + $soda;
$tax = $subtotal * $tax_rate;
$tip = $subtotal * $tip_rate;
$total = $subtotal + $tip + $tax;
# Print out the total
print "Total =$total";

?>