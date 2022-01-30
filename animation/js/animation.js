window.addEventListener('load', e => {
    setTimeout(() => {
        const sliderDiv = document.getElementById('slider').style.opacity = 1
    }, 100);
})

const leftButton = document.getElementById('left-btn')
const rightButton = document.getElementById('right-btn')
const sliderImgs = document.querySelectorAll('.slider-img')

class Slider {
    constructor() {
        this.events()
        this.sliderImgs = document.querySelectorAll('.slider-imgs')
    }

    events() {
        leftButton.addEventListener('click', e => {
            this.previous()
        })

        rightButton.addEventListener('click', e => {
            this.next()
        })
    }

    previous() {
        console.log('left')
    }

    next() {
        for (let img of sliderImgs) {

            if (!img.classList.contains('hidden')) {

                if(!img.nextElementSibling) {
                    setTimeout(() => {
                        img.classList.toggle('hidden')
                        sliderImgs[0].classList.toggle('hidden')
                        sliderImgs[0].animate([
                            { transform: 'translateX(-100%)' },
                            { transform: 'translateX(0)' }
                        ], { duration: 500, easing: 'ease-out' })
                    }, 490);
                    img.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(100%)' }
                    ], { duration: 500, easing: 'ease-in' })
                    return
                }

                img.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(100%)' }
                ], { duration: 500, easing: 'ease-in' })

                setTimeout(() => {
                    img.classList.toggle('hidden')
                    img.nextElementSibling.classList.toggle('hidden')
                    img.nextElementSibling.animate([
                        { transform: 'translateX(-100%)' },
                        { transform: 'translateX(0)' }
                    ], { duration: 500, easing: 'ease-out' })
                }, 490);

                return
                
            }
        }
    }

    previous() {
        for (let img of sliderImgs) {

            if (!img.classList.contains('hidden')) {

                if(!img.previousElementSibling) {

                    setTimeout(() => {
                        img.classList.toggle('hidden')
                        sliderImgs[2].classList.toggle('hidden')
                        sliderImgs[2].animate([
                            { transform: 'translateX(100%)' },
                            { transform: 'translateX(0)' }
                        ], { duration: 400, easing: 'ease-out' })
                    }, 390);

                    img.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-100%)' }
                    ], { duration: 400, easing: 'ease-in' })
                    return
                }

                img.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-100%)' }
                ], { duration: 400, easing: 'ease-in' })

                setTimeout(() => {
                    img.classList.toggle('hidden')
                    img.previousElementSibling.classList.toggle('hidden')
                    img.previousElementSibling.animate([
                        { transform: 'translateX(100%)' },
                        { transform: 'translateX(0)' }
                    ], { duration: 400, easing: 'ease-out' })
                }, 390);
                return
                
            }
        }
    }

// Fim da classe   
}

const slider = new Slider()

