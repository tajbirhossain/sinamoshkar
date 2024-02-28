const sliderEl = document.querySelectorAll(".range1")
const sliderValue = document.querySelectorAll(".value1")

const unSliderEl = document.querySelectorAll(".unRange1")
const unSliderValue = document.querySelectorAll(".unValue1")



sliderEl.forEach(item => {
    const initialVal = item.value
    const initialProgress = (initialVal / item.max) * 100

    item.style.background = `linear-gradient(to right, #52B6BC ${initialProgress}%, #ff00 ${initialProgress}%)`;

    item.addEventListener("input", (event) => {
        const tempSliderValue = event.target.value;
        // sliderValue.textContent = tempSliderValue;

        const progress = (tempSliderValue / item.max) * 100;

        item.style.background = `linear-gradient(to right, #52B6BC ${progress}%, #ff00 ${progress}%)`;
    })
})




unSliderEl.forEach(item => {
    const unInitialVal = item.value
    const unInitialProgress = (unInitialVal / item.max) * 100

    item.style.background = `linear-gradient(to right, #52B6BC ${unInitialProgress}%, #ff00 ${unInitialProgress}%)`;

    item.addEventListener("input", (event) => {
        const tempSliderValue = event.target.value;
        // sliderValue.textContent = tempSliderValue;

        const progress = (tempSliderValue / item.max) * 100;

        item.style.background = `linear-gradient(to right, #52B6BC ${progress}%, #ff00 ${progress}%)`;
    })
})