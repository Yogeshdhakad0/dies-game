const button=document.querySelector('#button');
const i1=document.querySelector('#i1');
const l2=document.querySelector('#i2');
const l3=document.querySelector('#i3');
const h1=document.querySelector('h1');
const text_container=document.querySelector('.text-container');
const main_sectionn=document.querySelector('.main-sectionn');
const reload=document.querySelector('#reload')
console.log(`sdgdfgf${reload}`)
const  imge= document.querySelector('#i1 img')
const  imge1= document.querySelector('#i2 img')

const btn=document.querySelector('.btn');
const pop=document.querySelector('.pop')
console.log(btn)

console.log( main_sectionn)
const body=document.querySelector('body');
console.log(body)
console.log(text_container)


console.log(button)



const coderunar=()=>{


    let  color='#'+Math.floor(Math.random()*12121231231312).toString(16)
   let colorr=color.slice(0,9)
   text_container.style.boxShadow=` 5px 0px 100px 74px ${colorr}`

//    let border=Math.floor(Math.random()*12323424234234)
//    let bordercolor=border.toPrecision()

//    console.log(bordercolor)
//    text_container.style.border=` 2px solid  ${colorr}`


   




    const icon = document.getElementById('icon');
      
    // This will rotate the icon by 45 degrees each time the function is called
    let currentRotation = parseInt(icon.style.transform.replace('rotate(', '').replace('deg)', '') || 0);
    currentRotation += 45;  // Increase by 45 degrees
    icon.style.transform = `rotate(${currentRotation}deg)`;  // Apply the rotation
 
    


const lcons =[
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM352 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>',
]





const rathomnumber=()=>{






    // return  Math.floor(Math.random()*6);
    return Math.floor(Math.random() * 6+1);

}
// console.log(rathomnumber())
const jjjj=()=>{
  let fristnumber = rathomnumber()

console.log(fristnumber)






imge.setAttribute("src", `icon/diecimge/dice(${fristnumber}).png`)


// i1.innerHTML=''
  let  secondnumber = rathomnumber()
  imge1.setAttribute("src", `icon/diecimge/dice(${secondnumber}).png`)
  // i2.innerHTML=lcons[secondnumber]
console.log(secondnumber)
  let sum=fristnumber+secondnumber
  i3.innerHTML=sum
  console.log(`sum${sum}`)
   if(sum===7||sum===11){
   pop.style.top='3%'
     h1.innerText='Winner ';
 



  }
 else if(sum===2|| sum===12||sum===3){
    h1.innerText='Loser';
    pop.style.top='-100%'






    
  }
  else{
    h1.innerText='Next Time Try Again';
 pop.style.top='-100%'






  }

}

jjjj()

}

button.appendChild(icon)

button.addEventListener('click',coderunar)

const reloadd=(e)=>{
console.log(e)


// window.reload()
window.location.reload();
}

reload.addEventListener("click",reloadd)


     
const winnerpop = (e) => {
  if (e.target.className.includes('btn')) {
    e.target.parentElement.remove();
  }
}

btn.addEventListener('click', winnerpop);

