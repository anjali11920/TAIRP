const slide = document.querySelectorAll(`.slide`)
var counter = 0;
slide.forEach((slide, index) => {
                       slide.style.top = `${index * 100}%`
}

)
const goPrev = () => {
                       counter--
                       slideImage()


}
const goNext = () => {
                       counter++
                       slideImage()

}
const slideImage = () => {
                       slide.forEach(
                                              (slide) => {
                                                                     slide.style.transform = `translateY(-${counter * 100}%)`
                                              }
                       )
}