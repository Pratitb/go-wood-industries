const mobMenuBtn = document.querySelector('.mobile_btn')
const mobMenu = document.querySelector('.mobile_menu')
const tubeOne = document.querySelector('.tube_one')
const tubeTwo = document.querySelector('.tube_two')


mobMenuBtn.addEventListener('click', function(){
    openClose()
    animateBtn()
})

function openClose(){
    if(!mobMenu.classList.contains('menuActive')){
        mobMenu.classList.add('menuActive')
    }
    else{
        mobMenu.classList.remove('menuActive')
    }

}

function animateBtn(){
    if(!mobMenuBtn.classList.contains('tubeActive')){
        mobMenuBtn.classList.add('tubeActive')
    }
    else{
        mobMenuBtn.classList.remove('tubeActive')
    }
}