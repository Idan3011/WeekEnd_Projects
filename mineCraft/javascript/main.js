import { classFunctionMap as classFunctionMap } from "./spreding.js";
export const gameContainer = document.getElementById('game-container');
export const pickaxeButton = document.querySelector('.pickaxe');
export const axeButton = document.querySelector('.axe')
export const shovelButton = document.querySelector('.shovel')
export const itemToPick = document.getElementById('item-to-pick');
export let shovelOn = 1
export let axeOn = 1
export let pickaxeOn = 1
export let inventory = [];
let itemToPickVal = [];
let itemName = '';

document.addEventListener('DOMContentLoaded', () => {
    console.log(classFunctionMap)
})

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


itemToPick.addEventListener('click', () =>{
    
    inventory.forEach(item =>{
        itemName = Object.keys(item);
        itemToPickVal.push(itemName);
        axeOn =1
        shovelOn = 1
        pickaxeOn = 1;   
            })
})


itemToPick.addEventListener('dragstart', function(ev) {
    const imageURL = this.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
    ev.dataTransfer.setData('text', imageURL);
});



gameContainer.addEventListener('dragover', function(ev) {
    ev.preventDefault();
});




    document.addEventListener('DOMContentLoaded', () => {
        
        gameContainer.addEventListener('drop', function(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData('text');
        const dropCell = ev.target;
        const backgroundColor = window.getComputedStyle(dropCell).getPropertyValue('background-color');

                if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'rgb(0, 0, 0)') {
                return;
                }
               
            itemToPick.innerHTML = '';
            itemToPick.style.background = ''
            const draggedImage = document.createElement('img');
            draggedImage.src = data;
            draggedImage.style.width = '55px'; 
            draggedImage.style.height = '30px'; 
            draggedImage.style.position = 'absolute';
            draggedImage.style.left = ev.clientX - ev.target.getBoundingClientRect().left + 'px';
            draggedImage.style.top = ev.clientY - ev.target.getBoundingClientRect().top + 'px';
            inventory.forEach(item =>{
                itemName = Object.keys(item);
               
            draggedImage.classList.add(`${itemName}`)
        })
            dropCell.appendChild(draggedImage);
            draggedImage.draggable = false;
});
})










