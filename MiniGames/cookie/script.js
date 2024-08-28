let cookieCount = 0;

const cookieImage = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookie-count');

cookieImage.addEventListener('click', function() {
    cookieCount++;
    cookieCountDisplay.innerText = cookieCount;
    updateCookieImage();
});

function updateCookieImage() {
    if (cookieCount >= 100 && cookieCount < 200) {
        cookieImage.src = 'icons/cookie2.png'; // Replace with the path to your second cookie image
    } else if (cookieCount >= 200 && cookieCount < 300) {
        cookieImage.src = 'icons/cookie3.png'; // Replace with the path to your third cookie image
    } else if (cookieCount >= 300) {
        cookieImage.src = 'icons/cookie4.png'; // Replace with the path to your fourth cookie image
    } else {
        cookieImage.src = 'icons/cookie1.png'; // Default cookie image
    }
}