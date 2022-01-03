

document.getElementById('submit-button').addEventListener('click', function () {
    const userEmailField = document.getElementById('input-email');
    const userEmail = userEmailField.value;
    // console.log(userEmail.value)
    const userPasswordField = document.getElementById('input-password');
    const userPassword = userPasswordField.value;
    // console.log(userPassword.value);

    if (userEmail == 'amirul@gmail.com' && userPassword == 'amirul') {
        window.location.href = 'practice-bank.html'
    }
    else if (userEmail != 'amirul@gmail.com' || userPassword != 'amirul') {
        alert('Invalid user');
    }
})