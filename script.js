var Opened_Panel=0;
var products=[];
var productId = 1;
var divAddProduct = document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("AddProduct");
var Item_Products=localStorage.getItem("Product_data");
var Item_Id=localStorage.getItem("Product_Id");
products=JSON.parse(Item_Products);
productId=JSON.parse(Item_Id);
productId+=1;
for(var i=0;i<products.length;i++)
{

		var objProduct = new Object();

		objProduct.Id = i;
	 	objProduct.Name = products[i].Name;
	    objProduct.Desc = products[i].Desc;
		objProduct.Price = products[i].Price;
		objProduct.Quantity =products[i].Quantity;
		addProducttoDOM(objProduct);

}
aAddProduct.addEventListener("click",function(event)
{
Opened_Panel=1;
	createNewProductPanel();
});

function addProducttoArray()
{
	var objProduct = new Object();

	objProduct.Id = productId;
 	objProduct.Name = document.getElementById("txtProductName").value;
    objProduct.Desc = document.getElementById("txtProductDesc").value;
	objProduct.Price = document.getElementById("txtProductPrice").value;
	objProduct.Quantity = document.getElementById("txtProductQuantity").value;

    products.push(objProduct);
		var data=JSON.stringify(products);
		localStorage.setItem("Product_data",data);
		var id=JSON.stringify(productId);
		localStorage.setItem("Product_Id",id);
	addProducttoDOM(objProduct);
    deleteNewProductPanel();
	productId++;
}

