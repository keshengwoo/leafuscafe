var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.fa-xmark');

var popup = function(popupClick){
	popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
	popupBtn.addEventListener("click", () => {
		popup(i);
	});
});

closeBtns.forEach((closeBtn) => {
	closeBtn.addEventListener("click", () => {
		popupViews.forEach((popupView) => {
			popupView.classList.remove('active');
		});
	});
});

