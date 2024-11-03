
const panels = document.querySelectorAll(".panel");
const changePicButton = document.getElementById("change_picture");
const TPOGallery = document.images.item.getElementById("roof_1");

function removeActiveClasses() {
panels.forEach((panel) => {
    panel.classList.remove("active");
});
}
panels.forEach((panel) => {
panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
        TPOGallery.src = "IMG_1144.jpg";
        removeActiveClasses();
    } else {
    removeActiveClasses();
    panel.classList.add("active");
    }
});
});

changePicButton.addEventListener("mouseenter", function(){
    var buttonColor = changePicButton.style.background.toString;
    changePicButton.style.border = "1.9px dotted orange";

})

changePicButton.addEventListener("mouseleave", function(){
    changePicButton.style.border = "1px solid #333";

})
changePicButton.addEventListener("click", function(){
    TPOGallery.style.display = "none";
;});
