const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contraseña="";


const fin = () => {
    rl.close();
    console.log(`Nueva contraseña generada: ${contraseña}`);
};
const verificar =/^[a-z]+$/; 

const pregunta = () => {
    rl.question("Ingrese la primera contraseña: ", (p1) => {
        rl.question("Ingrese la segunda contraseña: ", (p2) => {
            if(!verificar.test(p1)||!verificar.test(p2)){
                console.clear()
                console.log("No se permiten mayusculas ni numeros y solo se permite una contraseña de 25000 caracteres, Ingrese nuevamente las dos palabras") 
                pregunta();
            }
            else{
                const longitud= Math.max(p1.length,p2.length);//se comprueba la longitud de cada palabra
                for (let i=0;i<longitud; i++){ // se dice que si i es menor que la longitud de las palabras
                    if (i<p1.length && p1.length>=1 && p1.length<=25000){ // entonces si la longitud de p1 es menor que i 
                        contraseña+=p1[i] //la palabra 1 se agregue a la cadena vacia de contraseña en la posicion de i
                    }
                    if (i<p2.length && p2.length>=1 && p2.length<=25000){
                        contraseña+=p2[i] //lo mismo pero ahora con la palabra 2 y al estar las dos palabras en la misma posicion pues se van a fucionar 
                    }
                }
                fin()
            }
        });
    });
};
console.clear()
pregunta()