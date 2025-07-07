const tabs = document.querySelectorAll(".tabs")

console.log(tabs)

tabs.forEach((tab) => {
    const tabList = tab.querySelectorAll(".tab-item")
    const tabContents = tab.querySelectorAll(".content")

    if (tabList.length) {
        tabList[1].classList.add("active")
    }

    if (tabContents.length) {
        tabContents[1].classList.add("active")
    }

    tabList.forEach((tabItem, tabIndex) => {
        tabItem.onclick = function (e) {
            // handle tabs
            const activationTab = tab.querySelector(".tab-item.active")
            if (activationTab) activationTab.classList.remove("active")

            e.target.classList.add("active")

            // handle tab content
            const activationContent = tab.querySelector(".content.active")
            if (activationContent) activationContent.classList.remove("active")

            tabContents[tabIndex].classList.add("active")
        }
    })

    document.addEventListener("keydown", function (e) {
        let valueKey = Number(e.key)
        if (valueKey === 1) {
            tabContents[valueKey - 1].classList.add("active")
        }
    })
})
