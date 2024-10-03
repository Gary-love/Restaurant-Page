const content=document.querySelector("#content");
let about=function(){
    let aboutText=document.createElement("div");
    aboutText.style.color="yellow";
    aboutText.textContent="About Champion’s Feast";
    content.appendChild(aboutText);
}
export default about;