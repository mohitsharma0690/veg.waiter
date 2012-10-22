// ==UserScript==
// @name Veg Waiter.com
// @description Highlight vegetarian options on Waiter.com
// @match http://waiter.com/*
// @match https://waiter.com/*
// @match https://*.waiter.com/*
// ==/UserScript==

var blacklist = new RegExp("Bacon|Beef|BLT|Burger|Clam|Calamari|Catfish|Chicken|Crab|Duck|Eel|Fish|Frog|Ham|Lamb|Meat|Mussels|Octopus|Pastrami|Pig|Pork|Prawn|prosciutto|salami|Salmon|sausage|Seafood|Shrimp|Sirloin|Steak|Rib|Trout|Tuna|Turkey|Wings|Pepperoni|Steak", "i");
var whitelist = new RegExp("or veg|or tofu|or mushroom|vegg", "i");
var items = document.getElementsByClassName('menu_item_container');
for (i in items) {
  try {
    if (!items[i].innerText.match(blacklist) || items[i].innerText.match(whitelist)) {
      items[i].style.backgroundColor = 'lightgreen';
    }
  } catch(e) {};
}

