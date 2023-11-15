//..................Define Varibels..................//

const flights = [
    {
        from: "Berlin",
        to:'Prague',
        price: 24,
        depart: '30.11.2023',
        return: '12.1.2024'
        },
    {
        from: "TLV",
        to:'Berlin',
        price: 26,
        depart: '1.12.2023',
        return: '13.2.2024'
        },
    {
        from: "London",
        to:'Lisbon',
        price: 21,
        depart: '28.11.2023',
        return: '24.2.2024'
        },

    {
        from: "Tel-Aviv",
        to:'Paris',
        price: 25,
        depart: '1.12.2023',
        return: '12.12.2023'
        },

    {
        from: "New-York",
        to:'Madrid',
        price: 28,
        depart: '1.12.2023',
        return: '12.2.2024'
        },

    {
        from: "Berlin",
        to:'Monaco',
        price: 31,
        depart: '4.3.2024',
        return: '4.4.2024'
        },

    {
        from: "Barcelona",
        to:'Rome',
        price: 27,
        depart: '21.12.2023',
        return: '1.2.2024'
        },
    {
        from: "Dablin",
        to:'London',
        price: 18,
        depart: '24.1.2024',
        return: '3.2.2024'
        }

    ]
    const messegeContainer = document.getElementById('hello-messege');
    const flightContainer = document.getElementById('flight-container');
    const cart = document.getElementById('cart');
    const popup = document.getElementById('popup');
    const sortFlightByPrice = document.getElementById('sort-by-price');
    const searchContiner = document.getElementById('search-bar')
    const searchBar = document.getElementById('search');
    const newFlightForm = document.getElementById('addNewFlight');
    const flightFrom = document.getElementById('flight-from');
    const flightTo = document.getElementById('flight-to');
    const flightPrice = document.getElementById('flight-price');
    const flightDepart = document.getElementById('flight-depart');
    const flightArrive = document.getElementById('flight-arrive');
    const closeForm = document.querySelector('.close');
    const logOut = document.getElementById('log-out');
    const closePopUp = document.getElementById('close');
    const changeFlightPrice = document.getElementById('change-flight-price');
    const flightFromSearch = document.getElementById('flight-from-search');
    const flightToSearch = document.getElementById('flight-to-search');
    const flightPriceChange = document.getElementById('flight-price-change');

    //..................define Flag`s..................//

    let sortFlight = false;
    let newFlightObj ={};
    
//.................add Event Listener`s.................//



//............eventListener to verify that the localStorage input will upload when the page is reloading............//

    document.addEventListener('DOMContentLoaded', () => {        
        if(localStorage.Admin === 'true'){
                adminProperties()

        }
    })

 //..................eventListener for 'logout' button..................// 
    
    logOut.addEventListener('click', () => {
        if(logOut){
            localStorage.clear();
            window.location = 'index.html'
        }
    })

//..................eventListener for 'newflight' button..................// 
    
    newFlightForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        if(newFlightForm){
        addNewFlight()
        newFlightForm.style.display = 'none';
        }

    })
//..................eventListener for closing form's..................//


    closeForm.addEventListener('click', () =>{
        if(closeForm){
        newFlightForm.style.display = 'none'
        }
    })

//..................eventListener for 'searchbar' input.................//

    searchBar.addEventListener('input', () =>{
        if(searchBar){
            searchFlight(flights);
    }

    })

//..................eventListener for 'changeFlightPrice' button..................//

    changeFlightPrice.addEventListener('submit', (e) => {
        e.preventDefault()
        if(changeFlightPrice){
            updateFlightPrice(flights);
            popup.style.display = 'none';
        }
    })

//..................eventListener for 'close popup'..................//

closePopUp.addEventListener('click',() =>{
        if(closePopUp){
            popup.style.display = 'none'
        }
    })

//..................eventListener sorted flight button..................//


    sortFlightByPrice.addEventListener('click', () => {

        
        if(sortFlight){
            sortedFlight(flights)
            sortFlight = false;
            customerProperties()
        } else{
            sortedFlightClear(flights)
            sortFlight = true;
            customerProperties()
        }
        
    })

//..................eventListener for button 'cart' to move to the next page..................//

    cart.addEventListener('click', () => {
        if(cart){
            window.location = 'cart.html'
        }
    })
    
//..........................Difine Function`s...........................//

//..................function for creating flight card and display it in the browser...................//

function createFlightCard(flight){
    flightContainer.innerHTML = '';
    flight.forEach(flight => {
        const flightCard = document.createElement('button');
        flightCard.classList.add('card');

        const flightHeading = document.createElement('h2');
        flightHeading.textContent = `${flight.to.toUpperCase()}`
        flightHeading.style.borderBottom = '0.05rem solid #333';
        flightHeading.style.fontSize = '1.1rem';
        flightCard.appendChild(flightHeading)
        
        const fFrom = document.createElement('p');
        fFrom.textContent = `Depart from: ${flight.from}`;
        flightCard.appendChild(fFrom);

        const fTo = document.createElement('p');
        fTo.textContent = `Arrive To: ${flight.to}`;
        flightCard.appendChild(fTo);

        const price = document.createElement('p');
        price.textContent = `Flight Price: ${flight.price}$`;
        flightCard.appendChild(price);

        const depart = document.createElement('p');
        depart.textContent = `Flight Depart at: ${flight.depart}`;
        flightCard.appendChild(depart);

        const returnDate = document.createElement('p');
        returnDate.textContent = `Flight Return at: ${flight.return}`;
        flightCard.appendChild(returnDate);

        flightContainer.appendChild(flightCard);

        localStorage.setItem('FlightCard', flightCard);
        
    })
}
createFlightCard(flights)

