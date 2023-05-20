const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    //Create a span element everytime the mouse moves
    const spanEl = document.createElement("span");
    //For keeping span at the respective mouse position
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyEl.appendChild(spanEl);
    //For changing size of the span
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
});

