const menu = document.querySelector(".menu");
const links = document.querySelector(".nav_links");
const icon_close = document.querySelector(".close");
const text_index = document.querySelector(".text_index");
const footer_text = document.querySelector(".footer_text");

menu.addEventListener("click", openMenu);

function openMenu() {
	links.classList.toggle("animationFromTop");
	icon_close.classList.toggle("open");
	menu.classList.toggle("close");
	text_index.classList.toggle("close");
	footer_text.classList.toggle("close");
}

icon_close.addEventListener("click", (e) => {
	if (e.target.id === "nav") {
		links.classList.remove("animationFromTop");
		links.classList.toggle("removeAnimation");
		icon_close.classList.remove("open");
	}
	menu.classList.remove("close");
	text_index.classList.remove("close");
	footer_text.classList.remove("close");
});
