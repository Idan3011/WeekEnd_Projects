const carMarket = require('./obj');

const agencyOperation = {
    ///////Insert A Car Company by their name OR Id to view their Inventory/////
    searchAgencyByName: function(sellers, nameOrId){
             for (let i=0 ; i<carMarket.sellers.length; i++){
                if (carMarket.sellers[i].agencyName == nameOrId ||carMarket.sellers[i].agencyId == nameOrId ) {
                    return carMarket.sellers[i];
                } 
        }
        return `There is no Agency how's name/id is: '${nameOrId}'. please TRY AGAIN.` 

    }, //////By calling below function you can view all the agancies that are available///// 
     retriveAganciesName: function(){
        for(let i=0; i<carMarket.sellers.length; i++){
            let aganciesName = [];
            while(i < carMarket.sellers.length){
            aganciesName.push(carMarket.sellers[i].agencyName);
                i++;
            }
            console.log( `The Agencies are: ${aganciesName}`);
        }
    }, //////By calling below function you can add A new Car to agency of your choice///// 
        addingNewCartoAgency: function(brand, name, year, price, carNumber, ownerId, agency) {
            let newCar ={
                brand,
                models: [{
                name,
                year,
                price,
                carNumber,
                ownerId
            }]
        };
        for(let i=0; i<carMarket.sellers.length; i++) {
            if(carMarket.sellers[i].agencyName === agency){
                     carMarket.sellers[i].cars.push(newCar)
                     return carMarket.sellers[i].cars
                  }
            }
    },  //////By calling below function you can Remove a car from agnecy of your choice///// 
    removingACarFromAgency: function(agency, carNumber){
        for(let i=0; i<carMarket.sellers.length; i++) {
            for(let j=0; j<carMarket.sellers[i].cars.length; j++){
                for(let k=0; k<carMarket.sellers[i].cars[j].models.length; k++){
        if(carMarket.sellers[i].agencyName === agency && carMarket.sellers[i].cars[j].models[k].carNumber == carNumber){
            carMarket.sellers[i].cars[j].models.splice(k,1)
            return carMarket.sellers[i].cars[j].models.splice(k,1);;
            } 
        } 
        }
    }
    }, //////By calling below function you can deposit money or credit to an agency of your choice///// 
        changingCashOrCredit: function(agency,cashOrCredit, deposit ){
            for(let i=0 ; i<carMarket.sellers.length; i++){
             if (carMarket.sellers[i].agencyName.includes(agency) && cashOrCredit === 'cash'){
                carMarket.sellers[i].cash += deposit;
                return `now Your Cash deposit is: ${deposit}$. and now you total cashFlow is: ${carMarket.sellers[i].cash}$`
            } else if (carMarket.sellers[i].agencyName.includes(agency) && cashOrCredit === 'credit' ){;
                carMarket.sellers[i].credit += deposit;
                return `Your Credit deposit is:${deposit}$. and now you total cashFlow is:${carMarket.sellers[i].credit}$`;
            } 
        }
    }, //////By calling below function you can Update a car price as you wish/////
        updateCarPrice: function(agency,carNumber, priceUpDate) {
         for(let i=0; i<carMarket.sellers.length; i++) {
            for(let j=0; j<carMarket.sellers[i].cars.length; j++){
             for(let k=0; k<carMarket.sellers[i].cars[j].models.length; k++){
              if(carMarket.sellers[i].agencyName.includes(agency) && carMarket.sellers[i].cars[j].models[k].carNumber == carNumber){
                    carMarket.sellers[i].cars[j].models[k].price += priceUpDate;
            return `Your New Price Is:${priceUpDate}$.`
                    } 
             }
            }
         }
    }, //////By calling below function you can view any agency Total Revenue/////
        getTotalAgencyRevenue: function(agency) {
        for(let i=0 ; i<carMarket.sellers.length; i++){
            if (carMarket.sellers[i].agencyName.includes(agency)){
            return `Your Total revenue in `+`'${carMarket.sellers[i].agencyName}'`+` agency is: ${carMarket.sellers[i].cash+carMarket.sellers[i].credit}$.`;
        }
        }
    }, //////By calling below function you can transfer a car from one agency to another/////
        transferCarBetweenAgencies: function (sellers, agencyName1, agencyName2, carNumber, brand) {
            let newCar = {
                brand,
                models: [{

                }]
            }
            const sellerAgencyIndex = carMarket.sellers.findIndex(seller => seller.agencyName === agencyName1);
            const sellerAgency = carMarket.sellers[sellerAgencyIndex];
            const buyerAgencyIndex = carMarket.sellers.findIndex(seller => seller.agencyName === agencyName2);
            const buyerAgency = carMarket.sellers[buyerAgencyIndex];
            if(!sellerAgency || !buyerAgency ) {
                return 'the seller Agency or the Buyer Agnecy that you enter isn`t valid. PLEASE enter seller or buyer Agency name again.'
            }
            for (let i=0; i<carMarket.sellers[sellerAgencyIndex].cars.length; i++) {
                const car = carMarket.sellers[sellerAgencyIndex].cars[i];
                for (let j=0; j<carMarket.sellers[sellerAgencyIndex].cars[i].models.length; j++){
                const model =carMarket.sellers[sellerAgencyIndex].cars[i].models[j];
                     if(model.carNumber == carNumber){
                        buyerAgency.cars.push({
                            brand: car.brand,
                            models: [model]
                        });
                        carMarket.sellers[sellerAgencyIndex].cars[i].models.splice(j , 1);
                        console.log(`your request to transfer the car:( brand: '${brand}', carPlate: '${carNumber}') from "${agencyName1}" to '${agencyName2}" as been confirm and succsed.`)
                    };
                
                } 
                
                
                 
            }

    }
}

