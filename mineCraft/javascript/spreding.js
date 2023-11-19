import {strongWood as strongWood} from './landsacpe.js'
import { strongLeaves as strongLeave } from './landsacpe.js';
import { wood as wood } from './landsacpe.js';
import { leafes as leafes } from './landsacpe.js';
import { stone as stone } from './landsacpe.js';
import { cloudColector as cloudColector } from './main.js';
import {gameContainer as gameContainer, inventory as inventory} from './main.js';
import { pickaxeButton as pickaxeButton, axeButton as axeButton, shovelButton as shovelButton, itemToPick as itemToPick } from './main.js';
import { axeOn as axeOn, shovelOn as shovelOn, pickaxeOn as pickaxeOn } from './main.js';



const cloudes = () => {
    cloudColector.forEach(cloud =>{
      const cloudElement = document.createElement('div');
        cloudElement.style.gridRowStart = cloud.x;
        cloudElement.style.gridColumnStart = cloud.y;
        cloudElement.style.background = '#f7f7f7';
        gameContainer.appendChild(cloudElement)
    })
    }
    cloudes();

    const dirtSpearding = [];


 const dirtGenerator = () => {
    for(let i=14; i<=20; i++){
        for(let j=1; j<=20; j++){
        let dirt= {
            x: i,
            y: j
        }
        dirtSpearding.push(dirt)
    }
}
}

dirtGenerator();

const dirt = () => {
    dirtSpearding.forEach((dirt, i) =>{
        const dirtElement = document.createElement('div');
        dirtElement.style.gridRowStart = dirt.x;
        dirtElement.style.gridColumnStart = dirt.y;
        dirtElement.classList.add('dirt')
        gameContainer.appendChild(dirtElement);
        dirtElement.addEventListener('click', () =>{
        if(shovelOn === 2){
        dirtElement.style.display = 'none';
        itemToPick.style.background = `url(http://127.0.0.1:5500/mineCraft/assets/PICS/Dirt.PNG) no-repeat center center/cover`;
        collectItems(dirt, 'Dirt')

        } else {
            return
        }
    })


    })
}

dirt()



let grassSpreding = []
const grassGenerator = () => {

    for(let i=1; i<=20; i++){
        let grass= {
            x: 13,
            y: i
         } 
         grassSpreding.push(grass)
    }
}
grassGenerator()

export const grass = () =>{
        grassSpreding.forEach(grass => {
        const grassElement = document.createElement('div');
        grassElement.style.gridRowStart = grass.x;
        grassElement.style.gridColumnStart = grass.y;
        grassElement.classList.add('grass')
        gameContainer.appendChild(grassElement)
        grassElement.addEventListener('click', () =>{
        if(shovelOn === 2){
            grassElement.style.display = 'none';
        itemToPick.style.background = `url(http://127.0.0.1:5500/mineCraft/assets/PICS/Grass.PNG) no-repeat center center/cover`;
        collectItems(grass, 'Grass')

        } else {
            return
        }
    })
    })
}

grass()

export const StrongWood = () =>{
    strongWood.forEach(wood =>{
    const strongWood = document.createElement('div');
    strongWood.style.gridRowStart = wood.x;
        strongWood.style.gridColumnStart = wood.y;
        strongWood.classList.add('strongWood')
        gameContainer.appendChild(strongWood)

    })
}

StrongWood()

export const strongLeaves = () =>{
    strongLeave.forEach(leave =>{
        const strongleaves = document.createElement('div');
        strongleaves.style.gridRowStart = leave.x;
            strongleaves.style.gridColumnStart = leave.y;
            strongleaves.classList.add('strongleaves')
            gameContainer.appendChild(strongleaves)
        })


}

strongLeaves()


export const woods = () =>{
    wood.forEach(wood =>{
        const woodStamp = document.createElement('div');
        woodStamp.style.gridRowStart = wood.x;
            woodStamp.style.gridColumnStart = wood.y;
            woodStamp.classList.add('woodStamp');
            gameContainer.appendChild(woodStamp);
            woodStamp.addEventListener('click', () =>{
                if(axeOn === 2){
                    woodStamp.style.display = 'none';
                    itemToPick.style.background = `url(http://127.0.0.1:5500/mineCraft/assets/PICS/Wood.PNG) no-repeat center center/cover`;
                    collectItems(wood, 'Wood')

                } else {
                    return
                }
            })

        })
}

woods()

export const leafe = () =>{
    leafes.forEach(leafe =>{
        const leafes = document.createElement('div');
        leafes.style.gridRowStart = leafe.x;
            leafes.style.gridColumnStart = leafe.y;
            leafes.classList.add('leafes');
            gameContainer.appendChild(leafes);
            leafes.addEventListener('click', () => {
            if(axeOn === 2){
            leafes.style.display = 'none';
            itemToPick.style.background = `url(http://127.0.0.1:5500/mineCraft/assets/PICS/Leaves.PNG) no-repeat center center/cover`;
            collectItems(leafe, 'Leaves')
            } else {
                return
            }
        })
    })
}

leafe()

export const stones = () =>{
    stone.forEach(stone =>{
        const stones = document.createElement('div');
        stones.style.gridRowStart = stone.x;
            stones.style.gridColumnStart = stone.y;
            stones.classList.add('stones');
            gameContainer.appendChild(stones);
        stones.addEventListener('click', () => {
            if(pickaxeOn === 2){
                stones.style.display = 'none';
                itemToPick.style.background = `url(http://127.0.0.1:5500/mineCraft/assets/PICS/Stone.PNG) no-repeat center center/cover`;
                collectItems(stone, 'Stone')
            } else {
                return
            }
        })
        })
}

stones()

    
function collectItems(item, val){

   let itemSlot ={
       [val]: {
        x: item.x,
        y: item.y
        }
    }
    inventory.push(itemSlot)
}
export const classFunctionMap = {
        dirt: dirt(),
        grass: grass(),
        woodStamp: woods(),
        leafes: leafe(),
        stones: stones()
    };

    console.log(classFunctionMap.dirt)

