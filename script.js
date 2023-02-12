var myPageOpen = false
var mainPageOpen = true
var aboutPageOpen = false
var socialsPageOpen = false
var projectsPageOpen = false

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
    document.ge
    document.getElementById('path').innerHTML = 'mobile'
    document.getElementById('path').style.transform = 'translate(-65px, 4px)'
    document.getElementById('path').setAttribute('onclick', 'mainPageLoad()')
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

    showPage('aboutMe')
    document.getElementById('path').innerHTML = 'puffer'
    document.getElementById('path').style.transform = 'translate(-65px, 4px)'
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

    showPage('socials')
    document.getElementById('path').innerHTML = 'puffer'
    document.getElementById('path').style.transform = 'translate(-65px, 4px)'
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

    showPage('projects')
    document.getElementById('path').innerHTML = 'puffer'
    document.getElementById('path').style.transform = 'translate(-65px, 4px)'
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
  }
}
