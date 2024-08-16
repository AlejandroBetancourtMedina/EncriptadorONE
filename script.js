// Función para encriptar el texto
function encriptarTexto() {
    const inputText = document.getElementById('inputText').value;
    const sanitizedText = sanitizarTexto(inputText);

    if (validarTexto(sanitizedText)) {
        const encryptedText = simpleEncrypt(sanitizedText);
        document.getElementById('outputText').value = encryptedText;
        document.getElementById('warningMessage').classList.add('hidden'); // Ocultar mensaje de advertencia
    } else {
        document.getElementById('outputText').value = '';
        document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
    }
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value;

    if (validarTexto(inputText)) {
        try {
            const decryptedText = simpleDecrypt(inputText); // Desencriptar usando la técnica de cifrado
            if (validarTexto(decryptedText)) {
                document.getElementById('outputText').value = decryptedText;
                document.getElementById('warningMessage').classList.add('hidden'); // Ocultar mensaje de advertencia
            } else {
                document.getElementById('outputText').value = '';
                document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
            }
        } catch (e) {
            document.getElementById('outputText').value = '';
            document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
        }
    } else {
        document.getElementById('outputText').value = '';
        document.getElementById('warningMessage').classList.remove('hidden'); // Mostrar mensaje de advertencia
    }
}

// Función para validar el texto
function validarTexto(texto) {
    // Verifica que el texto solo contenga minúsculas, números y espacios
    const regex = /^[a-z0-9\s]*$/;
    return regex.test(texto);
}

// Función para sanitizar el texto
function sanitizarTexto(texto) {
    // Convertir todo el texto a minúsculas y eliminar caracteres no permitidos
    return texto.toLowerCase().replace(/[^a-z0-9\s]/g, '');
}

// Función para encriptar el texto usando una técnica simple
function simpleEncrypt(texto) {
    // Ejemplo de cifrado simple: rotar letras
    return texto.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('');
}

// Función para desencriptar el texto usando una técnica simple
function simpleDecrypt(texto) {
    // Ejemplo de descifrado simple: revertir rotación de letras
    return texto.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join('');
}

// Función para copiar el texto del panel de resultados
function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}
