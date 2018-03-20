window.addEventListener("load", init, false);

function init(){
	var windowColorImages = document.getElementsByClassName("windowColorImg");

	for (var i = 0; i < windowColorImages.length; i++){
		windowColorImages[i].addEventListener("click", changeColorImg, false);
	}

	function changeColorImg(){
		this.setAttribute("src", "./img/color-block1.png");
	}
}