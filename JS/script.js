// Pop Up for Sign Up

document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signupButton');
    const signupPopup = document.getElementById('signupPopup');
    const closePopup = document.getElementById('closePopup');
    const hostBtn = document.getElementById('hostBtn');

    signupButton.addEventListener('click', function () {
        signupPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        signupPopup.style.display = 'none';
    });

    hostBtn.addEventListener('click', function (){
        const url = 'host.html'
        window.location.href = url;
    });


});
