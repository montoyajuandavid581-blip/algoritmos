function sumar() {
    let n1,n2,suma;
    alert("este algoritmo suma dos numeros decimales");
    n1 = parseFloat(prompt("ingrese el primer valor a sumar "));

    n2 = parseFloat(prompt("ingrese el segundo valor a sumar "));
    suma=n1+n2;

    alert(" la suma de del  "+n1+"  y el valor  "+n2+" su resultado es "+suma);
}
function operacionesbasicas() {
    let n1,n2,suma,resta,dv,ml;
    alert("este algoritmo te da los resultados de las opercaciones basicas");
    n1=parseFloat(prompt("ingrese el primer valor"));
    n2=parseFloat(prompt("ingrese el segundo valor"));
    suma=n1+n2;
    resta=n1-n2;
    dv=n1/n2;
    ml=n1*n2;
    alert("este es el resultado de la suma "+suma+" este el de resta "+resta+" el divison es "+dv+" el de multiplicacion  "+ml+" fin")
    
}
function conversionun() {
    let m1,cm,km;
    alert("este algoritmo pasa los metros ingresados en centimetros y kilometros");
    m1=parseFloat(prompt("ingres los metros"));
    cm=m1*100;
    km=m1/1000;
    alert("los metros "+m1+" en centimetros son "+cm+" y en kilometros es "+km);
}
function conversinTemp() {
    let c,fr,kv;
    alert("algoritmo que te convierte los grados celcios en farengheit y en kelvin");
    c=parseFloat(prompt("ingresa los grados en celcius "));
    fr=(c*1.8)+32;
    kv=c+273.15;
    alert(" en farengheit seria "+fr+" en kelvin es "+kv);
}

