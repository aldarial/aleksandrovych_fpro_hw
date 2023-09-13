//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає
const textField = document.getElementById('text-field');
const sideDiv = document.getElementById('side-div');
textField.addEventListener('focus', () => {
    sideDiv.style.right = '0';
});

textField.addEventListener('blur', () => {
    sideDiv.style.right = '-200px';
});