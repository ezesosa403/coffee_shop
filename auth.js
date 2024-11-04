const regExpNombre = /^[a-zA-Z\s]{1,9}$/; // Permitir letras y espacios, entre 1 y 9 caracteres
const regExpTelefono = /^[1-9][0-9]{9}$/; // Formato para un número de 10 dígitos
const regExpEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // Formato de email

function validar(nombre, telefono, email) {
    let flagError = true;
    let errorMessages = [];

    // Validaciones
    if (nombre.trim() === "") {
        errorMessages.push("El nombre es obligatorio.");
        flagError = false;
    } else if (!regExpNombre.test(nombre)) {
        errorMessages.push("Nombre inválido. Debe tener entre 1 y 9 letras.");
        flagError = false;
    }

    if (telefono.trim() === "") {
        errorMessages.push("El teléfono es obligatorio.");
        flagError = false;
    } else if (!regExpTelefono.test(telefono)) {
        errorMessages.push("Teléfono inválido. Debe ser un número de 10 dígitos.");
        flagError = false;
    }

    if (email.trim() === "") {
        errorMessages.push("El email es obligatorio.");
        flagError = false;
    } else if (!regExpEmail.test(email)) {
        errorMessages.push("Email inválido.");
        flagError = false;
    }

    return { flagError, errorMessages };
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Validar los datos
    const { flagError, errorMessages } = validar(nombre, telefono, email);

    // Limpiar mensajes de error y resultados anteriores
    const errorMessagesDiv = document.getElementById('errorMessages');
    const resultDiv = document.getElementById('result');
    errorMessagesDiv.innerHTML = '';
    resultDiv.innerHTML = '';

    if (!flagError) {
        errorMessages.forEach(message => {
            const p = document.createElement('p');
            p.textContent = message;
            errorMessagesDiv.appendChild(p);
        });
    } else {
        const p = document.createElement('p');
        p.textContent = `Nombre: ${nombre}, Teléfono: ${telefono}, Email: ${email}`;
        p.classList.add('success');
        resultDiv.appendChild(p);
    }
});
