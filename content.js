console.log("content js loaded");

var quantity_index = 2;
var price_index = 6;

// change the selected prive value
for (var i = 1; i < 7; i ++) {
	var selector = ".option:nth-child(" + i + ")";
	var price = document.querySelectorAll(selector).item(0);
	if (i == 1) {
		price.className = "option selected";
	} else if (i == price_index) {
		price.className += " selectedValue";
	}
}

// change the quantity
document.querySelectorAll("#uniform-qty_").item(0).children.item(0).textContent = quantity_index;
console.log("quantity is " + quantity_index)

// add to cart 
document.querySelectorAll(".bigBtn").item(0).click()

// check whether CheckoutButton exist
for (var k = 0; k < 1; k ++) {
	var stop = false;
	setTimeout(function() {
		for (var i = 0; i < 10; i ++) {
			if (document.getElementsByClassName("CheckoutButton").length != 0) {
			    console.log("has CheckoutButton now")
			    document.getElementsByClassName("CheckoutButton").item(0).children.item(0).click();
			    stop = true;
			    break;
			}
		}
	}, 1000);
	if (stop == true) break;
}