function arepertr() {
    let b,al,ar,pr;
    alert("algortimo que te dice el area y el perimetro de un rectangulo ");
    b=parseFloat(prompt("ingresa la base del rectangulo"));
    al=parseFloat(prompt("ingresa la altura del rectangulo"));
    ar=b*al;
    pr=2*(b+al);
    alert("el area del rectangulo es"+ar+" y el perimetro es "+pr);
}
function promediodetres() {
    let n1,n2,n3,pr;
    alert("algoritmo que te da el promedio de notas");
    n1=parseFloat(prompt("ingresa el primera nota"));
    n2=parseFloat(prompt("ingresa el sgunda nota"));
    n3=parseFloat(prompt("ingresa el tercera nota"));

    pr=(n1+n2+n3)/3;
    alert("el promedio de las notas es "+pr);
}
function converciondetiempo() {
    alert("allgoritmo que te pasa tus segundos en minutos y en horas");
    let s,mn,h;
    s=parseFloat(prompt("ingresa los segundos"));
    mn=s/60;
    h=s/3600;
    alert(" los segunndos "+s+" en minutos serian "+mn+" y en horas "+h )
}
function converciondepesosn() {
    alert("allgoritmo que te pasa tus pesos de kilogramo en gramos libras y toneladas");
    let s,mn,h,t;
    s=parseFloat(prompt("ingresa los kilogramos"));
    mn=s*2.20462;
    h=s*1000;
    t=s/1000;
    alert(" los kilogramos "+s+" en libra serian "+mn+" y en gramos "+h+" y entoneladas "+t );

}
function converciondepesosplanetas() {
    alert("allgoritmo que te pasa tus pesos de kilogramo en t peso en diferentes planetas del sistema solar");
    let l ,t,mc,mr,j,s,v,u,np;
    t=parseFloat(prompt("ingresa los kilogramos"));
    mc=t*0.38;
    mr=t*0.38;
    j=t*2.53;
    v=t*0.91;
    s=t*1.06;
    u=t*0.92;
    np=t*1.14;
    l=t*0.65;
    alert(" los kilogramos "+t+" en la luna seria"+l+"en venus seria"+v+" en marte serian "+mr+" en mercurio seria"+mc+" en jupiter seria"+j+" en saturno seria "+s+" en urano seria "+u+" en neptuno seria "+np)
    
}
function preciodecompra() {
    alert("algoritm que te da el rpecio de los productos");
    let p1,p2,p3,c1,c2,c3,t1,t2,t3,t4;
    p1=parseFloat(prompt("ingresa el precio del primer producto"));
    c1=parseFloat(prompt("ingresa la cantidad del primer producto"));
    p2=parseFloat(prompt("ingresa el precio del segundo producto"));
    c2=parseFloat(prompt("ingresa la cantidad del segundo  producto"));
    p3=parseFloat(prompt("ingresa el precio del tercer producto"));
    c3=parseFloat(prompt("ingresa la cantidad del tercer producto"));

 t1=p1*c1;
 t2=p2*c2;
 t3=p3*c3;
 t4=t1+t2+t3;
 alert(" del primer producto es "+t1+"del segundo producto es "+t2+"del tercer producto es "+t3+" y en total es "+t4);

}
function tusalario() {
    alert("algoritmo dice cuanto vas a recibir segun tus dias trabajados");
    let p1,p2,p3,c1,c2;  
    p1=parseFloat(prompt("ingresa tu salario mensual"));
    p3=parseFloat(prompt("ingresa los dias trabajados"));
    p2=parseFloat(prompt("ingresa los bonos e trabajo "));
    
 c1=(p1/30)*p3;
 c2=c1+p2

 alert("por tus dias trabajados te van a pagara es"+c1+"y con los bonos seria"+c2+" en total a pagar")
}
function factura() {
    alert("allgoritmo que te da cuanto tienes que pagar ");
    let s,h,t,y,m;
    s=parseFloat(prompt("ingresa los unidades consumidas"));
    y=parseFloat(prompt("ingresa el valor por unidad"));
    t=y*s;
    h=t*(19/100);
    m=t+h;
    alert(" tu subtotal a pagar es "+t+"el impuesto seria "+h+" y toatl a pagar es "+m);
}
function costovia() {
    alert("algoritmo dice cuanto vas a costar el veije en solo gasolina");
    let p1,p2,p3,c1,c2;  
    p1=parseFloat(prompt("ingresa la distancia recorrida kilometros"));
    p3=parseFloat(prompt("ingresa cuanto kilometros hace tu vehiculo por galon"));
    p2=parseFloat(prompt("ingresa el precio del galon "));
    
 c1=p1/p3;
 c2=p2*c1

 alert(" el costo en solo gasolina en viaje va a ser "+c2);
}
function tiempovi() {
    alert("algoritmo dice cuanto vas a durar el veije");
    let p1,p3,c1;  
    p1=parseFloat(prompt("ingresa la distancia recorrida kilometros"));
    p3=parseFloat(prompt("ingresa la velocidad que vas a ir en kilometros por hora "));
    
    
 c1=p1/p3;

 alert(" el tiempo de viaje  en viaje va a ser "+c1+" horas");
}
function promdiosegunsuporcentaje() {
    alert("algoritm que te da el promedio");
    let p1,p2,p3,c1,c2,c3,t1;
    p1=parseFloat(prompt("ingresa la primera nota"));
    c1=parseFloat(prompt("ingresa el porcentaje de nota "));
    p2=parseFloat(prompt("ingresa la segunda nota"));
    c2=parseFloat(prompt("ingresa el porcentaje de la segunda nota"));
    p3=parseFloat(prompt("ingresa la tercera nota"));
    c3=parseFloat(prompt("ingresa el porcentaje del la tercera nota "));

 t1= (p1 * (c1 / 100)) + (p2 * (c2 / 100)) + (p3 * (c3 / 100));
 alert(" la nota final es "+t1);

}
 function convercinmonedas() {
    alert("allgoritmo que te pasa tus pesos colombianos a diferende monedas");
    let s,mn,h;
    
    s=parseFloat(prompt("ingresa tus pesos colombianos "));
    mn=s/3197.65;
    h=s/3569.90;
    alert("tus pesos en colombia son "+s+" y en dolares son:"+mn+"USD en euros son:"+h+"EUR");
    
}
function positooneg() {
    let n1 = Number(prompt('Ingrese un valor:'));
    if (n1 > 0) {
        alert('El número es positivo');
    } else if (n1 < 0) {
        alert('El número es negativo');
    } else {
        alert('El número es cero');
    }
}

function par() {
    let n1 = Number(prompt('Ingrese un valor:'));
    if (n1 % 2 === 0) {
        alert('El número es par');
    } else {
        alert('El número es impar');
    }
}

