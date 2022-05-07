
    var data = [
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/30/80/37/18308037_39094793_600.jpg",
            brand:"Exclusive",
            name:"JW Anderson",
            itemName:"rugby-motif sweatshirt",
            price:"$260",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/31/51/49/18315149_39166298_600.jpg",
            brand:"New Season",
            name:"GUCCI",
            itemName:"GG Supreme baseball cap",
            price:"$264",
           
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/29/31/01/17293101_37602878_600.jpg",
            brand:"New Season",
            name:"Palm Angels",
            itemName:"Sprayed logo-print T-shirt",
            price:"$765",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/31/55/39/18315539_39272038_600.jpg",
            brand:"Exclusive",
            name:"AMIRI",
            itemName:"Terra embossed combat boots",
            price:"$595",
           
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
        document.querySelector("#container3").append(div);
      
        
        
    });
    
    