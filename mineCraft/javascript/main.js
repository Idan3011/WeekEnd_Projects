export const gameContainer = document.getElementById('game-container');
export const gameContainerNoClass = document.querySelectorAll('#game-container>div:not([class])');
export const pickaxeButton = document.querySelector('.pickaxe');
export const axeButton = document.querySelector('.axe')
export const shovelButton = document.querySelector('.shovel')
export const itemToPick = document.getElementById('item-to-pick');
export let shovelOn = 1
export let axeOn = 1
export let pickaxeOn = 1
export let inventory = [];
let itemToPickVal = []
let itemName = '';
    pickaxeButton.addEventListener('click',() => {
        if(pickaxeOn === 1){
            gameContainer.style.cursor = `url('/mineCraft/assets/CURSORS/pickaxe-min.png'), auto`;
            pickaxeOn = 2;
            axeOn = 1;
            shovelOn = 1;
            pickaxeButton.style.background = 'blue';
            axeButton.style.background = 'black';
            shovelButton.style.background = 'black';
        } else {
            pickaxeOn = 1;
            axeOn = 2;
            shovelOn = 2;
        }
        
    })

    shovelButton.addEventListener('click', () => {
        
        if(shovelOn === 1){
        gameContainer.style.cursor = `url('/mineCraft/assets/CURSORS/shovel-min.jpg'), auto`;
            shovelOn = 2
            pickaxeOn = 1;
            axeOn = 1;
            pickaxeButton.style.background = 'black';
            axeButton.style.background = 'black';
            shovelButton.style.background = 'blue';
        } else{
            shovelOn = 1;
            pickaxeOn = 2;
            axeOn = 2;
            
        }
    })

    axeButton.addEventListener('click', () => {
        if(axeOn === 1){
        gameContainer.style.cursor = `url('/mineCraft/assets/CURSORS/axe-min.png'), auto`;
           axeOn = 2
           shovelOn = 1
           pickaxeOn = 1;
           pickaxeButton.style.background = 'black';
            axeButton.style.background = 'blue';
            shovelButton.style.background = 'black';
        }  else {
            axeOn =1
            shovelOn = 2
            pickaxeOn = 2;
            
        }
    })
    function handleItems() {
       
        return itemToPickVal
      }
      
    itemToPick.addEventListener('click', () =>{
     inventory.forEach(item =>{
            itemName = Object.keys(item)
            itemToPickVal.push(itemName)
            gameContainer.style.cursor =`url(/mineCraft/assets/CURSORS/${itemName}-min.png), auto`; 
            axeOn =1
            shovelOn = 1
            pickaxeOn = 1;
            })
            handleItems()
    })
    
    
const itemOfInentory = handleItems();
console.log(itemOfInentory);
   
const randX = ()=>{
    let randX = Math.ceil(Math.random()*7);
    if(randX>2){
        return randX
    }
}
const randY = ()=>{
    let randY = Math.ceil(Math.random()*11);
    if(randY>=7){
        return randY
    }
}



export let cloudColector = []


const cloudGenerator = () =>{
    for(let i=0; i<90; i++){
        let cloud = {
            x: randX(),
            y: randY()
        }
        cloudColector.push(cloud)
       
    }
} 
    cloudGenerator()

    const grid = () =>{
        let arr =[]
        for(let i=1; i<=20; i++){
            for(let j=0; j<=20; j++){
                let gridItem = {
                    x: i,
                    y: j
                }
                arr.push(gridItem)
            }
            
        }
       return arr
    }

const gameGrid = grid();




// function dropItem() {

//     gameContainer.addEventListener('click', () =>{
//         const itemDrop = document.createElement('div');
//         gameGrid.forEach(item => {
//             if (!item.classList.length) {
//                 itemDrop.style.gridRowStart = item.x;
//                 itemDrop.style.gridColumnStart = item.x;
//                 itemDrop.style.background = `url(/mineCraft/assets/CURSORS/${itemOfInentory[0]}-min.png), auto`
//             }
//         })
//     })
// }



// dropItem()
gameContainerNoClass.forEach(cell => {
    cell.addEventListener('dragover', event => {
      event.preventDefault();
    });
  
    cell.addEventListener('drop', event => {
      event.preventDefault();
      
      const data = event.dataTransfer.getData('text/plain'); // Get transferred data
      
      // Check if the dropped item matches the expected data and cell has no class
      if (data === 'example' && !cell.classList.length) {
        const clonedImg = selectedImg.cloneNode(true);
        clonedImg.style.display = 'block'; // Display the cloned image
        cell.appendChild(clonedImg); // Append the cloned image to the cell
      }
    });
  });