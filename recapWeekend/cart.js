//...........................Define Varibels...........................//


        const returnMain = document.getElementById('log-out');
        const booking = document.getElementById('booking');
        const changeDates = document.getElementById('change-flight-details');
        const changeDateForm = document.getElementById('change-fly-detail')
        const flightContainer =document.getElementById('flight-container');
        const addPassanger = document.getElementById('num-of-passngers');
        const addPassangerForm = document.getElementById('addPassengers');
        const flightFromSearch = document.getElementById('flight-from-search');
        const flightToSearch = document.getElementById('flight-to-search');
        const passengers = document.getElementById('passenger');
        const formPopUp = document.getElementById('popup');
        const closeForm = document.getElementById('close');
        const ticketPopup =document.getElementById('ticket-popup');
        const closePopUp = document.getElementById('close-popup');
        const textContainer = document.getElementById('text-container');
        const closeDateForm = document.getElementById('close-date-form');
        const departDate = document.getElementById('flight-depart');
        const returnDate = document.getElementById('flight-arrive');
        const flightFromDate = document.getElementById('flight-from');
        const flightToDate = document.getElementById('flight-to');
        const payup = document.getElementById('payup');
        const goodbye = document.getElementById('good-bye')

        let getFlight = localStorage.getItem('cartFlight');
        const getFlightObject = JSON.parse(getFlight);
        let flightArr = [];

        
//...............add Event Listener`s..............//

//..................eventListener for 'returnMainPage' button..................//

            returnMain.addEventListener('click', () => {
                if(returnMain){
                    window.location = 'main.html'
                }
            })

//..................eventListener for 'addPasssengerForm' button..................//            

    addPassangerForm.addEventListener('submit', (e) => {
            e.preventDefault()
            if(addPassangerForm){
                addPassangers(flightArr)
                formPopUp.style.display = 'none';
                
            }
        })

 //..................eventListener for 'closeForm' button..................//       

        closeForm.addEventListener('click', () => {
        if(closeForm){
            formPopUp.style.display = 'none';
        }
    })

 //..................eventListener for 'addPassanger' button..................//       

        addPassanger.addEventListener('click', () => {
            if(addPassanger){
                formPopUp.style.display = 'flex';
            }
        })

 //..................eventListener for 'booking' button..................//       


        booking.addEventListener('click', () => {
            if(booking){
                ticketPopup.style.display = 'flex';
                getTicket(getFlightObject)
            }
        })

 //..................eventListener for 'close pop up' button..................//       


        closePopUp.addEventListener('click', () => {
            if(closePopUp){
                ticketPopup.style.display = 'none';
            }
        })

 //..................eventListener for 'change date for flight' button..................//       
       

        changeDates.addEventListener('click', ()=>{
            if(changeDates){
                changeDateForm.style.display = 'flex';
            }
        })

 //..................eventListener for 'closing date form' button..................//       


        closeDateForm.addEventListener('click', () => {
            if(closeDateForm){
                changeDateForm.style.display = 'none'
            }
        })

//..................eventListener for 'change date for flight' form..................// 

        changeDateForm.addEventListener('submit', (e) => {
            e.preventDefault()
            if(changeDateForm){
                changeFlightDate(flightArr);
                changeDateForm.style.display = 'none'
            }
        })

//..................eventListener for 'check out' button..................//  

        payup.addEventListener('click', () =>{
            if(payup){
                window.alert('Thank you for your purchase. Enjoy the trip');
                console.log(localStorage);
                ticketPopup.style.display = 'none';
                
            }
        })
//................Difine Function`s...................//


//..................function for get the vlue of the flight object..................// 

        function objToArr(obj){
            obj.forEach(item =>  item.forEach(element =>
                flightArr.push(element)))
            
                
        }
    objToArr(getFlightObject);

//..................function for when user click on flight - the cart webPage gat the flight card from main webPage..................// 

    function retriveFlightInfo(flightArr){
        flightContainer.innerHTML = '';
        flightArr.forEach(flight => {
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

            localStorage.setItem('flightCard', flightCard)
        })
    }

        retriveFlightInfo(flightArr)

