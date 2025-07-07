const inputCheckAll = document.querySelector(".input-check-all")
const statusGrid = document.querySelector(".status-grid")
const allStatus = statusGrid.getElementsByTagName("input")
const titleCustom = document.querySelector(".title-custom")
const checkBoxCustom = document.querySelector(".check-box-custom")
const inputCheckBox = document.querySelectorAll(".input-checkbox")

const elementCustom = window.getComputedStyle(titleCustom, "::before")

// // Ngăn chặn nổi bọt của thẻ input bên trong label
// inputCheckBox.forEach((item) => {
//     item.onclick = function (e) {
//         e.stopPropagation()
//     }
// })

const statusLength = allStatus.length

// Hàm kiểm tra status đã được check tất cả hay chưa
function isCheckFull(allElements) {
    let hasCheckedFull = true
    for (let i = 0; i < statusLength; i++) {
        if (allElements[i].checked === false) {
            hasCheckedFull = false
            break
        }
    }
    return hasCheckedFull
}

statusGrid.onclick = function (e) {
    const hasCheckFull = isCheckFull(allStatus)
    console.log(hasCheckFull)
    let countStatusCheck = 0

    for (let i = 0; i < statusLength; i++) {
        if (allStatus[i].checked === false) {
            countStatusCheck++
        }
    }

    console.log(countStatusCheck)

    // Tất cả đều đã check
    if (hasCheckFull) {
        titleCustom.style.setProperty("--display-property", "none") // Ẩn đi
        checkBoxCustom.style.setProperty("--display-property", "inline-block")
        inputCheckAll.checked = true
    } else {
        // Có ít nhất 1 ô ko check
        titleCustom.style.setProperty("--display-property", "inline-block") // Hiện lên
        checkBoxCustom.style.setProperty("--display-property", "none")
        checkBoxCustom.style.setProperty("--bg-color", "#009688")
        checkBoxCustom.style.setProperty("--border-color", "#009688")
        inputCheckAll.checked = true
    }

    if (countStatusCheck === 11) {
        checkBoxCustom.style.setProperty("--display-property", "none")
        titleCustom.style.setProperty("--display-property", "none") // Ẩn đi
        checkBoxCustom.style.setProperty("--bg-color", "#fff")
        checkBoxCustom.style.setProperty("--border-color", "#696969")
    }
}

inputCheckAll.onclick = function (e) {
    const isChecked = inputCheckAll.checked

    if (isChecked) {
        checkBoxCustom.style.setProperty("--bg-color", "#009688")
        checkBoxCustom.style.setProperty("--border-color", "#009688")
        checkBoxCustom.style.setProperty("--display-property", "inline-block")
        titleCustom.style.setProperty("--display-property", "none") // Ẩn đi

        for (let i = 0; i < statusLength; i++) {
            allStatus[i].checked = true
        }
    } else {
        checkBoxCustom.style.setProperty("--bg-color", "#fff")
        checkBoxCustom.style.setProperty("--border-color", "#696969")
        checkBoxCustom.style.setProperty("--display-property", "none")
        for (let i = 0; i < statusLength; i++) {
            allStatus[i].checked = false
        }
    }
}

// isCheckFull(allStatus)
