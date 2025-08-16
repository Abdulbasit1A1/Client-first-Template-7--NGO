let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
if(document.body.className !="dark"){
this.firstElementChild.src="images/header/light.svg";
}else{
this.firstElementChild.src="images/header/dark.svg";
}
document.body.classList.toggle("dark");
});
