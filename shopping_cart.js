var List=document.getElementById("ListOfProducts");
var Product_Id=localStorage.getItem("Product_Id");
var Product_data=localStorage.getItem("Product_data");
var productId=JSON.parse(Product_Id);
var product=JSON.parse(Product_data);
AddtoDOM();
var Product_details;
var index;
function task_to_cart()
{
  var i=index;

}

function AddtoDOM()
{
  for(let i=0;i<product.length;i++)
  {

    (function(i1)
  {
    Product_details=document.createElement("li");
  Product_details.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+product[i].Name+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available Stock "+product[i].Quantity+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

var iQuantity=document.createElement("input");
iQuantity.setAttribute("placeholder","Enter the Quantity");
iQuantity.setAttribute("type","number");
var index_quantity=i;
var id_1="noQuantity"+index_quantity;
iQuantity.setAttribute("id",id_1);
Product_details.appendChild(iQuantity);

  var aAddtoCart=document.createElement("a");
  aAddtoCart.setAttribute("href","#");
  aAddtoCart.innerHTML="Add To Cart";
  aAddtoCart.onclick=function()
  {
    var i=i1;
    console.log(i);
    var index_quantity=i;
    var id_1="noQuantity"+index_quantity;
    console.log(id_1);
        var getQuantity=parseInt(document.getElementById(id_1).value);
      if(product[i].Quantity==0)
      {
        alert("Not In Stock");
      }
      else if(getQuantity>product[i].Quantity)
      {
        console.log(getQuantity);
        alert("Please Enter the quantity appropriate to stock");
      }
      else if (getQuantity<=0) {
        alert("Please Enter the appropriate Quantity");
      }

      else {
      product[i].Quantity-=getQuantity;
      var Edit_Stock=List.childNodes;
      var productQuantity=product[i].Quantity;
      Edit_Stock[i].innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+product[i].Name+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available Stock "+productQuantity+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      var iQuantity=document.createElement("input");
      iQuantity.setAttribute("placeholder","Enter the Quantity");
      iQuantity.setAttribute("type","number");
      iQuantity.setAttribute("id",id_1);
      Edit_Stock[i].appendChild(iQuantity);

        var aAddtoCart=document.createElement("a");
        aAddtoCart.setAttribute("href","#");
        aAddtoCart.innerHTML="Add To Cart";

        aAddtoCart.addEventListener("click",task_to_cart);
        Edit_Stock[i].appendChild(aAddtoCart);
        document.getElementById(id_1).value='';
        aAddtoCart.onclick=function()
        {
          var i=i1;
          console.log(i);
          var index_quantity=i;
          var id_1="noQuantity"+index_quantity;

              var getQuantity1=parseInt(document.getElementById(id_1).value);
            if(product[i].Quantity==0)
            {
              alert("Not In Stock");
            }
            else if(getQuantity>product[i].Quantity)
            {
              console.log(getQuantity);
              alert("Please Enter the quantity appropriate to stock");
            }
            else if (getQuantity<=0) {
              alert("Please Enter the appropriate Quantity");
            }

            else {
            product[i].Quantity-=getQuantity;
            var Edit_Stock=List.childNodes;
            var productQuantity=product[i].Quantity;
            Edit_Stock[i].innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+product[i].Name+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Available Stock "+productQuantity+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            var iQuantity=document.createElement("input");
            iQuantity.setAttribute("placeholder","Enter the Quantity");
            iQuantity.setAttribute("type","number");
            iQuantity.setAttribute("id",id_1);
            Edit_Stock[i].appendChild(iQuantity);

              var aAddtoCart=document.createElement("a");
              aAddtoCart.setAttribute("href","#");
              aAddtoCart.innerHTML="Add To Cart";

              aAddtoCart.addEventListener("click",task_to_cart);
              Edit_Stock[i].appendChild(aAddtoCart);
              document.getElementById(id_1).value='';
            }
        }
      }
  }
  Product_details.appendChild(aAddtoCart);
  List.appendChild(Product_details);
})(i);
}
}
