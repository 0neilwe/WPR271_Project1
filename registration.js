document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('RegistrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('Email');
        const userID = document.getElementById('userID');
        const country = document.getElementById('country');
        const State = document.getElementById('State');
        const City = document.getElementById('City');
        const referenceCode = document.getElementById('referenceCode');
        const phoneNumber = document.getElementById('phoneNumber');
     

        if (firstName.value.trim() === '') {
            firstName.classList.add('invalid');
            alert('First Name is required.');
            return;
        }

        if (lastName.value.trim() === '') {
            lastName.classList.add('invalid');
            alert('Last Name is required.');
            return;
        }

        if (userID.value.trim() === '') {
            userID.classList.add('invalid');
            alert('User ID is required.');
            return;
        }

        if (referenceCode.value.trim() === '') {
            referenceCode.classList.add('invalid');
            alert('Reference Code is required.');
            return;
        }

        if (!/^[a-zA-Z0-9]+$/.test(referenceCode.value)) {
            referenceCode.classList.add('invalid');
            alert('Reference Code should contain only letters and numbers.');
            return;
        }

        if (email.value.trim() === '') {
            email.classList.add('invalid');
            alert('Email ID is required.');
            return;
        }

        // Regular expression for phone number pattern
        const phoneNumberPattern = /^[+][0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

        if (!phoneNumberPattern.test(phoneNumber.value)) {
            phoneNumber.classList.add('invalid');
            alert('Invalid Phone Number format. Please use +xx-xxx-xxx-xxxx format.');
            return;
        }

        if (country.value === '') {
            country.classList.add('invalid');
            alert('Country selection is required.');
            return;
        }
        if (State.value === '') {
            State.classList.add('invalid');
            alert('State selection is required.');
            return;
        }
        if (City.value === '') {
            City.classList.add('invalid');
            alert('City selection is required.');
            return;
        }

        // If validation passes, remove 'invalid' classes and submit the form
        firstName.classList.remove('invalid');
        lastName.classList.remove('invalid');
        userID.classList.remove('invalid');
        referenceCode.classList.remove('invalid');
        email.classList.remove('invalid');
        phoneNumber.classList.remove('invalid');
        country.classList.remove('invalid');
        State.classList.remove('invalid');
        City.classList.remove('invalid');

        alert('Form submitted successfully!');
        // Uncomment the following line to actually submit the form
        // form.submit();
    });
});

