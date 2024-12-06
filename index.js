const button=document.querySelector('#button');
const i1=document.querySelector('#i1');
const l2=document.querySelector('#i2');
const l3=document.querySelector('#i3');
const h1=document.querySelector('h1');
const text_container=document.querySelector('.text-container');
const main_sectionn=document.querySelector('.main-sectionn');
const reload=document.querySelector('#reload')
console.log(`sdgdfgf${reload}`)

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
 
    








const rathomnumber=()=>{






    return  Math.floor(Math.random()*6+1);

}
// console.log(rathomnumber())
const jjjj=()=>{
  let fristnumber = rathomnumber()
  i1.innerHTML=fristnumber
  let  secondnumber = rathomnumber()
  i2.innerHTML=secondnumber

  let sum=fristnumber+secondnumber
  i3.innerHTML=sum
  console.log(`sum${sum}`)
  if(sum===7||sum===11){
 
    window.alert('🎉Congralations Your Winner 🎉')
    h1.innerText='Winner ';

  }
 else if(sum===2|| sum===12||sum===3){
    h1.innerText='Loser';
  }
  else{
    h1.innerText='Next Time Try Again';
  }

}

jjjj()

}



button.addEventListener('click',coderunar)

const reloadd=(e)=>{
console.log(e)


// window.reload()
window.location.reload();
}

reload.addEventListener("click",reloadd)