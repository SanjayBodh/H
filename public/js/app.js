const contact = document.querySelector('.contact');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let amount = document.getElementById('amount');
let date = document.getElementById('date');
let address = document.getElementById('address');
let pincode = document.getElementById('pincode');

contact.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        amount: amount.value,
        date: date.value,
        address: address.value,
        pincode: pincode.value
    };
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText.trim() === 'success') {
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
            amount.value = '';
            date.value = '';
            address.value = '';
            pincode.value = '';
        } else {
            alert("Something went wrong");
        }
    }
    xhr.send(JSON.stringify(formData));
});