function addProducttoDOM(objProduct)
{
	var divProduct=document.createElement("div");
	divProduct.setAttribute("id",productId);

	var lblProductName=document.createElement("label");
	lblProductName.setAttribute("style","font-weight:bold;font-size:20px");
	lblProductName.innerHTML=objProduct.Name;
	divProduct.appendChild(lblProductName);

	insertBlankLine(divProduct);

	var lblProductDesc=document.createElement("label");
	lblProductDesc.innerHTML=objProduct.Desc;
	divProduct.appendChild(lblProductDesc);

	insertBlankLine(divProduct);

	var lblPrice=document.createElement("label");
	lblPrice.setAttribute("style","color: Red");
	lblPrice.innerHTML=objProduct.Price;
	divProduct.appendChild(lblPrice);

	insertBlankLine(divProduct);

	var lblQuantity=document.createElement("label");
	lblQuantity.setAttribute("style","color: Red");
	lblQuantity.innerHTML=objProduct.Quantity;
	divProduct.appendChild(lblQuantity);

	insertBlankLine(divProduct);

	var aDelete=document.createElement("button");
	aDelete.setAttribute("style","border:2px solid black;padding:8px 16px;text-align:center;color: dark gray;background-color :#66ff66");
	aDelete.innerHTML="Delete";
	divProduct.appendChild(aDelete);

	//insertBlankLine(divProduct);
		//insertBlankLine(divProduct);
	var aEdit=document.createElement("button");
	aEdit.setAttribute("style","border:2px solid black;padding:8px 16px;text-align:center;color: dark gray;background-color :#0066ff");
	aEdit.innerHTML="Edit";
	divProduct.appendChild(aEdit);
		aDelete.addEventListener("click",function(event)
									  {
									   // To access the parent node of the element which is clicked
									   // Ist method
										  // var selectedProductIndex = getProductIndex(parseInt(divProduct.id));
										  // removeFromProductsArray(selectedProductIndex);
                                          	// divProduct.parentNode.removeChild(divProduct);

									   // 2nd Method
										 if(Opened_Panel==0)
										 {var targetParent=event.target.parentNode;
										 var selectedProductIndex=getProductIndex(parseInt(event.target.parentNode.id));
										 removeFromProductsArray(selectedProductIndex);
										 targetParent.parentNode.removeChild(targetParent);

								 		var data=JSON.stringify(products);
								 		localStorage.setItem("Product_data",data);
								 		var id=JSON.stringify(productId);
								 		localStorage.setItem("Product_Id",id);
									}
									  }
							);

							aEdit.addEventListener("click",function(event)
						{
							if(Opened_Panel==0)
							{
								var targetParent=event.target.parentNode;
								var selectedProductIndex=getProductIndex(parseInt(event.target.parentNode.id));
								Opened_Panel=1;
								EditFromProductsArray(selectedProductIndex);

								var data=JSON.stringify(products);
								localStorage.setItem("Product_data",data);
								var id=JSON.stringify(productId);
								localStorage.setItem("Product_Id",id);
							}
						});
/*If Want to display all things of Product by clicking on the product name
    aProductName.addEventListener("click",function(event)
									  {
										 var selectedProductIndex = getProductIndex(parseInt(event.target.parentNode.id));
										 getProductDetails(selectedProductIndex);
									  }
									);*/

insertBlankLine(divProduct);
insertBlankLine(divProduct);
divListProducts.appendChild(divProduct);
unHideAddNewProductLink();
}
function UpdateProduct(selectedProductIndex)
{

	var ParentNodes=divListProducts.childNodes;
	console.log(divListProducts);
	ParentNodes[selectedProductIndex+1].innerHTML="<span style= 'font-weight:bold;font-size:20px'>"+products[selectedProductIndex].Name+"</span><br>"+products[selectedProductIndex].Desc+"<br>"+"<span style= 'color:Red'>"+products[selectedProductIndex].Price+"</span><br>"+"<span style='color:Red'>"+products[selectedProductIndex].Quantity+"</span><br>";
	console.log(selectedProductIndex);

	var aDelete=document.createElement("button");
	aDelete.setAttribute("style","border:2px solid black;padding:8px 16px;text-align:center;color: dark gray;background-color :#66ff66");
		aDelete.innerHTML="Delete";
		ParentNodes[selectedProductIndex+1].appendChild(aDelete);

		insertBlankLine(ParentNodes[selectedProductIndex+1]);

		var aEdit=document.createElement("button");
		aEdit.setAttribute("style","border:2px solid black;padding:8px 16px;text-align:center;color: dark gray;background-color :#0066ff");
aEdit.innerHTML="Edit";
		ParentNodes[selectedProductIndex+1].appendChild(aEdit);
					insertBlankLine(ParentNodes[selectedProductIndex+1]);
					insertBlankLine(ParentNodes[selectedProductIndex+1]);

					var data=JSON.stringify(products);
					localStorage.setItem("Product_data",data);
					var id=JSON.stringify(productId);
					localStorage.setItem("Product_Id",id);
				aDelete.addEventListener("click",function(event)
											  {
											   // To access the parent node of the element which is clicked
											   // zIst method
												  // var selectedProductIndex = getProductIndex(parseInt(divProduct.id));
												  // removeFromProductsArray(selectedProductIndex);
		                                          	// divProduct.parentNode.removeChild(divProduct);

																								// 2nd Method
											 												 if(Opened_Panel==0)
											 												 {var targetParent=event.target.parentNode;
											 												 var selectedProductIndex=getProductIndex(parseInt(event.target.parentNode.id));
											 												 removeFromProductsArray(selectedProductIndex);

																								targetParent.parentNode.removeChild(targetParent);
											 										 		var data=JSON.stringify(products);
											 										 		localStorage.setItem("Product_data",data);
											 										 		var id=JSON.stringify(productId);
											 										 		localStorage.setItem("Product_Id",id);
											 											 }
												}
									);

									aEdit.addEventListener("click",function(event)
								{

										if(Opened_Panel==0)
										{
											var targetParent=event.target.parentNode;
											var selectedProductIndex=getProductIndex(parseInt(event.target.parentNode.id));
											Opened_Panel=1;

											EditFromProductsArray(selectedProductIndex);
										}});
}
// Given a product ID, returns the index to the product data in products.
function getProductIndex(id)
{
    for (var i = 0; i < products.length; i++)
	{
        if (products[i].Id == id)
			return i;
    }
}

