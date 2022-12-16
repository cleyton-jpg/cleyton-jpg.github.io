var slider = document.getElementById("mySlider");
var size = slider.value;

function createDiv(className, id) {
    // create a new div element
    var div = document.createElement("div");
    
    // add the specified class to the div
    div.classList.add(className);

    div.id = id;
    
    // add some content to the div
    div.innerHTML = "Hello World!";
    
    // add the div to the document
    document.body.appendChild(div);
}