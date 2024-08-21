function generatePassword() {
    let name = document.getElementById('name').value;
    let info = document.getElementById('info').value;
    let length = parseInt(document.getElementById('length').value);

    // Ensure length is valid
    if (isNaN(length) || length <= 0) {
        alert('Please enter a valid length');
        return;
    }

    // Create a strong password using the user's input
    let password = generateStrongPassword(name, info, length);

    document.getElementById('password').innerText = password;
}

function generateStrongPassword(name, info, length) {
    let password = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

    // Use the user's name and information to create a unique password
    if (name.length > 1) password += name.substring(0, 2).toUpperCase();
    if (info.length > 1) password += info.substring(0, 2).toLowerCase();
    password += Math.floor(Math.random() * 1000);

    // Add some random characters to the password
    for (let i = password.length; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Ensure the password meets the requested length
    return password.substring(0, length);
}
