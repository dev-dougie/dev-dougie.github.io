const projectDiv = document.querySelector('.proj')

    window.onscroll = function(){
        scrollUp()
    }
    
    const scrollUp  = () => {
        let btnUp = document.querySelector('#btn-top')
        let scrolledHeight = document.documentElement.scrollTop
        scrolledHeight > 1200 ? btnUp.style.display = "block"
        : btnUp.style.display = "none"
    }
    
    const backToTop = () => document.documentElement.scrollTop = 700


const accessRepository = linkToRepo => window.open(linkToRepo, '_blank')

projectDiv.addEventListener('click', accessRepository())
