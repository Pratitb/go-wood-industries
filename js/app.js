// variables
const mobMenuBtn = document.querySelector('.mobile_btn')
const mobMenu = document.querySelector('.mobile_menu')
const tubeOne = document.querySelector('.tube_one')
const tubeTwo = document.querySelector('.tube_two')
const allSections = document.querySelectorAll('section[id]')


// event listeners
mobMenuBtn.addEventListener('click', function(){
    openMenu()
    animateBtn()
})
mobMenu.addEventListener('click', closeMenu)
window.addEventListener('scroll', navHighlighter)

// functions
function openMenu(){
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

function navHighlighter(){
    let scrollYAxis = window.scrollY
    // console.log(scrollYAxis)
    allSections.forEach(currentSection => {
        console.log(currentSection, 'current section')
        const sectionHeight = currentSection.offsetHeight;
        console.log(sectionHeight, 'section height')
        const sectionTop = currentSection.offsetTop - 50;
        console.log(sectionTop, 'section top')
        sectionId = currentSection.getAttribute("id");

        if(scrollYAxis > sectionTop && scrollY <= sectionTop + sectionHeight ){
            console.log(sectionId, 'sectionn id')
            let foundSection = document.querySelector(".nav_links a[href*=" + sectionId + "]");
            console.log(foundSection, 'found')
            foundSection.classList.add('navLinkActive')
            
            // console.log(hereSection, 'here section')
            // hereSectionAdd.classList.add('navLinkActive')
        }
        else{
            let foundSection1 = document.querySelector(".nav_links a[href*=" + sectionId + "]");
            foundSection1.classList.remove('navLinkActive')
        }
    })
}

function closeMenu(element){
    if(element.target.classList.contains('mob_link')){
        mobMenu.classList.remove('menuActive')
        setTimeout(() => {
            mobMenuBtn.classList.remove('tubeActive')
        }, 500);
    }
}