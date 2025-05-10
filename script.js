
document.querySelector("#calculatorForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const n1 = document.querySelector("#n1").value;
    console.log(n1);
});
function calcular(x){
    let n1= parseFloat(document.querySelector("#p1").value);
    let n2= parseFloat(document.querySelector("#p2").value);
    let n3= parseFloat(document.querySelector("#p3").value);
    let resultado=0;
    switch(x){
        case "sumar":
            resultado=n1+n2
            console.log(resultado);
            break;
        case "resta":
            resultado=n1-n2
            console.log(resultado)
            break;
        case "multiplicacion":
            resultado=n1*n2
            console.log(resultado)
            break;
         case "division":
            if(n2===0.0){alert("nose puede dividir en 0")}
            else{
            resultado=n1/n2
            console.log(resultado)}
            break
    }
    document.querySelector("#result").value=resultado;    
}
let x = function ecuacionSimple(){
    let n1= parseFloat(document.querySelector("#p1").value);
    let n2= parseFloat(document.querySelector("#p2").value);
    let n3= parseFloat(document.querySelector("#p3").value);
if (n1 !== 0){
    alert("tiene una solucion")
}
if (n1=== 0 && n2 ===0)
    alert("Tiene infinitas soluciones")
}
if (n1=0 && n2!==0){
    alert("No tiene soluciones")
}
