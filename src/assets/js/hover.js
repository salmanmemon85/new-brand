const hoverSec = document.querySelector("#trusted-sec")
const hoverSecHd = document.querySelector(".trust-hd")
const hoverItems = document.querySelectorAll(".trust-tabs li")
hoverItems.forEach(btn => {
    btn.addEventListener( "mouseenter", (e) => {
        var target = e.target.children[0].children[0]
        hoverSec.style.backgroundImage = `url('${target.src}')`;
        hoverSecHd.classList.add("active")
    })
    btn.addEventListener( "mouseleave", (e) => {
        hoverSec.style.backgroundImage = ""
        hoverSecHd.classList.remove("active")
    })
})