function getProductDetails(selectedProductIndex)
{
  console.log( "Name : " + products[selectedProductIndex].Name + "  Desc: " + products[selectedProductIndex].Desc +
               "   Price : " + products[selectedProductIndex].Price + "  Quantity: " + products[selectedProductIndex].Quantity);
}
function removeFromProductsArray(selectedProductIndex)
{
	products.splice(selectedProductIndex,1);
	console.log(products);
}
function UpdateProducttoArray(selectedProductIndex)
{
	console.log(selectedProductIndex);
	products[selectedProductIndex].Desc=document.getElementById("txtProductDesc1").value;
	products[selectedProductIndex].Price=document.getElementById("txtProductPrice1").value;
	products[selectedProductIndex].Quantity=document.getElementById("txtProductQuantity1").value;
	getProductDetails(selectedProductIndex);
	UpdateProduct(selectedProductIndex);
		deleteNewProductPanel();
	unHideAddNewProductLink();
	Opened_Panel=0;
}
function EditFromProductsArray(selectedProductIndex)
{
	Opened_Panel=1;
	HideAddNewProductLink();
	var lblUpdateProduct=document.createElement("label");
	lblUpdateProduct.innerHTML="Update the Product";
	lblUpdateProduct.setAttribute("style","font-weight:bold;font-size:30px");
	divAddProduct.appendChild(lblUpdateProduct);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var message_desc=document.createElement("label");
	message_desc.innerHTML="Description : ";
	divAddProduct.appendChild(message_desc);

	insertBlankLine(divAddProduct);

	var txtProductDesc1=document.createElement("textarea");
	txtProductDesc1.setAttribute("style","width:250px;height250px;border-radius:10px;border:2px solid black;padding:5px");
	txtProductDesc1.setAttribute("placeholder","Enter The Product Description");
	txtProductDesc1.setAttribute("id","txtProductDesc1");
	divAddProduct.appendChild(txtProductDesc1);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var message_price=document.createElement("label");
	message_price.innerHTML="Price : ";
	divAddProduct.appendChild(message_price);

	insertBlankLine(divAddProduct);

	var txtProductPrice1=document.createElement("input");
	txtProductPrice1.setAttribute("type","number");
	txtProductPrice1.setAttribute("style","width:250px;border-radius:10px;border:2px solid black;padding:5px");
	txtProductPrice1.setAttribute("placeholder","Enter the Product Price");
	txtProductPrice1.setAttribute("id","txtProductPrice1");
	divAddProduct.appendChild(txtProductPrice1);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var message_quantity=document.createElement("label");
	message_quantity.innerHTML="Quantity : ";
	divAddProduct.appendChild(message_quantity);

	insertBlankLine(divAddProduct);

	var txtProductQuantity1=document.createElement("input");
	txtProductQuantity1.setAttribute("type","number");
	txtProductQuantity1.setAttribute("id","txtProductQuantity1");
	txtProductQuantity1.setAttribute("style","width:250px;border-radius:10px;border:2px solid black;padding:5px");
	txtProductQuantity1.setAttribute("placeholder","Enter the Quantity");
	divAddProduct.appendChild(txtProductQuantity1);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var btnUpdateButton=document.createElement("button");
	btnUpdateButton.setAttribute("id","btnUpdateButton");
	btnUpdateButton.setAttribute("style","border:2px solid black;padding:15px 32px;text-align:center;color: dark gray;background-color :#00ffcc");
	btnUpdateButton.innerHTML="Update Product";
	divAddProduct.appendChild(btnUpdateButton);

		btnUpdateButton.addEventListener("click",function(event)
	{
		if(txtProductDesc1.value===""||txtProductPrice1.value===""||txtProductQuantity1.value==="")
		{
			alert("Please Fill The Required Details");
		}
		else {
			UpdateProducttoArray(selectedProductIndex);
		}

	});
}
function deleteNewProductPanel()
{
   var childNodes = divAddProduct.childNodes;
   for (var i = 0; childNodes.length > 0;)
   {
     divAddProduct.removeChild(childNodes[i]);
   }
}

