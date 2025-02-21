
document.getElementById("calculator").style.height="440px";
document.getElementById("calculator").style.width="320px";
document.getElementById("calculator").style.border = "1px solid black";
document.getElementById("calculator").style.boxShadow="0 5px 20px rgba(204, 191, 191, 0.2)";
document.getElementById("calculator").style.borderRadius="10px";
document.getElementById("calculator").style.backgroundColor="#a09999";
document.getElementById("calculator").style.margin="5px";
document.getElementById("calculator").style.padding="5px";

document.getElementById("display").style.height="70px";
document.getElementById("display").style.width="98%";
document.getElementById("display").style.border="2px solid black";
document.getElementById("display").style.borderRadius="10px";


let operators = document.querySelectorAll(".btnoperator");

operators.forEach(operator => {
    operator.style.height = "60px";  
    operator.style.width = "62px";
    operator.style.border = "none";
    operator.style.borderRadius = "5px";
    operator.style.backgroundColor = "yellow";
    operator.style.margin = "5px";
    operator.style.fontSize = "18px";
    operator.style.cursor = "pointer";
    operator.style.transition = "background-color 0.3s, transform 0.2s";
});



let buttons = document.querySelectorAll(".btn"); 

buttons.forEach(button => {
    button.style.height = "60px";  
    button.style.width = "62px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#e0e0e0";
    button.style.margin = "5px";
    button.style.fontSize = "18px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s, transform 0.2s";
});



document.getElementById("btnclear").style.height="60px";
document.getElementById("btnclear").style.width="62px";
document.getElementById("btnclear").style.border="none";
document.getElementById("btnclear").style.borderRadius="5px";
document.getElementById("btnclear").style.backgroundColor="orange";
document.getElementById("btnclear").style.margin="5px";
document.getElementById("btnclear").style.fontSize="18px";
document.getElementById("btnclear").style.cursor="pointer";
document.getElementById("btnclear").style.transition="background-color 0.3s, transform 0.2s";

document.getElementById("keys").style.display = "grid";
document.getElementById("keys").style.gridTemplateColumns = "repeat(4, 1fr)";


let style = document.createElement("style");
style.innerHTML = `
    .btn:hover {
        background-color: #d3d3d3 !important;
        transform: scale(1.1);
    }
    .btnoperator:hover {
        background-color: #ffca28 !important;
        transform: scale(1.1);
    }
    #btnclear:hover {
        background-color: #ffca28 !important;
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);