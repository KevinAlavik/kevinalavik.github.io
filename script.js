let myPageOpen = false
let mainPageOpen = true
let aboutPageOpen = false
let socialsPageOpen = false
let projectsPageOpen = false

function showPage (pageId) {
  document.getElementById('myPage').style.display = 'none'
  document.getElementById('mainPage').style.display = 'none'
  document.getElementById('aboutMe').style.display = 'none'
  document.getElementById(pageId).style.display = 'flex'
  document.getElementById(pageId).style.flexDirection = 'column'
}

function myPageLoad () {
  if (!myPageOpen) {
    aboutPageOpen = false
    projectsPageOpen = false
    socialsPageOpen = false
    mainPageOpen = false
    myPageOpen = true
    document.getElementById('mainPage').style.display = 'none'
    document.getElementById('aboutMe').style.display = 'none'
    document.getElementById('socials').style.display = 'none'
    document.getElementById('projects').style.display = 'none'
    showPage('myPage')
    document.getElementById('path').innerHTML = 'mobile'
    document.getElementById('path').setAttribute('onclick', 'mainPageLoad()')
    document.getElementById('items').innerHTML = '3 item(s)'
    document.getElementById('diskInfo').style.opacity = 1
  }
}

function aboutMeLoad () {
  if (!aboutPageOpen) {
    aboutPageOpen = true
    projectsPageOpen = false
    socialsPageOpen = false
    mainPageOpen = false
    myPageOpen = false
    document.getElementById('mainPage').style.display = 'none'
    document.getElementById('myPage').style.display = 'none'
    document.getElementById('socials').style.display = 'none'
    document.getElementById('projects').style.display = 'none'
    document.getElementById('diskInfo').style.opacity = 0
    showPage('aboutMe')
    document.getElementById('path').innerHTML = 'puffer'
    document.getElementById('path').setAttribute('onclick', 'myPageLoad()')
  }
}

function socialsLoad () {
  if (!socialsPageOpen) {
    aboutPageOpen = false
    socialsPageOpen = true
    mainPageOpen = false
    myPageOpen = false
    document.getElementById('mainPage').style.display = 'none'
    document.getElementById('myPage').style.display = 'none'
    document.getElementById('aboutMe').style.display = 'none'
    document.getElementById('projects').style.display = 'none'
    document.getElementById('diskInfo').style.opacity = 0
    showPage('socials')
    document.getElementById('path').innerHTML = 'puffer'
    document.getElementById('path').setAttribute('onclick', 'myPageLoad()')
  }
}

function projectsLoad () {
  if (!projectsPageOpen) {
    aboutPageOpen = false
    projectsPageOpen = true
    socialsPageOpen = false
    mainPageOpen = false
    myPageOpen = false
    document.getElementById('mainPage').style.display = 'none'
    document.getElementById('myPage').style.display = 'none'
    document.getElementById('aboutMe').style.display = 'none'
    document.getElementById('socials').style.display = 'none'
    document.getElementById('diskInfo').style.opacity = 0
    showPage('projects')
    document.getElementById('path').innerHTML = 'puffer'
    document.getElementById('path').setAttribute('onclick', 'myPageLoad()')
  }
}

function mainPageLoad () {
  if (!mainPageOpen) {
    aboutPageOpen = false
    projectsPageOpen = false
    socialsPageOpen = false
    mainPageOpen = true
    myPageOpen = false
    showPage('mainPage')
    document.getElementById('path').innerHTML = 'var'
    document.getElementById('diskInfo').style.opacity = 1
    document.getElementById('items').innerHTML = '8 item(s)'
  }
}

document.onkeypress = zx;
function zx(e) {
  if (e.keyCode === 112) {
    bug()
  }
}

function bug() {
        window.open('https://www.youtube.com/watch?v=M5V_IXMewl4')
}

// hehhehehehehehhhehehhe get bugged