const customerOperations = {
     searchForCustomerByNameOrId: function(nameOrId){
        for (let i=0 ; i<carMarket.customers.length; i++){
            if (carMarket.customers[i].name == nameOrId ||carMarket.customers[i].id == nameOrId ) {
                return carMarket.customers[i];
            } 
        } 
        return `There is NO cutomer how's Nmae/Id is: '${nameOrId}' please try again!`;
        
     },
     retriveCustomersName: function() {
        for(let i=0; i<carMarket.customers.length; i++){
            let CustomersName = [];
            while(i < carMarket.customers.length){
                CustomersName.push(carMarket.customers[i].name);
            i++;
        }
            console.log( `The Customers are: ${CustomersName}`);
    }
     },
     changingCashOfCustomer: function(customerName, deposit){
        for (let i=0; i<carMarket.customers.length; i++){
            if (carMarket.customers[i].name === customerName){
                carMarket.customers[i].cash += deposit;
            }
        }
        return `A transfer you made for the customer: '${customerName}' of  total of: ${deposit}$ was transferred successfully.`
     },
     getCustomerTotalCarValue: function(customerName){
            const customerIndex = carMarket.customers.findIndex(customer => customer.name === customerName);
            const customer = carMarket.customers[customerIndex];
            const customerCars = carMarket.customers[customerIndex].cars.map(cars => {return cars});
            let customerCarsPrice= 0;
            for (let i=0; i<customerCars.length; i++){
                while(i<customerCars.length){
                customerCarsPrice += customerCars[i].price;
                i++
            }
        }
           return `The Total cars value for the customer: '${customerName}' is: ${customerCarsPrice}$ `;

     },
}

const carOperations = {
    retrieveingAllCarsAvailable: function(sellerOrCustomer){
        let carsForSaleAgency = [];
        let carsForSaleCustomer =[];
        for (let i=0; i<carMarket.sellers.length; i++){
          for (let j=0; j<carMarket.customers.length; j++){
            while(i<carMarket.sellers.length){
            carsForSaleAgency.push(carMarket.sellers[i].cars);
            i++;
           }while(j<carMarket.customers.length){
             carsForSaleCustomer.push(carMarket.customers[j].cars)
             j++
              };
           const brandForSaleAgency = carsForSaleAgency.map(cars => {return cars});
           const brandForSaleCustomer = carsForSaleCustomer.map(cars =>{return cars});
                if(sellerOrCustomer === 'seller'){
                return brandForSaleAgency
                } else if( sellerOrCustomer === 'customer'){
                return brandForSaleCustomer
                }
            } 
        }
    },
    searchingForCarsBaseOfCriteria: function(price, year){
        const agencyCars = this.retrieveingAllCarsAvailable('seller');        
        const customersCars = this.retrieveingAllCarsAvailable('customer');
        for(let i=0; i<customersCars.length; i++){
          for(let j=0; j<customersCars[i].length; j ++){
            if(customersCars[i][j].price == price && customersCars[i][j].year == year){
                return customersCars[i][j]
            }
          } 
           
        }   
        return `there is no car with your search criteria: (price: '${price}$', Year of Profuction: '${year}')` 
             
    },
    mostExpensiveCarAvaible: function(sellers){
            let maxPrice = 0;
            let mostExpensiveCar = null;
            sellers.forEach(seller => { seller.cars.forEach(car => { car.models.forEach(model => {
            if (model.price > maxPrice) {
                maxPrice = model.price;
                mostExpensiveCar = { brand: car.brand, modelName: model.name, price: model.price };
            }
            });
        });
        });
        return mostExpensiveCar;
        
    },
    getCheapestCar: function(sellers){
        let cheapestPrice=Number.POSITIVE_INFINITY;
        let mostCheapestCar= null;
        sellers.forEach(seller => { seller.cars.forEach(car => {car.models.forEach(model => {
           if(model.price < cheapestPrice){
            cheapestPrice = model.price;
            mostCheapestCar ={brand: car.brand, modelName: model.name, price: model.price}
           } 
        });
        
        }
        );
        
    }
    )
        return mostCheapestCar
    }
}