function mayordos() {
    let n1 = Number(prompt('Ingrese el primer valor:'));
    let n2 = Number(prompt('Ingrese el segundo valor:'));
    if (n1 === n2) {
        alert('Los dos valores son iguales');
    } else if (n1 > n2) {
        alert('El primer valor ' + n1 + ' es mayor que ' + n2);
    } else {
        alert('El segundo valor ' + n2 + ' es mayor que ' + n1);
    }
}

function descuentoscom() {
    let n1 = Number(prompt('Ingrese el valor de la compra:'));
    if (n1 > 200000) {
        let descuento = n1 * 0.10;
        let total = n1 - descuento;
        alert('Recibe descuento del 10%. Total a pagar: ' + total);
    } else {
        alert('No recibe descuento. Total a pagar: ' + n1);
    }
}

function tempalt() {
    let n1 = Number(prompt('Ingrese la temperatura en grados Celsius:'));
    if (n1 > 30) {
        alert('La temperatura es alta');
    } else {
        alert('La temperatura no es alta');
    }
}

function medad() {
    let n1 = Number(prompt('Ingrese su edad:'));
    if (n1 >= 18) {
        alert('Es mayor de edad');
    } else {
        alert('Es menor de edad');
    }
}

function retiro() {
    let saldo = Number(prompt('Ingrese el valor de su saldo:'));
    let retiro = Number(prompt('Ingrese el valor del retiro:'));
    if (saldo >= retiro) {
        alert('Retiro autorizado');
    } else {
        alert('Retiro denegado');
    }
}

function pagoenvi() {
    let compra = Number(prompt('Ingrese el valor de la compra:'));
    if (compra >= 150000) {
        alert('El envío es gratis');
    } else {
        let total = compra + 12000;
        alert('Se cobra envío por 12.000. Total: ' + total);
    }
}

function mayordosoigu() {
    let n1 = Number(prompt('Ingrese el primer valor:'));
    let n2 = Number(prompt('Ingrese el segundo valor:'));
    if (n1 === n2) {
        alert('Los dos valores son iguales');
    } else if (n1 > n2) {
        alert('El número mayor es ' + n1 + ' y el menor es ' + n2);
    } else {
        alert('El número mayor es ' + n2 + ' y el menor es ' + n1);
    }
}

function pagoparq() {
    let horas = Number(prompt('Ingrese las horas que estuvo:'));
    if (horas === 1) {
        alert('Debe pagar 5.000');
    } else if (horas <= 3) {
        alert('Debe pagar 10.000');
    } else if (horas <= 6) {
        alert('Debe pagar 18.000');
    } else {
        alert('Debe pagar 25.000');
    }
}

function pagobus() {
    let edad = Number(prompt('Ingrese su edad:'));
    if (edad <= 5) {
        alert('Debe pagar 5.000');
    } else if (edad <= 17) {
        alert('Debe pagar 2.000');
    } else if (edad <= 59) {
        alert('Debe pagar 3.500');
    } else {
        alert('Debe pagar 2.500');
    }
}

function clv() {
    let velocidad = Number(prompt('Ingrese la velocidad:'));
    if (velocidad <= 30) {
        alert('Velocidad baja');
    } else if (velocidad <= 60) {
        alert('Velocidad moderada');
    } else if (velocidad <= 100) {
        alert('Velocidad alta');
    } else {
        alert('Velocidad muy alta');
    }
}

function mesesdis() {
    let mes = Number(prompt('Ingrese el número del mes (1 a 12):'));
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        alert('El mes tiene 31 días');
    } else if (mes === 2) {
        alert('El mes tiene 28 días');
    } else if (mes >= 1 && mes <= 12) {
        alert('El mes tiene 30 días');
    } else {
        alert('Número de mes no válido');
    }
}

function entradaatrac() {
    let edad = Number(prompt('Ingrese su edad:'));
    let estatura = Number(prompt('Ingrese su estatura en metros:'));
    if (edad >= 12 && estatura >= 1.45) {
        alert('Puede ingresar');
    } else {
        alert('No puede ingresar');
    }
}

