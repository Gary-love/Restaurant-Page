const content=document.querySelector("#content");
let menu=function(){
    let drinks=document.createElement("div")
    drinks.textContent="Drinks";
    drinks.id="drinks";
    let food=document.createElement("div");
    food.classList="food";
    food.textContent="Food";
    let sides=document.createElement("div");
    sides.id="sides";
    sides.textContent="Sides";  
    content.appendChild(drinks);
    content.appendChild(food);
    content.appendChild(sides);
}
export default menu;