//..................function for when a user want to remove a flight card from is inventory..................// 

        function removeFlightFromCart(){
            let flightArr = [];
            let flightCart = [];
            let getFlight = localStorage.getItem('flightCard');
            getFlight = document.getElementsByClassName('card');
            flightArr.push(getFlight)
                const keys = flightArr[0].valueOf()
            for(let i=0; i<keys.length; i++){    
            keys[i].addEventListener('dblclick', () =>{
                if(getFlight){
                    if(keys[i]){
                    keys[i].style.display = 'none';
                    flightCart.push(flights.splice(i,1));
                    }
                }
            })   
            }
        }

        removeFlightFromCart()

//..................function for the user to add the number of traveller's.................// 

        function addPassangers(flight){
            
            let flightFromLower = flightFromSearch.value.toLowerCase();
        let flightToLower = flightToSearch.value.toLowerCase();
                flight.find((flight) => {
                if(flight.from.toLowerCase() == flightFromLower && flight.to.toLowerCase() == flightToLower){
                    const amountOffPassangers = passengers.value;
                    localStorage.setItem('passanger', amountOffPassangers);

                }  else{
                return
                }      
            })

        }

//..................function for sumup all user infromation and display it for him to is confirmation..................// 

        function getTicket(){
            let getFlight = localStorage.getItem('cartFlight');
            const flightArr = JSON.parse(getFlight);
            let flightFromLower = flightFromDate.value.toLowerCase();
            let flightToLower = flightToDate.value.toLowerCase();
            textContainer.innerHTML = '';
            ticketPopup.style.display = 'flex';
            for(let i=0; i<flightArr.length; i ++) {
                flightArr[i].find(flight => {
                if(flight.from.toLowerCase() == flightFromLower && flight.to.toLowerCase() == flightToLower){
                flight.depart = departDate.value;
                flight.return = returnDate.value;
            const flightFrom = document.createElement('p');
            flightFrom.textContent = `You fly from: ${flightFromSearch.value.toUpperCase()}`;
            textContainer.appendChild(flightFrom);

            const flightTo = document.createElement('p');
            flightTo.textContent = `You Arrive To: ${flightToSearch.value.toUpperCase()}`; 
            textContainer.appendChild(flightTo);

            const travellers = document.createElement('p');
            travellers.textContent = `the amount of Travellers is: ${passengers.value.toUpperCase()}`;
            textContainer.appendChild(travellers);

            const price = document.createElement('p');
            let pay = flight.price*passengers.value;
            price.textContent= `your Total price is: ${pay}$`
            textContainer.appendChild(price);

            const depart = document.createElement('p');
            depart.textContent = `your date of flight is: ${flight.depart}`;
            textContainer.appendChild(depart);

            const arrive = document.createElement('p');
            arrive.textContent = `your date of flight is: ${flight.return}`;
            textContainer.appendChild(arrive);
            localStorage.setItem('MyFlight', flight)
                }
            })
            }
        
        }

//..................function for when a user want to change is flight date's..................// 

        function changeFlightDate(flight){
            let arr = [];
            let flightFromLower = flightFromDate.value.toLowerCase();
            let flightToLower = flightToDate.value.toLowerCase();
            console.log(flightFromLower)
            flight.find((flight,index) => {
                if(flight.from.toLowerCase() == flightFromLower && flight.to.toLowerCase() == flightToLower){
                flight.depart = departDate.value;
                flight.return = returnDate.value;
                arr.push(flightArr)
                arr.splice(index,1,flight);
                retriveFlightInfo(arr)
                }        
            })
        }

//..................function for display to the user before checkout..................//         

function lastStep(){
    goodbye.innerHTML = '';
    const byeUser = document.createElement('section');
    byeUser.classList.add('goodBye');
    byeUser.textContent = `${localStorage.UserName}, this is the final step, before you check out. please add the number of passenger's and select the date for your travel berfore you checkout.`
    goodbye.appendChild(byeUser)

}

lastStep()
            