function descliennte() {
    let compra = Number(prompt('Ingrese el valor de la compra:'));
    let tipoCliente = Number(prompt('Ingrese el tipo de cliente (1 normal, 2 especial):'));
    if (compra >= 200000 && tipoCliente === 1) {
        let descuento = compra * 0.05;
        let total = compra - descuento;
        alert('Cliente normal. Descuento 5%. Total a pagar: ' + total);
    } else if (compra >= 200000 && tipoCliente === 2) {
        let descuento = compra * 0.10;
        let total = compra - descuento;
        alert('Cliente especial. Descuento 10%. Total a pagar: ' + total);
    } else {
        alert('No recibe descuento');
    }
}

function retiromo() {
    let saldo = Number(prompt('Ingrese el valor de su saldo:'));
    let retiro = Number(prompt('Ingrese el valor del retiro:'));
    if (retiro > 0 && saldo >= retiro && retiro % 10000 === 0) {
        alert('Retiro autorizado');
    } else {
        alert('Retiro denegado');
    }
}

function contraseña() {
    let usuario = prompt('Ingrese el nombre de usuario:');
    let clave = Number(prompt('Ingrese la contraseña:'));
    const usuarioCorrecto = 'juandate';
    const claveCorrecta = 987654321;
    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        alert('Bienvenido usuario');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function añobi() {
    let anio = Number(prompt('Ingrese el año:'));
    if (anio % 400 === 0) {
        alert('El año es bisiesto');
    } else if (anio % 100 === 0) {
        alert('El año no es bisiesto');
    } else if (anio % 4 === 0) {
        alert('El año es bisiesto');
    } else {
        alert('El año no es bisiesto');
    }
}

function triangulo() {
    let a = Number(prompt('Ingrese el primer lado:'));
    let b = Number(prompt('Ingrese el segundo lado:'));
    let c = Number(prompt('Ingrese el tercer lado:'));
    if (a + b > c && a + c > b && b + c > a) {
        alert('Sí puede formar un triángulo');
        if (a === b && b === c) {
            alert('Es un triángulo equilátero');
        } else if (a === b || b === c || a === c) {
            alert('Es un triángulo isósceles');
        } else {
            alert('Es un triángulo escaleno');
        }
    } else {
        alert('Las medidas ingresadas no pueden formar un triángulo');
    }
}

function operacionesbasicasre() {
    let n1 = Number(prompt('Ingrese el primer valor:'));
    let n2 = Number(prompt('Ingrese el segundo valor:'));
    let suma = n1 + n2;
    let resta = n1 - n2;
    let multiplicacion = n1 * n2;
    if (n2 !== 0) {
        let division = n1 / n2;
        alert('Suma: ' + suma + '\nResta: ' + resta + '\nDivisión: ' + division + '\nMultiplicación: ' + multiplicacion);
    } else {
        alert('No se puede dividir por 0.\nSuma: ' + suma + '\nResta: ' + resta + '\nMultiplicación: ' + multiplicacion);
    }
}

function pagoequipaje() {
    let peso = Number(prompt('Ingrese el peso de su equipaje:'));
    if (peso <= 23) {
        alert('No paga nada');
    } else if (peso <= 30) {
        alert('Debe pagar 50.000');
    } else if (peso <= 40) {
        alert('Debe pagar 100.000');
    } else {
        alert('Más de 40 kg no se le permite entrar');
    }
}

function descuentoscomet() {
    let compra = Number(prompt('Ingrese el valor de la compra:'));
    if (compra < 100000) {
                                alert('No recibe descuento');
    } else if (compra < 300000) {
    let descuento = compra * 0.05;
        let iva = compra * 0.19;
        let total = compra - descuento + iva;
        alert('Descuento 5%. Descuento: ' + descuento + '. IVA: ' + iva + '. Total: ' + total);
    } else if (compra < 500000) {
        let descuento = compra * 0.10;
        let iva = compra * 0.19;
        let total = compra - descuento + iva;
        alert('Descuento 10%. Descuento: ' + descuento + '. IVA: ' + iva + '. Total: ' + total);
    } else {
        let descuento = compra * 0.15;
        let iva = compra * 0.19;
        let total = compra - descuento + iva;
        alert('Descuento 15%. Descuento: ' + descuento + '. IVA: ' + iva + '. Total: ' + total);
    }
}

function riesgo() {
    let edad = Number(prompt('Ingrese su edad:'));
    let ingresos = Number(prompt('Ingrese sus ingresos:'));
    if (edad <= 18) {
        alert('No es elegible');
    } else if (edad <= 25 && ingresos >= 2000000) {
        alert('Es elegible');
    } else if (edad > 25 && ingresos >= 1500000) {
        alert('Es elegible');
    } else {
        alert('No es elegible');
    }
}

function mayortresoigu() {
    let n1 = Number(prompt('Ingrese el primer valor:'));
    let n2 = Number(prompt('Ingrese el segundo valor:'));
    let n3 = Number(prompt('Ingrese el tercer valor:'));
    if (n1 === n2 && n1 === n3) {
        alert('Los tres valores son iguales');
    } else if (n1 >= n2 && n1 >= n3) {
        alert('El mayor es ' + n1);
    } else if (n2 >= n1 && n2 >= n3) {
        alert('El mayor es ' + n2);
    } else {
        alert('El mayor es ' + n3);
    }
}
function mesdia() {
    let mes 
    mes=parseInt(prompt('Ingrese el número del mes:'));
    switch (mes) {
        case 1:
            alert('Enero');
            break;
        case 2:
            alert('Febrero');
            break;
        case 3:
            alert('Marzo');
            break;
        case 4:
            alert('Abril');
            break;
        case 5:
            alert('Mayo');
            break;
        case 6:
            alert('Junio');
            break;
        case 7:
            alert('Julio');
            break;
        case 8:
            alert('Agosto');
            break;
        case 9:
            alert('Septiembre');
            break;
        case 10:
            alert('Octubre');
            break;
        case 11:
            alert('Noviembre');
            break;
        case 12:
            alert('Diciembre');
            break;
        default:
            alert('Número de mes inválido');
    }
}
function pagoparq3() {
    let h,t,p,des,total;
    h=parseInt(prompt('Ingrese el número de horas:'));
    t=parseInt(prompt('Ingrese el tipo de vehículo (1 para carro, 2 para moto):'));
    if(t==1){
        alert('El tipo de vehículo es carro');
        p=h*5000;
        if(h>5){
            des=p*0.10;
            total=p-des;
            alert('El valor a pagar es: '+total);
        }else{
            alert('El valor a pagar es: '+p);
        }
    }else if(t==2){
        alert('El tipo de vehículo es moto');
        p=h*3000;
        if(h>5){
            des=p*0.10;
            total=p-des;
            alert('El valor a pagar es: '+total);
        }else{
            alert('El valor a pagar es: '+p);
        }
    }
}
// ciclos

function contarHasta() {
    let inicio = Number(prompt('Ingrese el inicio:'));
    let fin = Number(prompt('Ingrese el final:'));
    let texto = '';

    if (inicio <= fin) {
        for (let i = inicio; i <= fin; i++) {
            texto += i + ' ';
        }
    } else {
        for (let i = inicio; i >= fin; i--) {
            texto += i + ' ';
        }
    }
    alert(texto);
}

function cuentaRegresiva() {
    let numero = Number(prompt('Ingrese un número:'));
    let texto = '';

    for (let i = numero; i >= 0; i--) {
        texto += i + ' ';
    }
    alert(texto + '\nTerminó la cuenta.');
}

function numerosPares() {
    let limite = Number(prompt('Ingrese el límite:'));
    let texto = '';

    for (let i = 2; i <= limite; i += 2) {
        texto += i + ' ';
    }
    alert('Pares: ' + texto);
}

function numerosImpares() {
    let limite = Number(prompt('Ingrese el límite:'));
    let texto = '';

    for (let i = 1; i <= limite; i += 2) {
        texto += i + ' ';
    }
    alert('Impares: ' + texto);
}

function sumaHasta() {
    let numero = Number(prompt('Ingrese N:'));
    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma += i;
    }
    alert('La suma es: ' + suma);
}

