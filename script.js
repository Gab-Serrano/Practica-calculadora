const btnAC = document.getElementById('AC');
const borrarTodo = () => {
    const display = document.getElementById('display');
    display.value = "";
};
btnAC.addEventListener("click", borrarTodo);





const btnIgual = document.getElementById('igual');