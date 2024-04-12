// Function to process payment
function paymentProcess() {
    // Retrieve values from the HTML inputs
    var amount = document.getElementById('paymentAmount').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Ensure the amount is in the correct format for Razorpay (subunits)
    var amountInSubunits = amount * 100; // Convert to paise

   var options = {
    "key": "rzp_test_eobJf2HGlq0SKe", // Key ID from the Dashboard
    "amount": amountInSubunits, // Convert amount to subunits
    "currency": "INR",
    "name": "Himachal360",
    "description": "FD desposit",
    "image": "https://sanjaybodh.github.io/Rent/images/logo.png",
    "handler": function (response) {
        $('#myModal').modal();
        // After successful payment, trigger button click
    document.getElementById('popupButton').click();
    },
    "prefill": {
        "name": name,
        "email": email,
        "contact": phone // Assuming you're still hardcoding or planning another way to set this
    },
    "notes": {
        "address": "note value"
    },
    "theme": {
        "color": "#008DDA"
    }
};

    var propay = new Razorpay(options);
    propay.open();
}


