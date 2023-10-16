let v1,v2,v3;
let totalpagar = 0;
let totalventas = 0;
let salariobase = 0;
let com = 0;

salariobase = Number(prompt('Ingrese Salario base'));
v1 = Number(prompt('Ingrese venta 1'));
v2 = Number(prompt('Ingrese venta 2'));
v3 = Number(prompt('Ingrese venta 3'));

totalventas = v1+v2+v3;

com = totalventas * 0.1;

totalpagar = salariobase + com;

alert('El total a pagar para el vendedor es: ' + totalpagar);