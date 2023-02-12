let myPageOpen = false;
let mainPageOpen = true;
let aboutPageOpen = false;
let socialsPageOpen = false;
let projectsPageOpen = false;

const aboutMePage = document.getElementById("aboutMe");
const mainPage = document.getElementById("mainPage");
const myPage = document.getElementById("myPage");
const socials = document.getElementById("socials");
const projects = document.getElementById("projects");

function showPage(pageId) {
	myPage.style.display = "none";
	mainPage.style.display = "none";
	aboutMePage.style.display = "none";

	document.getElementById(pageId).style.display = "flex";
	document.getElementById(pageId).style.flexDirection = "column";
}

function myPageLoad() {
	if (!myPageOpen) {
		aboutPageOpen = false;
		projectsPageOpen = false;
		socialsPageOpen = false;
		mainPageOpen = false;
		myPageOpen = true;
		mainPage.style.display = "none";
		aboutMePage.style.display = "none";
		socials.style.display = "none";
		projects.style.display = "none";
		showPage("myPage");
		// document.ge
		document.getElementById("path").innerHTML = "mobile";
		document
			.getElementById("path")
			.setAttribute("onclick", "mainPageLoad()");
	}
}

function aboutMeLoad() {
	if (!aboutPageOpen) {
		aboutPageOpen = true;
		projectsPageOpen = false;
		socialsPageOpen = false;
		mainPageOpen = false;
		myPageOpen = false;
		mainPage.style.display = "none";
		myPage.style.display = "none";
		socials.style.display = "none";
		projects.style.display = "none";

		showPage("aboutMe");
		document.getElementById("path").innerHTML = "puffer";
		document.getElementById("path").setAttribute("onclick", "myPageLoad()");
	}
}

function socialsLoad() {
	if (!socialsPageOpen) {
		aboutPageOpen = false;
		socialsPageOpen = true;
		mainPageOpen = false;
		myPageOpen = false;
		mainPage.style.display = "none";
		myPage.style.display = "none";
		aboutMePage.style.display = "none";
		projects.style.display = "none";

		showPage("socials");
		document.getElementById("path").innerHTML = "puffer";
		document.getElementById("path").setAttribute("onclick", "myPageLoad()");
	}
}

function projectsLoad() {
	if (!projectsPageOpen) {
		aboutPageOpen = false;
		projectsPageOpen = true;
		socialsPageOpen = false;
		mainPageOpen = false;
		myPageOpen = false;
		mainPage.style.display = "none";
		myPage.style.display = "none";
		aboutMePage.style.display = "none";
		socials.style.display = "none";

		showPage("projects");
		document.getElementById("path").innerHTML = "puffer";
		document.getElementById("path").setAttribute("onclick", "myPageLoad()");
	}
}

function mainPageLoad() {
	if (!mainPageOpen) {
		aboutPageOpen = false;
		projectsPageOpen = false;
		socialsPageOpen = false;
		mainPageOpen = true;
		myPageOpen = false;
		showPage("mainPage");
		document.getElementById("path").innerHTML = "var";
	}
}
