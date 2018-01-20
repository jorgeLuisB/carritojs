var products_select = [];
$(document).ready(function(){   


if(localStorage.length>0){
	let producto_Storg=[];
	producto_Storg=JSON.parse(localStorage.getItem('productos'));

	console.log(producto_Storg);

		for(let i=0;i<producto_Storg.length;i++){

			// console.log(producto_Storg[i].id);
			$("#"+producto_Storg[i].id).prop('disabled',true);

		}

		products_select=producto_Storg;

}

})


var storage_productos=[];

var list_products = [
{id:1,name:'waffer',image:'https://images-na.ssl-images-amazon.com/images/I/51qzYMhIvvL._AC_US160_.jpg', price:2000},
{id:2,name:'camisa', image:'https://images-na.ssl-images-amazon.com/images/I/51+78ZJjGYL._AC_UL260_SR200,260_.jpg',price:40000},
{id:3,name:'pantalon',image:'https://images-na.ssl-images-amazon.com/images/I/415KwstEmlL._AC_US218_.jpg', price:120000},
{id:4,name:'zapatos',image:'https://images-na.ssl-images-amazon.com/images/I/41girqxmRPL._AC_UL260_SR200,260_.jpg',price:70000, disabled: 1}
];




console.log(list_products);


for (let i = 0; i < list_products.length; i++) {



$('#root').append(`<div class="col-md-3"><div class="card" style="width: 20rem;">
  <img class="card-img-top img" src="${list_products[i].image}" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">${list_products[i].name}</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <input type="button" id="${list_products[i].id}" onclick="add(this.id);" class="btn btn-primary" value="Agregar">
  </div>
</div></div>
`);
}

function add(id){
	console.log(id);
	$("#"+id).prop('disabled', true);
	

	var obj= list_products.filter(function(product) {
    return product.id == id;

	});

	// console.log(obj);

	storage_productos.push(obj[0]);

	localStorage.setItem('productos',JSON.stringify(storage_productos));



	products_select.push(obj[0]);



	// console.log(products_select);
}

function ver(){
  preciototal=0;
  $("#root1").empty();

	for (let i=0; i<products_select.length; i++) {
		$("#root1").append(`<div class="col-md-3"><div class="card" style="width: 7rem;">
  						  <img class="card-img-top img1 " src="${products_select[i].image}" alt="Card image cap">
 	 					  <div class="card-block">
    					  <h4 class="card-title">${products_select[i].name}</h4>
    					  <h4 class="card-text">${products_select[i].price}<h4>
   						  <a href="#" id="${products_select[i].id}" onclick="delet(this.id)" class="btn btn-primary">Quitar</a>
  						  </div>
						  </div></div>`);

		preciototal=preciototal+products_select[i].price;
		
	}
		$("#total").empty();
		precio(preciototal);
}


function delet(id){

	var arrays_obj= products_select.filter(function(product) {
    return product.id != id;

	});

	localStorage.setItem('productos',JSON.stringify(arrays_obj));

	products_select = arrays_obj;

	$("#root1").empty();


	ver();

	$("#"+id).prop('disabled', false);


 }


function precio(precio){
	$("#total").append(precio);

}







