import home from "./home";
import title from"../images/title.jpg";
const header=document.querySelector("header");
let loadFirst=function(){
    let restaurantName=document.createElement("img");
    restaurantName.id="restaurantName";
    restaurantName.src=title;
    header.insertBefore(restaurantName,header.firstChild);
    home();
}
export default loadFirst;