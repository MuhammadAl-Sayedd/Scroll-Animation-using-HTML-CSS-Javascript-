const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes  () {
  
   const windowHeight =  window.innerHeight - 180;
   boxes.forEach((box) => {
     const top = box.getBoundingClientRect().top
     if(top<windowHeight){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }
   })
}