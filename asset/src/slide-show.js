const slideShowInner = document.querySelector(".slide-show .inner")
const controls = document.querySelector(".slide-show .control-slide")
const itemsImage = Array.from(document.querySelectorAll(".img-item"))

if (itemsImage.length) {
    const lastItem = itemsImage[0].cloneNode(true)
    slideShowInner.appendChild(lastItem)
    itemsImage.push(lastItem)
    console.log(itemsImage)
}

function getDurationTime() {
    const computed = getComputedStyle(slideShowInner)
    const durationStr = computed["transition-duration"]
    let duration = 0
    if (durationStr.includes("s")) {
        duration = parseFloat(durationStr) * 1000
    } else if (durationStr.includes("ms")) {
        duration = parseFloat(durationStr)
    }
    return duration
}

const maxIndex = itemsImage.length - 1
let currentIndex = 0
let canClick = true

controls.addEventListener("click", function (e) {
    const controlBtn = e.target.closest(".btn")
    if (!canClick) return

    canClick = false

    if (controlBtn.matches(".prev")) {
        if (currentIndex === 0) {
            currentIndex = maxIndex
        } else {
            currentIndex = Math.max(0, --currentIndex)
        }
    }

    if (controlBtn.matches(".next")) {
        if (currentIndex === maxIndex) {
            currentIndex = 0
        } else {
            currentIndex = Math.min(++currentIndex, maxIndex)
        }
    }

    const durationTime = getDurationTime()

    updatePosition()
    setTimeout(() => {
        canClick = true
    }, durationTime)
})

function updatePosition(instant = false) {
    const offset = `-${currentIndex * 100}%`
    slideShowInner.style.transition = instant ? "none" : "ease 0.5s"
    slideShowInner.style.translate = offset
}

slideShowInner.ontransitionend = (e) => {
    if (currentIndex === maxIndex) {
        currentIndex = 0
        updatePosition(true)
    }
}