const carPurchaseOperations = {
    sellCar: function(agencyName, carNumber, sellers){
        const agency = sellers.find(seller => seller.agencyName === agencyName);       
        for (const car of agency.cars) {
            const carExists = car.models.some(model => model.carNumber === carNumber);
            if(carExists) {
                return `The Car with numberPlate: "${carNumber }" is available in agency "${agencyName }".`;
            }  
            }
            return `The Car with numberPlate: "${carNumber }" is not found in agency "${agencyName}".`;
        },
      
}


//console.log(carMarket.sellers[0].cars[0].models[0].carNumber)



// for(let i=0; i<carMarket.sellers.length; i++){
//     for(let j=0; j<carMarket.sellers[i].length; j++){
//         for(let k=0; k<carMarket.sellers[i].cars.length; k++){
//             for(let l=0; l<carMarket.sellers[i].cars[j].models.length; l++){
//             while()
//     }
//     }
// }
// }



//console.log(agencyOperation.searchAgencyByName(carMarket.sellers,'gNHjNFL1')) //<-----> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (search for a car Agency by its name or Id)

//agencyOperation.retriveAganciesName(); //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Retrive all agencies names.)

//agencyOperation.addingNewCartoAgency('Tesla','7','2022',45000,'ERTR5','Olyq5M5EZ', 'Best Deal') //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Add a New Car to an agency`s of your choice.)

///////console.log(agencyOperation.removingACarFromAgency('Best Deal', "MWXBG")); //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING.(Remove a car from an agnecy`s inventory)
//////console.log(agencyOperation.removingACarFromAgency('CarMax', "6t7QU"));//<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Remove a car from an agnecy`s inventory)

//agencyOperation.changingCashOrCredit('CarMax', 'credit' ,100000);//<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Change the cash or credit of an agency of your choice);

//agencyOperation.updateCarPrice('CarMax', "4Ixb0",1000000); /<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Change the Price of a car of your choice);


//console.log(agencyOperation.getTotalAgencyRevenue('CarMax')) /<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING.(Viewing gency of your choice Total Revenue.)


//agencyOperation.transferCarBetweenAgencies(carMarket.sellers,'Best Deal', 'Car Werks', 'MWXBG', 'toyota') //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (trensfer a car from one agency to another of your choice)

//console.log(customerOperations.searchForCustomerByNameOrId("Will Reyes")) //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Search for a customer by their name or ID)

//customerOperations.retriveCustomersName() //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Retrive all customers NAME)

//console.log(customerOperations.changingCashOfCustomer('Bob Steel', 100000)) //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING.(Change the cash of a customer.)

//console.log(customerOperations.getCustomerTotalCarValue('Lilah Goulding')) //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Calculate the total value of all cars owned by a specific customer)

//console.log(carOperations.retrieveingAllCarsAvailable()); //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Retrieve all cars avaible to purchase)

//console.log(carOperations.searchingForCarsBaseOfCriteria(65042, 2016)); //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (search for customer cary cy the criteria: year of production & price)

//console.log(carOperations.mostExpensiveCarAvaible(carMarket.sellers)); //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (searching for the most expensive car)

//console.log(carOperations.getCheapestCar(carMarket.sellers)); //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (searching for the most cheapest car)

//console.log(carPurchaseOperations.sellCar('Best Deal', "AZJZ4", carMarket.sellers)) //<------> UNCOMMENT TO CHECK THAT THE CODE IS WORKING. (Check the availability of the car at the agency)