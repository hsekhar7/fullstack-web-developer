function LoadCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        data.unshift("all");
        for(var category of data)
        {
            var option=document.createElement("option");
            option.text=category.toUpperCase();
            option.value=category;
            document.getElementById("listCategories").appendChild(option);
        }
    })
 }
  function LoadProducts(url){
    document.querySelector("main").innerHTML="";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for( var product of data)
        {
            var div=document.createElement("div");
            div.className="card m-2 p-2 me-4 ";
            div.style.width="210px"
            div.innerHTML=`
                <img src=${product.image} height="140" class="card-img-top">
                <div class="card-header" style="height:200px">
                    <p>${product.title}</p>
                </div>
                <div class="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>${product.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            <span class="bi bi-star-fill text-warning"></span>
                            ${product.rating.rate} [${product.rating.count}]
                        </dd>
                    </dl>
                </div>
                <div class="card-footer">
                    <button onclick="AddClick(${product.id})" class="btn btn-danger w-100">
                        <span class="bi bi-cart-4"></span>Add to Cart </button>
                </div>
                `;
                document.querySelector("main").appendChild(div);
        }
    })
  }
  function bodyload(){
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
    GetCartItemsCount();
  }

  function CategoryChanged(){
    var categoryname=document.getElementById("listCategories").value;
    if(categoryname=="all"){
        LoadProducts("https://fakestoreapi.com/products");
    }else{
        LoadProducts(`https://fakestoreapi.com/products/category/${categoryname}`);
    }
  }
   var cartItems=[];
   function GetCartItemsCount(){
    document.getElementById("lblCount").innerHTML=cartItems.length;
   }
   //add click on button 
   function AddClick(id){
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        cartItems.push(data);
        alert(`${data.title} \n Added to Cart`);
        GetCartItemsCount();
    })
   }
   // Click add to cart buttons
   function LoadCartItems(){
    document.querySelector("tbody").innerHTML="";
    for(var item of cartItems)
    {
        var tr=document.createElement("tr");
        var tdTitle=document.createElement("td");
        var tdPrice=document.createElement("td");
        var tdPreview=document.createElement("td");
        var tdRemove=document.createElement("td");

        tdTitle.innerHTML=item.title;
        tdPrice.innerHTML=item.price;
        tdPreview.innerHTML=`<img src=${item.image} height="60" width="60">`;
        tdRemove.innerHTML=`
            <button class="btn btn-danger" onclick="RemoveClick(${item.id},'${item.title}')">
                <span class="bi bi-trash-fill">
            </button>`

        tr.appendChild(tdTitle);
        tr.appendChild(tdPrice);
        tr.appendChild(tdPreview);
        tr.appendChild(tdRemove);

        document.querySelector("tbody").appendChild(tr);
    }
    
}
function RemoveClick(id,title){
 
     var product=cartItems.find(x=>x.id==id);
     var index=cartItems.indexOf(product);
     cartItems.splice(index,1);
     alert(`Are you sure removed "${title}" item from card`);
     LoadCartItems();
     GetCartItemsCount();
}