const btn1 = document.querySelector(".btn");
let newDiv = null;

btn1.addEventListener("click", function() {

    if (newDiv !== null) {
        newDiv.remove();

    }

    toastMsg("Click Me")
})


function toastMsg(msg) {
    newDiv = document.createElement("div")
    const textNode = document.createTextNode(msg)
    newDiv.appendChild(textNode);
    document.body.appendChild(newDiv)
    newDiv.className = "custom customstyle-in"

    navigator.clipboard.writeText(msg)
    newDiv.addEventListener("click", function() {
        this.classList.remove("customstyle-in")
        this.classList.add("customstyle-out")

        newDiv.addEventListener("animationend", function() {
            this.remove();
        })
    })


}