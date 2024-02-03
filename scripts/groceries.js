	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		image: "https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		image: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00,
		image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Salmo_salar.jpg"
	},
	{
		name: "biscuits",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.99,
		image: "https://www.etiinternational.com/images/Products/tea-biscuit_321_psb.png"
	},

	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.23,
		image: "https://th-thumbnailer.cdn-si-edu.com/6RD8JDrASGTSjdbsJkg-37OY9mQ=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg"
	},

	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.28,
		image: "https://assets.shop.loblaws.ca/products/20017001/b1/en/side/20017001_side_a01_@2.png"
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 12.00,
		image: "https://img.freepik.com/premium-photo/white-long-rice-basmati-burlap-sack-with-wooden-scoop-isolated-white-background_434420-1792.jpg"
	},
	{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00,
		image: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
	},

	{
		name: "canned beans",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		price: 2.00,
		image: "https://assets.shop.loblaws.ca/products/20177278001/b1/en/open/20177278001_open_a01_@2.png"
	},

	{
		name: "chicken broth",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 4.99,
		image: "https://www.campbellsoup.ca/wp-content/uploads/2012/07/campbells-no-salt-added-chicken-broth.png"
	}

];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let checkboxVeggie = document.getElementById("Vegetarian");
	let checkboxGluten = document.getElementById("GlutenFree");
	let checkboxOrganic = document.getElementById("Organic");
	for (let i=0; i<prods.length; i+=1) {
		if ((checkboxVeggie.checked == true) && (checkboxGluten.checked == false) && (checkboxOrganic.checked == false) && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((checkboxVeggie.checked == false) && (checkboxGluten.checked == true) && (checkboxOrganic.checked == false) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((checkboxVeggie.checked == false) && (checkboxGluten.checked == false) && (checkboxOrganic.checked == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((checkboxVeggie.checked == true) && (checkboxGluten.checked == true) && (checkboxOrganic.checked == false) &&
		(prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == false)){
			product_names.push(prods[i]);
		}
		else if ((checkboxVeggie.checked == true) && (checkboxGluten.checked == false) && (checkboxOrganic.checked == true) &&
		(prods[i].vegetarian == true) && (prods[i].glutenFree == false) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((checkboxVeggie.checked == false) && (checkboxGluten.checked == true) && (checkboxOrganic.checked == true) &&
		(prods[i].vegetarian == false) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((checkboxVeggie.checked == true) && (checkboxGluten.checked == true) && (checkboxOrganic.checked == true) &&
		(prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((checkboxVeggie.checked == false) && (checkboxGluten.checked == false) && (checkboxOrganic.checked == false)){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// completed sorting function
function sortProductsByPrice(products_array, max_price) {
	let sorted_products = [];
	for (let i = 0; i < products_array.length; i += 1){
		for(let j = 0; j < products_array.length - 1; j++){
			if(products_array[j].price > products_array[j+1].price){
				temp = products_array[j];
				products_array[j] = products_array[j+1];
				products_array[j+1] = temp;
			}
		}
	}

	sorted_products = products_array.filter(product => product.price <= max_price);
	return sorted_products
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}


//Categories of products
var categories = {
	vegetarian: [],
	glutenFree: [],
	organic: []
}

//Adding products to categories

function addProductToCategory(prods, category) {
	//if product.vegetarian is true, add to vegetarian category
	category = categories;
	
	for (let i=0; i<prods.length; i+=1){
		for(let j = 0; j<category.length; j+=1){
			if(prods[i].vegetarian == true){
				category[j] = vegetarian.push(i)
			}
			else if(prods[i].glutenFree == true){
				category[j+1] = glutenFree.push(i)
			}
			else if(prods[i].organic == true){
				category[j+2] = organic.push(i)
			}
		}
		//category = products[i].vegetarian
	}
}

