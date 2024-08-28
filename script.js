                    //phone


function phonebutton() {
    document.getElementById('phonewindow').style.display = "block"
}
function closebutton(){
    document.getElementById('phonewindow').style.display = "none"
}


               //contact info here


function openMomInfo() {
    document.getElementById('momInfo').style.display = "block"
}
function closeMomInfo() {
    document.getElementById('momInfo').style.display = "none"
}
function openDadInfo() {
    document.getElementById('dadInfo').style.display = "block"
}
function closeDadInfo() {
    document.getElementById('dadInfo').style.display = "none"
}
function openLilyInfo() {
    document.getElementById('lilyInfo').style.display = "block"
}
function closeLilyInfo() {
    document.getElementById('lilyInfo').style.display = "none"
}
function openEmmaInfo() {
    document.getElementById('emmaInfo').style.display = "block"
}
function closeEmmaInfo() {
    document.getElementById('emmaInfo').style.display = "none"
}
function openMaxInfo() {
    document.getElementById('maxInfo').style.display = "block"
}
function closeMaxInfo() {
    document.getElementById('maxInfo').style.display = "none"
}
function openDoverInfo() {
    document.getElementById('doverInfo').style.display = "block"
}
function closeDoverInfo() {
    document.getElementById('doverInfo').style.display = "none"
}


     //call error, text error and history error


function simIssue() {
    document.getElementById('callerrorid').style.display = "block"
}
function closeCallIssue() {
    document.getElementById('callerrorid').style.display = "none"
}
function textIssue() {
    document.getElementById('texterrorid').style.display = "block"
}


                 // messages


function messagebutton() {
    document.getElementById('messageApp').style.display = "block"
}
function openErrorMessage() {
    document.getElementById('messageerrorid').style.display = "block"
}
function closeErrorMessage() {
    document.getElementById('messageerrorid').style.display = "none"
}
function backMessage() {
    document.getElementById('messageApp').style.display = "none"
}


                 //Browser

function openBrowser() {
    document.getElementById('browser').style.display = "block"
}
function closeBrowser() {
    document.getElementById('browser').style.display = "none"
}

                 /* search */



function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkInput();
    }
}

function checkInput() {
    const input = document.getElementById('inputField').value.toLowerCase();
if (input === 'memorymist.com') {
    window.open('mist/index.html')
} else if (input === 'google') {
    window.open('https://www.google.com', '_blank');
}else {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(input)}`, '_blank');
    }
}



/*           goofy ahh social app          */


function openSocialApp() {
    document.getElementById('pageSocialApp').style.display= "block"
}
function closeSocialApp() {
    document.getElementById('pageSocialApp').style.display = "none"
}
function socialError() {
    document.getElementById('showSocialError').style.display = "block"
}
function hideSocialError() {
    document.getElementById('showSocialError').style.display = "none"
}
//audio
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');

function togglePlayPause() {
if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Playing';
} else {
    audio.pause();
    playPauseBtn.textContent = 'Paused';
  }
}

// games
function runCookie(){
    document.getElementById('cookieGame').style.display = "block"
}
function changeContentCookie(url) {
    document.getElementById('cookie-frame').src = url;
}
function closeCookie() {
    document.getElementById('cookieGame').style.display = "none"
}
// mist game
function runMist() {
    document.getElementById('mistGame').style.display = "block"
}
function changeContentMist(url) {
    document.getElementById('mist-frame').src = url;
}
function closeMist() {
    document.getElementById('mistGame').style.display = "none"
}
//mole game 
function runMole() {
    document.getElementById('moleGame').style.display = "block"
}
function changeContentMole(url) {
    document.getElementById('mole-frame').src = url;
}
function closeMole() {
    document.getElementById('moleGame').style.display = "none"
}