//..................function for sorted flight card by price..................//

function sortedFlight(flight){
    flight.sort((a,b) => {return a.price - b.price})
    createFlightCard(flight);
    sortFlight = true    
}

//..................function for clear sorted flight card by price..................//

function sortedFlightClear(flight){
        flight.sort((a,b) => {return b.price - a.price})
        createFlightCard(flight); 
        sortFlight = false
}

//..................function for search flight by name..................//

function searchFlight(flights){
    let textVal = searchBar.value.toLowerCase().toString();
    let searchFlightArr = [];
    console.log(textVal)
        flights.find(flight => {
        let flightVal = flight.to.toLowerCase().toString();
        if(flightVal.includes(textVal)){
            searchFlightArr.push(flight)
            createFlightCard(searchFlightArr)
        }
    })
}

//..................function for admin properties(add flight, change prices for flight).................//

function adminProperties(){
    const addFlight = document.createElement('button');
    addFlight.classList.add('addFlight');
    addFlight.textContent = 'Add Flight'
    searchContiner.appendChild(addFlight);

    const updatePrice = document.createElement('button');
    updatePrice.classList.add('updatePrice');
    updatePrice.textContent = 'Update Price';
    searchContiner.appendChild(updatePrice)

    addFlight.addEventListener('click', () => {
        if(addFlight.click){
        newFlightForm.style.display = 'flex';
        }
    })

    updatePrice.addEventListener('click', () => {
        if(updatePrice){
            popup.style.display = 'flex'
        }
    })
}

//..................function for add flight -> for admin properties..................//

function addNewFlight(){

    const addNewFlight = document.createElement('button');
    addNewFlight.classList.add('card');
    const title = document.createElement('h2');
    title.textContent = `${flightTo.value}`;
    title.style.borderBottom = '0.05rem solid #333';
    title.style.fontSize = '1.1rem';
    
    addNewFlight.appendChild(title);
    

    const fFrom = document.createElement('p');
        fFrom.textContent = `Depart from: ${flightFrom.value}`;
        addNewFlight.appendChild(fFrom);

        const Fto = document.createElement('p');
        Fto.textContent = `Arrive To: ${flightTo.value}`;
        addNewFlight.appendChild(Fto);

        const price = document.createElement('p');
        price.textContent = `Flight Price: ${flightPrice.value}$`;
        addNewFlight.appendChild(price);

        const depart = document.createElement('p');
        depart.textContent = `Flight Depart at: ${flightDepart.value}`;
        addNewFlight.appendChild(depart);

        const returnDate = document.createElement('p');
        returnDate.textContent = `Flight Return at: ${flightArrive.value}`;
        addNewFlight.appendChild(returnDate);

        flightContainer.appendChild(addNewFlight);
        newFlightObj= {
            from: flightFrom.value,
            to:flightTo.value,
            price: flightPrice.value,
            depart: flightDepart.value,
            return: flightArrive.value,
        }

        flights.push(newFlightObj)

        createFlightCard(flights)
}

//..................function for change flight price -> for admin properties..................//

function updateFlightPrice(flight){
   let flightFromLower = flightFromSearch.value.toLowerCase();
   let flightToLower = flightToSearch.value.toLowerCase();

    flight.find((flight, index) => {
        if(flight.from.toLowerCase() == flightFromLower && flight.to.toLowerCase() == flightToLower){
        flight.price = flightPriceChange.value;
            flights.splice(index,1, flight)
            createFlightCard(flights)
        }  else{
           return
        }      
    })
    
}

//..................function for customer properties..................//

function customerProperties(){
    let flightArr = [];
    let flightCart = [];
    let getFlight = localStorage.getItem('flightCard');
    getFlight = document.getElementsByClassName('card');
    let counter =1;
    flightArr.push(getFlight)
        const keys = flightArr[0].valueOf()
        // console.log(`keys value: ${keys}`)
        if(localStorage.Admin === 'false'){
    for(let i=0; i<keys.length; i++){    
     keys[i].addEventListener('dblclick', () =>{
        if(getFlight){
            if(keys[i]){
            keys[i].style.display = 'none';
            flightCart.push(flights.splice(i,1));
            let flightCartObj = JSON.stringify(flightCart);
            localStorage.setItem(`cartFlight`, flightCartObj);
            console.log(flightCart)
            cart.textContent = `My Cart +${counter}`
            cart.style.width = '8rem';
            document.getElementById('cart').className='pulsing';
            counter += 1
            localStorage.setItem('counter', counter)

        }
            
        }
        
    })
     }
    }
}

customerProperties()

//..................function for greeting the costumer/admin..................//


function helloMessege(){
    messegeContainer.innerHTML = '';
    
    const user = document.createElement('section');
    if(localStorage.Admin != 'true'){
    user.textContent = `Hello ${localStorage.UserName}! let's choose you next flight! `
    messegeContainer.appendChild(user);
    } else{
        user.textContent = `Hello ${localStorage.UserName}!`;
        messegeContainer.appendChild(user);

        const adminText = document.createElement('div');
        adminText.classList.add('admin-properties')
        adminText.textContent =`${localStorage.UserName}, You can add flight's & change prices as you wish!`
        messegeContainer.appendChild(adminText)
    }    
}
helloMessege()


    