function tablaMultiplicar() {
    let numero = Number(prompt('Ingrese un número:'));
    let texto = '';

    for (let i = 1; i <= 10; i++) {
        texto += numero + ' x ' + i + ' = ' + (numero * i) + '\n';
    }
    alert(texto);
}

function contarParesEImpares() {
    let limite = Number(prompt('Ingrese el límite:'));
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    alert('Pares: ' + pares + '\nImpares: ' + impares);
}

function promedioNumeros() {
    let cantidad = Number(prompt('¿Cuántos números va a ingresar?'));
    let suma = 0;

    for (let i = 1; i <= cantidad; i++) {
        let numero = Number(prompt('Ingrese un número:'));
        suma += numero;
    }
    alert('Cantidad: ' + cantidad + '\nSuma: ' + suma + '\nPromedio: ' + (suma / cantidad));
}

function numeroMayor() {
    let cantidad = Number(prompt('¿Cuántos números va a ingresar?'));
    let mayor;

    for (let i = 1; i <= cantidad; i++) {
        let numero = Number(prompt('Ingrese un número:'));
        if (i === 1 || numero > mayor) {
            mayor = numero;
        }
    }
    alert('El mayor es: ' + mayor);
}

function numeroMenor() {
    let cantidad = Number(prompt('¿Cuántos números va a ingresar?'));
    let menor;

    for (let i = 1; i <= cantidad; i++) {
        let numero = Number(prompt('Ingrese un número:'));
        if (i === 1 || numero < menor) {
            menor = numero;
        }
    }
    alert('El menor es: ' + menor);
}

