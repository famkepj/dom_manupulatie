var parent = document.getElementsByTagName("div")[0].getElementsByTagName("ul")[0];
var spotted = document.getElementsByTagName("ul")[1];
var removeAll =  document.getElementById("remove-all-button");
var removebutton =  document.getElementById("remove-first-item-button");

// Lion
var lion = parent.getElementsByTagName("li")[0];

const addSpottedlion = () => {
var removedlion = parent.removeChild(lion);
spotted.appendChild(removedlion);
};

lion.addEventListener("click", addSpottedlion);

// Leopard
var leopard = parent.getElementsByTagName("li")[1];

const addSpottedleopard = () => {
    var removedLeopard = parent.removeChild(leopard);
    spotted.appendChild(removedLeopard);
};
    
leopard.addEventListener("click", addSpottedleopard);


// Elephant
var Elephant = parent.getElementsByTagName("li")[2];

const addSpottedElephant = () => {
    var removedElephant = parent.removeChild(Elephant);
    spotted.appendChild(removedElephant);
};
    
Elephant.addEventListener("click", addSpottedElephant);

// Rhino
var Rhino = parent.getElementsByTagName("li")[3];

const addSpottedRhino = () => {
    var removedRhino = parent.removeChild(Rhino);
    spotted.appendChild(removedRhino);
};
    
Rhino.addEventListener("click", addSpottedRhino);

// Buffalo
var Buffalo = parent.getElementsByTagName("li")[4];

const addSpottedBuffalo = () => {
    var removedBuffalo = parent.removeChild(Buffalo);
    spotted.appendChild(removedBuffalo);
};
    
Buffalo.addEventListener("click", addSpottedBuffalo);


// remove first one
var removeFirst = document.getElementsByTagName("ul")[1].getElementsByTagName("li")[0];
const first = () => {
    spotted.removeChild(removeFirst);  
};

removebutton.addEventListener("click", first)

//  Remove all from spotted list
const remove = () => {
    var removeSpotted = spotted.removeChild(lion);
        parent.appendChild(lion);
   };
   
   removeAll.addEventListener("click",remove)
   