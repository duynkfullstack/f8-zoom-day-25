const inputCheckAll = document.querySelector(".input-check-all")
const statusGrid = document.querySelector(".status-grid")
const allStatusInputs = Array.from(statusGrid.getElementsByTagName("input"))
const titleCustom = document.querySelector(".title-custom")
const checkBoxCustom = document.querySelector(".check-box-custom")
const inputCheckBox = document.querySelectorAll(".input-checkbox")
const statusItems = statusGrid.querySelectorAll(".status-item")

const elementCustom = window.getComputedStyle(titleCustom, "::before")

console.log(statusItems)

const statusLength = allStatusInputs.length

// Hàm kiểm tra status đã được check tất cả
function isCheckAll(allElements) {
    let hasCheckedFull = true
    allElements.forEach((element) => {
        if (element.checked === false) hasCheckedFull = false
    })
    return hasCheckedFull
}

function countNotCheck() {
    let count = 0
    allStatusInputs.forEach((item) => {
        if (item.checked === false) ++count
    })
    return count
}

function renderStatusCount() {
    titleCustom.textContent = `Status(${
        allStatusInputs.length - countNotCheck()
    })`
}

statusItems.forEach((item) => {
    item.onclick = (e) => {
        e.stopPropagation()
        const hasCheckFull = isCheckAll(allStatusInputs)

        if (hasCheckFull) {
            titleCustom.style.setProperty("--display-property", "none") // Ẩn đi
            checkBoxCustom.style.setProperty(
                "--display-property",
                "inline-block"
            )
            renderStatusCount()
            inputCheckAll.checked = true
        } else {
            // Có ít nhất 1 ô ko check
            titleCustom.style.setProperty("--display-property", "inline-block") // Hiện lên
            checkBoxCustom.style.setProperty("--display-property", "none")
            checkBoxCustom.style.setProperty("--bg-color", "#009688")
            checkBoxCustom.style.setProperty("--border-color", "#009688")
            renderStatusCount()
            inputCheckAll.checked = true
        }

        if (countNotCheck() === 11) {
            checkBoxCustom.style.setProperty("--display-property", "none")
            titleCustom.style.setProperty("--display-property", "none") // Ẩn đi
            checkBoxCustom.style.setProperty("--bg-color", "#fff")
            checkBoxCustom.style.setProperty("--border-color", "#696969")

            renderStatusCount()
        }
    }
})

inputCheckAll.onclick = function (e) {
    const isChecked = inputCheckAll.checked

    if (isChecked) {
        checkBoxCustom.style.setProperty("--bg-color", "#009688")
        checkBoxCustom.style.setProperty("--border-color", "#009688")
        checkBoxCustom.style.setProperty("--display-property", "inline-block")
        titleCustom.style.setProperty("--display-property", "none") // Ẩn đi

        allStatusInputs.forEach((item) => {
            item.checked = true
        })
        renderStatusCount()
    } else {
        checkBoxCustom.style.setProperty("--bg-color", "#fff")
        checkBoxCustom.style.setProperty("--border-color", "#696969")
        checkBoxCustom.style.setProperty("--display-property", "none")
        allStatusInputs.forEach((item) => {
            item.checked = false
        })
        renderStatusCount()
    }
}
