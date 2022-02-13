
    var initialProducts = [
        {
            No: 0,
            ProductId: 10000,
            Name: 'Kone',
            NormalPrice: 3488.99,
            MinimumPurchase: 3,
            SpecialPrice: 2588.99,
            FreeDeal: 0
        },
        {
            No: 1,
            ProductId: 10001,
            Name: 'IronhideCartridge',
            NormalPrice: 529.99,
            MinimumPurchase: 2,
            SpecialPrice: 529.99,
            FreeDeal: 1
        },
    ]

    var specialPricingProducts = [
        {
            No: 0,
            ProductId: 10000,
            Name: 'Kone',
            NormalPrice: 3488.99,
            MinimumPurchase: 3,
            SpecialPrice: 2588.99,
            FreeDeal: 0,
            Recipient: 2,
            IsEnabled: true
        },
        {
            No: 1,
            ProductId: 10001,
            Name: 'IronhideCartridge',
            NormalPrice: 529.99,
            MinimumPurchase: 2,
            SpecialPrice: 529.99,
            FreeDeal: 1,
            Recipient: 2,
            IsEnabled: true
        },
    ]

    var recipient = null
    var addedItem = [];
    var freeDealItems = [];
    var isCreated = false;

    
    function clearAll(){

        initialProducts = [
            {
                No: 0,
                ProductId: 10000,
                Name: 'Kone',
                NormalPrice: 3488.99,
                MinimumPurchase: 3,
                SpecialPrice: 2588.99,
                FreeDeal: 0
            },
            {
                No: 1,
                ProductId: 10001,
                Name: 'Ironhide Cartridge',
                NormalPrice: 529.99,
                MinimumPurchase: 2,
                SpecialPrice: 529.99,
                FreeDeal: 1
            },
        ]

        specialPricingProducts = [
            {
                No: 0,
                ProductId: 10000,
                Name: 'Kone',
                NormalPrice: 3488.99,
                MinimumPurchase: 3,
                SpecialPrice: 2588.99,
                FreeDeal: 0,
                Recipient: 2,
                IsEnabled: true
            },
            {
                No: 1,
                ProductId: 10001,
                Name: 'Ironhide Cartridge',
                NormalPrice: 529.99,
                MinimumPurchase: 2,
                SpecialPrice: 529.99,
                FreeDeal: 1,
                Recipient: 2,
                IsEnabled: true
            },
        ]

        recipient = null
        addedItem = [];
        freeDealItems = [];

        var displayProductItems = document.getElementById("isRecipientSelected");
        displayProductItems.style.display = "none";

        var displayFreeDealsItemElement = document.getElementById("freeDealItemsId")

        if(displayFreeDealsItemElement != null){
            displayFreeDealsItemElement.style.display = 'none';
            displayFreeDealsItemElement.textContent = '';
        }
      

        var displayRecipient = document.getElementById("recepientId")
        displayRecipient.textContent = 'Not Selected'; 

    }

    function selectLevel(level){

        recipient = level

        if(level == 1){
            document.getElementById("recepientId").textContent = 'Associate'
            var displayProductItems = document.getElementById("isRecipientSelected");
            displayProductItems.style.display = "block";

            var displayProductItems = document.getElementById("totalProductExpected");
            displayProductItems.style.display = "none";
            if(displayProductItems.hasChildNodes){
                addedItem = [];
                freeDealItems = [];

                var displayFreeDealsItemElement = document.getElementById("freeDealItemsId")

                if(displayFreeDealsItemElement != null){
                    displayFreeDealsItemElement.style.display = 'none';
                    displayFreeDealsItemElement.textContent = '';
                }
                
            }
        }

        else if(level == 2){
            document.getElementById("recepientId").textContent = 'Diamond'
            var displayProductItems = document.getElementById("isRecipientSelected");
            displayProductItems.style.display = "block";

            var displayProductItems = document.getElementById("totalProductExpected");
            displayProductItems.style.display = "none";
            if(displayProductItems.hasChildNodes){
                addedItem = [];
                freeDealItems = [];

                var displayFreeDealsItemElement = document.getElementById("freeDealItemsId")
                if(displayFreeDealsItemElement != null){
                    displayFreeDealsItemElement.style.display = 'none';
                    displayFreeDealsItemElement.textContent = '';
                }
            }
         
        }

        else {
            document.getElementById("recepientId").textContent = 'Not Selected'
            var displayProductItems = document.getElementById("isRecipientSelected");
            displayProductItems.style.display = "none";
        }
    }

    
    function addNewSpecialPrice () {

        var lastIndex = specialPricingProducts.length - 1;
        var data = specialPricingProducts[lastIndex];

        var newData = {
            No: data.No + 1,
            ProductId: data.ProductId + 1,
            Name: "",
            NormalPrice: 0,
            MinimumPurchase: 0,
            SpecialPrice: 0,
            FreeDeal: 0,
            Recipient: 2,
            IsEnabled: false
        }

        var productTable = document.getElementById("tableId")
        var bodyRow = document.createElement('tr')
        var bodyName = document.createElement('td')
        var bodyPrice = document.createElement('td')
        var bodyAction = document.createElement('td')


        var newProductName = document.createElement("INPUT");
        var newProductNameId = "productName-" + newData.No
        newProductName.setAttribute("id", newProductNameId)

        newProductName.setAttribute("onchange", "changeInput('" + newProductNameId + "')")
        newProductName.setAttribute("type", "text")
        newProductName.setAttribute("value", newData.Name)
        newProductName.setAttribute("placeholder", "Enter Product Name")

        var newProductPrice = document.createElement("INPUT");
        var newProductPriceId = "productPrice-" + newData.No
        newProductPrice.setAttribute("id", newProductPriceId)
        newProductPrice.setAttribute("onchange", "changeInput('" + newProductPriceId + "')")
        newProductPrice.setAttribute("type", "number")
        newProductPrice.setAttribute("value", newData.NormalPrice)
        newProductPrice.setAttribute("placeholder", "Enter Product Price")


        var newAdditionProduct = document.createElement("button");
        newAdditionProduct.setAttribute("type", "button")
        newAdditionProduct.setAttribute("onclick", "addItemSelected(" + newData.No + ")")
        newAdditionProduct.textContent = "Add";

        // var newDivProduct = document.createElement("div");
        // newDivProduct.style.display = "flex";

        bodyName.appendChild(newProductName);
        bodyPrice.appendChild(newProductPrice);
        bodyAction.appendChild(newAdditionProduct);

        bodyRow.appendChild(bodyName);
        bodyRow.appendChild(bodyPrice);
        bodyRow.appendChild(bodyAction);

        productTable.appendChild(bodyRow);
        initialProducts.push(newData);
    }

    function addNewProduct () {

        var lastIndex = initialProducts.length - 1;
        var data = initialProducts[lastIndex];
        var index = 0;

        var newData = {
            No: data.No + 1,
            ProductId: data.ProductId + 1,
            Name: "",
            NormalPrice: 0,
        }

        var productTable = document.getElementById("tableId")
        var bodyRow = document.createElement('tr')
        var bodyName = document.createElement('td')
        var bodyPrice = document.createElement('td')
        var bodyAction = document.createElement('td')


        var newProductName = document.createElement("INPUT");
        var newProductNameId = "productName-" + newData.No
        newProductName.setAttribute("id", newProductNameId)

        newProductName.setAttribute("onchange", "changeInput('" + newProductNameId + "')")
        newProductName.setAttribute("type", "text")
        newProductName.setAttribute("value", newData.Name)
        newProductName.setAttribute("placeholder", "Enter Product Name")

        var newProductPrice = document.createElement("INPUT");
        var newProductPriceId = "productPrice-" + newData.No
        newProductPrice.setAttribute("id", newProductPriceId)
        newProductPrice.setAttribute("onchange", "changeInput('" + newProductPriceId + "')")
        newProductPrice.setAttribute("type", "number")
        newProductPrice.setAttribute("value", newData.NormalPrice)
        newProductPrice.setAttribute("placeholder", "Enter Product Price")


        var newAdditionProduct = document.createElement("button");
        newAdditionProduct.setAttribute("type", "button")
        newAdditionProduct.setAttribute("onclick", "addItemSelected(" + newData.No + ")")
        newAdditionProduct.textContent = "Add";

        // var newDivProduct = document.createElement("div");
        // newDivProduct.style.display = "flex";

        bodyName.appendChild(newProductName);
        bodyPrice.appendChild(newProductPrice);
        bodyAction.appendChild(newAdditionProduct);

        bodyRow.appendChild(bodyName);
        bodyRow.appendChild(bodyPrice);
        bodyRow.appendChild(bodyAction);

        productTable.appendChild(bodyRow);

        specialPricingProducts.forEach(function(value){

            var selectProductNameId = "selectProductName-" + index
            var selectedOptionProductElement = document.getElementById(selectProductNameId);

            var selectOptionName = document.createElement("option");
                selectOptionName.setAttribute("value", newData.ProductId)
                selectOptionName.textContent = newData.Name;
                selectedOptionProductElement.appendChild(selectOptionName)

            index++;
        })

        initialProducts.push(newData);
    }

    function addItemSelected(index) {      
        var displayProductItems = document.getElementById("totalProductExpected");
        displayProductItems.style.display = "block";
        addedItem.push(initialProducts[index])

        if(initialProducts[index].Name == ''){
            return alert('Product Name is not selected')
        }

        if(initialProducts[index].NormalPrice < 0 ){
            return alert('Product price must be more than 0')
        }

        if(!isCreated){
            var recipientName =  document.createElement('p');
            recipientName.setAttribute('id', 'recipientId')
            var recipientType = null;
            if(recipient == 1){            
                recipientType= 'Associate'
            } else{
                recipientType= 'Diamond'
            }
            recipientName.textContent = "RECIPIENT: " +   recipientType

            var cartItems = document.createElement('p');
            cartItems.setAttribute('id', 'cartItemsId')
            cartItems.style.wordBreak = "break-all"
            var cartItemNames  =  addedItem
            .map(function(elem){
            return elem.Name;
            }).join(",")
            cartItems.textContent = 'CART ITEMS: ' + cartItemNames

            var freeDealItemElement = document.createElement('p');
            freeDealItemElement.setAttribute('id', 'freeDealItemsId')
            freeDealItemElement.style.display = 'none';
            var freeDealItemNames  =  freeDealItems
            .map(function(elem){
            return elem.Name;
            }).join(",")
            freeDealItemElement.textContent = 'FREE DEALS: ' + freeDealItemNames


            var totalPrice = document.createElement('p');
            totalPrice.setAttribute('id', 'totalPriceId')
            var totalItemAmount = 0;
            addedItem.forEach(function(response){
                var realPrice = response.NormalPrice
                if(recipient == 1){     
                      
                    var discountAmount = parseFloat((parseFloat(realPrice) * 0.05).toFixed(2))
                    totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))

                } else{

                    var discountAmount = parseFloat((parseFloat(realPrice) * 0.2).toFixed(2))
                    totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))

                }

            })           
            totalPrice.textContent = 'Total Expected: RM' + totalItemAmount.toFixed(2)

            
            var specialPriceItems = [];
            var totalItemAmount = 0;
            freeDealItems = []
            var selectedSpecialPricingProduct = specialPricingProducts.filter(function(response){
                return response.Recipient == recipient && response.IsEnabled
            }) 

            if(selectedSpecialPricingProduct.length > 0){
                selectedSpecialPricingProduct.forEach(function(response){

                    var filteredItems = addedItem.filter(function(item){
                        return response.ProductId == item.ProductId
                    })
                    specialPriceItems.push(response.ProductId)
                    if(filteredItems.length >= response.MinimumPurchase){
  
                        if(response.FreeDeal > 0) {
 
                            var additionOfFreeItem =  parseInt(filteredItems.length/response.MinimumPurchase) * response.FreeDeal;
                            if(additionOfFreeItem > 0){
                                for(var i = 0; i < additionOfFreeItem; i++){
                                    var index = addedItem.length;                            
                                    var additionFreeDealItem = {};
                                    Object.assign(additionFreeDealItem, filteredItems[0])
                                    additionFreeDealItem.No = index;
                                    freeDealItems.push(additionFreeDealItem)
                                }

                                freeDealItemElement.style.display="block";
                                var freeDealItemNames  =  freeDealItems
                                .map(function(elem){
                                return elem.Name;
                                }).join(",")
                                freeDealItemElement.textContent = 'FREE DEALS: ' + freeDealItemNames
                            }                   
                           
                        }

                        filteredItems.forEach(function(filtered){
                            var realPrice = response.SpecialPrice
                            if(recipient == 1){       
                                totalItemAmount += parseFloat((parseFloat(realPrice)).toFixed(2))

                            } else{
                                totalItemAmount += parseFloat((parseFloat(realPrice)).toFixed(2))
                            }
                        })
 
                    } else {
                        filteredItems.forEach(function(filtered){
                        var realPrice = filtered.NormalPrice
       
                            if(recipient == 1){       
                                var discountAmount = parseFloat((parseFloat(realPrice) * 0.05).toFixed(2))
                                totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))

                            } else{
                                var discountAmount = parseFloat((parseFloat(realPrice) * 0.2).toFixed(2))
                                totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))
                            }

                        })           
                    }
                })           

                addedItem.forEach(function(response){
                    var hasFilteredProduct = specialPriceItems.some(function(item){
                        return response.ProductId == item
                    })

                    if(!hasFilteredProduct){
                        var realPrice = response.NormalPrice

                        if(recipient == 1){       
                            var discountAmount = parseFloat((parseFloat(realPrice) * 0.05).toFixed(2))
                            totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))

                        } else{
                            var discountAmount = parseFloat((parseFloat(realPrice) * 0.2).toFixed(2))
                            totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))
                        }                            
                    }
                })

                totalPrice.textContent = 'Total Expected: RM' + totalItemAmount.toFixed(2)       

            } else{
                addedItem.forEach(function(response){
                var realPrice = response.NormalPrice
                    if(recipient == 1){       
                        var discountAmount = parseFloat((parseFloat(realPrice) * 0.05).toFixed(2))
                        totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))

                    } else{
                        var discountAmount = parseFloat((parseFloat(realPrice) * 0.2).toFixed(2))
                        totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))
                    }

                })           
                totalPrice.textContent = 'Total Expected: RM' + totalItemAmount.toFixed(2)
            }

            var data = document.getElementById("totalProductExpected")
            data.appendChild(recipientName);
            data.appendChild(cartItems);
            data.appendChild(freeDealItemElement);
            data.appendChild(totalPrice);

            isCreated = true


        }  else {
            displayItemBasedOnSpecialRules()
        }
       
    }

    function displayItemBasedOnSpecialRules(){
        var specialPriceItems = [];
        var displayFreeDealsItemElement = document.getElementById("freeDealItemsId")

        if(displayFreeDealsItemElement != null){
            displayFreeDealsItemElement.style.display = 'none';
            displayFreeDealsItemElement.textContent = '';
        }
        
        var recipientName = document.getElementById("recipientId")
        if(recipientName != null){
            if(recipient == 1){            
            recipientType= 'Associate'
            } else{
                recipientType= 'Diamond'
            }
            recipientName.textContent = "RECIPIENT: " +   recipientType
        }
        

        var cartItems = document.getElementById("cartItemsId")
        if(cartItems != null){
            var cartItemNames  =  addedItem
            .map(function(elem){
            return elem.Name;
            }).join(",")
            cartItems.textContent = 'CART ITEMS: ' + cartItemNames
        }
        

        var totalPrice = document.getElementById("totalPriceId")
        if(totalPrice != null){
            var totalItemAmount = 0;
            freeDealItems = []

            var selectedSpecialPricingProduct = specialPricingProducts.filter(function(response){
                return response.Recipient == recipient && response.IsEnabled
            }) 

            if(selectedSpecialPricingProduct.length > 0){
                selectedSpecialPricingProduct.forEach(function(response){

                    var filteredItems = addedItem.filter(function(item){
                        return response.ProductId == item.ProductId
                    })
                    specialPriceItems.push(response.ProductId)

                    if(filteredItems.length >= response.MinimumPurchase){

                        if(response.FreeDeal > 0) {

                            var additionOfFreeItem =  parseInt(filteredItems.length/response.MinimumPurchase) * response.FreeDeal;
                            if(additionOfFreeItem > 0){
                                for(var i = 0; i < additionOfFreeItem; i++){
                                    var index = addedItem.length;                            
                                    var additionFreeDealItem = {};
                                    Object.assign(additionFreeDealItem, filteredItems[0])
                                    additionFreeDealItem.No = index;
                                    freeDealItems.push(additionFreeDealItem)
                                }

                                var freeDealsItemElement = document.getElementById("freeDealItemsId")
                                freeDealsItemElement.style.display="block";
                                var freeDealItemNames  =  freeDealItems
                                .map(function(elem){
                                return elem.Name;
                                }).join(",")
                                freeDealsItemElement.textContent = 'FREE DEALS: ' + freeDealItemNames
                            }                   
                        
                        }

                        filteredItems.forEach(function(filtered){
                            var realPrice = response.SpecialPrice
                            if(recipient == 1){       
                                totalItemAmount += parseFloat((parseFloat(realPrice)).toFixed(2))

                            } else{
                                totalItemAmount += parseFloat((parseFloat(realPrice)).toFixed(2))
                            }
                        })

                    } else {
                        filteredItems.forEach(function(filtered){
                        var realPrice = filtered.NormalPrice
    
                            if(recipient == 1){       
                                var discountAmount = parseFloat((parseFloat(realPrice) * 0.05).toFixed(2))
                                totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))

                            } else{
                                var discountAmount = parseFloat((parseFloat(realPrice) * 0.2).toFixed(2))
                                totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))
                            }

                        })           
                    }
                })           

                addedItem.forEach(function(response){
                    var hasFilteredProduct = specialPriceItems.some(function(item){
                        return response.ProductId == item
                    })

                    if(!hasFilteredProduct){
                        var realPrice = response.NormalPrice

                        if(recipient == 1){       
                            var discountAmount = parseFloat((parseFloat(realPrice) * 0.05).toFixed(2))
                            totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))

                        } else{
                            var discountAmount = parseFloat((parseFloat(realPrice) * 0.2).toFixed(2))
                            totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))
                        }                            
                    }
                })

                totalPrice.textContent = 'Total Expected: RM' + totalItemAmount.toFixed(2)     
            } else {
                addedItem.forEach(function(response){
                var realPrice = response.NormalPrice
                    if(recipient == 1){       
                        var discountAmount = parseFloat((parseFloat(realPrice) * 0.05).toFixed(2))
                        totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))
                        console.log(totalItemAmount, parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2)))

                    } else{
                        var discountAmount = parseFloat((parseFloat(realPrice) * 0.2).toFixed(2))
                        totalItemAmount += parseFloat((parseFloat(realPrice) - discountAmount).toFixed(2))
                    }

                })           
                totalPrice.textContent = 'Total Expected: RM' + totalItemAmount.toFixed(2)
            }
        }
    
    }
    

    function changeInput(elementId){
        var getDetails = elementId.toString().split("-");
        
        var typeChange = getDetails[0];
        var index = parseInt(getDetails[1]);
        var currentItem = 0;

        var data = document.getElementById(elementId);

        if(typeChange == "productName"){

            initialProducts[index].Name = data.value;

            var selectOptionNames = document.getElementsByTagName("option");
            var options = Array.prototype.slice.call(selectOptionNames);
                options.forEach(function(response){
                    if(parseInt(response.value) == initialProducts[index].ProductId){
                        response.textContent = data.value;
                    }
                })

        } else if (typeChange == "productPrice"){
            var decimal = parseFloat(data.value);
            data.value = parseFloat(decimal.toFixed(2));
            initialProducts[index].NormalPrice = parseFloat(decimal.toFixed(2));
        }

        displayItemBasedOnSpecialRules()

    }

    function changeSpecialPriceInput(elementId){
        var getDetails = elementId.toString().split("-");
        
        var typeChange = getDetails[0];
        var index = parseInt(getDetails[1]);

        var data = document.getElementById(elementId);

        if(typeChange == "selectRecipient"){

            specialPricingProducts[index].Recipient = parseInt(data.value);

            var enabledId = "productEnabled-" + index;
            var enabledData = document.getElementById(enabledId);
            enabledData.checked = false;
            specialPricingProducts[index].IsEnabled = false;

        }
        else if(typeChange == "selectProductName"){

            specialPricingProducts[index].Name = data.textContent;

            var enabledId = "productEnabled-" + index;
            var enabledData = document.getElementById(enabledId);
            enabledData.checked = false;
            specialPricingProducts[index].IsEnabled = false;
            specialPricingProducts[index].ProductId = parseInt(data.value);

        } else if (typeChange == "productMinimumNumberPurchase"){
            specialPricingProducts[index].MinimumPurchase = parseInt(data.value);

        } else if (typeChange == "productSpecialPrice"){
            
            specialPricingProducts[index].SpecialPrice = parseFloat(data.value);

        } else if (typeChange == "productFreeDeal"){
            
            specialPricingProducts[index].FreeDeal = parseFloat(data.value);

        } else if (typeChange == "productEnabled"){
            
            specialPricingProducts.forEach(function(response){
                if(response.ProductId == specialPricingProducts[index].ProductId && response.Recipient == specialPricingProducts[index].Recipient){
                    if(response.No != index){
                        var enabledId = "productEnabled-" + response.No;
                        var enabledData = document.getElementById(enabledId);
                        enabledData.checked = false;
                        specialPricingProducts[response.No].IsEnabled = false;
                    } else{
                        var enabledId = "productEnabled-" + response.No;
                        var enabledData = document.getElementById(enabledId);
                        specialPricingProducts[response.No].IsEnabled = enabledData.checked;
                    }
                   
                } else{
                    var enabledId = "productEnabled-" + index;
                    var enabledData = document.getElementById(enabledId);
                    if(enabledData.checked){
                        enabledData.checked = true;
                        specialPricingProducts[index].IsEnabled = enabledData.checked;
                    } else {
                        enabledData.checked = false;
                        specialPricingProducts[index].IsEnabled = enabledData.checked;
                    }
                }
            })
        }

        
        displayItemBasedOnSpecialRules()

    }
    


    function specialPricing (){

        var recipientLevels = [
            {
                Type: 1,
                Name: 'Associate'
            },
            {
                Type: 2,
                Name: 'Diamond'
            }
        ]

        var table = document.createElement('table')
        table.setAttribute("id", "tableId");
        var headerRow = document.createElement('tr')
        var headerRecipient = document.createElement('th')
        var headerItem = document.createElement('th')
        var headerMinimumNumberPurchase = document.createElement('th')
        var headerNewPrice = document.createElement('th')
        var headerFreeDeal = document.createElement('th')
        var headerEnabled = document.createElement('th')

        headerRecipient.textContent = 'Recipient';
        headerItem.textContent = 'Item';
        headerMinimumNumberPurchase.textContent = 'Minimum Number Purchase'
        headerNewPrice.textContent = 'Special Price'
        headerFreeDeal.textContent = 'Free Deal'
        headerEnabled.textContent = 'Enabled'


        headerRow.appendChild(headerRecipient);
        headerRow.appendChild(headerItem);
        headerRow.appendChild(headerMinimumNumberPurchase);
        headerRow.appendChild(headerNewPrice);
        headerRow.appendChild(headerFreeDeal);
        headerRow.appendChild(headerEnabled);
        table.appendChild(headerRow)

        specialPricingProducts.forEach(function(value){
    
            var bodyRow = document.createElement('tr');
            var bodyRecipient = document.createElement('td');
            var bodyItem = document.createElement('td');
            var bodyMinimumNumberPurchase = document.createElement('td');
            var bodySpecialPrice = document.createElement('td');
            var bodyFreeDeal = document.createElement('td');
            var bodyEnabled = document.createElement('td');

             //Name of the product
             var selectRecipient = document.createElement("SELECT");
            //Set Id
            var selectRecipientId = "selectRecipient-" + value.No
            selectRecipient.setAttribute("id", selectRecipientId)
            selectRecipient.setAttribute("onchange", "changeSpecialPriceInput('" + selectRecipientId + "')")

            recipientLevels.forEach(function(recipient){
                var selectOptionRecipientName = document.createElement("option");
                selectOptionRecipientName.setAttribute("value", recipient.Type)
                selectOptionRecipientName.textContent = recipient.Name;
                selectRecipient.appendChild(selectOptionRecipientName)
            })
            selectRecipient.value = value.Recipient


            //Name of the product
            var selectProductName = document.createElement("SELECT");
            //Set Id
            var selectProductNameId = "selectProductName-" + value.No
            selectProductName.setAttribute("id", selectProductNameId)

            initialProducts.forEach(function(product){
                var selectOptionName = document.createElement("option");
                selectOptionName.setAttribute("value", product.ProductId)
                selectOptionName.textContent = product.Name;
                selectProductName.appendChild(selectOptionName)
            })
            selectProductName.setAttribute("onchange", "changeSpecialPriceInput('" + selectProductNameId + "')")
            selectProductName.value = value.ProductId


            //Price of the product
            var productMinimumNumberPurchase = document.createElement("INPUT");
            //Set Id
            var productMinimumNumberPurchaseId = "productMinimumNumberPurchase-" + value.No
            productMinimumNumberPurchase.setAttribute("id", productMinimumNumberPurchaseId)

            productMinimumNumberPurchase.setAttribute("onchange", "changeSpecialPriceInput('" + productMinimumNumberPurchaseId + "')")
            productMinimumNumberPurchase.setAttribute("type", "number")
            productMinimumNumberPurchase.setAttribute("value", value.MinimumPurchase)


            var productSpecialPrice = document.createElement("INPUT");
            //Set Id
            var productSpecialPriceId = "productSpecialPrice-" + value.No
            productSpecialPrice.setAttribute("id", productSpecialPriceId)

            productSpecialPrice.setAttribute("onchange", "changeSpecialPriceInput('" + productSpecialPriceId + "')")
            productSpecialPrice.setAttribute("type", "number")
            productSpecialPrice.setAttribute("value", value.SpecialPrice)


            var productFreeDeal = document.createElement("INPUT");
            //Set Id
            var productFreeDealId = "productFreeDeal-" + value.No
            productFreeDeal.setAttribute("id", productFreeDealId)

            productFreeDeal.setAttribute("onchange", "changeSpecialPriceInput('" + productFreeDealId + "')")
            productFreeDeal.setAttribute("type", "number")
            productFreeDeal.setAttribute("value", value.FreeDeal)

            //Flex to ensure product side by side
            // var divProduct = document.createElement("div");
            // divProduct.style.display = "flex";

            var productEnabled = document.createElement("INPUT");
            //Set Id
            var productEnabledId = "productEnabled-" + value.No
            productEnabled.setAttribute("id", productEnabledId)

            productEnabled.setAttribute("onchange", "changeSpecialPriceInput('" + productEnabledId + "')")
            productEnabled.setAttribute("type", "checkbox")
            productEnabled.checked =  value.IsEnabled


            bodyRecipient.appendChild(selectRecipient);
            bodyItem.appendChild(selectProductName);
            bodyMinimumNumberPurchase.appendChild(productMinimumNumberPurchase);
            bodySpecialPrice.appendChild(productSpecialPrice);
            bodyFreeDeal.appendChild(productFreeDeal);
            bodyEnabled.appendChild(productEnabled);

            bodyRow.appendChild(bodyRecipient);
            bodyRow.appendChild(bodyItem);
            bodyRow.appendChild(bodyMinimumNumberPurchase);
            bodyRow.appendChild(bodySpecialPrice);
            bodyRow.appendChild(bodyFreeDeal);
            bodyRow.appendChild(bodyEnabled);
            table.appendChild(bodyRow);

        });

        document.getElementById("specialPriceProductItems").appendChild(table)

    }

    function initiateProject() {

        selectLevel(recipient);

        var table = document.createElement('table')
        table.setAttribute("id", "tableId");
        var headerRow = document.createElement('tr')
        var headerName = document.createElement('th')
        var headerPrice = document.createElement('th')
        var headerAction = document.createElement('th')

        headerName.textContent = 'Name';
        headerPrice.textContent = 'Price'
        headerAction.textContent = 'Action'

        headerRow.appendChild(headerName);
        headerRow.appendChild(headerPrice);
        headerRow.appendChild(headerAction);
        table.appendChild(headerRow)

        initialProducts.forEach(function(value){
    
        var bodyRow = document.createElement('tr')
        var bodyName = document.createElement('td')
        var bodyPrice = document.createElement('td')
        var bodyAction = document.createElement('td')

        //Name of the product
        var productName = document.createElement("INPUT");
        //Set Id
        var productNameId = "productName-" + value.No
        productName.setAttribute("id", productNameId)

        productName.setAttribute("onchange", "changeInput('" + productNameId + "')")
        productName.setAttribute("type", "text")
        productName.setAttribute("value", value.Name)

        //Price of the product
        var productPrice = document.createElement("INPUT");
        //Set Id
        var productPriceId = "productPrice-" + value.No
        productPrice.setAttribute("id", productPriceId)

        productPrice.setAttribute("onchange", "changeInput('" + productPriceId + "')")
        productPrice.setAttribute("type", "number")
        productPrice.setAttribute("value", value.NormalPrice)

        var additionProduct = document.createElement("button");
        additionProduct.setAttribute("type", "button")
        additionProduct.setAttribute("onclick", "addItemSelected(" + value.No +")")
        additionProduct.textContent = "Add";

        //Flex to ensure product side by side
        // var divProduct = document.createElement("div");
        // divProduct.style.display = "flex";


        bodyName.appendChild(productName);
        bodyPrice.appendChild(productPrice);
        bodyAction.appendChild(additionProduct);

        bodyRow.appendChild(bodyName);
        bodyRow.appendChild(bodyPrice);
        bodyRow.appendChild(bodyAction);
        table.appendChild(bodyRow);

        });

        document.getElementById("productItems").appendChild(table)

        specialPricing ()
    }



    initiateProject();

