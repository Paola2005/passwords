function nose(p1,p2){  //Creo una funcion x para ahi colocarle los dos argumentos que necesito
    const vericar =/^[a-z]+$/; //Esta solo es la validacion de las mayusculas 
    //trata de que siempre una cadena tiene que tener al inicio y al final el /
    //^ esto abre la cadena y esto $ la cierra y el + es para decir que hay mas de una minusscula
    if(!vericar.test(p1)||!vericar.test(p2)){
        return "No se permiten mayusculas ni numeros, Ingrese nuevamente las dos palabras"
    }
    let contraseña=""; //se crea una cadena vacia para que ahi se agregen las combinaciones
    const longitud= Math.max(p1.length,p2.length);//se comprueba la longitud de cada palabra
    for (let i=0;i<longitud; i++){ // se dice que si i es menor que la longitud de las palabras
        if (i<p1.length){ // entonces si la longitud de p1 es menor que i 
            contraseña+=p1[i] //la palabra 1 se agregue a la cadena vacia de contraseña en la posicion de i
        }
        if (i<p2.length){
            contraseña+=p2[i] //lo mismo pero ahora con la palabra 2 y al estar las dos palabras en la misma posicion pues se van a fucionar 
        }
    }
    return contraseña //devolver la combinacion de palabras generada 
}
//se definen las palabras
const pa1= "estrellas"
const pa2= "viento"
//se llama la funcion y las palabras definidas atras 
const mostcont=nose(pa1,pa2);
// se verifica que sea una cadena 
if (typeof mostcont==="string"){
    console.log("Su contraseña es:", mostcont);//se imprme la contraseña
}