function clasificacionNumeros() {
    let cantidad = Number(prompt('¿Cuántos números va a ingresar?'));
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    for (let i = 1; i <= cantidad; i++) {
        let numero = Number(prompt('Ingrese un número:'));
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }
    alert('Positivos: ' + positivos + '\nNegativos: ' + negativos + '\nCeros: ' + ceros);
}

function estadisticasVentas() {
    let cantidad = Number(prompt('¿Cuántas ventas hubo?'));
    let total = 0;
    let mayor;
    let menor;

    for (let i = 1; i <= cantidad; i++) {
        let venta = Number(prompt('Ingrese el valor de la venta:'));
        total += venta;
        if (i === 1 || venta > mayor) mayor = venta;
        if (i === 1 || venta < menor) menor = venta;
    }
    alert('Cantidad: ' + cantidad +
        '\nTotal: ' + total +
        '\nPromedio: ' + (total / cantidad) +
        '\nVenta mayor: ' + mayor +
        '\nVenta menor: ' + menor);
}

function ingresarHastaCero() {
    let numero = Number(prompt('Ingrese un número (0 para terminar):'));
    let cantidad = 0;
    let suma = 0;

    while (numero !== 0) {
        suma += numero;
        cantidad++;
        numero = Number(prompt('Ingrese otro número (0 para terminar):'));
    }

    let promedio = 0;
    if (cantidad > 0) {
        promedio = suma / cantidad;
    }
    alert('Cantidad: ' + cantidad + '\nSuma: ' + suma + '\nPromedio: ' + promedio);
}

function validarContrasena() {
    let contrasena = prompt('Ingrese la contraseña (1234):');

    while (contrasena !== '1234') {
        contrasena = prompt('Contraseña incorrecta. Intente otra vez:');
    }
    alert('Contraseña correcta.');
}

function menuOpciones() {
    let opcion = 0;

    while (opcion !== 4) {
        opcion = Number(prompt(
            '1. Mostrar mensaje\n2. Mostrar información\n3. Sumar dos números\n4. Salir'
        ));

        if (opcion === 1) {
            alert('Hola.');
        } else if (opcion === 2) {
            alert('Menú de opciones.');
        } else if (opcion === 3) {
            let numero1 = Number(prompt('Ingrese el primer número:'));
            let numero2 = Number(prompt('Ingrese el segundo número:'));
            alert('La suma es: ' + (numero1 + numero2));
        } else if (opcion !== 4) {
            alert('Opción incorrecta.');
        }
    }
    alert('Fin del menú.');
}

function cajeroAutomatico() {
    let saldo = 500000;
    let opcion = 0;

    while (opcion !== 4) {
        opcion = Number(prompt(
            '1. Consultar saldo\n2. Retirar\n3. Depositar\n4. Salir'
        ));

        if (opcion === 1) {
            alert('Saldo: $' + saldo);
        } else if (opcion === 2) {
            let retiro = Number(prompt('¿Cuánto desea retirar?'));
            if (retiro > 0 && retiro <= saldo) {
                saldo -= retiro;
                alert('Retiro realizado. Saldo: $' + saldo);
            } else {
                alert('Valor incorrecto.');
            }
        } else if (opcion === 3) {
            let deposito = Number(prompt('¿Cuánto desea depositar?'));
            if (deposito > 0) {
                saldo += deposito;
                alert('Depósito realizado. Saldo: $' + saldo);
            } else {
                alert('Valor incorrecto.');
            }
        } else if (opcion !== 4) {
            alert('Opción incorrecta.');
        }
    }
    alert('Fin del cajero.');
}

