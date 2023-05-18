# FuncionesJS
    cuando veas un nombre a lado de unos parentesis, probablemente se trate de una funcion

# Tipos de funciones: 
    // Function declaration (declaracion de una funcion)
    function suma1(){
        console.log(2+2);
    }
    suma1();




    // Funcion expression (expresion de una funcion)
    const suma2 = function(){
        console.log(3+3);
    }
    suma2();


# Diferencia entre tipos de funciones (PREGUNTA PARA OBTENER UN TRABAJO): 

    // Function declaration (declaracion de una funcion)
    suma1();
    function suma1(){
        console.log(2+2);
    }




    // Funcion expression (expresion de una funcion)
    suma2();
    const suma2 = function(){
        console.log(3+3);
    }

    -Se ha declarado primero 'Sumar2()' osea se manda a llamar primero, y despues se define la funcion
    -la pregunta es ¿Es posible utilizar la funcion antes de definirla?

    R= Existe algo en JavaScript que se llama "hoisting", practicamente JS se ejecuta en 2 etapas: 

        Etapa de "Creacion"
        Js escanea todas las funciones y determina tambien que variables del documento va a crear.

        Etapa de "Ejecucion"
        Js ejecuta todas las instrucciones en las que mandemos llamar sea funcion o variable.

    la respuesta hacia la pregunta es que la sintaxis:

        (declaracion de una funcion)
        suma1();
        function suma1(){
            console.log(2+2);
        }
    
    se va ajecutar sin ningun problema.

    Mientras la sintaxis:

        (expresion de una funcion)
        suma2();
        const suma2 = function(){
            console.log(3+3);
        }

    No se ejecutara. ya que basicamente cuando se registra este codigo se tiene lo siguiente:

        const suma2;
        sumar2();
        suma2 = function(){
            console.log(3+3);
        }

    en la primera etapa (etapa de creacion) se declarara la variable sin ningun valor, posteriormente se manda a llamar la funcion y AQUI es donde se crea el ERROR, ya que la funcion en esta etapa aun no se a definido.

    La primer sintaxis si se ejecutara ya que la funcion si se definira primero segun el hoisting de JS en la primer etapa de creacion, y posteriormente se ejecutara el llamado a la funcion.


# Algunas Funciones Nativas de Js

    console.log() - Esta función es utilizada para imprimir mensajes en la consola del navegador o de la terminal. Es muy útil para depurar y entender el comportamiento de nuestro código.

    alert() - Muestra una ventana emergente con un mensaje para el usuario.

    prompt() - Muestra una ventana emergente con un mensaje para el usuario y un campo para que este ingrese datos.

    confirm() - Muestra una ventana emergente con un mensaje para el usuario y dos botones (Aceptar o Cancelar). Retorna true si se presiona Aceptar y false si se presiona Cancelar.

    parseInt() - Convierte una cadena de texto que representa un número en un valor numérico entero.

    parseFloat() - Convierte una cadena de texto que representa un número con decimales en un valor numérico con decimales.

    isNaN() - Retorna true si el valor no es un número, y false si lo es.

    typeof() - Retorna una cadena de texto con el tipo de dato de la variable.

    String() - Convierte un valor en una cadena de texto.

    Array() - Crea un nuevo array vacío o con los elementos que se le pasen como argumento.


# Diferencia entre funciones y Metodos

    Aunque practicamente son lo mismo, la forma en la que son nombrados (metodo o funcion) tiene que ver con el contexto en la que son nombradas.

    las funciones son independientes y pueden ser llamadas desde cualquier lugar del programa, mientras que los métodos están asociados a un objeto o una clase y actúan sobre los datos de ese objeto.


# Parametros y argumentos



    Parámetros: son variables que se definen en la declaración de una función y se utilizan para recibir valores cuando se llama a la función. Los parámetros se definen entre los paréntesis de la declaración de la función.

        function suma(a, b) { //parametros
        return a + b;
        }

    Argumentos: son los valores reales que se pasan a una función cuando se la llama. Los argumentos se colocan entre los paréntesis al llamar a una función.

        console.log(suma(20, 20)); // imprime 40


# parametros por default
    Existen algunos valores que le podemos asignar a los parametros en caso de que no sean requeridos al momento de mandarlos a llamar, esto evita que se ponga en la consola el valor 'undefined', por lo que su funcion es que si no se le asigna un argumento al parametro, el parametro tendra el valor indicado. Estos valores son llamados parametros por default.

    //parametros por default
    function persona2(nombre = 'Desconocido', apellido = '') {//parametros 
        console.log(`Hola ${nombre} ${apellido}`);
    }

    persona2(); // hola Desconocido

    El valor de apellido es un espacio solamente, esto evita que adquiera el valor 'undefined'


# Arrow Function
    Es una forma mas simplificada de declarar una funcion.
    se caracteriza por:
        - tener una sntaxis de '=>' despues de los parentesis
        - Las llaves no son necesarias en funciones de una sola instruccion
        - No es necesario declarar un return en funciones de una sola instruccion
        - los parentesis no son necesarios cuando se tiene un solo parametro

        const funcion2 = () => 'soy programador ';
        console.log(funcion2()); 