function HideAddNewProductLink()
{
	aAddProduct.setAttribute("style","visibility:hidden");
}
function unHideAddNewProductLink()
{
   aAddProduct.setAttribute("style","visibility:visible");
}
function insertBlankLine(targetElement)
{
	var Blank_Line=document.createElement("br");
	targetElement.appendChild(Blank_Line);
}

function createNewProductPanel()
{

	HideAddNewProductLink();
	var lblAddProduct=document.createElement("label");
	lblAddProduct.innerHTML="Add the Product";
	lblAddProduct.setAttribute("style","font-weight:bold;font-size:30px");
	divAddProduct.appendChild(lblAddProduct);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var message_name=document.createElement("label");
	message_name.innerHTML="Name : ";
	divAddProduct.appendChild(message_name);

	insertBlankLine(divAddProduct);

	var txtProductName=document.createElement("input");
	txtProductName.setAttribute("type","text");
	txtProductName.setAttribute("style","width:250px;border-radius:10px;border:2px solid black;padding:5px");
	txtProductName.setAttribute("placeholder","Enter the Product Name");
	txtProductName.setAttribute("id","txtProductName");
	divAddProduct.appendChild(txtProductName);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var message_desc=document.createElement("label");
	message_desc.innerHTML="Description : ";
	divAddProduct.appendChild(message_desc);

	insertBlankLine(divAddProduct);

	var txtProductDesc=document.createElement("textarea");
	txtProductDesc.setAttribute("style","width:250px;height250px;border-radius:10px;border:2px solid black;padding:5px");
	txtProductDesc.setAttribute("placeholder","Enter The Product Description");
	txtProductDesc.setAttribute("id","txtProductDesc");
	divAddProduct.appendChild(txtProductDesc);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var message_price=document.createElement("label");
	message_price.innerHTML="Price : ";
	divAddProduct.appendChild(message_price);

	insertBlankLine(divAddProduct);

	var txtProductPrice=document.createElement("input");
	txtProductPrice.setAttribute("type","number");
	txtProductPrice.setAttribute("style","width:250px;border-radius:10px;border:2px solid black;padding:5px");
	txtProductPrice.setAttribute("placeholder","Enter the Product Price");
	txtProductPrice.setAttribute("id","txtProductPrice");
	divAddProduct.appendChild(txtProductPrice);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var message_quantity=document.createElement("label");
	message_quantity.innerHTML="Quantity : ";
	divAddProduct.appendChild(message_quantity);

	insertBlankLine(divAddProduct);

	var txtProductQuantity=document.createElement("input");
	txtProductQuantity.setAttribute("type","number");
	txtProductQuantity.setAttribute("id","txtProductQuantity");
	txtProductQuantity.setAttribute("style","width:250px;border-radius:10px;border:2px solid black;padding:5px");
	txtProductQuantity.setAttribute("placeholder","Enter the Quantity");
	divAddProduct.appendChild(txtProductQuantity);

	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var btnAddButton=document.createElement("button");
	btnAddButton.setAttribute("id","btnAddButton");
	btnAddButton.setAttribute("style","border:2px solid black;padding:15px 32px;text-align:center;color: dark gray;background-color :#00ffcc");
	btnAddButton.innerHTML="Add Product";
	divAddProduct.appendChild(btnAddButton);

	btnAddButton.addEventListener("click",function(event)
{
	if(txtProductDesc.value===""||txtProductName.value===""||txtProductPrice.value===""||txtProductQuantity.value==="")
	{
		alert("Please Fill The Required Details");
	}
	else {
		Opened_Panel=0;
		addProducttoArray();
	}

});
}
