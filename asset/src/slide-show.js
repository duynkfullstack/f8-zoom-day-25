const controlBtn = document.querySelector(".control-slide")
const slideShowInner = document.querySelector(".slide-show .inner")
const controls = document.querySelector(".slide-show .control-slide")
const itemsImage = Array.from(document.querySelectorAll(".img-item"))
const itemsPagination = document.querySelectorAll(".pagination .item")
console.log(itemsPagination)

itemsPagination[0].classList.add("active")

if (itemsImage.length) {
    // clone first item and push to last list
    const lastItem = itemsImage[0].cloneNode(true)
    slideShowInner.appendChild(lastItem)
    itemsImage.push(lastItem)

    // clone last item and push to first list. not include lastItem => -2
    const firstItem = itemsImage[itemsImage.length - 2].cloneNode(true)
    // firstItem.style.display = "none"
    slideShowInner.prepend(firstItem)
    itemsImage.unshift(firstItem)
}

// updatePosition(true)

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
let currentIndex = 1
let canClick = true

updatePosition(true)

controls.addEventListener("click", function (e) {
    const controlBtn = e.target.closest(".btn")

    if (!canClick) return

    canClick = false

    if (controlBtn.matches(".prev")) {
        if (currentIndex === 1) {
            currentIndex = 0
        } else {
            currentIndex = Math.max(1, --currentIndex)
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
    updatePlayPagination()
    setTimeout(() => {
        canClick = true
    }, durationTime)
})

function updatePosition(instant = false) {
    let offset = `-${currentIndex * 100}%`
    console.log(offset)

    slideShowInner.style.transition = instant ? "none" : "ease 0.5s"
    slideShowInner.style.translate = offset
}

slideShowInner.ontransitionend = (e) => {
    if (currentIndex === maxIndex) {
        currentIndex = 1
        updatePosition(true)
        updatePlayPagination()
    } else if (currentIndex === 0) {
        currentIndex = maxIndex - 1
        updatePosition(true)
        updatePlayPagination()
    }
}
let interval = null
function startSlideShow() {
    interval = setInterval(() => {
        currentIndex++

        console.log(currentIndex)
        if (currentIndex === maxIndex + 1) {
            currentIndex = 1
            updatePosition(true)
            updatePlayPagination()
        } else {
            updatePosition()
            updatePlayPagination()
        }
    }, 3000)
}

// Hàm dừng chạy => Sử dụng clearInterval()
function stopSlideshow() {
    clearInterval(interval)
}

function autoPlay() {
    slideShowInner.addEventListener("mouseenter", stopSlideshow)
    slideShowInner.addEventListener("mouseleave", startSlideShow)

    controlBtn.addEventListener("mouseenter", stopSlideshow)
    controlBtn.addEventListener("mouseleave", startSlideShow)

    startSlideShow()
}

autoPlay()

function updatePlayPagination() {
    itemsPagination.forEach((item, index) => {
        if (index === currentIndex - 1) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
}
