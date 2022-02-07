const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    
    const formData = {
        mail,
        password,
    };

    if (mail && password) {
        console.log(formData);
        form.reset();
        
    } else {
        alert('All fields must be filled!')
    };

    

}
