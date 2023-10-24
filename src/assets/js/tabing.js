const portfolioBtns = document.querySelectorAll(".tabing-btns-list li")
const portfolioItems = document.querySelectorAll(".tabing-item")
const portfolioList = document.querySelector(".tabing-item-list")
const portfolioHd = document.querySelector(".tab-hd")
portfolioList.innerHTML = ""
portfolioBtns.forEach(activeTab => {
    if(activeTab.classList.contains("active")){
        var activeTarget = activeTab.dataset.tabing
        portfolioItems.forEach(activeTabs => {
            if(activeTabs.classList.contains(`${activeTarget}`)){
                portfolioList.appendChild(activeTabs)
            }
        })
    }
})
portfolioBtns.forEach(btn => {
    btn.addEventListener("click" , e => {
        if (!btn.classList.contains("active")) {         
            portfolioBtns.forEach(b => {
                b.classList.remove("active", "default")
            })
            portfolioItems.forEach(porta => {
                porta.classList.remove("active")
            })
            btn.classList.add("active")
            portfolioList.classList.remove("active")
            portfolioList.innerHTML = ""
            let targetbtn = btn.dataset.tabing
            let targethd = btn.dataset.tabinghd
            portfolioItems.forEach(port => {
                if(port.classList.contains(`${targetbtn}`)){
                    portfolioList.appendChild(port)
                    port.classList.add("active")
                    if(portfolioHd){
                        portfolioHd.innerHTML = targethd
                    }
                   
                    setTimeout(addClass, 10);
                    function addClass() {
                        portfolioList.classList.add("active")
                        }
                    }
                })
            }  
            
        })
    })
    