function sistemaNotas() {
    let cantidad = Number(prompt('¿Cuántos estudiantes hay?'));
    let aprobados = 0;
    let reprobados = 0;
    let suma = 0;
    let mayor;
    let menor;

    for (let i = 1; i <= cantidad; i++) {
        let nota = Number(prompt('Ingrese la nota:'));
        suma += nota;
        if (nota >= 3) {
            aprobados++;
        } else {
            reprobados++;
        }
        if (i === 1 || nota > mayor) mayor = nota;
        if (i === 1 || nota < menor) menor = nota;
    }
    alert('Estudiantes: ' + cantidad +
        '\nAprobados: ' + aprobados +
        '\nReprobados: ' + reprobados +
        '\nPromedio: ' + (suma / cantidad) +
        '\nNota mayor: ' + mayor +
        '\nNota menor: ' + menor);
}

function adivinarNumero() {
    let secreto = Math.floor(Math.random() * 100) + 1;
    let numero = 0;
    let intentos = 0;

    while (numero !== secreto) {
        numero = Number(prompt('Adivine un número entre 1 y 100:'));
        intentos++;
        if (numero < secreto) {
            alert('El secreto es mayor.');
        } else if (numero > secreto) {
            alert('El secreto es menor.');
        }
    }
    alert('Adivinó. Intentos: ' + intentos);
}

function registroProductos() {
    let cantidad = Number(prompt('¿Cuántos productos va a registrar?'));
    let total = 0;
    let mayor;
    let menor;
    let nombreMayor = '';
    let nombreMenor = '';

    for (let i = 1; i <= cantidad; i++) {
        let nombre = prompt('Nombre del producto:');
        let precio = Number(prompt('Precio:'));
        let disponibles = Number(prompt('Cantidad disponible:'));
        total += precio * disponibles;

        if (i === 1 || precio > mayor) {
            mayor = precio;
            nombreMayor = nombre;
        }
        if (i === 1 || precio < menor) {
            menor = precio;
            nombreMenor = nombre;
        }
    }
    alert('Productos: ' + cantidad +
        '\nValor del inventario: $' + total +
        '\nPrecio mayor: ' + nombreMayor + ' ($' + mayor + ')' +
        '\nPrecio menor: ' + nombreMenor + ' ($' + menor + ')');
}

function acumularHastaCien() {
    let suma = 0;
    let cantidad = 0;

    while (suma < 100) {
        let numero = Number(prompt('Ingrese un número positivo:'));
        if (numero > 0) {
            suma += numero;
            cantidad++;
        } else {
            alert('Ingrese un número mayor que cero.');
        }
    }
    alert('Cantidad: ' + cantidad +
        '\nSuma: ' + suma +
        '\nPromedio: ' + (suma / cantidad));
}

function sistemaCompras() {
    let subtotal = 0;
    let productos = 0;
    let respuesta = 'S';

    while (respuesta === 'S' || respuesta === 's') {
        let nombre = prompt('Nombre del producto:');
        let precio = Number(prompt('Precio de ' + nombre + ':'));
        let cantidad = Number(prompt('Cantidad de ' + nombre + ':'));
        subtotal += precio * cantidad;
        productos++;
        respuesta = prompt('¿Desea agregar otro? S/N');
    }

    let descuento = 0;
    if (subtotal >= 500000) {
        descuento = subtotal * 0.15;
    } else if (subtotal >= 300000) {
        descuento = subtotal * 0.10;
    } else if (subtotal >= 100000) {
        descuento = subtotal * 0.05;
    }

    let base = subtotal - descuento;
    let iva = base * 0.19;
    let total = base + iva;
    alert('Productos: ' + productos +
        '\nSubtotal: $' + subtotal +
        '\nDescuento: $' + descuento +
        '\nIVA: $' + iva +
        '\nTotal: $' + total);
}

function factorial() {
    let numero = Number(prompt('Ingrese un número:'));
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    alert('Factorial: ' + resultado);
}










































