// scripts.js

// Función para añadir caracteres al display
function appendCharacter(character) {
    document.getElementById('display').value += character;
}

// Función para calcular el resultado
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Función para limpiar el display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
