// Función para encriptar el texto
function encriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const sanitizedText = sanitizarTexto(inputText);
    const outputTextArea = document.getElementById('outputText');

    if (validarTexto(sanitizedText)) {
        const encryptedText = simpleEncrypt(sanitizedText);
        outputTextArea.value = encryptedText;
        outputTextArea.classList.remove('background-image'); // Quita la imagen de fondo
        document.getElementById('warningMessage').classList.add('hidden'); // Ocultar mensaje de advertencia
    } else {
        outputTextArea.value = '';
        outputTextArea.classList.add('background-image'); // Muestra la imagen de fondo si no hay texto
        document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
    }
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.getElementById('outputText');

    if (validarTexto(inputText)) {
        try {
            const decryptedText = simpleDecrypt(inputText);
            if (validarTexto(decryptedText)) {
                outputTextArea.value = decryptedText;
                outputTextArea.classList.remove('background-image'); // Quita la imagen de fondo
                document.getElementById('warningMessage').classList.add('hidden'); // Ocultar mensaje de advertencia
            } else {
                outputTextArea.value = '';
                outputTextArea.classList.add('background-image'); // Muestra la imagen de fondo si no hay texto
                document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
            }
        } catch (e) {
            outputTextArea.value = '';
            outputTextArea.classList.add('background-image'); // Muestra la imagen de fondo si no hay texto
            document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
        }
    } else {
        outputTextArea.value = '';
        outputTextArea.classList.add('background-image'); // Muestra la imagen de fondo si no hay texto
        document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
    }
}

// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z0-9\s]*$/;
    return regex.test(texto);
}

// Función para sanitizar el texto
function sanitizarTexto(texto) {
    return texto.toLowerCase().replace(/[^a-z0-9\s]/g, '');
}

// Función para encriptar el texto usando una técnica simple
function simpleEncrypt(texto) {
    return texto.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('');
}

// Función para desencriptar el texto usando una técnica simple
function simpleDecrypt(texto) {
    return texto.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join('');
}

// Función para copiar el texto del panel de resultados
function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}

// Función para limpiar el texto y mostrar la imagen de fondo nuevamente
function limpiarTexto() {
    const outputTextArea = document.getElementById('outputText');
    outputTextArea.value = '';
    outputTextArea.classList.add('background-image'); // Añadir la imagen de fondo
}

// Asegurarse de que la imagen se muestra si se limpia el campo o está vacío
document.getElementById('inputText').addEventListener('input', () => {
    const inputText = document.getElementById('inputText').value;
    const warningMessage = document.getElementById('warningMessage');

    if (validarTexto(inputText)) {
        warningMessage.classList.add('hidden');
    } else {
        warningMessage.classList.remove('hidden');
        // Usar evento de navegador para mostrar alerta
        window.alert('No se aceptan mayúsculas ni caracteres especiales.');
    }

    const outputTextArea = document.getElementById('outputText');
    if (outputTextArea.value.trim() === '') {
        outputTextArea.classList.add('background-image'); // Mostrar la imagen si está vacío
    } else {
        outputTextArea.classList.remove('background-image'); // Quitar la imagen si hay texto
    }
});
