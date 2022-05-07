


    var data = [
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/30/74/56/18307456_39351261_600.jpg",
            brand:"New Season",
            name:"Jacquemus",
            itemName:"down-feather logo-print jacket",
            price:"$3,042",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/26/24/83/18262483_39348217_600.jpg",
           
            brand:"New Season",
            name:"Acne Studios",
            itemName:"Rive Gauche tote bag",
            price:"$2,649",
           
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/16/95/83/17169583_39349055_600.jpg",
            brand:"New Season",
            name:"ETRO",
            itemName:"striped polo shirt",
            price:"$765",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/16/86/98/72/16869872_39353099_600.jpg",
            brand:"New Season",
            name:"AMIRI",
            itemName:"Terra embossed combat boots",
            price:"$2,195",
           
        }
    ]
    
    
    
    data.map(function(elem) {
        
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        
        var image = document.createElement("img");
        image.setAttribute("src",elem.imgUrl);
        
        
        var brand = document.createElement("p");
        brand.textContent = elem.brand;
        
        var name = document.createElement("h4");
        name.textContent = elem.name;
        
        var itemName = document.createElement("p");
        itemName.textContent = elem.itemName;
        
        var price = document.createElement("p");
        price.textContent = elem.price;
        
        
        var div3 = document.createElement("div");
        var btn = document.createElement("button");
        btn.textContent = "Shop Now";
       
        div3.append(btn);
       
        
        
        div.append(image);
        div2.append(brand,name,itemName,price);
        
        div.append(div2,div3);
        document.querySelector("#container").append(div);
      
        
        
    });
    